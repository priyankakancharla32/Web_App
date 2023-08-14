import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`}>Enroll</Link>
    </div>
  );
}

export default CourseCard;