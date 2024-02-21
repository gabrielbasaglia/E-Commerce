"use client";
export const HamburgerIcon = ({ onClick }) => (
  <div className="absolute fixed left-2 top-2">
    <button onClick={onClick}>
      <svg
        className="w-8 h-8 text-gray-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
);
