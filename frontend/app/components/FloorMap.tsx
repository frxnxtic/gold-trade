"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// flats нужно объявить перед компонентом, чтобы использовать его тип
const flats = {
    "1np": [
      {
        id: 101,
        title: "Byt 101 – 3 izby, 82 m²",
        top: "11%",
        left: "3%",
        width: "28%",
        height: "32%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 102,
        title: "Byt 102 – 2 izby, 60 m²",
        top: "17%",
        left: "31%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 103,
        title: "Byt 103 – 4 izby, 105 m²",
        top: "11%",
        left: "66%",
        width: "22%",
        height: "31%",
        color: "bg-yellow-300/30 hover:bg-yellow-300/50 border-yellow-500",
      },
    ],
    "2np": [
      {
        id: 201,
        title: "Byt 201 – 3 izby, 85 m²",
        top: "11%",
        left: "4%",
        width: "28%",
        height: "33%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 202,
        title: "Byt 202 – 2 izby, 62 m²",
        top: "17%",
        left: "31.5%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 203,
        title: "Byt 203 – 2 izby, 64 m²",
        top: "18%",
        left: "53.5%",
        width: "24%",
        height: "26%",
        color: "bg-orange-300/30 hover:bg-orange-300/50 border-orange-500",
      },
      {
        id: 204,
        title: "Byt 204 – 3 izby, 95 m²",
        top: "11%",
        left: "77%",
        width: "19%",
        height: "33%",
        color: "bg-lime-300/30 hover:bg-lime-300/50 border-lime-500",
      },
    ],
    "3np": [
      {
        id: 301,
        title: "Byt 301 – 3 izby, 88 m²",
       top: "11%",
        left: "4%",
        width: "28%",
        height: "33%",
        color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
      },
      {
        id: 302,
        title: "Byt 302 – 2 izby, 60 m²",
        top: "17%",
        left: "31.5%",
        width: "22%",
        height: "27%",
        color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
      },
      {
        id: 303,
        title: "Byt 303 – 2 izby, 66 m²",
         top: "17%",
        left: "53.5%",
        width: "24%",
        height: "26%",
        color: "bg-orange-300/30 hover:bg-orange-300/50 border-orange-500",
      },
      {
        id: 304,
        title: "Byt 304 – 3 izby, 98 m²",
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
    { id: "1np", label: "1. NP", image: "/floors/1np.png", blur: "/floors/1np-blur.jpg" },
    { id: "2np", label: "2. NP", image: "/floors/2np.png", blur: "/floors/2np-blur.jpg" },
    { id: "3np", label: "3. NP", image: "/floors/3np.png", blur: "/floors/3np-blur.jpg" },
  ];

  return (
    <section id="katalog" className="bg-white text-black px-6 md:px-16 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Pôdorys bytov</h2>

 {/* Кнопки этажей */}
  <div className="flex justify-center gap-4 mb-10">
    {floors.map((floor) => (
      <button
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
<div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1] rounded-xl overflow-hidden border shadow-xl">
  <Image
    key={selectedFloor}
    src={floors.find((f) => f.id === selectedFloor)?.image || "/floors/1np.png"}
    alt={`Pôdorys ${selectedFloor}`}
    width={1200}
    height={700}
    className="object-contain w-full h-auto  transition-opacity duration-500"
    priority
    placeholder="blur"
    blurDataURL={floors.find((f) => f.id === selectedFloor)?.blur}
  />
  
  {flats[selectedFloor].map((flat: Flat) => (
    <Link key={flat.id} href={`/detail/${flat.id}`}>
      <div
        className={`absolute border cursor-pointer transition ${flat.color}`}
        style={{
          top: flat.top,
          left: flat.left,
          width: flat.width,
          height: flat.height,
        }}
        title={flat.title}
      />
    </Link>
  ))}
</div>

                </section>
              );
}
