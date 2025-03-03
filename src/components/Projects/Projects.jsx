import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "FitLife",
    img: `${process.env.PUBLIC_URL}/fitness.png`,
    desc: "FitLife offers 1000+ exercises, enhanced by an AI-powered trainer for real-time rep counting (60% accuracy) and YouTube-integrated workouts, ensuring a smarter and more engaging fitness journey.",
    url: "https://github.com/sasikumar0007/FitLife" // Add your actual demo link here
  },
  
  {
    id: 2,
    title: "MyPortfolio",
    img: `${process.env.PUBLIC_URL}/Myport.png`,
    desc: "An interactive portfolio built with React and Framer Motion, showcasing my projects, skills, and experience with smooth animations and seamless navigation.",
    url: "https://github.com/sasikumar0007/MyPortfolio",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img className="imagecontainer1" src={item.img} alt={item.title} />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* Open the demo in a new tab */}
            <button onClick={() => window.open(item.url, "_blank")}>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Projects" ref={ref}>
      <div className="progress">
        <h1>My Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
