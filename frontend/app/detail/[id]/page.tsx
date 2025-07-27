import { notFound } from 'next/navigation';
import ClientDetailPage from './client';

// 💡 Это обязательные строки для SSR и доступа к params в async function
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const id = Number(params?.id);
    if (isNaN(id)) return notFound();

    const res = await fetch('http://localhost:3000/api/flats', { cache: 'no-store' });
    if (!res.ok) return notFound();

    const flats = await res.json();
    const flat = flats.find((f: any) => f.id === id);

    if (!flat) return notFound();

    return <ClientDetailPage flat={flat} allFlats={flats} />;
  } catch (e) {
    console.error('Ошибка загрузки квартиры:', e);
    return notFound();
  }
}
