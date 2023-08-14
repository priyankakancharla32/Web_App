// src/pages/Home.js
import React from 'react';
import CourseList from '../components/CourseList'; // Correct the import
import { courses } from './data';

function Home() {
  return (
    <div className="home">
      <h2>Featured Courses</h2>
      <CourseList courses={courses} />

    </div>
  );
}

export default Home;