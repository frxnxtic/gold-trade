export default function HeroSection() {
  return (
    <section className="relative bg-[#1E1E1E] text-white py-12 px-6 md:px-16 overflow-hidden">
      {/* Absolute positioned Logo */}
      <div className="absolute top-6 left-5 z-10 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold text-center leading-tight">
        GOLD<br />TRADE
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text block */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Predaj bytov</h1>
          <p className="text-lg text-gray-300">MODERNÉ BÝVANIE V CENTRE MESTA</p>
        </div>

        {/* Image block */}
        <div className="rounded-tl-[60px] overflow-hidden max-w-[480px] w-full">
          <img src="/header.jpg" alt="Budova" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
