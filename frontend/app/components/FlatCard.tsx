type FlatCardProps = {
  flat: {
    id: number;
    address: string;
    price: number;
    floor?: number;
    rooms?: number;
    size?: number;
  };
};

export default function FlatCard({ flat }: FlatCardProps) {
      console.log(flat); 
  return (
    <div className="bg-white shadow p-4 rounded border text-black">
      <h3 className="text-lg font-bold mt-2">{flat.price?.toLocaleString()} €</h3>
      <p>{flat.address}</p>
       
      <ul className="text-sm text-gray-700 mt-2 space-y-1">
        {flat.floor !== undefined && (
          <li><strong>Poschodie:</strong> {flat.floor}</li>
        )}
        {flat.rooms !== undefined && (
          <li><strong>Počet izieb:</strong> {flat.rooms}</li>
        )}
        {flat.size !== undefined && (
          <li><strong>Výmera:</strong> {flat.size} m²</li>
        )}
      </ul>

      <a
        href={`/byt/${flat.id}`}
        className="mt-2 inline-block bg-[#D4AF37] px-4 py-1 text-sm rounded text-black"
      >
        Detail
      </a>
    </div>
  );
}
