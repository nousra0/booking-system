import Image from "next/image";
import Link from "next/link";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const doctors = [
  {
    name: "Dr. Maya Patel",
    specialty: "Cardiology",
    rating: "4.9",
    patients: "1.2k patients",
    image: "/images/doctor1.jpg",
  },
  {
    name: "Dr. James Cooper",
    specialty: "Pediatrics",
    rating: "4.8",
    patients: "980 patients",
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Lina Hernández",
    specialty: "Dermatology",
    rating: "5.0",
    patients: "1.5k patients",
    image: "/images/doctor3.jpg",
  },
];

export default function DoctorListingPage() {
  return (
    <div className="flex flex-1 bg-linear-to-b from-emerald-50 via-slate-50 to-white">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-6xl flex-1 flex-col justify-center">
      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-900 ring-1 ring-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Trusted medical appointments
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Find the right doctor,{" "}
                <span className="text-emerald-700">without the wait.</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Compare specialists, see real patient feedback, and secure your
                appointment with a few simple steps. Designed for clarity,
                comfort, and care.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-700">
                  ❤
                </span>
                <span>Board-certified doctors only</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-700">
                  ☁
                </span>
                <span>In-clinic & telehealth options</span>
              </div>
            </div>
          </div>

          <div className="relative mt-4 w-full max-w-sm lg:mt-0">
            <div className="absolute -left-5 -top-6 h-24 w-24 rounded-3xl bg-emerald-200/60 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-3xl bg-emerald-100/70 blur-2xl" />
            <Card className="relative space-y-3 border-emerald-100 bg-white">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-600">
                Next available
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Today, 3:30 PM • General consultation
              </p>
              <p className="text-xs text-slate-500">
                Join a secure video call or visit the clinic in person.
              </p>
              <Button asChild size="md" className="mt-1 bg-emerald-700 hover:bg-emerald-800">
                <Link href="/doctor/booking">Book this slot</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Available doctors
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Select a specialist to view appointment options.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="flex flex-col gap-3 border-emerald-100 bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-emerald-50">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-900">
                    {doctor.name}
                  </p>
                  <p className="text-xs text-emerald-700">{doctor.specialty}</p>
                  <p className="text-[11px] text-slate-500">
                    ★ {doctor.rating} • {doctor.patients}
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="mt-1 bg-emerald-700 hover:bg-emerald-800"
              >
                <Link href={`/doctor/booking?doctor=${encodeURIComponent(doctor.name)}`}>
                  Book appointment
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}

