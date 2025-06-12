import React from 'react';

const dummyGrades = [
  { id: 1, student: 'Alice Johnson', course: 'Python', grade: 'A' },
  { id: 2, student: 'Bob Smith', course: 'DBMS', grade: 'B+' },
  { id: 3, student: 'Charlie Brown', course: 'Big Data', grade: 'A-' },
  { id: 4, student: 'Diana Prince', course: 'Digital Marketing', grade: 'B' },
  { id: 5, student: 'Ethan Hunt', course: 'Web Development', grade: 'A+' },
  { id: 6, student: 'Fiona Glenanne', course: 'Full Stack web development', grade: 'B+' },
  { id: 7, student: 'George Michael', course: 'Data Visualization', grade: 'A' },
  { id: 8, student: 'Hannah Baker', course: 'Data Analysis', grade: 'A-' },
  { id: 9, student: 'Ian Fleming', course: 'Fundamentals on Supabase', grade: 'B' },
  { id: 10, student: 'Jane Doe', course: 'Java', grade: 'A' },
];

const Gradebook = () => {
  return (
    <section id="gradebook" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Gradebook</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="text-left py-3 px-4">Student</th>
            <th className="text-left py-3 px-4">Course</th>
            <th className="text-left py-3 px-4">Grade</th>
          </tr>
        </thead>
        <tbody>
          {dummyGrades.map(({ id, student, course, grade }) => (
            <tr key={id} className="border-b hover:bg-indigo-50 transition">
              <td className="py-3 px-4">{student}</td>
              <td className="py-3 px-4">{course}</td>
              <td className="py-3 px-4 font-semibold">{grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Gradebook;
