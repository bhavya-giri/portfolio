import React from "react";

const About = () => {
  const techStack = [
    "<Javascript Es6+ /> ",
    "<Typescript />",
    "<React.js />",
    "<Firebase />",
    "<HTML & CSS />",
    "<Tailwind CSS />",
  ];

  return (
    <div>
      <h1>/ about</h1>
      <hr/>
      <div>
        I am front-end developer and open source entusiast. I building my skill
        to become full-stack developer, exploring horzions of cloud computing.
      </div>
      <div>Here are some technologies I am working with:</div>
       <ul className="tech-stack">
                {techStack.map(function (tech_item) {
                  return (
                    
                      <li>{tech_item}</li>
                  
                  );
                })}
              </ul>
    </div>
  );
};

export default About;
