import React from 'react';
import { FaUserCircle, FaHeartbeat, FaPills, FaListAlt } from 'react-icons/fa'; // Icons from react-icons
import './App.css';
import UserProfile from './components/UserProfile';
import HealthTracker from './components/HealthTracker';
import MedicationReminder from './components/MedicationReminder';
import HealthGoals from './components/HealthGoals';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-3">Health Assistant App</h1>
        <p className="text-xl font-light">Your Personal Health Tracker</p>
      </header>
      
      <main className="container mx-auto px-4">
        {/* User Profile Section */}
        <section className="mb-10">
          <h2 className="text-3xl flex items-center gap-2">
            <FaUserCircle /> User Profile
          </h2>
          <div className="p-5 bg-white text-gray-900 rounded-lg shadow-lg mt-4">
            <UserProfile />
          </div>
        </section>

        {/* Health Tracker Section */}
        <section className="mb-10">
          <h2 className="text-3xl flex items-center gap-2">
            <FaHeartbeat /> Health Tracker
          </h2>
          <div className="p-5 bg-white text-gray-900 rounded-lg shadow-lg mt-4">
            <HealthTracker />
          </div>
        </section>

        {/* Medication Reminder Section */}
        <section className="mb-10">
          <h2 className="text-3xl flex items-center gap-2">
            <FaPills /> Medication Reminder
          </h2>
          <div className="p-5 bg-white text-gray-900 rounded-lg shadow-lg mt-4">
            <MedicationReminder />
          </div>
        </section>

        {/* Health Goals Section */}
        <section className="mb-10">
          <h2 className="text-3xl flex items-center gap-2">
            <FaListAlt /> Health Goals
          </h2>
          <div className="p-5 bg-white text-gray-900 rounded-lg shadow-lg mt-4">
            <HealthGoals />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 mt-10 bg-gray-800">
        <p className="text-sm">&copy; 2024 Health Assistant App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
