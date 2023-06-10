import React from "react";

import COMS_W3203_Discrete_Mathematics_Fall_2022 from "../course_evals/COMS_W3203_Discrete_Mathematics_Fall_2022.pdf";
import COMS_W3251_Computational_Linear_Algebra_Fall_2021 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Fall_2021.pdf";
import COMS_W3251_Computational_Linear_Algebra_Spring_2022 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Spring_2022.pdf";
import COMS_W3251_Computational_Linear_Algebra_Spring_2023 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Spring_2023.pdf";
import COMS_W4118_Operating_Systems_I_Fall_2022 from "../course_evals/COMS_W4118_Operating_Systems_I_Fall_2022.pdf";
import COMS_W4701_Artificial_Intelligence_Spring_2023 from "../course_evals/COMS_W4701_Artificial_Intelligence_Spring_2023.pdf";

export default function TACourseEvals() {

  const course = (courseName, file) => (
    <h3 className="course">
      <a className="courseName" href={file} target="_blank">{courseName}</a>
    </h3>
  );

  return (
    <>
      <div id="relevantCourseworkContent">
        <h1 id="relevantCourseworkHeader">TA Course Evaluations</h1>
      
        {course("COMS W4118: Operating Systems I (Fall 2022)", COMS_W4118_Operating_Systems_I_Fall_2022)}
        {course("COMS W4701: Artificial Intelligence (Spring 2023)", COMS_W4701_Artificial_Intelligence_Spring_2023)}
        {course("COMS W3251: Computational Linear Algebra (Spring 2023)", COMS_W3251_Computational_Linear_Algebra_Spring_2023)}
        {course("COMS W3203: Discrete Mathematics (Spring 2022)", COMS_W3251_Computational_Linear_Algebra_Spring_2022)}
        {course("COMS W3251: Computational Linear Algebra (Fall 2022)", COMS_W3203_Discrete_Mathematics_Fall_2022)}
        {course("COMS W3251: Computational Linear Algebra (Fall 2021)", COMS_W3251_Computational_Linear_Algebra_Fall_2021)}
      </div>
    </>
  );
}
