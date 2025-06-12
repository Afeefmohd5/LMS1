import React from 'react';

const dummyEvents = [
  { id: 1, title: 'DBMS Exam', date: '2024-06-10', time: '10:00 AM' },
  { id: 2, title: 'Python Lab', date: '2024-06-12', time: '2:00 PM' },
  { id: 3, title: 'Web dev Assignment Due', date: '2024-06-15', time: '11:59 PM' },
  { id: 4, title: 'Digital Marketing  Presentation', date: '2024-06-18', time: '9:00 AM' },
  { id: 5, title: 'Project', date: '2024-06-20', time: '5:00 PM' },
  // { id: 6, title: 'History Quiz', date: '2024-06-22', time: '1:00 PM' },
  // { id: 7, title: 'Biology Field Trip', date: '2024-06-25', time: '8:00 AM' },
  // { id: 8, title: 'Art Exhibition', date: '2024-06-28', time: '3:00 PM' },
  // { id: 9, title: 'Economics Seminar', date: '2024-07-01', time: '10:00 AM' },
  // { id: 10, title: 'Philosophy Debate', date: '2024-07-03', time: '4:00 PM' },
];

const Calendar = () => {
  return (
    <section id="calendar" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Calendar</h2>
      <ul className="space-y-4">
        {dummyEvents.map(event => (
          <li key={event.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
            <p className="text-gray-600">{event.date} at {event.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Calendar;
