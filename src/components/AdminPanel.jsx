export default function AdminPanel() {
  const actions = [
    { label: 'Booking Rules', icon: '📋' },
    { label: 'Manage Rooms', icon: '🏢' },
    { label: 'View Bookings', icon: '📊' },
    { label: 'Usage Analytics', icon: '📈' },
  ];

  return (
    <div className="bg-white shadow rounded p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map(a => (
          <button
            key={a.label}
            className="border p-4 rounded hover:bg-gray-100 flex items-center justify-center space-x-2 text-blue-700 font-medium"
          >
            <span>{a.icon}</span>
            <span>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
