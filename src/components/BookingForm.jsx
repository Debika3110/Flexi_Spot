export default function BookingForm() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">Book a Seat</h2>
      <label className="block mb-2 text-gray-700">Date</label>
      <input type="date" className="w-full border p-2 rounded mb-4" />

      <label className="block mb-2 text-gray-700">Room</label>
      <select className="w-full border p-2 rounded mb-4">
        <option>1A</option>
        <option>2B</option>
      </select>

      <button className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-600">
        Reserve
      </button>
    </div>
  );
}
