import React from "react";

export default function Home() {
  const homeCategory = (title, description) => (
    <div className="homeCategory">
      <h2 className="homeCategoryTitle">{title}</h2>
      <h3 className="homeCategoryDesc">{description}</h3>
    </div>
  );

  return (
    <>
      <div id="homeContent">
        <h1 id="homeHeader">Haruki Gonai</h1>
        <h3 id="homeSubHeader">Software Engineer, Tutor</h3>
        {homeCategory("Columbia Engineering", "Computer Science, Class of 2023")}
      </div>
      <img id="myPhoto" src={process.env.PUBLIC_URL + "/me.JPG"}></img>
    </>
  );
}
