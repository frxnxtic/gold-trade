import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import FloorMap from "@/components/FloorMap";
import FlatCatalogSlider from "@/components/FlatCatalogSlider";
import FloatingContactButton from "@/components/FloatingContactButton";

async function getFlats() {
  const res = await fetch('https://gold-trade.sk/api/flats?id=all', {
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
<section className="relative z-10 px-6 md:px-16 py-20 text-white bg-gradient-to-b from-[#1E1E1E] via-[#1B1B1B] to-[#181818]">

  {/* Заголовок */}
  <h2 className="text-4xl md:text-5xl font-archivo-black text-center mb-12 tracking-tight relative z-10">
    Prečo si <span className="text-[#D4AF37]">vybrať nás</span>
  </h2>

  {/* Карточки */}
  <div className="grid md:grid-cols-3 gap-10 text-center relative z-10">

    {/* 1. Skvelá lokalita */}
    <div className="bg-[#2A2A2A] hover:bg-[#2F2F2F] p-8 rounded-3xl shadow-xl transition-transform duration-300 transform hover:scale-105">
      <div className="text-[#D4AF37] text-4xl mb-4">📍</div>
      <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">Skvelá lokalita</h3>
      <p className="text-gray-300 leading-relaxed">
        Moderné bývanie priamo v srdci mesta s kompletnou občianskou vybavenosťou.
      </p>
    </div>

    {/* 2. Kvalitná výstavba */}
    <div className="bg-[#2A2A2A] hover:bg-[#2F2F2F] p-8 rounded-3xl shadow-xl transition-transform duration-300 transform hover:scale-105">
      <div className="text-[#D4AF37] text-4xl mb-4">🏗️</div>
      <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">Kvalitná výstavba</h3>
      <p className="text-gray-300 leading-relaxed">
        Používame len kvalitné materiály a moderné technológie, aby ste mali istotu do budúcna.
      </p>
    </div>

    {/* 3. Osobný prístup */}
    <div className="bg-[#2A2A2A] hover:bg-[#2F2F2F] p-8 rounded-3xl shadow-xl transition-transform duration-300 transform hover:scale-105">
      <div className="text-[#D4AF37] text-4xl mb-4">🤝</div>
      <h3 className="text-2xl font-semibold text-[#D4AF37] mb-3">Osobný prístup</h3>
      <p className="text-gray-300 leading-relaxed">
        Záleží nám na spokojnosti klientov – pomôžeme vám s celým procesom kúpy.
      </p>
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


     <section id = "kontakt"
  className="relative bg-cover bg-center text-white py-20 px-6 md:px-16"
  style={{ backgroundImage: "url('/kontact_background.png')" }}
>
  {/* Затемнение + размытие фона */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

  {/* Контент поверх фона */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">Kontaktujte nás</h2>

    {/* Формуляр в рамке */}
    <div className="bg-[#1E1E1E]/80 border border-[#D4AF37] rounded-xl p-6 shadow-lg">
      <ContactForm />
       <div className="text-center mt-4 text-gray-600">

   
  </div>
    </div>
    
  </div>

</section>

<FloatingContactButton />


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
