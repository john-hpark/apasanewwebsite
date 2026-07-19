import { Button } from "./Button";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-16 pb-10 sm:px-10 sm:pt-20 lg:px-20 lg:pt-24">
      <div className="max-w-3xl">
        <h1 className="font-satoshi text-5xl font-bold tracking-[-0.02em] text-black sm:text-6xl lg:text-8xl">
          USC APASA
        </h1>
        <p className="mt-4 font-satoshi text-xl font-bold text-black sm:text-2xl lg:text-3xl">
          The Asian Pacific American Student Assembly
        </p>
        <p className="mt-6 text-base font-medium tracking-[-0.02em] text-black sm:text-xl">
          A cultural assembly under USC&rsquo;s Undergraduate Student Government supporting the
          Asian Pacific Islander Desi American (APIDA) identifying population on campus and in
          the greater Los Angeles area.
        </p>
        <p className="mt-4 text-base font-medium tracking-[-0.02em] text-black sm:text-xl">
          For over two decades, APASA has been organizing our signature events, providing funding
          to APIDA-identifying student organizations, and pursuing meaningful advocacy initiatives
          all in the interest of furthering our community and making an impact.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="#get-involved" variant="solid">
          Get Involved
        </Button>
        <Button href="#our-team" variant="outline">
          Our Team
        </Button>
      </div>
    </section>
  );
}
