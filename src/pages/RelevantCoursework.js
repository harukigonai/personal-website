import React from "react";

export default function RelevantCoursework() {
  const semester = (semesterName) => <h2 className="semester">{semesterName}</h2>;

  const course = (courseName, courseNumber, courseGrade) => (
    <h3 className="course">
      <span className="courseName">{courseName}</span>{" "}
      <span className="courseNumber">{courseNumber}</span>{" "}
      <span className="courseGrade">{courseGrade}</span>
    </h3>
  );

  return (
    <>
      <div id="relevantCourseworkContent">
        <h1 id="relevantCourseworkHeader">Relevant Coursework</h1>
        <h2 id="GPA">GPA: 4.14/4.33.</h2>
        <h2 id="departmentalGPA">Departmental GPA: 4.33/4.33.</h2>
        {semester("Summer 2021")}
        {course("Analysis of Algorithms I", "CSOR W4231", "A+")}
        {course("Fundamentals of Computer Systems", "CSEE W3827", "A+")}
        {semester("Spring 2021")}
        {course("Advanced Programming", "COMS W3157", "A+")}
        {course("Computational Linear Algebra", "COMS W3251", "A+")}
        {semester("Fall 2020")}
        {course("Discrete Mathematics", "COMS W3203", "A+")}
        {course("Data Structures in Java", "COMS W3134", "A+")}
        {course("Intro To Comp For Eng/App Sci", "ENGI E1006", "A+")}
        {semester("Spring 2020")}
        {course("Introduction to Computer Science", "COMS W1004", "P")}
      </div>
    </>
  );
}
