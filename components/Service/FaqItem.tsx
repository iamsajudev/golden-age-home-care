// components/Services/FaqItem.tsx
export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:border-red-200 open:bg-white open:shadow-soft">
      <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg font-semibold text-sand-900 transition-colors group-open:text-red-700">
        {q}
        <span
          aria-hidden
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand-300 text-red-600 transition-transform duration-300 group-open:rotate-45 group-open:border-red-600 group-open:bg-red-600 group-open:text-white"
        >
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-sand-600">{a}</p>
    </details>
  );
}