import Image from "next/image";

export function InternProgram() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
      <h2 className="font-satoshi text-2xl font-bold text-black lg:text-3xl">Intern Program</h2>
      <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 text-base font-medium tracking-[-0.02em] text-black sm:text-xl">
          <p>
            As opposed to a traditional general membership, APASA recruits 13-15 students each
            fall, to join us for our year-long Intern program. Interns get a chance to shadow our
            Executive Board, join us in putting on our signature event, and pursue a
            program-long passion project of their choosing.
          </p>
          <p>
            Above all, we value a passion for serving the APIDA community while making memories
            with APASA&rsquo;s tight knit community.
          </p>
        </div>
        <div className="relative aspect-16/9 w-full overflow-hidden">
          <Image
            src="/images/intern-program.jpg"
            alt="APASA interns posing together on the beach"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 586px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
