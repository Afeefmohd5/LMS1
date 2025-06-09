import React from 'react';

const dummyMessages = [
  { id: 1, sender: 'Teacher', content: 'Please submit your assignments by Friday.', time: '2024-06-01 09:00' },
  { id: 2, sender: 'Student', content: 'Can I get an extension for the math project?', time: '2024-06-01 10:15' },
  { id: 3, sender: 'Teacher', content: 'Extension granted until next Monday.', time: '2024-06-01 11:00' },
  { id: 4, sender: 'Student', content: 'Thank you!', time: '2024-06-01 11:05' },
  { id: 5, sender: 'Teacher', content: 'Reminder: Physics lab tomorrow at 2 PM.', time: '2024-06-02 08:00' },
  { id: 6, sender: 'Student', content: 'When is the next chemistry test?', time: '2024-06-03 09:30' },
  { id: 7, sender: 'Teacher', content: 'Next test is on June 15th.', time: '2024-06-03 10:00' },
  { id: 8, sender: 'Student', content: 'Thank you for the info!', time: '2024-06-03 10:05' },
  { id: 9, sender: 'Teacher', content: 'Don\'t forget to review the lecture notes.', time: '2024-06-04 08:00' },
  { id: 10, sender: 'Student', content: 'Will do!', time: '2024-06-04 08:15' },
];

const Communication = () => {
  return (
    <section id="communication" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Communication</h2>
      <div className="bg-white shadow-md rounded-lg p-4 space-y-4 max-h-96 overflow-y-auto">
        {dummyMessages.map(({ id, sender, content, time }) => (
          <div key={id} className={`p-3 rounded-md ${sender === 'Teacher' ? 'bg-indigo-100 text-indigo-900' : 'bg-gray-100 text-gray-900'}`}>
            <div className="text-sm font-semibold">{sender}</div>
            <div className="text-base">{content}</div>
            <div className="text-xs text-gray-500 mt-1">{time}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Communication;
