import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Username:</strong> Priyanka Kancharla</p>
        <p><strong>Email:</strong> kancharlapriyanka@gmail.com</p>
      </div>
      <div className="enrolled-courses">
        <h3>Enrolled Courses:</h3>
        <ul>
          <li>
            <Link to="/course/1">Introduction to Programming</Link>
          </li>
          {/* Add more enrolled courses */}
        </ul>
      </div>
      <div className="completed-lessons">
        <h3>Completed Lessons:</h3>
        <ul>
          <li>
            <Link to="/lesson/1">Getting Started with Programming</Link>
          </li>
          {/* Add more completed lessons */}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
