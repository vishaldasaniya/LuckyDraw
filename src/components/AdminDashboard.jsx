const mobileNumbers = [
  "9876543210",
  "9123456789",
  "8098765432",
  // Aur numbers yahan add karo
];

function Dashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white rounded shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold text-center py-4">Users Mobile Numbers</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-2 text-left text-gray-700">S.No.</th>
              <th className="px-4 py-2 text-left text-gray-700">Mobile No.</th>
            </tr>
          </thead>
          <tbody>
            {mobileNumbers.map((num, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{idx + 1}</td>
                <td className="border px-4 py-2">{num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export 