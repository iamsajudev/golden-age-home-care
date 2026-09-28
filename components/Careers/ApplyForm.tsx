// components/Careers/ApplyForm.tsx
"use client";

import { useState } from "react";
import {
    User,
    Phone,
    Mail,
    MapPin,
    Briefcase,
    Upload,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Send,
    FileText,
    X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const positions = [
    "Certified Home Health Aide (HHA)",
    "Personal Care Aide (PCA)",
    "Bilingual Care Coordinator",
    "Registered Nurse (RN)",
    "General Application",
];

const languages = [
    "English",
    "Bengali",
    "Spanish",
    "Hindi",
    "Urdu",
    "Chinese",
    "Other",
];

const availabilityOptions = [
    "Full-time",
    "Part-time",
    "Weekends only",
    "Weekdays only",
    "Flexible",
];

export function ApplyForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );
    const [fileName, setFileName] = useState<string | null>(null);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "NY",
        zip: "",
        position: "",
        availability: "",
        experience: "",
        languages: [] as string[],
        hasHHA: "",
        message: "",
        authorized: "",
        referral: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const toggleLanguage = (lang: string) => {
        setForm((f) => ({
            ...f,
            languages: f.languages.includes(lang)
                ? f.languages.filter((l) => l !== lang)
                : [...f.languages, lang],
        }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            /* ── TODO: wire to real endpoint ── */
            await new Promise((r) => setTimeout(r, 1000));
            setStatus("sent");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            setStatus("error");
        }
    };

    /* ── Success state ── */
    if (status === "sent") {
        return (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-10 text-center shadow-soft">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" strokeWidth={2.5} />
                </span>
                <h2 className="mt-6 font-serif text-2xl font-semibold text-sand-900 md:text-3xl">
                    Application Received!
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sand-600">
                    Thank you, {form.firstName || "friend"}. Our hiring team will review
                    your application and call you within 2 business days.
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-sand-500">
                    Need to talk sooner? Call{" "}
                    <a
                        href="tel:7187757852"
                        className="font-medium text-red-600 hover:text-red-700"
                    >
                        (718) 775-7852
                    </a>
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-sand-200 bg-white p-8 shadow-soft md:p-10"
        >
            {/* ═══════════ SECTION 1: Personal ═══════════ */}
            <FormSection
                step="01"
                title="Your Information"
                description="Basic details so we can reach you."
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                        label="First Name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        required
                    />
                    <Field
                        label="Last Name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                    />
                    <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                    />
                    <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                    />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field
                        label="Street Address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="123 Main St"
                        className="sm:col-span-2"
                    />
                    <Field
                        label="City"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Jackson Heights"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Field
                            label="State"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="NY"
                        />
                        <Field
                            label="ZIP"
                            name="zip"
                            value={form.zip}
                            onChange={handleChange}
                            placeholder="11372"
                        />
                    </div>
                </div>
            </FormSection>

            {/* ═══════════ SECTION 2: Role ═══════════ */}
            <FormSection
                step="02"
                title="The Role"
                description="Tell us what you're looking for."
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <Label htmlFor="position" required>
                            Position Applying For
                        </Label>
                        <select
                            id="position"
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        >
                            <option value="">Select a position…</option>
                            {positions.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="availability" required>
                            Availability
                        </Label>
                        <select
                            id="availability"
                            name="availability"
                            value={form.availability}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        >
                            <option value="">Select…</option>
                            {availabilityOptions.map((a) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="hasHHA" required>
                            Do you have HHA certification?
                        </Label>
                        <select
                            id="hasHHA"
                            name="hasHHA"
                            value={form.hasHHA}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        >
                            <option value="">Select…</option>
                            <option value="Yes">Yes — certified</option>
                            <option value="No">No — willing to train</option>
                            <option value="Expired">Expired — need renewal</option>
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <Label>Languages Spoken</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {languages.map((lang) => {
                                const active = form.languages.includes(lang);
                                return (
                                    <button
                                        key={lang}
                                        type="button"
                                        onClick={() => toggleLanguage(lang)}
                                        aria-pressed={active}
                                        className={cn(
                                            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                                            active
                                                ? "border-red-600 bg-red-600 text-white"
                                                : "border-sand-200 bg-white text-sand-700 hover:border-red-300 hover:text-red-700"
                                        )}
                                    >
                                        {lang}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <Label htmlFor="experience">Previous Experience</Label>
                        <textarea
                            id="experience"
                            name="experience"
                            rows={3}
                            value={form.experience}
                            onChange={handleChange}
                            placeholder="Tell us briefly about any caregiving or healthcare experience you have…"
                            className="w-full resize-none rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition placeholder:text-sand-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        />
                    </div>
                </div>
            </FormSection>

            {/* ═══════════ SECTION 3: Documents ═══════════ */}
            <FormSection
                step="03"
                title="Documents"
                description="Upload your resume or HHA certificate (optional but recommended)."
            >
                <div>
                    {fileName ? (
                        <div className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                            <div className="flex min-w-0 items-center gap-3">
                                <FileText className="h-5 w-5 shrink-0 text-green-600" />
                                <span className="truncate text-sm font-medium text-sand-800">
                                    {fileName}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setFileName(null)}
                                aria-label="Remove file"
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sand-500 hover:bg-green-100 hover:text-green-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-sand-300 bg-sand-50 px-6 py-10 text-center transition hover:border-red-400 hover:bg-red-50/40">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                                <Upload className="h-5 w-5" />
                            </span>
                            <span className="text-sm font-medium text-sand-800">
                                Click to upload your resume
                            </span>
                            <span className="text-xs text-sand-500">
                                PDF, DOC, DOCX · Max 5 MB
                            </span>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFile}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            </FormSection>

            {/* ═══════════ SECTION 4: Final ═══════════ */}
            <FormSection
                step="04"
                title="Almost Done"
                description="A couple of quick checks before we submit."
            >
                <div className="space-y-5">
                    <div>
                        <Label htmlFor="authorized" required>
                            Are you authorized to work in the US?
                        </Label>
                        <select
                            id="authorized"
                            name="authorized"
                            value={form.authorized}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        >
                            <option value="">Select…</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="In progress">Work authorization in progress</option>
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="referral">How did you hear about us?</Label>
                        <select
                            id="referral"
                            name="referral"
                            value={form.referral}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        >
                            <option value="">Select…</option>
                            <option value="Friend/Family">Friend or family</option>
                            <option value="Google">Google search</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Indeed">Indeed</option>
                            <option value="Walk-in">Walk-in</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="message">Anything else we should know?</Label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Optional — anything you'd like to add."
                            className="w-full resize-none rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-sand-800 outline-none transition placeholder:text-sand-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                        />
                    </div>
                </div>

                {/* EEO notice */}
                <p className="mt-6 rounded-2xl border border-sand-200 bg-sand-50 p-4 text-xs leading-relaxed text-sand-500">
                    Golden Age Home Care is an equal opportunity employer. We consider
                    applicants without regard to race, religion, color, national origin,
                    gender, sexual orientation, age, marital status, veteran status, or
                    disability.
                </p>
            </FormSection>

            {/* ═══════════ Submit ═══════════ */}
            <div className="flex flex-col gap-4 border-t border-sand-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-sand-500">
                    We&apos;ll review your application and call you within 2 business
                    days.
                </p>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                        "group inline-flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300",
                        status === "sending"
                            ? "cursor-not-allowed bg-red-400"
                            : "bg-red-600 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                    )}
                >
                    {status === "sending" ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4" />
                            Submit Application
                        </>
                    )}
                </button>
            </div>

            {status === "error" && (
                <div
                    role="alert"
                    className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
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
   HELPERS
   ───────────────────────────────────────────── */

function FormSection({
    step,
    title,
    description,
    children,
}: {
    step: string;
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <fieldset className="border-0 p-0">
            <legend className="mb-6 block w-full">
                <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-serif text-xs font-bold text-white shadow-card">
                        {step}
                    </span>
                    <div>
                        <p className="font-serif text-xl font-semibold text-sand-900">
                            {title}
                        </p>
                        <p className="text-xs text-sand-500">{description}</p>
                    </div>
                </div>
            </legend>
            {children}
        </fieldset>
    );
}

function Label({
    htmlFor,
    required,
    children,
}: {
    htmlFor?: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-sand-700"
        >
            {children}
            {required && <span className="ml-1 text-red-600">*</span>}
        </label>
    );
}

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
            <Label htmlFor={name} required={required}>
                {label}
            </Label>
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