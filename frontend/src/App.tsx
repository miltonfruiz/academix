import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Course {
  _id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleCreateCourse = async () => {
    const course: Course = {
      _id: '',
      name,
      description,
      startDate: startDate as Date,
      endDate: endDate as Date,
    };

    await fetch(`${API_URL}/api/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });

    setCourses([...courses, course]);
    setName('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
  };

  const handleUpdateCourse = async (id: string) => {
    const course: Course = {
      _id: id,
      name,
      description,
      startDate: startDate as Date,
      endDate: endDate as Date,
    };

    await fetch(`${API_URL}/api/courses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });

    setCourses(
      courses.map((c) => (c._id === id ? { ...c, ...course } : c))
    );
  };

  const handleDeleteCourse = async (id: string) => {
    await fetch(`${API_URL}/api/courses/${id}`, {
      method: 'DELETE',
    });

    setCourses(courses.filter((c) => c._id !== id));
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <p>
              {course.name} - {course.description}
            </p>
            <p>
              {course.startDate.toISOString()} - {course.endDate.toISOString()}
            </p>
            <button onClick={() => handleUpdateCourse(course._id)}>
              Update
            </button>
            <button onClick={() => handleDeleteCourse(course._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Create Course</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={startDate ? startDate.toISOString().split('T')[0] : ''}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={(e) => setEndDate(new Date(e.target.value))}
        placeholder="End Date"
      />
      <button onClick={handleCreateCourse}>Create</button>
    </div>
  );
};

export default App;