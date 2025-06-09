import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Gradebook from './components/Gradebook';
import Calendar from './components/Calendar';
import Communication from './components/Communication';
import Progress from './components/Progress';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveTab('courses');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('home');
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      if (activeTab === 'login') {
        return <Login onLogin={handleLogin} onSignupClick={() => setActiveTab('signup')} />;
      }
      if (activeTab === 'signup') {
        return <Signup onBackClick={() => setActiveTab('home')} />;
      }
      return <Home onLoginClick={() => setActiveTab('login')} />;
    }
    switch (activeTab) {
      case 'courses':
        return <Courses />;
      case 'gradebook':
        return <Gradebook />;
      case 'calendar':
        return <Calendar />;
      case 'communication':
        return <Communication />;
      case 'progress':
        return <Progress />;
      default:
        return <Courses />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {isLoggedIn && (
        <Navbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />
      )}
      <div className="max-w-full mx-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
