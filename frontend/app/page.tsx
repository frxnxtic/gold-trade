/* eslint-disable @typescript-eslint/no-explicit-any */
import FlatCard from "@/components/FlatCard";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
  const res = await fetch("https://gold-trade-be.vercel.app/api/izba?id=all", { cache: "no-store" });
  const flats = await res.json();

  return (
    <main className="bg-[#2E2E2E] text-white min-h-screen">
      <section className="text-center p-10">
        <h1 className="text-4xl font-bold">Predaj bytov</h1>
        <p className="text-lg text-gray-300">Moderné bývanie v centre mesta</p>
        <button className="mt-4 bg-[#D4AF37] text-black px-6 py-2 rounded">Zobraziť ponuku</button>
      </section>

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
