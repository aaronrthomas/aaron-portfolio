import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ContactBar } from "@/components/portfolio/ContactBar";
import { WorkNav } from "@/components/portfolio/WorkNav";
import { Brochure } from "@/components/portfolio/Brochure";
import { Logos } from "@/components/portfolio/Logos";
import { Social } from "@/components/portfolio/Social";
import { StyleGuide } from "@/components/portfolio/StyleGuide";
import { ThankYou } from "@/components/portfolio/ThankYou";
import { Marquee } from "@/components/portfolio/Marquee";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";

export function App() {
  return (
    <main className="bg-background text-foreground">
      <LoadingScreen />

      <Hero />

      <ScrollReveal animation="fade-in">
        <Marquee />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <About />
      </ScrollReveal>

      <WorkNav />

      <ScrollReveal animation="fade-up">
        <Brochure />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <Marquee text="Vijanana Keralam" />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Logos />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <Marquee text="Logofolio" />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Social />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <Marquee text="Social Media" />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <StyleGuide />
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        <Marquee text="Style Guide" />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <ContactBar />
      </ScrollReveal>

      <ScrollReveal animation="scale-up">
        <ThankYou />
      </ScrollReveal>

      <Marquee />
    </main>
  );
}
