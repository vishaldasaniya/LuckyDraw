
import React from "react";

export default function ScanScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 to-orange-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-sm text-center">
        <h2 className="text-orange-600 font-bold text-3xl mb-3">Scan QR Code</h2>
        <p className="mb-6 text-base text-orange-700">
          Hold your phone camera up to the QR code displayed at the event to participate in the lucky draw.
        </p>
        <div className="mx-auto bg-orange-50 rounded-xl shadow-md p-10 w-64 h-64 flex items-center justify-center">
          {/* QR Scanner Placeholder */}
          <div className="text-orange-300 italic select-none">QR Scanner Area</div>
        </div>
        <small className="block mt-6 text-gray-500">
          If you face issues scanning, try adjusting camera distance or lighting.
        </small>
      </div>
    </div>
  );
}
