import RestaurantBookingClient from "./RestaurantBookingClient";

export default function RestaurantBookingPage({
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
  return <RestaurantBookingClient searchParams={searchParams} />;
}

