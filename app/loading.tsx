// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7]">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-red-100/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-100/40 blur-[120px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F2D4A 1px, transparent 1px), linear-gradient(to bottom, #0F2D4A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Loader */}
      <div className="relative flex flex-col items-center">
        {/* Logo mark with sonar pulse */}
        <div className="relative flex items-center justify-center">
          {/* Sonar rings */}
          <span className="absolute inline-flex h-16 w-16 animate-sonar rounded-full bg-[#A06126]" />
          <span
            className="absolute inline-flex h-16 w-16 animate-sonar rounded-full bg-[#A06126]"
            style={{ animationDelay: "0.75s" }}
          />

          {/* Logo circle */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A06126] to-[#7A4718] shadow-lg shadow-[#A06126]/20">
            <span className="font-serif text-2xl font-bold text-white">NG</span>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-6 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A06126]">
            NGEN IT LIMITED
          </div>
          <div className="mt-1 font-serif text-lg font-semibold text-[#0F2D4A]">
            Loading…
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-sand-100">
          <div className="h-full w-1/3 animate-loader-bar rounded-full bg-gradient-to-r from-[#A06126] to-[#C97B2E]" />
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-loader-dot rounded-full bg-[#A06126]" />
          <span
            className="h-1.5 w-1.5 animate-loader-dot rounded-full bg-[#A06126]"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="h-1.5 w-1.5 animate-loader-dot rounded-full bg-[#A06126]"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
}