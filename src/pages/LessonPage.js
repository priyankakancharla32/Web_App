import React from 'react';
import { useParams } from 'react-router-dom';
import { lessons } from './data';

function LessonPage() {
  const { lessonId } = useParams();
  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));

  return (
    <div className="lesson-page">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
    </div>
  );
}

export default LessonPage;
