import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechSupport } from "@/components/TechSupport";
import { About } from "@/components/About";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Balticool — Standard pouzdanosti u industrijskom hlađenju" },
      {
        name: "description",
        content:
          "Stručan servis, održavanje i tehnička podrška za industrijske rashladne i HVAC sisteme. Ovlašćeni servis Baltimore Aircoil & Sabiana.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <Services />
      <TechSupport />
      <About />
    </main>
  );
}
