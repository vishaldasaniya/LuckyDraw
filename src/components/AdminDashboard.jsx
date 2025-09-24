import React from "react";
import logo from "../assets/images/logo.jpg"


// Ye winners ka data backend/API se milega, yahan hardcoded example hai
const winners = [
  "9876543210",
  "9123456789",
  "8098765432",
  // Aur winners yahan honge
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with logo */}
      <nav className="bg-white px-6 py-4 flex items-center shadow">
        <img src={logo} alt="Company Logo" className="h-10 mr-3" />
        <span className="font-bold text-xl text-gray-800">Your Company Name</span>
      </nav>

      <div className="p-8">
        <div className="max-w-xl mx-auto bg-white rounded shadow-md overflow-x-auto">
          <h2 className="text-xl font-semibold text-center py-4">Lucky Winners</h2>

          {/* Winners List Table */}
          <table className="min-w-full table-auto mb-4">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-4 py-2 text-left text-gray-700">S.No.</th>
                <th className="px-4 py-2 text-left text-gray-700">Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {winners.map((num, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">{num}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
