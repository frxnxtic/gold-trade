'use client';

import React, { useState } from 'react';
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
    name: string;
    email: string;
    message: string;
    website: string; // skryté pole proti spamu
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMPTY: FormData = { name: '', email: '', message: '', website: '' };

export default function ContactForm() {
    const [form, setForm] = useState<FormData>(EMPTY);
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState('');

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (status === 'sending') return;

        setStatus('sending');
        setError('');
        try {
            await sendEmail(form);
            setStatus('sent');
            setForm(EMPTY);
        } catch (err) {
            setStatus('error');
            setError(err instanceof Error ? err.message : 'Správu sa nepodarilo odoslať.');
        }
    }

    function update(field: keyof FormData, value: string) {
        setForm({ ...form, [field]: value });
        if (status === 'sent' || status === 'error') setStatus('idle');
    }

    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto text-black">
            <input
                type="text"
                placeholder="Meno a priezvisko"
                required
                maxLength={100}
                value={form.name}
                onChange={e => update('name', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="email"
                placeholder="E-mail"
                required
                maxLength={200}
                value={form.email}
                onChange={e => update('email', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
            />
            <textarea
                placeholder="Správa"
                required
                maxLength={5000}
                value={form.message}
                onChange={e => update('message', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
            ></textarea>

            {/* Honeypot: ľudia ho nevidia, roboty ho vyplnia */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                    Website
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={e => update('website', e.target.value)}
                    />
                </label>
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#D4AF37] px-4 py-2 rounded text-black w-full disabled:opacity-60 disabled:cursor-wait"
            >
                {status === 'sending' ? "Odosielam…" : status === 'sent' ? "Odoslané ✔️" : "Odoslať dopyt"}
            </button>

            <div aria-live="polite">
                {status === 'sent' && (
                    <p className="mt-3 text-sm text-green-700">
                        Ďakujeme, správa bola odoslaná. Ozveme sa vám čo najskôr.
                    </p>
                )}
                {status === 'error' && (
                    <p className="mt-3 text-sm text-red-600">
                        {error} Skúste to prosím znova alebo nám zavolajte na +421 901 910 610.
                    </p>
                )}
            </div>
        </form>
    );
}
