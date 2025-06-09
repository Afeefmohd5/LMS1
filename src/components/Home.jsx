import React from 'react';

const Home = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-700 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold cursor-default">EduLMS</div>
          <button
            onClick={onLoginClick}
            className="bg-white text-indigo-700 px-4 py-2 rounded hover:bg-indigo-100 transition"
          >
            Login
          </button>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <section className="bg-indigo-600 text-white py-20 relative">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1470&q=80"
            alt="Education banner"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to EduLMS</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Empowering education through innovative learning management solutions tailored for academic excellence.
            </p>
            <button
              onClick={onLoginClick}
              className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-indigo-100 transition"
            >
              Get Started
            </button>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Our Institution</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              EduLMS is designed to support educational institutions in managing courses, gradebooks, calendars, communication, and student progress tracking. Our mission is to enhance the learning experience and foster student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4 flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=104079&format=png&color=000000"
                  alt="Mission Icon"
                  className="mr-3"
                />
                Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver accessible, innovative, and effective educational tools that enhance teaching and learning experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4 flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=j53TKrAl0C6U&format=png&color=000000"
                  alt="Vision Icon"
                  className="mr-3"
                />
                Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading institution in academic excellence and student development through technology-driven solutions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Approach to Student Life Improvement</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We strive to create a holistic educational experience by integrating academic support, communication tools, and progress tracking to help students succeed both inside and outside the classroom.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} EduLMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
