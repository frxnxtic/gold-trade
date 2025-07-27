'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Flat = {
  id: number;
  nazov: string;
  adresa: string;
  cena: string;
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
  const phone = '+421904732649';

  const images = [1, 2, 3].map(i => `/images/flats/${flat.id}-${i}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const dalsieByty = allFlats.filter(f => f.id !== flat.id).slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* ЛОГОТИП ПО ЦЕНТРУ */}
      <div className="relative z-20 flex justify-center pt-10 mb-10">
        <div className="border border-yellow-400 text-yellow-400 px-8 py-5 rounded-full text-xl font-bold text-center leading-tight tracking-wide">
          <div>GOLD</div>
          <div>TRADE</div>
        </div>
      </div>

      {/* РАЗДЕЛИТЕЛЬ после логотипа */}
      <hr className="border-t border-gray-700 opacity-50 mx-auto w-3/4 mb-6" />

      {/* blurred background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          filter: 'blur(20px) brightness(0.2)',
          zIndex: 0,
        }}
      />

      {/* Верхний блок в той же ширине, что и нижний */}
      <div className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Image slider */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center relative">
            {flat.status === 'predane' && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 font-bold rounded-br z-20">
                Predané
              </div>
            )}
            {flat.status === 'volne' && (
              <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 font-bold rounded-br z-20">
                Voľný
              </div>
            )}

            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={images[currentIndex]}
                alt={`Byt ${flat.id} - ${currentIndex + 1}`}
                width={800}
                height={500}
                className="object-cover w-full h-[400px] rounded"
                onError={(e: any) => (e.target.style.display = 'none')}
              />

              {/* arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
              >
                ◀
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
              >
                ▶
              </button>
            </div>

            {/* dots */}
            <div className="flex gap-2 mt-4">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Right info panel */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">{flat.nazov}</h1>

            <p className="text-gray-300 mb-2">
              <strong className="text-white">Adresa:</strong> {flat.adresa}
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Cena:</strong> {flat.cena}
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Poschodie:</strong> {flat.poschodie}
            </p>
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Izby:</strong> {flat.izby}
            </p>
            <p className="text-white text-2xl font-bold mb-6">{flat.rozloha} m²</p>

            <a
              href={`https://wa.me/${phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Napísať na WhatsApp
            </a>

            <div className="mt-6">
              <h2 className="text-yellow-400 font-bold mb-2">Detaily:</h2>
              <ul className="list-disc pl-5 text-sm text-gray-300 text-left inline-block md:inline">
                {flat.popis.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* РАЗДЕЛИТЕЛЬ перед ďalšie byty */}
      <hr className="border-t border-gray-700 opacity-50 mx-auto w-3/4 mt-10 mb-6" />

      {/* Bottom section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-12">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">Ďalšie byty</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dalsieByty.map(byt => (
            <Link
              key={byt.id}
              href={`/detail/${byt.id}`}
              className="bg-[#1e1e1e] p-4 rounded-lg hover:bg-[#2a2a2a] transition"
            >
              <Image
                src={`/images/flats/${byt.id}-1.jpg`}
                alt={`Byt ${byt.id}`}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded"
                onError={(e: any) => (e.target.style.display = 'none')}
              />
              <h4 className="text-lg text-yellow-400 font-bold mt-2">{byt.nazov}</h4>
              <p className="text-gray-300 text-sm">
                {byt.rozloha} m² — {byt.izby} izby
              </p>
              <p className="text-white text-sm font-semibold">
                {byt.cena || 'Cena nedostupná'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
