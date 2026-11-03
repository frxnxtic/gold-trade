import { notFound } from 'next/navigation';
import ClientDetailPage from './client';
import flatsData from '@/public/data/flats.json';

export const dynamicParams = true;
export const dynamic = 'force-dynamic';

type Flat = {
  id: number;
  nazov: string;
  adresa: string;
  cenaWithDPH: string;
  cenaWithoutDPH: string;
  poschodie: number;
  izby: number;
  rozloha: string;
  status: string;
  images: string[];
  popis: string[];
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const flatId = Number(id);
  if (isNaN(flatId)) return notFound();

  const flats = flatsData as Flat[];
  const flat = flats.find((f) => f.id === flatId);

  if (!flat) return notFound();

  return <ClientDetailPage flat={flat} allFlats={flats} />;
}