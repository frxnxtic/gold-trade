import { notFound } from 'next/navigation';
import ClientDetailPage from './client';

// 💡 Указываем, что страница динамическая и не кэшируется
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

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

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const res = await fetch('/api/flats', { cache: 'no-store' });
  const flats: Flat[] = await res.json();
  const flat = flats.find((f) => f.id === id);

  if (!flat) return notFound();

  return <ClientDetailPage flat={flat} allFlats={flats} />;
}
