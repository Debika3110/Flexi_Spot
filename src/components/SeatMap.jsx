export default function SeatMap() {
  const seats = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    status: i % 5 === 0 ? 'unavailable' : 'available',
  }));

  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">Availability</h2>
      <div className="grid grid-cols-6 gap-2">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`
              w-10 h-10 flex items-center justify-center rounded
              ${seat.status === 'available' ? 'bg-green-300' : 'bg-gray-400'}
              cursor-pointer hover:scale-105 transition
            `}
          >
            {seat.id}
          </div>
        ))}
      </div>

      <div className="flex mt-4 space-x-4 text-sm">
        <span className="flex items-center">
          <span className="w-4 h-4 bg-green-300 inline-block mr-2"></span>
          Available
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-gray-400 inline-block mr-2"></span>
          Unavailable
        </span>
        <span className="flex items-center">
          <span className="w-4 h-4 bg-orange-300 inline-block mr-2"></span>
          Meeting Room
        </span>
      </div>
    </div>
  );
}
