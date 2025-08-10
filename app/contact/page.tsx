'use client';
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (e) {
      setStatus("Something went wrong. Please email us instead.");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="prose max-w-none">
        <h1>Contact us</h1>
        <p><strong>BizCom Global</strong></p>
        <p>10 Jalan Besar #06-03<br/>Sim Lim Tower<br/>Singapore 208787</p>
        <p>Email: <a href="mailto:sales@bizcompl.com">sales@bizcompl.com</a></p>
        <p>We usually reply within 1–2 business days.</p>
      </div>
      <form onSubmit={onSubmit} className="card space-y-3">
        <div>
          <label className="block text-sm">Name</label>
          <input name="name" required className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" name="email" required className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea name="message" required className="w-full border rounded-lg p-2 h-28" />
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
        {status && <p className="text-sm text-slate-600">{status}</p>}
      </form>
    </div>
  );
}
