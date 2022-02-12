import React from "react";

export default function RelevantCoursework() {
  const semester = (semesterName) => (
    <h2 className="semester">{semesterName}</h2>
  );

  const course = (courseName, courseNumber) => (
    <h3 className="course">
      <span className="courseName">{courseName}</span>{" "}
      <span className="courseNumber">{courseNumber}</span>{" "}
    </h3>
  );

  return (
    <>
      <div id="relevantCourseworkContent">
        <h1 id="relevantCourseworkHeader">Relevant Coursework</h1>
        {semester("4000-Level Courses")}
        {course("Operating Systems I", "CSOR W4231")}
        {course(
          "Fundamentals of Large-Scale Distributed Systems",
          "COMS W4113"
        )}
        {course("Introduction to Databases", "COMS W4111")}
        {course("Computer Networks", "CSEE W4119")}
        {course("Advanced Software Engineering", "COMS W4156")}
        {course("Artificial Intelligence", "COMS W4701")}
        {course("Analysis of Algorithms I", "CSOR W4231")}

        {semester("3000-Level Courses")}
        {course("Advanced Programming (Systems Programming)", "COMS W3157")}
        {course("Fundamentals of Computer Systems", "CSEE W3827")}
        {course("Computational Linear Algebra", "COMS W3251")}
        {course("Discrete Mathematics", "COMS W3203")}
        {course("Data Structures in Java", "COMS W3134")}

        {semester("1000-Level Courses")}
        {course("Intro To Comp For Eng/App Sci", "ENGI E1006")}
        {course("Introduction to Computer Science", "COMS W1004")}

        <br></br>
      </div>
    </>
  );
}
