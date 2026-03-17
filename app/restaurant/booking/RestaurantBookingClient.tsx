"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { DatePicker } from "../../../components/forms/DatePicker";
import { TimePicker } from "../../../components/forms/TimePicker";

export default function RestaurantBookingClient({
  searchParams,
}: {
  searchParams: {
    name?: string;
    phone?: string;
    guests?: string;
    date?: string;
    time?: string;
    requests?: string;
  };
}) {
  const router = useRouter();

  const [name, setName] = useState(searchParams.name ?? "");
  const [phone, setPhone] = useState(searchParams.phone ?? "");
  const [guests, setGuests] = useState(searchParams.guests ?? "2");
  const [date, setDate] = useState(searchParams.date ?? "");
  const [time, setTime] = useState(searchParams.time ?? "");
  const [requests, setRequests] = useState(searchParams.requests ?? "");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    guests?: string;
    date?: string;
    time?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};

    if (!name.trim()) nextErrors.name = "Please enter your full name.";
    if (!phone.trim()) nextErrors.phone = "Please enter a contact number.";
    if (!guests || Number(guests) < 1)
      nextErrors.guests = "Number of guests must be at least 1.";
    if (!date) nextErrors.date = "Please select a date.";
    if (!time) {
      nextErrors.time = "Please select a time.";
    } else if (time < "17:00" || time > "23:30") {
      nextErrors.time = "Please choose a time between 5:00 PM and 11:30 PM.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const params = new URLSearchParams({
      name,
      phone,
      guests,
      date,
      time,
      requests,
    }).toString();
    router.push(`/restaurant/confirmation?${params}`);
  };

  return (
    <div className="flex flex-1 bg-linear-to-b from-slate-50 via-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-8 px-4 pb-0 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Reserve your table
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            Share a few details and we will prepare your table exactly the way
            you imagine it. No payment required to reserve.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <Card className="border-blue-100 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name && e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, name: undefined }));
                    }
                  }}
                  placeholder="Alex Johnson"
                  error={errors.name}
                />
                <Input
                  label="Phone number"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, "");
                    setPhone(numericValue);
                    if (errors.phone && numericValue.trim()) {
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                    }
                  }}
                  placeholder="e.g. 5551234567"
                  error={errors.phone}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Input
                  label="Number of guests"
                  type="number"
                  min={1}
                  max={16}
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    if (errors.guests && Number(e.target.value) >= 1) {
                      setErrors((prev) => ({ ...prev, guests: undefined }));
                    }
                  }}
                  error={errors.guests}
                />
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(value) => {
                    setDate(value);
                    if (errors.date && value) {
                      setErrors((prev) => ({ ...prev, date: undefined }));
                    }
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  error={errors.date}
                />
                <TimePicker
                  label="Time"
                  value={time}
                  onChange={(value) => {
                    setTime(value);
                    if (errors.time && value) {
                      setErrors((prev) => ({ ...prev, time: undefined }));
                    }
                  }}
                  min="17:00"
                  max="23:30"
                  error={errors.time}
                />
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-slate-800">
                  Special requests
                </span>
                <textarea
                  className="min-h-[96px] rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-xs outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Allergies, celebrations, preferred seating, or timing notes."
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                />
                <span className="text-xs text-slate-500">
                  We will do our best to honor every request.
                </span>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[11px] font-semibold text-blue-800">
                    ✓
                  </span>
                  <span>No fees for changes or cancellations.</span>
                </div>
                <Button type="submit" size="lg">
                  Confirm reservation
                </Button>
              </div>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="border-blue-100 bg-white">
              <h2 className="text-base font-semibold text-slate-900">
                Tonight at Lumière
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Elegant dining, low lighting, and seasonal menus. Located in the
                heart of the city.
              </p>
              <div className="mt-4 grid gap-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Opening hours</span>
                  <span className="font-medium text-slate-900">
                    5:00 PM – 11:30 PM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Dress code</span>
                  <span className="font-medium text-slate-900">
                    Smart casual, no sportswear
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Parking</span>
                  <span className="font-medium text-slate-900">
                    Valet & nearby garage
                  </span>
                </div>
              </div>
            </Card>

            <Card className="border-blue-50 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">
                Reservation tips
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-600">
                <li>• Aim for off-peak hours for the quietest tables.</li>
                <li>• Let us know about birthdays and anniversaries.</li>
                <li>• Add allergy notes so the kitchen can prepare.</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

