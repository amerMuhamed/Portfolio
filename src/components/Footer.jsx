import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/30 text-gray-300 py-4 text-center">
      © {new Date().getFullYear()} Amer Mohamed. All rights reserved.
    </footer>
  );
}
