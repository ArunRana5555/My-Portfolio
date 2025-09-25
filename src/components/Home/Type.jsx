import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Passionate Blockchain Enthusiast",
          "Effective Problem Solver",
          "JavaScript & React.js Specialist",
          "Next.js & Node.js Developer",
          "SQL & Database Management Proficient",
          "Dedicated Learner in DSA & Algorithms"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type