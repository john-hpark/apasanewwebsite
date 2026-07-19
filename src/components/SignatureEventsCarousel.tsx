"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { EventWithPhotos } from "@/lib/events";

const FALLBACK_PHOTO = "/images/event-placeholder.svg";
const DESCRIPTION_CLASSNAME = "text-base font-medium tracking-[-0.02em] text-black sm:text-lg";

export function SignatureEventsCarousel({
  events,
  defaultDescription,
}: {
  events: EventWithPhotos[];
  defaultDescription: string;
}) {
  const [active, setActive] = useState("gallery");

  const activeEvent = active === "gallery" ? undefined : events.find((e) => e.slug === active);
  const description = activeEvent?.description ?? defaultDescription;

  // Reserve enough height for the tallest possible description so switching
  // tabs never shifts the sections below — only the text itself changes.
  const allDescriptions = useMemo(
    () => [defaultDescription, ...events.map((event) => event.description ?? defaultDescription)],
    [events, defaultDescription],
  );
  const measureRef = useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState<number>();

  useEffect(() => {
    const measureEl = measureRef.current;
    if (!measureEl) return;
    const measure = () => {
      const heights = Array.from(measureEl.children).map((el) => el.getBoundingClientRect().height);
      setDescriptionHeight(Math.max(0, ...heights));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(measureEl);
    return () => observer.disconnect();
  }, [allDescriptions]);

  const galleryPhotos = useMemo(() => events.flatMap((event) => event.photos), [events]);
  const activePhotos = active === "gallery" ? galleryPhotos : (activeEvent?.photos ?? []);
  const photos = activePhotos.length > 0 ? activePhotos : [FALLBACK_PHOTO];

  const mid = Math.ceil(photos.length / 2);
  const rowA = photos.slice(0, mid);
  const rowB = photos.slice(mid).length > 0 ? photos.slice(mid) : rowA;

  return (
    <div className="relative">
      <div
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute inset-x-0 top-0 -z-10"
      >
        {allDescriptions.map((text, i) => (
          <p key={i} className={DESCRIPTION_CLASSNAME}>
            {text}
          </p>
        ))}
      </div>
      <p
        className={`mt-2 ${DESCRIPTION_CLASSNAME}`}
        style={descriptionHeight ? { minHeight: descriptionHeight } : undefined}
      >
        {description}
      </p>
      <div className="mt-8 overflow-x-auto">
        <div className="flex min-w-max gap-6 border-b border-black pb-2 font-satoshi text-sm font-bold tracking-[-0.02em] text-black uppercase sm:text-xl">
          <TabButton label="Gallery" isActive={active === "gallery"} onClick={() => setActive("gallery")} />
          {events.map((event) => (
            <TabButton
              key={event.slug}
              label={event.name}
              isActive={active === event.slug}
              onClick={() => setActive(event.slug)}
            />
          ))}
        </div>
      </div>

      <div key={active} className="mt-6 space-y-3.5">
        <MarqueeRow photos={rowA} direction="left" />
        <MarqueeRow photos={rowB} direction="right" />
      </div>
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`shrink-0 pb-1 transition-colors ${isActive ? "text-apasa-teal" : "text-black hover:text-apasa-teal"}`}
    >
      {label}
    </button>
  );
}

function MarqueeRow({ photos, direction }: { photos: string[]; direction: "left" | "right" }) {
  const loop = [...photos, ...photos];
  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-3.5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-[180px] w-[240px] shrink-0 overflow-hidden bg-apasa-gray sm:h-[240px] sm:w-[320px]"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="320px" />
          </div>
        ))}
      </div>
    </div>
  );
}
