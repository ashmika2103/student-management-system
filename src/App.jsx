import "./App.css";

function Header() {
  return <h1 className="header">Student Management System</h1>;
}

function StudentProfile(props) {
  return (
    <div className="student-profile">
      <h2>{props.name}</h2>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Student Management System</footer>;
}

function App() {
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div>
      <Header />

      <h2>Student 1</h2>
      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h2>Student 2</h2>
      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />
    </div>
  );
}

export default App;