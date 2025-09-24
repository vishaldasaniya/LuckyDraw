import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import axios from "axios";

const initialWinners = await axios.get('http://localhost:8000/admin');

function Dashboard() {
  const [winners, setWinners] = useState(initialWinners.data.users);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Name validation: sirf alphabets allowed
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) setName(value);
  };

  // Mobile validation: sirf digits allowed
  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setMobile(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || mobile === "") return;

    const response = await axios.post('http://localhost:8000/createParticipation',{
      name:name,
      number:mobile
    });
    if(response.data.message === "useralreadyexist")
    {
      alert('user already exist');
    }
    else
      {
      setWinners([...winners, { name:response.data.name, mobile:response.data.phoneNumber, prize:response.data.prize }]);

    }


    setName("");
    setMobile("");
  };

  // Winners ko search se filter karenge (name ya mobile dono me matching)
  const filteredWinners = winners.filter(
    (w) =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.mobile.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white px-6 py-4 flex items-center shadow">
        <img src={logo} alt="Company Logo" className="h-10 mr-3" />
        <span className="font-bold text-xl text-gray-800">Your Company Name</span>
      </nav>

      <div className="p-8">
        <div className="max-w-xl mx-auto bg-white rounded shadow-md overflow-x-auto">
          <h2 className="text-xl font-semibold text-center py-4">Add Lucky Winner</h2>

          <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter user name"
              value={name}
              onChange={handleNameChange}
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={handleMobileChange}
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
            >
              Add Winner
            </button>
          </form>

          <input
            type="text"
            placeholder="Search by name or mobile number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <h3 className="text-xl font-semibold mb-2 text-center text-orange-600">Lucky Winners</h3>

          <table className="min-w-full table-auto border border-orange-300 rounded-md overflow-hidden">
            <thead className="bg-orange-100">
              <tr>
                <th className="px-5 py-3 text-left text-orange-700 font-semibold">S.No.</th>
                <th className="px-5 py-3 text-left text-orange-700 font-semibold">Name</th>
                <th className="px-5 py-3 text-left text-orange-700 font-semibold">Mobile No.</th>
                <th className="px-5 py-3 text-left text-orange-700 font-semibold">Prize</th>
              </tr>
            </thead>
            <tbody>
              {filteredWinners.length > 0 ? (
                filteredWinners.map((winner, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-orange-50" : "bg-white"}
                  >
                    <td className="border px-5 py-3 border-orange-300">{idx + 1}</td>
                    <td className="border px-5 py-3 border-orange-300">{winner.name}</td>
                    <td className="border px-5 py-3 border-orange-300">{winner.phoneNumber}</td>
                    <td className="border px-5 py-3 border-orange-300">{winner.prize}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-orange-600">
                    No winners found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
