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
};

type Props = {
  flats: Flat[];
};

export default function FlatCatalogSlider({ flats }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const next = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, flats.length - visibleCount)
    );
  };

  const visibleFlats = flats.slice(startIndex, startIndex + visibleCount);

  return (
  <div className="relative bg-[#f9f9f9] pt-4 px-4 pb-6 rounded-xl border-t border-gray-300 mt-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-black">Vybrané byty</h3>
      <div className="flex gap-2">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="px-3 py-1 rounded bg-gray-300 text-sm font-semibold hover:bg-gray-400 disabled:opacity-50"
        >
          ← Predchádzajúce
        </button>
        <button
          onClick={next}
          disabled={startIndex + visibleCount >= flats.length}
          className="px-3 py-1 rounded bg-gray-300 text-sm font-semibold hover:bg-gray-400 disabled:opacity-50"
        >
          Nasledujúce →
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {visibleFlats.map((flat) => (
        <Link
          key={flat.id}
          href={`/detail/${flat.id}`}
          className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <div className="h-48 relative">
            <Image
              src={flat.images?.[0] || `/images/flats/${flat.id}-1.jpg`}
              alt={flat.nazov}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{flat.nazov}</h4>
            <p className="text-sm text-gray-600">{flat.adresa}</p>
            <div className="text-sm text-gray-700 mt-2">
              {flat.izby} izby • {flat.rozloha} m² • {flat.poschodie}. NP
            </div>
            <div className="text-[#D4AF37] font-semibold text-base mt-2">{flat.cena}</div>
            {flat.status === 'predane' && (
              <div className="text-red-500 text-sm font-semibold mt-1">Predané</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  </div>
);

}
