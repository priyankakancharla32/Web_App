import React from 'react';
import { useParams } from 'react-router-dom';
import { courses, lessons } from  "../pages/data";
import {Link} from "react-router-dom"

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId));

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Lessons:</h3>
      <ul>
        {lessons
          .filter(lesson => lesson.courseId === parseInt(courseId))
          .map(lesson => (
            <li key={lesson.id}>
              <Link to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
