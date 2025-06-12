import React from 'react';

const dummyCourses = [
  { id: 1, title: 'Data Analysis', instructor: 'Dr. Smith', schedule: 'Mon & Wed 10:00-11:30', image: 'https://cdn.pixabay.com/photo/2018/02/27/17/40/graph-3186081_1280.png' },
  { id: 2, title: 'Web Development', instructor: 'Prof. Johnson', schedule: 'Tue & Thu 13:00-14:30', image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg' },
  { id: 3, title: 'Big data', instructor: 'Dr. Lee', schedule: 'Mon & Wed 14:00-15:30', image: 'https://cdn.pixabay.com/photo/2016/09/13/13/16/big-data-1667212_1280.png' },
  { id: 4, title: 'Full Stack web development', instructor: 'Ms. Davis', schedule: 'Fri 09:00-12:00', image: 'https://cdn.pixabay.com/photo/2016/07/29/10/45/graphic-1552416_1280.png' },
  { id: 5, title: 'Digital marketing', instructor: 'Mr. Brown', schedule: 'Tue & Thu 10:00-11:30', image: 'https://cdn.pixabay.com/photo/2022/07/08/05/43/seo-7308528_1280.png' },
  { id: 6, title: 'Data Visualization', instructor: 'Dr. Green', schedule: 'Mon & Wed 09:00-10:30', image: 'https://cdn.pixabay.com/photo/2016/08/20/06/15/statistic-1606951_1280.png' },
  { id: 7, title: 'Fundamentals on Supabase', instructor: 'Prof. White', schedule: 'Tue & Thu 11:00-12:30', image: 'https://imgs.search.brave.com/UCY_rNun0epb2UTBo_1avGji2Y0pvdfLccWCTXhTiK0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdXBh/YmFzZS5jb20vX25l/eHQvaW1hZ2U_dXJs/PS9pbWFnZXMvaW5k/ZXgvcHJvZHVjdHMv/ZGF0YS1hcGlzLWRh/cmsuc3ZnJnc9Mzg0/MCZxPTEwMA.jpeg' },
  { id: 8, title: 'DBMS', instructor: 'Ms. Black', schedule: 'Fri 13:00-16:00', image: 'https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_1280.png' },
  { id: 9, title: 'Python', instructor: 'Mr. Grey', schedule: 'Mon & Wed 15:00-16:30', image: 'https://imgs.search.brave.com/tRcIQPC8qL8gsKCN4ipzPxrtp4T5pU4Q5U_pXol4ark/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/cHl0aG9uLXByb2dy/YW1taW5nLWxhbmd1/YWdlLWNvZGluZy1k/ZXZlbG9wbWVudC0y/NjBudy0yMTA4MDY5/NzI5LmpwZw' },
  { id: 10, title: 'Java', instructor: 'Dr. Blue', schedule: 'Tue & Thu 09:00-10:30', image: 'https://imgs.search.brave.com/DnnQDlFEA2uWGKEVWFNn11wIPsPIfGfSRGNzoJS-dYo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTg0MzMy/NjAvNjY4NzYvaS80/NTAvZGVwb3NpdHBo/b3Rvc182Njg3NjEx/OTQtc3RvY2stcGhv/dG8tYnVzaW5lc3Nt/YW4tY2xpY2tzLWph/dmEtcHJvZ3JhbW1p/bmctbGFuZ3VhZ2Uu/anBn' },
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
