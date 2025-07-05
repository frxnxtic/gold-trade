type FlatCardProps = {
    flat: {
        id: number;
        address: string;
        price: number;
        // Добавьте другие поля, если они появятся в API
    };
};

export default function FlatCard({ flat }: FlatCardProps) {
    return (
        <div className="bg-white shadow p-4 rounded border text-black">
            {/* Если появится поле с картинкой, добавьте его сюда */}
            <h3 className="text-lg font-bold mt-2">{flat.price?.toLocaleString()} €</h3>
            <p>{flat.address}</p>
            {/* Добавьте другие поля, если они есть */}
            <a
                href={`/byt/${flat.id}`}
                className="mt-2 inline-block bg-[#D4AF37] px-4 py-1 text-sm rounded text-black"
            >
                Detail
            </a>
        </div>
    );
}
