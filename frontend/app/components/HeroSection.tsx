import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#1E1E1E] text-white py-20 px-6 md:px-16 overflow-hidden">

      {/* 🌆 Фон */}
      <img
        src="/header.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[0.5px] saturate-150 pointer-events-none select-none z-0"
      />

      {/* 🔰 Логотип */}
      <div className="absolute top-12 left-18 z-10 rounded-full bg-[#1E1E1E]/80 backdrop-blur-md shadow-[0_0_30px_#D4AF37] hover:shadow-[0_0_30px_#FFD700] transition-all duration-300 cursor-pointer">
        <img
          src="/LOGO.png"
          alt="GOLD TRADE Logo"
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* 💬 Контент */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 mt-20">
        <div className="md:ml-[20%] md:mt-2 text-center">
          <p className="font-archivo-black text-[30px] text-gray-300 tracking-tight leading-tight animate-fade-in-up duration-1000">
            Moderné bývanie v centre mesta s dôrazom na štýl a komfort.
          </p>
          <br />
          <h1 className="font-bebas text-5xl md:text-6xl tracking-tight text-center animate-fade-in-up">
            Predaj <span className="text-yellow-400">bytov</span>
          </h1>
          <br />
          <a
            href="#katalog"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Poďme na to <ArrowRight size={18} />
          </a>
        </div>

        {/* 🏢 Фото здания */}
        <div className="rounded-tl-[60px] overflow-hidden max-w-[500px] w-full border border-[#333] hover:scale-[1.03] transition-transform duration-500">
          <img
            src="/header.jpg"
            alt="Budova"
            className="w-full h-auto object-cover z-0"
          />
        </div>
      </div>

      {/* 🌒 Градиент внизу */}
 <div className="absolute bottom-[-10px] left-0 w-full h-32  pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#1E1E1E]/70 to-[#1E1E1E] backdrop-blur-sm" />
      </div>
    </section>
  );
}
