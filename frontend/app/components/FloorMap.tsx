"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FloorMap() {
  const [selectedFloor, setSelectedFloor] = useState("1np");

  const floors = [
    { id: "1np", label: "1. NP", image: "/floors/1np.png", blur: "/floors/1np-blur.jpg" },
    { id: "2np", label: "2. NP", image: "/floors/2np.png", blur: "/floors/2np-blur.jpg" },
    { id: "3np", label: "3. NP", image: "/floors/3np.png", blur: "/floors/3np-blur.jpg" },
  ];

  const flats1np = [
    {
      id: 101,
      title: "Byt 101 – 3 izby, 82 m²",
      top: "22%", // сдвинуто вниз
      left: "3%",
      right:"200%",
      width: "28%", 
      height: "65%",
      color: "bg-purple-300/30 hover:bg-purple-300/50 border-purple-500",
    },
    {
      id: 102,
      title: "Byt 102 – 2 izby, 60 m²",
      top: "36%",
      left: "31%",
      width: "22%",
      height: "45%",
      color: "bg-blue-300/30 hover:bg-blue-300/50 border-blue-500",
    },
    {
      id: 103,
      title: "Byt 103 – 4 izby, 105 m²",
      top: "22%",
      left: "68%",
      width: "20%",
      height: "61%",
      color: "bg-yellow-300/30 hover:bg-yellow-300/50 border-yellow-500",
    },
  ];

  return (
    <section id="katalog" className="bg-white text-black px-6 md:px-16 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Pôdorys bytov</h2>

      {/* 🔘 Кнопки этажей */}
      <div className="flex justify-center gap-4 mb-6">
        {floors.map((floor) => (
          <button
            key={floor.id}
            onClick={() => setSelectedFloor(floor.id)}
            className={`px-4 py-2 rounded-full border ${
              selectedFloor === floor.id
                ? "bg-[#D4AF37] text-black"
                : "bg-white text-black border-gray-400"
            } transition`}
          >
            {floor.label}
          </button>
        ))}
      </div>

      {/* 🏢 Изображение этажа + кликабельные зоны */}
      <div className="relative max-w-7xl mx-auto">
        <Image
          src={floors.find((f) => f.id === selectedFloor)?.image || "/floors/1np.png"}
          alt={`Pôdorys ${selectedFloor}`}
          width={1400}
          height={700}
          className="w-full h-auto"
          priority
          placeholder="blur"
          blurDataURL={floors.find((f) => f.id === selectedFloor)?.blur}
        />

        {/* Квартиры 1. NP */}
        {selectedFloor === "1np" &&
          flats1np.map((flat) => (
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
