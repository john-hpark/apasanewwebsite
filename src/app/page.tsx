import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { MemberOrganizations } from "@/components/MemberOrganizations";
import { SignatureEvents } from "@/components/SignatureEvents";
import { InternProgram } from "@/components/InternProgram";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1 bg-white">
        <Hero />
        <ImpactStats />
        <MemberOrganizations />
        <SignatureEvents />
        <InternProgram />
        <GetInvolvedSection />
      </main>
    </>
  );
}
