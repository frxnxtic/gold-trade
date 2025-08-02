import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import FloorMap from "@/components/FloorMap";
import FlatCatalogSlider from "@/components/FlatCatalogSlider";

async function getFlats() {
  const res = await fetch('http://localhost:3000/api/flats?id=all', {
    next: { revalidate: 60 }, // кеш 60 сек
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const flats = await getFlats();

  return (
    <main className="bg-[#2E2E2E] text-white min-h-screen">
      <HeroSection />

      {/* Sekcia: Prečo si vybrať nás */}
      <section className="bg-[#1E1E1E] text-white px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Prečo si vybrať nás</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Skvelá lokalita</h3>
            <p className="text-gray-300">Moderné bývanie priamo v srdci mesta, s kompletnou občianskou vybavenosťou.</p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Kvalitná výstavba</h3>
            <p className="text-gray-300">Používame len kvalitné materiály a moderné technológie, aby ste mali istotu do budúcna.</p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Osobný prístup</h3>
            <p className="text-gray-300">Záleží nám na spokojnosti klientov – pomôžeme vám s celým procesom kúpy.</p>
          </div>
        </div>
      </section>

      {/* ✅ Sekcia: Katalóg bytov */}
      <section id="katalog" className="bg-white text-black px-6 pt-6 pb-2">
  <h2 className="text-2xl font-semibold mb-4">Katalóg bytov</h2>

  <FloorMap />

  {/* Разделитель — с минимальным отступом */}
  <div className="mt-1 mb-1 border-t border-gray-200">
    <div className="text-center -mt-3">
      <span className="inline-block bg-white px-3 text-xs text-gray-400 uppercase tracking-widest">
        Vybrané byty
      </span>
    </div>
  </div>

  <FlatCatalogSlider flats={flats} />
</section>


      {/* Sekcia: Kontakt */}
      <section className="bg-[#2E2E2E] p-6">
        <h2 className="text-2xl font-semibold mb-4">Kontaktujte nás</h2>
        <ContactForm />
      </section>

      <footer className="bg-[#1E1E1E] text-white px-6 md:px-16 py-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div className="text-[#D4AF37] font-semibold">GOLD TRADE</div>
          <div className="text-gray-400">© {new Date().getFullYear()} Všetky práva vyhradené</div>
          <div className="flex gap-4">
            <a href="#katalog" className="hover:text-[#D4AF37] transition">Katalóg</a>
            <a href="#kontakt" className="hover:text-[#D4AF37] transition">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
