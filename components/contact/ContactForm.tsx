// components/Contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Personal Care",
  "Health Monitoring",
  "Companionship",
  "Medicaid Coordination",
  "Caregiver Training",
  "Family as Caregiver",
  "General Inquiry",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      /* ── TODO: replace with real Server Action / API call ── */
      await new Promise((r) => setTimeout(r, 900));

      /* Simulated response */
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl border border-sand-200 bg-white p-8 shadow-soft md:p-10"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-red-600" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
          Send a Message
        </p>
      </div>
      <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
        Tell Us About Your Situation
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-sand-600">
        Fill out the form and our team will get back to you within one business
        day. Free eligibility check — no obligation.
      </p>

      {/* Fields */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-sand-700"
          >
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-sand-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a little about your loved one and what you're looking for…"
            required
            className="w-full resize-none rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
          />
        </div>
      </div>

      {/* Submit row */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-sand-500">
          By submitting you agree to be contacted about your inquiry.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "group inline-flex items-center gap-3 rounded-xl px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300",
            status === "sending"
              ? "cursor-not-allowed bg-red-400"
              : "bg-red-600 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
          )}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Status banner */}
      {status === "sent" && (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="font-semibold">Message sent!</p>
            <p className="text-xs text-green-700">
              We&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div>
            <p className="font-semibold">Something went wrong</p>
            <p className="text-xs text-red-700">
              Please try again, or call us at (718) 775-7852.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

/* ─────────────────────────────────────────────
   FIELD — small helper
   ───────────────────────────────────────────── */

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-wider text-sand-700"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition placeholder:text-sand-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      />
    </div>
  );
}