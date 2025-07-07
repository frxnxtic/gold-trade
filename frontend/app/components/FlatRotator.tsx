'use client';

import { useEffect, useState } from 'react';
import FlatCard from './FlatCard';

type Flat = {
  id: number;
  address: string;
  price: number;
};

export default function FlatRotator({ flats }: { flats: Flat[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % flats.length);
    }, 30000); // 30 секунд

    return () => clearInterval(interval);
  }, [flats.length]);

  if (flats.length === 0) return <p>Žiadne byty</p>;

  return (
    <div className="flex justify-center">
      <FlatCard flat={flats[currentIndex]} />
    </div>
  );
}
