/* eslint-disable @typescript-eslint/no-explicit-any */
import FlatCard from "@/components/FlatCard";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  const res = await fetch("https://gold-trade-be.vercel.app/api/izba?id=all", { cache: "no-store" });
  const flats = await res.json();
  

  return (
    <main className="bg-[#2E2E2E] text-white min-h-screen">
      <HeroSection />

      <section className="bg-white text-black p-6">
        <h2 className="text-2xl font-semibold mb-4">Katalóg bytov</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {flats.map((flat: any) => (
            <FlatCard key={flat.id} flat={flat} />
          ))}
        </div>
      </section>

      <section className="bg-[#2E2E2E] p-6">
        <h2 className="text-2xl font-semibold mb-4">Kontaktujte nás</h2>
        <ContactForm />
      </section>
    </main>
  );
}
