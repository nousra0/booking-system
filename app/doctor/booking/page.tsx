import DoctorBookingClient from "./DoctorBookingClient";

export default function DoctorBookingPage({
  searchParams,
}: {
  searchParams: {
    mode?: string;
    doctor?: string;
    patientName?: string;
    phone?: string;
    date?: string;
    time?: string;
    reason?: string;
  };
}) {
  return <DoctorBookingClient searchParams={searchParams} />;
}

