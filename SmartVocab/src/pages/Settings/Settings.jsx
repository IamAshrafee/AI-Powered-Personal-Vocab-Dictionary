import React, { useState } from "react";

const Settings = () => {
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8"></div>
    </div>
  );
};

export default Settings;
