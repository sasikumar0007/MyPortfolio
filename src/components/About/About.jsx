import "./About.scss";
import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                {/* About Me Section */}
                <div className="textContainer">
                    <h2>About Me</h2>
                    <p>"A Developer Who Loves to Code and Roam!"</p>

                    <p>Hey there! I’m a full-stack developer who enjoys building applications with Java, React, and MySQL. I love solving problems, fixing bugs, and making sure everything runs smoothly. Whether it's writing backend logic, creating user-friendly interfaces, or managing databases, I enjoy every part of the process.
                        <br></br>
                        But coding isn’t the only thing I love—I also enjoy roaming with friends! Exploring new places, trying new things, and making great memories keep life exciting. For me, it's all about balance—writing clean code during the day and having fun outside of work.
                    </p>
                </div>

                {/* Education Section */}
                <div className="education">
                    <h2>Education</h2>
                    <div className="educationItem">
                        <h3>Bachelor's in Computer Science</h3>
                        <p>Chennai institute of technology, 2020 - 2024</p>
                    </div>
                    {/* <div className="educationItem">
            <h3>Higher Secondary Education</h3>
            <p>ABC School, 2016 - 2018</p>
          </div> */}
                </div>

                {/* Experience Section */}
                <div className="experience">
                    <h2>Experience</h2>
                    <div className="experienceItem">
                        <h3>Java Developer</h3>
                        <p>Accenture, Aug 2024 - Present</p>
                        <p>Trained in Core & Advanced Java, Spring Framework, and Spring MVC.</p>
                        <ul>
                            <li>Developing and maintaining a banking application using JSP and Spring framework based on new requirements.</li>
                            <li>Implementing features, fixing defects, and optimizing performance.</li>
                            <li>Performing testing, debugging, and troubleshooting to ensure quality.</li>
                            <li>Managing deployments using Bitbucket and Jenkins.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
