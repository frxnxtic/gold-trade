"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// flats нужно объявить перед компонентом, чтобы использовать его тип
const flats = {
    "1np": [
      {
        id: 102,
        title: "Byt 101 – 3 izby, 88.35 m²",
        top: "11%",
        left: "3%",
        width: "28%",
        height: "32%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 101,
        title: "Byt 102 – 2 izby, 51.34 m²",
        top: "17%",
        left: "31%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 103,
        title: "Byt 103 – 2 izby, 69.44 m²",
        top: "11%",
        left: "66%",
        width: "22%",
        height: "31%",
        color: "bg-yellow-300/30 hover:bg-yellow-300/50 border-yellow-500",
      },
    ],
    "2np": [
      {
        id: 105,
        title: "Byt 201 – 2 izby, 89.43 m²",
        top: "11%",
        left: "4%",
        width: "28%",
        height: "33%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 104,
        title: "Byt 202 – 2 izby, 52.22 m²",
        top: "17%",
        left: "31.5%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 106,
        title: "Byt 203 – 2 izby, 45.78 m²",
        top: "18%",
        left: "53.5%",
        width: "24%",
        height: "26%",
        color: "bg-orange-300/30 hover:bg-orange-300/50 border-orange-500",
      },
      {
        id: 107,
        title: "Byt 204 – 3 izby, 58.58 m²",
        top: "11%",
        left: "77%",
        width: "19%",
        height: "33%",
        color: "bg-lime-300/30 hover:bg-lime-300/50 border-lime-500",
      },
    ],
    "3np": [
      {
        id: 111,
        title: "Byt 301 – 3 izby, 88 m²",
       top: "11%",
        left: "4%",
        width: "28%",
        height: "33%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 110,
        title: "Byt 302 – 2 izby, 60 m²",
        top: "17%",
        left: "31.5%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 109,
        title: "Byt 303 – 2 izby, 46.17 m²",
         top: "17%",
        left: "53.5%",
        width: "24%",
        height: "26%",
        color: "bg-orange-300/30 hover:bg-orange-300/50 border-orange-500",
      },
      {
        id: 108,
        title: "Byt 304 – 3 izby, 63.72 m²",
        top: "10%",
        left: "77%",
        width: "19%",
        height: "33%",
        color: "bg-lime-300/30 hover:bg-lime-300/50 border-lime-500",
      },
    ],
  } as const;

type FloorKey = keyof typeof flats;
type Flat = typeof flats[FloorKey][number];

export default function FloorMap() {
  const [selectedFloor, setSelectedFloor] = useState<FloorKey>("1np");

  const floors = [
    { id: "1np", label: "1. NP", image: "/floors/1np.png", blur: "/floors/1np-blur.jpg", long_label: "Prvé nadzemné podlažie" },
    { id: "2np", label: "2. NP", image: "/floors/2np.png", blur: "/floors/2np-blur.jpg", long_label: "Druhé nadzemné podlažie" },
    { id: "3np", label: "3. NP", image: "/floors/3np.png", blur: "/floors/3np-blur.jpg", long_label: "Tretie nadzemné podlažie" },
  ];

  return (
    <section id="katalog" className="bg-white text-black px-6 md:px-16 py-16">
  {/* Heading */}
  <div className="text-center mb-8">
    <p className="uppercase text-s tracking-[0.28em] text-gray-400">katalóg bytov</p>
    <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
      Pôdorys bytov
    </h2>
    <span className="mt-4 inline-block h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
  </div>

 {/* Кнопки этажей */}
  <div className="flex justify-center gap-4 mb-10">
    {floors.map((floor) => (
      <button
        title={floor.long_label}
        key={floor.id}
        onClick={() => setSelectedFloor(floor.id as FloorKey)}
        className={`px-5 py-2 rounded-full font-medium border shadow-sm transition-all duration-300
          ${
            selectedFloor === floor.id
              ? "bg-[#D4AF37] text-black border-transparent"
              : "bg-white text-black border-gray-300 hover:border-[#D4AF37]"
          }`}
      >
        {floor.label}
      </button>
    ))}
  </div>


{/* Планировка с анимацией */}
<div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1]">
  <Image
    key={selectedFloor}
    src={floors.find((f) => f.id === selectedFloor)?.image || "/floors/1np.png"}
    alt={`Pôdorys ${selectedFloor}`}
    width={1200}
    height={700}
    className="object-contain w-full h-auto rounded-xl border shadow-xl transition-opacity duration-500"
    priority
    placeholder="blur"
    blurDataURL={floors.find((f) => f.id === selectedFloor)?.blur}
  />

        {flats[selectedFloor].map((flat: Flat) => {
        const isSold = flat.id === 110 || flat.id === 111;

        const baseClasses =
          "absolute border rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50";

        const stateClasses = isSold
          ? "opacity-60 cursor-not-allowed"
          : "cursor-pointer hover:scale-[1.01]";

        const labelBase =
          "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap";

        return isSold ? (
          <div
            key={flat.id}
            className={`${baseClasses} ${flat.color} ${stateClasses}`}
            style={{
              top: flat.top,
              left: flat.left,
              width: flat.width,
              height: flat.height
            }}
            title={`${flat.title} – PREDANÝ`}
            aria-label={`${flat.title} – predaný`}
          >
            {/* chip PREDANÝ */}
            <span
              className={`${labelBase} bg-rose-600 text-white text-xs md:text-sm font-semibold px-2.5 py-1 rounded-full shadow`}
            >
              PREDANÝ
            </span>
          </div>
        ) : (
          <Link
            key={flat.id}
            href={`/detail/${flat.id}`}
            aria-label={flat.title}
            className="outline-none"
          >
            <div
              className={`${baseClasses} ${flat.color} ${stateClasses}`}
              style={{
                top: flat.top,
                left: flat.left,
                width: flat.width,
                height: flat.height
              }}
              title={flat.title}
            >
              {/* center label: izby + rozloha если есть во `title` */}
              <span className={`${labelBase} bg-white/85 backdrop-blur px-2.5 py-1 rounded-md text-xs md:text-sm font-semibold text-black shadow`}>
                {flat.title.split("–")[1]?.trim() ?? flat.title}
              </span>
            </div>
          </Link>
        );
})}

</div>

                </section>
              );
}
