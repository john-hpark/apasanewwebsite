import { getEventsWithPhotos } from "@/lib/events";
import { SignatureEventsCarousel } from "./SignatureEventsCarousel";

const DEFAULT_DESCRIPTION =
  "Click to see and learn more about all of our annual signature events!";

export function SignatureEvents() {
  const events = getEventsWithPhotos();

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
      <h2 className="font-satoshi text-2xl font-bold text-black lg:text-3xl">Signature Events</h2>
      <SignatureEventsCarousel events={events} defaultDescription={DEFAULT_DESCRIPTION} />
    </section>
  );
}
