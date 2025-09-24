// PrizeCard.js
import React from "react";

export default function PrizeCard({ isOpen, onClose, prizeImage, prizeName }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      />

      {/* Popup card */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center transform transition-transform duration-300 ease-out scale-100"
          style={{ animation: "popupScale 0.3s ease-out forwards" }}
          onClick={e => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
          <img
            src={prizeImage}
            alt={prizeName}
            className="mx-auto mb-4 max-h-48"
          />
          <p className="text-lg">{prizeName} has been won!</p>
          <button
            onClick={onClose}
            className="mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Close
          </button>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes popupScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
