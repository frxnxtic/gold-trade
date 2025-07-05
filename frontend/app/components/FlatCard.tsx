type FlatCardProps = {
  flat: {
    id: number;
    cena: number;
    vymera: number;
    izby: number;
    poschodie: string;
    obrazokUrl: string;
  };
};

export default function FlatCard({ flat }: FlatCardProps) {
  return (
    <div className="bg-white shadow p-4 rounded border text-black">
      <img src={flat.obrazokUrl} alt="Byt" className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{flat.cena.toLocaleString()} €</h3>
      <p>{flat.vymera} m², {flat.izby}-izbový</p>
      <p>{flat.poschodie}</p>
      <a href={`/byt/${flat.id}`} className="mt-2 inline-block bg-[#D4AF37] px-4 py-1 text-sm rounded text-black">Detail</a>
    </div>
  );
}
