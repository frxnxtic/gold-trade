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

  {/* Левая колонка: ТЕКСТ */}
  <div className="md:ml-[18%] md:mt-2 text-center max-w-[680px] mx-auto md:mx-0 md:basis-[55%] space-y-6">

    {/* Слоган (+10–15%) */}
    <p className="uppercase font-light text-[clamp(13px,1.3vw,17px)] tracking-[0.28em] text-white/80">
      Moderné bývanie v centre mesta s dôrazom na štýl a komfort.
    </p>

    {/* Адрес с лейблом + двухуровневый заголовок */}
    <div className="relative inline-block text-center">
      <div className="mb-2 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/60">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-yellow-400" fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z"/>
        </svg>
        <span>Adresa</span>
      </div>

      <h2 className="font-bebas leading-[1.08] tracking-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] text-white">
        <span className="block text-[clamp(28px,4.8vw,56px)] font-semibold">Námestie SNP&nbsp;5</span>
        <span className="block text-[clamp(22px,3.6vw,40px)] font-medium text-white/90">Banská Bystrica</span>
      </h2>

      {/* тонкая hairline */}
      <span className="pointer-events-none block h-[2px] w-20 mx-auto mt-3 bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" />
    </div>

    {/* Оффер — спокойный текст + акцент только на BYTOV (без подчёркивания) */}
    <h2 className="font-bebas text-[clamp(22px,3.6vw,44px)] font-medium leading-[1.12] tracking-[0.01em] text-white/90">
      Predaj <span className="font-semibold">2 a 3-izbových</span>{" "}
      <span className="uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 tracking-[0.16em] text-[clamp(26px,4.5vw,52px)]">
        bytov
      </span>
    </h2>

    {/* CTA — +15–20% крупнее, выразительнее */}
    <div className="pt-1">
      <a
        href="#katalog"
        className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-500/80
                   px-8 py-3.5 text-base font-semibold text-yellow-400
                   transition hover:bg-yellow-500 hover:text-black
                   hover:shadow-[0_0_26px_rgba(212,175,55,0.5)]"
      >
        Poďme na to <ArrowRight size={20} />
      </a>
    </div>
  </div>



  {/* Правая колонка: КАРТИНКА (ВАЖНО: отдельный sibling!) */}
  <div className="mt-10 md:mt-0 md:basis-[45%] max-w-[500px] w-full">
    <div className="rounded-tl-[60px] overflow-hidden w-full border border-[#333] hover:scale-[1.03] transition-transform duration-500">
      <img
        src="/header.jpg"
        alt="Budova"
        className="w-full h-auto object-cover z-0"
      />
    </div>
  </div>

</div>

      {/* 🌒 Градиент внизу */}
 <div className="absolute bottom-[-10px] left-0 w-full h-32  pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#1E1E1E]/70 to-[#1E1E1E] backdrop-blur-sm" />
      </div>
    </section>
  );
}
