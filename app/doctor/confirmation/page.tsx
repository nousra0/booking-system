"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default function DoctorConfirmationPage() {
  const params = useSearchParams();
  const router = useRouter();

  const patientName = params.get("patientName") || "Patient";
  const phone = params.get("phone") || "Not provided";
  const doctor = params.get("doctor") || "Assigned at clinic";
  const date = params.get("date") || "Soon";
  const time = params.get("time") || "To be confirmed";
  const reason = params.get("reason") || "General consultation";

  return (
    <div className="flex flex-1 bg-linear-to-b from-emerald-50 via-slate-50 to-white">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-3xl flex-1 flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="space-y-3 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900 ring-1 ring-emerald-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
              ✓
            </span>
            Appointment confirmed
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            We&apos;ll see you soon, {patientName}.
          </h1>
          <p className="text-sm text-slate-600 sm:max-w-xl">
            Your appointment details are below. You can adjust or cancel your
            visit any time before your scheduled start.
          </p>
        </div>

        <Card className="space-y-5 border-emerald-100 bg-white">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Clinic
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Greenline Medical Center
              </p>
            </div>
            <p className="text-xs text-slate-500">
              402 Cedar Avenue • 3rd Floor
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              <p className="text-xs font-medium text-slate-500">
                Appointment
              </p>
              <div className="rounded-xl bg-emerald-50 px-3 py-2.5 text-xs text-emerald-900">
                <p className="font-semibold">{doctor}</p>
                <p className="mt-1">
                  {date} at {time}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-xs font-medium text-slate-500">
                Patient & contact
              </p>
              <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-700">
                <p>{patientName}</p>
                <p className="mt-1">Phone: {phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-xs font-medium text-slate-500">Reason</p>
            <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-xs text-slate-700">
              {reason}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-[11px] text-slate-500">
              For emergencies, please contact local emergency services instead
              of this platform.
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-200"
                onClick={() => {
                  const qs = new URLSearchParams({
                    mode: "edit",
                    patientName,
                    phone,
                    doctor,
                    date,
                    time,
                    reason,
                  }).toString();
                  router.push(`/doctor/booking?${qs}`);
                }}
              >
                Edit appointment
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-rose-600 hover:bg-rose-50"
                onClick={() => router.push("/doctor/booking")}
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

