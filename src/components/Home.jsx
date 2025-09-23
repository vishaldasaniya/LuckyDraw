import React from "react";

const WelcomeComponent = () => {
  return (
    <div className=" bg-gray-100">
   
     <div> <img
        src="/src/assets/images/logo.jpg" 
        alt=""
        className="w-24 h-24 mb-4"
      /> </div>


      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome to the SB Solar LuckyDraw Contest
      </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
         <input
        type="tel"
        placeholder="Enter Mobile Number"
        pattern="[0-9]{10}" 
        maxLength={10}
        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
      />
      
     <button className="w-40 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
        Verify
      </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;
