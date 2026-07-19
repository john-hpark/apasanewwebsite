import Image from "next/image";
import Link from "next/link";
import orgs from "../../data/orgs.json";
import { Button } from "./Button";

export function MemberOrganizations() {
  return (
    <section id="our-team" className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
      <h2 className="font-satoshi text-2xl font-bold text-black lg:text-3xl">
        Member Organizations
      </h2>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-9">
        {orgs.map((org) => (
          <Link
            key={org.name}
            href={org.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden bg-apasa-gray"
          >
            <Image
              src={org.image}
              alt={org.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 128px, (min-width: 640px) 20vw, 30vw"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[rgba(107,107,107,0.56)] p-2 text-center text-sm font-medium tracking-[-0.02em] text-white opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
              {org.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button href="/organizations" variant="outline" withIcon>
          See All Member Organizations
        </Button>
      </div>
    </section>
  );
}
