// src/components/Lesson.js
import React from 'react';

function Lesson({ lesson }) {
  return (
    <li className="lesson">
      <h4>{lesson.title}</h4>
    </li>
  );
}

export default Lesson;