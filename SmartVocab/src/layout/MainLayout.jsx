import React from "react";
import LogoBar from "../components/LogoBar";
import { Link, useLocation } from "react-router";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const getButtonClass = (path) => {
    return location.pathname === path
      ? "bg-gray-900 text-white shadow"
      : "text-gray-700 hover:text-gray-900";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <LogoBar />
      {/* Futuristic Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center py-2">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <Link
                to="/create"
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getButtonClass("/create")}`}>
                Create
              </Link>
              <Link
                to="/"
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getButtonClass("/")}`}>
                Words
              </Link>
              <Link
                to="/settings"
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getButtonClass("/settings")}`}>
                Settings
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
