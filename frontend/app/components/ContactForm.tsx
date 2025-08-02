'use client';

import React, { useState } from 'react';
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Form Data:", form); // Add this
        sendEmail(form);
        setSent(true);
        setForm({ name: '', email: '', message: '' });
    }

    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto text-black">
            <input
                type="text"
                placeholder="Meno a priezvisko"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="email"
                placeholder="E-mail"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
            />
            <textarea
                placeholder="Správa"
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
            ></textarea>
            <button type="submit" className="bg-[#D4AF37] px-4 py-2 rounded text-black w-full">
                {sent ? "Odoslané ✔️" : "Odoslať dopyt"}
            </button>
        </form>
    );
}
