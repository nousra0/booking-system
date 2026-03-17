"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default function RestaurantConfirmationPage() {
  const params = useSearchParams();
  const router = useRouter();

  const name = params.get("name") || "Guest";
  const phone = params.get("phone") || "Not provided";
  const guests = params.get("guests") || "2";
  const date = params.get("date") || "Soon";
  const time = params.get("time") || "To be confirmed";
  const requests = params.get("requests") || "No special requests";

  return (
    <div className="flex flex-1 bg-linear-to-b from-slate-50 via-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-3xl flex-1 flex-col justify-center gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900 ring-1 ring-emerald-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
              ✓
            </span>
            Reservation confirmed
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            We&apos;ll hold your table, {name}.
          </h1>
          <p className="text-sm text-slate-600 sm:max-w-xl">
            A confirmation has been prepared with your reservation details
            below. You can edit or cancel with a single tap.
          </p>
        </div>

        <Card className="space-y-5 bg-white">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Restaurant
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Lumière Dining Room
              </p>
            </div>
            <p className="text-xs text-slate-500">
              21 Royal Street • Downtown
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <p className="text-xs font-medium text-slate-500">Reservation</p>
              <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-700">
                <p>
                  <span className="font-medium text-slate-900">
                    {guests} guests
                  </span>{" "}
                  for <span className="font-medium text-slate-900">{name}</span>
                </p>
                <p className="mt-1">
                  {date} at {time}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-xs font-medium text-slate-500">
                Contact & notes
              </p>
              <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-700">
                <p>Phone: {phone}</p>
                <p className="mt-1 line-clamp-2">
                  Requests:{" "}
                  <span className="font-medium text-slate-900">
                    {requests || "No special requests"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-[11px] text-slate-500">
              Changes can be made up to 2 hours before your reservation.
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const query = params.toString();
                  router.push(
                    query
                      ? `/restaurant/booking?${query}`
                      : "/restaurant/booking",
                  );
                }}
              >
                Edit reservation
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:bg-red-50"
                onClick={() => router.push("/restaurant/booking")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

