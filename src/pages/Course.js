// src/pages/Course.js
import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../components/CourseDetail';
import { courses, lessons } from './data';

function Course() {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId));
  const courseLessons = lessons.filter(lesson => lesson.courseId === parseInt(courseId));

  return (
    <div className="course">
      <CourseDetail course={course} lessons={courseLessons} />
    </div>
  );
}

export default Course;
