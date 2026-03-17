export default function Home() {
  return (
    <div className="animated-gradient-bg flex flex-1">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-6xl flex-1 flex-col justify-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center sm:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-100">
            Dual booking prototype
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            One interface for{" "}
            <span className="text-blue-700">restaurant reservations</span> and{" "}
            <span className="text-emerald-700">doctor appointments</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A modern, mobile-first booking experience with distinct visual
            identities for dining and healthcare, shared components, and
            thoughtfully crafted flows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/restaurant"
            className="group rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Restaurant reservations
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              Atmosphere-first dining flow
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Hero imagery, featured dishes, and a warm dark-blue palette guide
              guests through booking the perfect table.
            </p>
            <p className="mt-4 text-xs font-medium text-blue-700 group-hover:underline">
              Explore restaurant experience →
            </p>
          </a>

          <a
            href="/doctor"
            className="group rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Doctor appointments
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              Calm, clinical booking flow
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Card-based doctor listings and a soft-green theme make medical
              scheduling feel clear and reassuring.
            </p>
            <p className="mt-4 text-xs font-medium text-emerald-700 group-hover:underline">
              Explore doctor experience →
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
