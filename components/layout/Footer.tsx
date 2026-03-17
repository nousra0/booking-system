export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Dual Booking UI Prototype.</p>
        <p className="flex gap-3">
          <span>Restaurant Reservations</span>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <span>Doctor Appointments</span>
        </p>
      </div>
    </footer>
  );
}

