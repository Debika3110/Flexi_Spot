import BookingForm from "../components/BookingForm";
import SeatMap from "../components/SeatMap";
import MyBookings from "../components/MyBookings";
import AdminPanel from "../components/AdminPanel";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <BookingForm />
        <MyBookings />
      </div>
      <div className="lg:col-span-2">
        <SeatMap />
        <AdminPanel />
      </div>
    </div>
  );
}
