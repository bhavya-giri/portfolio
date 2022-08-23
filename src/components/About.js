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
    <div className="pb-36">
      <h1 className="text-6xl ml-16 md:ml-32">/ about</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="text-xl order-2 md:order-1 mx-5 md:ml-32 mt-8">
          <div className=" ">
            I am front-end developer and open source entusiast. I building my
            skill to become full-stack developer, exploring horzions of cloud
            computing.
          </div>
          <div className="mt-6 text-left mb-4  ">
            Here are some technologies I am working with:
          </div>
         
            <ul className="tech-stack grid grid-cols-1 md:grid-cols-2 gap-3">
              {techStack.map(function (tech_item) {
                return <li>{tech_item}</li>;
              })}
            </ul>
          
        </div>
        <img
          className="max-w-xs mx-auto order-1 pt-10 md:order-2 hover:translate-y-2.5	"
          src="https://pbs.twimg.com/profile_images/1559744099099353089/yb1q2J5I_400x400.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
