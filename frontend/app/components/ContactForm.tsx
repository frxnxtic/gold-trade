'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto text-black">
      <input type="text" placeholder="Meno a priezvisko" required
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      />
      <input type="email" placeholder="E-mail" required
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea placeholder="Správa"
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full mb-2 p-2 border rounded"
      ></textarea>
      <button type="submit" className="bg-[#D4AF37] px-4 py-2 rounded text-black w-full">
        {sent ? "Odoslané ✔️" : "Odoslať dopyt"}
      </button>
    </form>
  );
}
