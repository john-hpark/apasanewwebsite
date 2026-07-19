import Image from "next/image";
import { Button } from "./Button";

const cards = [
  {
    title: "For Students",
    image: "/images/photo-placeholder.svg",
    body: "We open up applications for our Intern Program in the Fall for the year, and applications for our Executive Board in the Spring for the following year.",
    cta: { label: "Learn More on Instagram", href: "https://instagram.com/" },
  },
  {
    title: "For Organizations",
    image: "/images/photo-placeholder.svg",
    body: "APASA provides up to $15,000 to our roster of member organizations annually. Learn more about the application process and membership requirements on our “Organizations” Page.",
    cta: { label: "Organizations", href: "/organizations" },
  },
  {
    title: "For Sponsors",
    image: "/images/photo-placeholder.svg",
    body: "APASA welcomes all kinds of sponsorships, from merchandise to snacks and drinks to be served at our programming. If you are interested in sponsoring, please meet with our Business Relations Chair!",
    cta: { label: "Book a Call", href: "/contact" },
  },
];

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="bg-apasa-teal-light py-10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20">
        <h2 className="font-satoshi text-2xl font-bold text-black lg:text-3xl">Get Involved</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <h3 className="font-satoshi text-xl font-bold text-black lg:text-[25px]">
                {card.title}
              </h3>
              <div className="relative mt-6 aspect-4/3 w-full overflow-hidden bg-apasa-gray">
                <Image src={card.image} alt="" fill className="object-cover" sizes="385px" />
              </div>
              <p className="mt-6 flex-1 text-base font-medium tracking-[-0.02em] text-black sm:text-xl">
                {card.body}
              </p>
              <div className="mt-6">
                <Button href={card.cta.href} variant="solid" withIcon>
                  {card.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
