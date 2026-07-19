import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-apasa-teal-lightest">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center px-6 sm:px-10 lg:px-20">
        <Link href="/" aria-label="USC APASA home">
          <Image src="/images/logo.png" alt="USC APASA logo" width={57} height={57} className="size-12 object-contain sm:size-14" />
        </Link>
      </div>
    </header>
  );
}
