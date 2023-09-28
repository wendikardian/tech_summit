import React from "react";
import Card from "./Card";
import "./coursesSection.css";

function CoursesSection() {
  return (
    <>
      <h2 className="home_title">
        🔥 <span className="text_yellow_gradient">Top Courses</span> 🔥
      </h2>
      <div className="courses">
        {/* <Card/> */}
        {/* <Card /> */}
        <Card
          name="Object Oriented Programming using Python"
          slug="/oop-python/1"
          price="free"
          rating={4}
          image="https://www.nesabamedia.com/docs/wp-content/uploads/2022/09/oop.png"
          isReady={true}
        />
        <Card
          name="Introduction to Data Science"
          slug="/data-science"
          price="45$"
          rating={5}
          isReady={false}
          image="https://muaraindonesia.com/wp-content/uploads/2021/07/5e3c3add630a1585791ff8a9_4dda7c5dc3564bce88dfa5114c53a774.png"
        />
        <Card
          name="Introduction to Machine Learning"
          slug="/machine-learning"
          price="free"
          rating={4}
          isReady={false}
          image="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/machine-learning-t.jpg"
        />
        <Card
          name="Introduction to Deep Learning"
          slug="/deep-learning"
          price="free"
          rating={4}
          isReady={false}
          image="https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2019/01/AI-artificial-intelligence-brain-deep-learning.jpg?fit=7016%2C4961&ssl=1"
        />
      </div>
    </>
  );
}

export default CoursesSection;
