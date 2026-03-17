import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

const featuredDishes = [
  {
    name: "Seared Salmon & Citrus",
    description: "Fresh Atlantic salmon, fennel, and blood orange.",
    price: "$28",
    image: "/images/salmon.webp",
  },
  {
    name: "Truffle Pasta",
    description: "Handmade tagliatelle, wild mushrooms, and shaved truffle.",
    price: "$32",
    image: "/images/pasta.webp",
  },
  {
    name: "Garden Tasting Plate",
    description: "Seasonal vegetables, herbs, and house-made sauces.",
    price: "$24",
    image: "/images/taste.jpeg",
  },
];

const testimonials = [
  {
    name: "Sophia Martinez",
    quote:
      "The easiest way I have ever booked a table. The whole experience felt curated.",
  },
  {
    name: "Daniel Lee",
    quote:
      "Beautiful ambience and flawless reservation flow. I love how fast it is on mobile.",
  },
  {
    name: "Amira Khan",
    quote:
      "I booked for 12 guests in seconds. The confirmation page is so clear and elegant.",
  },
];

export default function RestaurantLandingPage() {
  return (
    <div className="flex flex-1 bg-linear-to-b from-slate-50 via-slate-50 to-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-6xl flex-1 flex-col justify-center">
        <section className="flex flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-16">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Premium Restaurant Reservations
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Book a table in{" "}
            <span className="text-blue-700">seconds</span>, savor the night
            forever.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A modern, mobile-first experience for discovering stunning spaces,
            selecting the perfect time, and confirming your reservation with
            confidence. Designed for busy evenings and effortless hosting.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/restaurant/booking">Book a table</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-blue-100">
              View menu highlights
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-500 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-700">
                ★
              </span>
              <span>4.9 average rating • 1k+ diners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-700">
                ⏱
              </span>
              <span>Under 30 seconds to reserve</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-blue-100/60 blur-2xl" />
            <div className="absolute -bottom-10 -right-4 h-24 w-24 rounded-3xl bg-sky-100/70 blur-2xl" />
            <Card className="relative overflow-hidden border-blue-100 p-0">
              <div className="relative h-56 w-full sm:h-64">
                <Image
                  src="/images/restaurant.jpg"
                  alt="Elegant restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <h2 className="text-base font-semibold text-slate-900">
                  Tonight at Lumière
                </h2>
                <p className="text-xs text-slate-500">
                  Soft lighting, crafted cocktails, and seasonal tasting menus
                  for every celebration.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Next available: 7:30 PM • 4 guests</span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-800">
                    Live availability
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Featured dishes
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              A glimpse into what awaits your table tonight.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish) => (
            <Card key={dish.name} className="flex flex-col overflow-hidden p-0">
              <div className="relative h-40 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {dish.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {dish.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900">
                    {dish.price}
                  </span>
                  <span className="text-slate-500">Signature pairing</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Guests who booked with us
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Thoughtfully designed flows that make reservations feel effortless.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="space-y-3 bg-white">
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                “{t.quote}”
              </p>
              <p className="text-xs font-medium text-slate-900">{t.name}</p>
            </Card>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}

