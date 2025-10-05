'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Flat = {
  id: number;
  nazov: string;
  adresa: string;
  cenaWithDPH: string;
  cenaWithoutDPH: string;
  poschodie: number;
  izby: number;
  rozloha: string;
  status: 'predane' | 'volne';
  images: string[];
  popis: string[];
};

type Props = {
  flat: Flat;
  allFlats: Flat[];
};

export default function ClientDetailPage({ flat, allFlats }: Props) {
  const phone = '+421901910610';
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch(`/api/images-for-flat?id=${flat.id}`);
        const data = await res.json();
         const combined = [
        `/images/flats/${flat.id}-0.jpg`,
        ...data.filter((src: string) => !src.endsWith(`${flat.id}-0.jpg`))
      ];
        setImages(combined);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    }
    loadImages();
  }, [flat.id]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const modalPrev = () => setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const modalNext = () => setModalImageIndex((prev) => (prev + 1) % images.length);

  const dalsieByty = allFlats.filter(f => f.poschodie === flat.poschodie && f.id !== flat.id).slice(0, 3);

  console.log(dalsieByty);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen relative overflow-hidden">

        {/* Кнопка "Späť na hlavnú stránku" по центру */}
        <Link
  href="/#katalog"
  className="fixed top-15 left-6 z-[2000] flex items-center gap-2
             border border-yellow-400 text-yellow-400 font-medium
             px-4 py-2 rounded-full shadow-md
             hover:bg-yellow-400 hover:text-black transition duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Naspäť
</Link>
              {!showModal && (
          <div className="relative z-20 flex justify-center pt-10 mb-10">
              <Link href="/"></Link>
              <img
    src="/LOGO.png"
    alt="GOLD TRADE Logo"
    className="h-30 w-auto object-contain drop-shadow-[0_0_25px_#FFD700] 
               transition-transform duration-300 hover:scale-110 
               hover:drop-shadow-[0_0_35px_#FFD700]"
  />


</div>


        )}

      <hr className="border-t border-yellow-500 opacity-20 mx-auto w-3/4 mb-6 mt-8" />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(30px) brightness(0.15)',
        }}
      />

      <div className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Slideshow */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center relative">
            {flat.status === 'predane' && (
              <div className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1 font-bold rounded z-20">Predané</div>
            )}
            {flat.status === 'volne' && (
              <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 font-bold rounded z-20">Voľný</div>
            )}

            <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
              {images.length > 0 && (
                <Image
                  src={images[currentIndex]}
                  alt={`Byt ${flat.id} - ${currentIndex + 1}`}
                  width={800}
                  height={500}
                  priority
                  className="object-cover w-full h-[400px] cursor-zoom-in"
                  onClick={() => {
                    setModalImageIndex(currentIndex);
                    setShowModal(true);
                  }}
                />
              )}

              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 transition text-black w-10 h-10 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 transition text-black w-10 h-10 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2 mt-4">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Info block */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">{flat.nazov}</h1>

            <div className="text-gray-300 space-y-2 mt-6 text-base">
              <p><strong className="text-white">Poschodie:</strong> {flat.poschodie}</p>
              <p><strong className="text-white">Izby:</strong> {flat.izby}</p>
              {flat.popis
                .sort((a, b) => {
                  const order = ["Obytná plocha", "Obývacia izba s kuchyňou", "Izba", "Kúpeľňa", "Chodba"];
                  const indexA = order.findIndex(x => a.includes(x));
                  const indexB = order.findIndex(x => b.includes(x));
                  return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
                })
                .map((item, i) => (
                  <p key={i}><strong className="text-white">{item}</strong></p>
                ))}
              <p className="text-white text-2xl font-bold pt-4">{flat.rozloha}</p>
              <p className="text-white text-2xl font-bold"><span className="text-sm font-normal ml-2 text-yellow-300">Bez DPH: </span>{flat.cenaWithoutDPH}</p>
              <p className="text-white text-2xl font-bold"><span className="text-sm font-normal ml-2 text-yellow-300">S DPH: </span> {flat.cenaWithDPH}</p>
              

            </div>
          </div>
        </div>

        <hr className="border-t border-yellow-500 opacity-20 mx-auto w-3/4 mt-16 mb-6" />

        {/* Dalsie byty */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">Ďalšie byty na {flat.poschodie}. poschodí</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-35">
            {dalsieByty.map(byt => (
              <Link key={byt.id} href={`/detail/${byt.id}`} className="bg-[#1e1e1e] p-4 rounded-xl hover:bg-[#2a2a2a] transition shadow-lg">
                <Image
                  src={`/images/flats/${byt.id}-0.jpg`}
                  alt={`Byt ${byt.id}`}
                  width={400}
                  height={200}
                   className="w-full aspect-square object-cover rounded-lg"
                />
                <h4 className="text-lg text-yellow-400 font-bold mt-2">{byt.nazov}</h4>
                <p className="text-gray-300 text-sm">{byt.rozloha} — {byt.izby} izby</p>
                <p className="text-white text-sm font-semibold">{byt.cenaWithDPH || 'Cena nedostupná'}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    onClick={() => setShowModal(false)}
  >
    <div className="relative max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
      {/* Крестик */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Изображение */}
      <Image
        src={images[modalImageIndex]}
        alt={`Zväčšený obrázok`}
        width={1200}
        height={800}
        className="w-full max-h-[90vh] object-contain rounded shadow-xl"
      />

      {/* Стрелка ← */}
      <button
        onClick={modalPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Стрелка → */}
      <button
        onClick={modalNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
)}
{/* <footer className="mt-auto w-full border-t border-yellow-600/30 text-gray-300 bg-black">*/}
{/*  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 gap-4">*/}
{/*    /!* GOLD TRADE слева *!/*/}
{/*    <div className="text-yellow-400 font-bold text-xl tracking-wide border border-yellow-400 px-5 py-2 rounded-full shadow-md">*/}
{/*      GOLD TRADE*/}
{/*    </div>*/}

{/*    */}
{/*  </div>*/}
{/*</footer>*/}

    
      </div>
      
    </div>
    
  );
  
}
