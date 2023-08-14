import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CourseList from "./components/CourseList"; // Update the import
import CourseDetails from "./components/CourseDetails"; // Update the import
import LessonPage from "./pages/LessonPage";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import SignUp from './pages/SignUp';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/courses"  element={<CourseList />} />
            <Route path="/course/:courseId"  element={<CourseDetails />} />
            <Route path="/lesson/:lessonId"  element={<LessonPage />} />
            <Route path="/profile"  element={<UserProfile />} />
            <Route path="/signup"  element={<SignUp/>} />

            <Route component={NotFound} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 E-Learning Platform</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
