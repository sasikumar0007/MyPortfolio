import "./Serve.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
const Serve = ({ type }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]

    })

    const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
        <div className='serve'
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #505064, #BC5516)",
            }}
        >
            <motion.h1 style={{ y: ytext }}>{type === "services" ? "Skills" : "Projects"}</motion.h1>
            <motion.div className='mountains'
                style={{ backgroundImage: `url("/mountains.png")` }}></motion.div>
            <motion.div className='planets'
                style={{ backgroundImage: type === "services" ? `url("/planets.png")` : `url("/sun.png")`, y: yBg }}></motion.div>
            <motion.div className='stars'
                style={{ backgroundImage: `url("/stars.png")`, x: yBg }}></motion.div>
        </div>
    )
};

export default Serve;