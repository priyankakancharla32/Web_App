// src/components/UserDashboard.js
import React from 'react';

function UserDashboard({ enrolledCourses }) {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <h3>Enrolled Courses</h3>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;