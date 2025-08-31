import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const [settings, setSettings] = useState({
    // Appearance settings
    theme: "light",
    fontSize: "medium",
    reducedMotion: false,

    // Notifications settings
    dailyReminder: true,
    newWordNotification: true,
    weeklyReport: false,

    // Data settings
    autoSync: true,
    cloudBackup: true,
    exportFormat: "json",

    // Account settings
    username: "vocabmaster",
    email: "user@example.com",
    language: "english",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save settings to a backend
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Logo Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">SmartVocab</h1>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center py-2">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("create")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "create"
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Create
              </button>
              <button
                onClick={() => setActiveTab("words")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "words"
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Words
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "settings"
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8"></div>
    </div>
  );
};

export default Settings;
