import React from 'react';

const dummyCourses = [
  { id: 1, title: 'Mathematics 101', instructor: 'Dr. Smith', schedule: 'Mon & Wed 10:00-11:30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPkJnI9pfo5WaAUgcfece76KjxPmMI0fbJQ&s' },
  { id: 2, title: 'Physics 201', instructor: 'Prof. Johnson', schedule: 'Tue & Thu 13:00-14:30', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Chemistry 101', instructor: 'Dr. Lee', schedule: 'Mon & Wed 14:00-15:30', image: 'https://nailknowledge.org/wp-content/uploads/2021/04/chemical.jpg' },
  { id: 4, title: 'English Literature', instructor: 'Ms. Davis', schedule: 'Fri 09:00-12:00', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, title: 'Computer Science', instructor: 'Mr. Brown', schedule: 'Tue & Thu 10:00-11:30', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' },
  { id: 6, title: 'History 101', instructor: 'Dr. Green', schedule: 'Mon & Wed 09:00-10:30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz_tIgvQXPAaSmvYa7CqZo_biaRK9D_O8uA&s' },
  { id: 7, title: 'Biology 201', instructor: 'Prof. White', schedule: 'Tue & Thu 11:00-12:30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sc0raMCQtV3rZrJul-8-rtIMAs5Df_H-dA&s' },
  { id: 8, title: 'Art Appreciation', instructor: 'Ms. Black', schedule: 'Fri 13:00-16:00', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80' },
  { id: 9, title: 'Economics', instructor: 'Mr. Grey', schedule: 'Mon & Wed 15:00-16:30', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' },
  { id: 10, title: 'Philosophy', instructor: 'Dr. Blue', schedule: 'Tue & Thu 09:00-10:30', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' },
];

const Courses = () => {
  return (
    <section id="courses" className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyCourses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded mb-4"
              style={{ height: '200px' }}
            />
            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Schedule: {course.schedule}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
