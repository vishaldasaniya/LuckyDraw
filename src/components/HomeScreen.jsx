
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from '../assets/images/logo.jpg';

// export default function HomeScreen() {
//   const [mobile, setMobile] = useState("");
//   const navigate = useNavigate();

//   function handleSubmit() {
//     if (/^[6-9]\d{9}$/.test(mobile)) {
//       // Number valid, QR Scan screen pe bhejo
//       navigate("/scan");
//     } else {
//       alert("Valid Mobile Number daalein");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-orange-100 to-orange-300 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm text-center">
//         <img src={logo} alt="Company Logo" className="w-16 mx-auto mb-5" />
//         <h1 className="text-orange-600 font-extrabold text-3xl mb-3">Lucky Draw 2025</h1>
//         <p className="text-black-600 mb-6 max-w-xs mx-auto">
//           Enter your mobile number below to participate and win exciting prizes!
//         </p>
//         <input
//           type="tel"
//           placeholder="Enter mobile no."
//           className="border border-red-300 rounded-lg w-full px-4 py-3 text-lg mb-5 focus:outline-none focus:ring-2 focus:ring-red-600"
//           maxLength={10}
//           value={mobile}
//           onChange={e => setMobile(e.target.value)}
//         />
//         <button
//           className="w-full py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition duration-200"
//           onClick={handleSubmit}
//         >
//           Participate
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import PrizeCard from "./PrizeCard";
import washingMachineImage from "../assets/images/logo.jpg"; 

export default function HomeScreen() {
  const [mobile, setMobile] = useState("");
  const [isPrizeOpen, setIsPrizeOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (/^[6-9]\d{9}$/.test(mobile)) {
      
      setIsPrizeOpen(true);
 
    } else {
      alert("Valid Mobile Number");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 to-orange-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm text-center">
        <img src={logo} alt="Company Logo" className="w-16 mx-auto mb-5" />
        <h1 className="text-orange-600 font-extrabold text-3xl mb-3">
          Lucky Draw 2025
        </h1>
        <p className="text-black-600 mb-6 max-w-xs mx-auto">
          Enter your mobile number below to participate and win exciting prizes!
        </p>
        <input
          type="tel"
          placeholder="Enter mobile no."
          className="border border-red-300 rounded-lg w-full px-4 py-3 text-lg mb-5 focus:outline-none focus:ring-2 focus:ring-red-600"
          maxLength={10}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          className="w-full py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition duration-200"
          onClick={handleSubmit}
        >
          Verify
        </button>
      </div>

      <PrizeCard
        isOpen={isPrizeOpen}
        onClose={() => setIsPrizeOpen(false)}
        prizeImage={washingMachineImage}
        prizeName="Washing Machine"
      />
    </div>
  );
}
