"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { DatePicker } from "../../../components/forms/DatePicker";
import { TimePicker } from "../../../components/forms/TimePicker";

export default function DoctorBookingPage() {
  const router = useRouter();
  const params = useSearchParams();

  const isEditMode = params.get("mode") === "edit";
  const doctorFromQuery = params.get("doctor") || "";

  const initialPatientName = isEditMode ? params.get("patientName") || "" : "";
  const initialPhone = isEditMode ? params.get("phone") || "" : "";
  const initialDoctor = doctorFromQuery;
  const initialDate = isEditMode ? params.get("date") || "" : "";
  const initialTime = isEditMode ? params.get("time") || "" : "";
  const initialReason = isEditMode ? params.get("reason") || "" : "";

  const [patientName, setPatientName] = useState(initialPatientName);
  const [phone, setPhone] = useState(initialPhone);
  const [doctor, setDoctor] = useState(initialDoctor);
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [reason, setReason] = useState(initialReason);

  const [patientNameError, setPatientNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [doctorError, setDoctorError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const baseDoctorName = doctorFromQuery.split(" (")[0] || "";
  const showDoctorSelection = !doctorFromQuery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!patientName.trim()) {
      setPatientNameError("Please enter the patient name.");
      hasError = true;
    } else {
      setPatientNameError("");
    }

    if (!phone.trim()) {
      setPhoneError("Please enter a phone number.");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!doctor) {
      setDoctorError("Please choose a doctor.");
      hasError = true;
    } else {
      setDoctorError("");
    }

    if (!date) {
      setDateError("Please choose an appointment date.");
      hasError = true;
    } else {
      setDateError("");
    }

    if (!time) {
      setTimeError("Please choose a preferred time.");
      hasError = true;
    } else {
      setTimeError("");
    }

    if (hasError) return;

    const qs = new URLSearchParams({
      patientName,
      phone,
      doctor,
      date,
      time,
      reason,
    }).toString();
    router.push(`/doctor/confirmation?${qs}`);
  };

  return (
    <div className="flex flex-1 bg-linear-to-b from-emerald-50 via-slate-50 to-white">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {doctorFromQuery
              ? `Schedule your visit with ${baseDoctorName}`
              : "Schedule your visit"}
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            A few quick details help your doctor prepare for your appointment
            and make the most of your time together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <Card className="border-emerald-100 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <Input
                    label="Patient name"
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (patientNameError) setPatientNameError("");
                    }}
                    placeholder="Jordan Smith"
                  />
                  <p className="min-h-[16px] text-xs text-red-600">
                    {patientNameError}
                  </p>
                </div>
                <div className="space-y-1">
                  <Input
                    label="Phone number"
                    value={phone}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, "");
                      setPhone(onlyDigits);
                      if (phoneError) setPhoneError("");
                    }}
                    inputMode="numeric"
                    placeholder="e.g. 15559876543"
                  />
                  <p className="min-h-[16px] text-xs text-red-600">
                    {phoneError}
                  </p>
                </div>
              </div>

              {showDoctorSelection && (
                <div className="space-y-1">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-slate-800">
                      Doctor selection
                    </span>
                    <select
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-xs outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      value={doctor}
                      onChange={(e) => {
                        setDoctor(e.target.value);
                        if (doctorError) setDoctorError("");
                      }}
                    >
                      <option value="" disabled>
                        Choose a doctor
                      </option>
                      <option value="Dr. Maya Patel (Cardiology)">
                        Dr. Maya Patel (Cardiology)
                      </option>
                      <option value="Dr. James Cooper (Pediatrics)">
                        Dr. James Cooper (Pediatrics)
                      </option>
                      <option value="Dr. Lina Hernández (Dermatology)">
                        Dr. Lina Hernández (Dermatology)
                      </option>
                    </select>
                  </label>
                  <p className="min-h-[16px] text-xs text-red-600">
                    {doctorError}
                  </p>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <DatePicker
                    label="Appointment date"
                    value={date}
                    onChange={(value) => {
                      setDate(value);
                      if (dateError) setDateError("");
                    }}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <p className="min-h-[16px] text-xs text-red-600">
                    {dateError}
                  </p>
                </div>
                <div className="space-y-1">
                  <TimePicker
                    label="Preferred time"
                    value={time}
                    onChange={(value) => {
                      setTime(value);
                      if (timeError) setTimeError("");
                    }}
                  />
                  <p className="min-h-[16px] text-xs text-red-600">
                    {timeError}
                  </p>
                </div>
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-slate-800">
                  Reason for visit
                </span>
                <textarea
                  className="min-h-[96px] rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-xs outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Briefly describe your symptoms or what you would like to discuss."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <span className="text-xs text-slate-500">
                  This helps your doctor prepare, and is kept strictly
                  confidential.
                </span>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-800">
                    ✓
                  </span>
                  <span>Secure and private medical information.</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800"
                >
                  Confirm appointment
                </Button>
              </div>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="border-emerald-100 bg-emerald-50">
              <h2 className="text-base font-semibold text-emerald-900">
                Before your visit
              </h2>
              <ul className="mt-3 space-y-2 text-xs text-emerald-800">
                <li>• Arrive 10 minutes early for check-in.</li>
                <li>• Bring a list of medications you&apos;re taking.</li>
                <li>• Upload recent lab results before your appointment.</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-sm font-semibold text-slate-900">
                Insurance & payment
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                We can verify coverage ahead of time so there are no surprises
                during your visit.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

