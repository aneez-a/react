import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 1️⃣ Class
  class Student {
    constructor(name, mark) {
      this.name = name;
      this.mark = mark;
    }
  }

  // 2️⃣ Create Objects
  const students = [
    new Student("aneez", 85),
    new Student("Anu", 92),
    new Student("Priya", 74),
    new Student("John", 88),
  ];

  // 3️⃣ Spread + Map (Add grade)
  const updatedStudents = students.map((item) => {
    return {
      ...item,
      grade:
        item.mark >= 90
          ? "A+"
          : item.mark >= 80
          ? "A"
          : item.mark >= 70
          ? "B"
          : "C",
    };
  });

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={{ color: "purple" }}>🎓 Student Result Dashboard</h1>

      {updatedStudents.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "15px auto",
            padding: "15px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px lightgray",
          }}
        >
          <h3>{item.name}</h3>
          <p>Mark: {item.mark}</p>
          <p>
            Grade:{" "}
            <span style={{ color: item.grade === "A+" ? "green" : "blue" }}>
              {item.grade}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;