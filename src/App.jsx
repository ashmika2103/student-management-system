import { useState, useEffect } from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <header>
      <h1 className="header">Student Management System</h1>
    </header>
  );
}

// StudentProfile Component
function StudentProfile({ name, department, year, count, onComplete, onReset }) {

  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="student-profile">
      <h2>{name}</h2>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <h3>Practice Sessions: {count}</h3>

      <button onClick={onComplete}>
        Complete Practice
      </button>

      <button onClick={onReset} className="reset-button">
        Reset
      </button>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      © 2026 Student Management System
    </footer>
  );
}

// Main App Component
function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  return (
    <div className="app">
      <Header />

      <button
        onClick={() => setShowProfile(!showProfile)}
        className="toggle-button"
      >
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          count={count}
          onComplete={() => setCount(count + 1)}
          onReset={() => setCount(0)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;