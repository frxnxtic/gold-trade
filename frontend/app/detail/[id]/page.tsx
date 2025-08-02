import { notFound } from 'next/navigation';
import ClientDetailPage from './client';

// 💡 Указываем, что страница динамическая и не кэшируется
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

type PageProps = {
  params: { id: string }; // ✅ params is not a Promise unless you're doing something unusual
};

export default async function Page({ params }: PageProps) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const res = await fetch('http://localhost:3000/api/flats', { cache: 'no-store' });
  const flats = await res.json();
  const flat = flats.find((f) => f.id === id);

  if (!flat) return notFound();

  return <ClientDetailPage flat={flat} allFlats={flats} />;
}
