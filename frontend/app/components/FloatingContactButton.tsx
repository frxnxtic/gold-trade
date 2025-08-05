import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <Link
      href="#kontakt"
      scroll={true}
      className="fixed bottom-6 right-6 z-50 bg-[#D4AF37] text-black rounded-full p-4 shadow-lg hover:bg-yellow-400 transition duration-300"
      title="Kontaktujte nás"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
