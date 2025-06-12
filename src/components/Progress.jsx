import React from 'react';

const dummyProgress = [
  { id: 1, student: 'Alice Johnson', course: 'Python', Progress: '85' },
  { id: 2, student: 'Bob Smith', course: 'DBMS', progress: 70 },
  { id: 3, student: 'Charlie Brown', course: 'Big Data', progress: 90 },
  { id: 4, student: 'Diana Prince', course: 'Digital Marketing', progress: 60 },
  { id: 5, student: 'Ethan Hunt', course: 'Web Development', progress: 95 },
  { id: 6, student: 'Fiona Glenanne', course: 'Full Stack web development', progress: 75},
  { id: 7, student: 'George Michael', course: 'Data Visualization', progress: 80 },
  { id: 8, student: 'Hannah Baker', course: 'Data Analysis', progress: 85 },
  { id: 9, student: 'Ian Fleming', course: 'Fundamentals on Supabase',progress: 65 },
  { id: 10, student: 'Jane Doe', course: 'Java', progress: 90},
];

const Progress = () => {
  return (
    <section id="progress" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Progress Tracking</h2>
      <div className="space-y-4">
        {dummyProgress.map(({ id, student, course, progress }) => (
          <div key={id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <div className="font-semibold text-gray-800">{student} - {course}</div>
              <div className="font-semibold text-gray-800">{progress}%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress;
