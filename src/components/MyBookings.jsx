export default function MyBookings() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-600">
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Room</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">04/24/2024</td>
            <td className="py-2">1A</td>
            <td className="py-2 text-green-600 font-bold">Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
