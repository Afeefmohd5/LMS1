import React, { useState } from 'react';

const Navbar = ({ activeTab, onTabChange, onLogout, isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 'courses', label: 'Courses' },
    { id: 'gradebook', label: 'Gradebook' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'communication', label: 'Communication' },
    { id: 'progress', label: 'Progress' },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div
              className="text-white font-bold text-xl tracking-wide cursor-pointer"
              onClick={() => handleTabClick('home')}
            >
              EduLMS
            </div>
            <div className="hidden md:flex space-x-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === tab.id ? 'bg-indigo-500' : 'hover:bg-indigo-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-indigo-100 transition md:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="hidden md:flex items-center space-x-2">
              {!isLoggedIn ? (
                <button
                  className="bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-indigo-100 transition"
                  onClick={() => onTabChange('login')}
                >
                  Login
                </button>
              ) : (
                <button
                  className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-100 transition"
                  onClick={() => onLogout()}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-indigo-700 px-2 pt-2 pb-3 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`block w-full text-left text-white px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === tab.id ? 'bg-indigo-500' : 'hover:bg-indigo-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  onTabChange('login');
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-red-600 px-3 py-2 rounded-md text-base font-medium hover:bg-red-100"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
