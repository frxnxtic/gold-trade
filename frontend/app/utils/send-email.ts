import { FormData } from '@/components/ContactForm';

// Vráti sa až keď server potvrdí odoslanie; inak vyhodí chybu s textom pre používateľa
export async function sendEmail(data: FormData): Promise<void> {
    const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const response = await res.json().catch(() => null);

    if (!res.ok || !response?.ok) {
        throw new Error(response?.error || 'Správu sa nepodarilo odoslať.');
    }
}
