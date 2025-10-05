import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import FloorMap from "@/components/FloorMap";
import FlatCatalogSlider from "@/components/FlatCatalogSlider";
import FloatingContactButton from "@/components/FloatingContactButton";
import { MapPin, Building2, Handshake, Wrench, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";


async function getFlats() {
  const res = await fetch('https://gold-trade.sk/api/flats?id=all', {
    cache: 'no-store',             
  });
  if (!res.ok) return [];

  const data = await res.json();

  return (Array.isArray(data) ? data : []).map((f: any) => ({
    ...f,
    cenaWithDPH:    f.cenaWithDPH    ?? f.cena_with_dph    ?? '',
    cenaWithoutDPH: f.cenaWithoutDPH ?? f.cena_without_dph ?? '',
  }));
}


export default async function Home() {
  const flats = await getFlats();

  return (
    <main className="bg-[#2E2E2E] text-white min-h-screen">
      <HeroSection />






{/* Sekcia: Prečo si vybrať nás */}
<section className="relative z-10 px-6 md:px-16 py-20 text-white bg-gradient-to-b from-[#1E1E1E] via-[#1B1B1B] to-[#181818]">

  {/* Заголовок */}
  <div className="text-center mb-14">
    <p className="uppercase text-xs tracking-[0.28em] text-white/60">dôvera & kvalita</p>
    <h2 className="mt-3 text-4xl md:text-5xl font-archivo-black tracking-tight">
      Prečo si <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">vybrať nás</span>
    </h2>
    <span className="mt-4 inline-block h-[2px] w-24 bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" />
  </div>

  {/* Карточки */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

    {/* 1. Skvelá lokalita */}
    <article className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black ring-1 ring-yellow-500/40">
        <MapPin className="h-6 w-6" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 tracking-tight">Skvelá lokalita</h3>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">
        Moderné bývanie priamo v srdci mesta s kompletnou občianskou vybavenosťou.
      </p>
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </article>

    {/* 2. Kvalitná výstavba */}
    <article className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black ring-1 ring-yellow-500/40">
        <Building2 className="h-6 w-6" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 tracking-tight">Kvalitná výstavba</h3>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">
        Používame kvalitné materiály a moderné technológie, aby ste mali istotu do budúcna. Vybavenie bytov je štandardné.
      </p>
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </article>

    {/* 3. Osobný prístup */}
    <article className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black ring-1 ring-yellow-500/40">
        <Handshake className="h-6 w-6" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 tracking-tight">Osobný prístup</h3>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">
        Záleží nám na spokojnosti klientov – prevedieme vás celým procesom kúpy.
      </p>
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </article>

    {/* 4. Vybavenie bytov */}
    <article className="group relative rounded-3xl bg-white/[0.04] border border-white/10 p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black ring-1 ring-yellow-500/40">
        <Wrench className="h-6 w-6" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 tracking-tight">Vybavenie bytov</h3>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">
        Štandardné vybavenie (podlahy, dvere, obklady, sanita). Skolaudované a pripravené na okamžité bývanie. Možnosť odpočtu DPH.
      </p>
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </article>

  </div>
</section>



      {/* ✅ Sekcia: Katalóg bytov */}
      <section id="katalog" className="bg-white text-black px-6 pt-6 pb-2">

  <FloorMap />

  {/* Разделитель — с минимальным отступом */}
  {/*<div className="mt-1 mb-1 border-t border-gray-200">*/}
  {/*  <div className="text-center -mt-3">*/}
  {/*    <span className="inline-block bg-white px-3 text-xs text-gray-400 uppercase tracking-widest">*/}
  {/*      Vybrané byty*/}
  {/*    </span>*/}
  {/*  </div>*/}
  {/*</div>*/}

  {/*<FlatCatalogSlider flats={flats} />*/}
</section>


     <section
  id="kontakt"
  className="relative bg-cover bg-center text-white py-20 px-6 md:px-16"
  style={{ backgroundImage: "url('/kontact_background.png')" }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/55 backdrop-blur-sm z-0" />

  {/* container */}
  <div className="relative z-10 mx-auto max-w-6xl">
    {/* heading */}
    <div className="text-center mb-10">
      <p className="uppercase text-xs tracking-[0.28em] text-white/60">kontakt</p>
      <h2 className="mt-2 text-4xl md:text-5xl font-archivo-black tracking-tight">
        Kontaktujte nás
      </h2>
      <span className="mt-4 inline-block h-[2px] w-24 bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" />
    </div>

    {/* glass card */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* left: form */}
      <div className="p-6 md:p-8">
        <div className="rounded-xl bg-black/20 p-4 md:p-5 ring-1 ring-white/10">
          <ContactForm />
        </div>
        {/* GDPR / note */}
        <p className="mt-4 text-xs text-white/60 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-yellow-400" />
          Vaše údaje spracúvame bezpečne. 
        </p>
      </div>

      {/* right: contact info */}
      <div className="p-6 md:p-8 bg-black/25 ring-1 ring-inset ring-white/10 md:border-l md:border-white/10">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Kontakt</h3>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <a
                href="tel:+421901910610"
                className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  +421&nbsp;901&nbsp;910&nbsp;610
                </span>
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </a>

                <a
                    href="tel:+421903545924"
                    className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                >
                <span className="inline-flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  +421&nbsp;903&nbsp;545&nbsp;924
                </span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </a>

              <a
                href="mailto:obbsro@yahoo.com"
                className="group inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  obbsro@yahoo.com
                </span>
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium">Námestie SNP 5</p>
                <p className="text-white/70">974 01 Banská Bystrica</p>
                <a
                  href="https://maps.google.com/?q=N%C3%A1mestie%20SNP%205%20Bansk%C3%A1%20Bystrica"
                  target="_blank" rel="noreferrer"
                  className="mt-2 inline-block text-sm text-yellow-400 hover:underline"
                >
                  Zobraziť na mape
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium">Otváracie hodiny</p>
                <p className="text-white/70">Po–Pi: podľa dohody</p>
              </div>
            </div>
          </div>
        </div>
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
