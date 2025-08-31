import React from "react";
import { Link, useLocation } from "react-router";
import { 
  FiPlus, 
  FiBook, 
  FiSettings, 
  FiHome,
  FiChevronRight,
  FiSearch,
  FiUser
} from "react-icons/fi";

const LogoBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-900 text-white p-2 rounded-lg">
            <FiBook className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">SmartVocab</h1>
        </div>
      </div>
    </div>
  );
};

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  const getButtonClass = (path) => {
    return location.pathname === path
      ? "bg-gray-900 text-white shadow-lg"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";
  };

  const getMobileButtonClass = (path) => {
    return location.pathname === path
      ? "text-gray-900"
      : "text-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="hidden sm:block">
        <LogoBar />
      </div>

      {/* Top Navigation Bar (for larger screens) */}
      <nav className="hidden sm:block bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex space-x-1">
              <Link
                to="/"
                className={`flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getButtonClass("/")}`}>
                <FiHome className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to="/create"
                className={`flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getButtonClass("/create")}`}>
                <FiPlus className="mr-2 h-4 w-4" />
                Create
              </Link>
              <Link
                to="/words"
                className={`flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getButtonClass("/words")}`}>
                <FiBook className="mr-2 h-4 w-4" />
                Words
              </Link>
            </div>
            
            <Link
              to="/settings"
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getButtonClass("/settings")}`}>
              <FiSettings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb for larger screens */}
      <div className="hidden sm:block bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
            {location.pathname !== "/" && (
              <>
                <FiChevronRight className="mx-2 text-gray-400 mt-0.5" />
                <span className="text-gray-900 capitalize">
                  {location.pathname.replace("/", "") || "Home"}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      <main className="pb-20 sm:pb-0">{children}</main>

      {/* Bottom Navigation Bar (for smaller screens) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10">
        <div className="flex justify-around">
          <Link 
            to="/" 
            className={`flex flex-col items-center justify-center w-full py-3 ${getMobileButtonClass('/')}`}
          >
            <FiHome className="h-5 w-5 mb-1" />
            <span className="text-xs">Home</span>
          </Link>
          <Link 
            to="/create" 
            className={`flex flex-col items-center justify-center w-full py-3 ${getMobileButtonClass('/create')}`}
          >
            <FiPlus className="h-5 w-5 mb-1" />
            <span className="text-xs">Create</span>
          </Link>
          <Link 
            to="/words" 
            className={`flex flex-col items-center justify-center w-full py-3 ${getMobileButtonClass('/words')}`}
          >
            <FiBook className="h-5 w-5 mb-1" />
            <span className="text-xs">Words</span>
          </Link>
          <Link 
            to="/settings" 
            className={`flex flex-col items-center justify-center w-full py-3 ${getMobileButtonClass('/settings')}`}
          >
            <FiSettings className="h-5 w-5 mb-1" />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;