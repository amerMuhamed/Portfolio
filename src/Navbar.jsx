import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("token") && localStorage.getItem("role") === "SUPER_ADMIN";

  // لو مش لوجين أو مش أدمن، خفي النافبار
  if (!isLoggedIn || location.pathname === "/") return null;

  return (
    <nav className="bg-white shadow p-4 flex justify-center gap-6 fixed top-0 w-full z-50">
      <Link
        to="/admin"
        className={`text-blue-600 font-semibold hover:underline ${location.pathname === "/admin" ? "underline" : ""}`}
      >
        Workout Upload
      </Link>
      <Link
        to="/admin/exercise"
        className={`text-blue-600 font-semibold hover:underline ${location.pathname === "/admin/exercise" ? "underline" : ""}`}
      >
        Exercise Upload
      </Link>
    </nav>
  );
}

export default Navbar;
