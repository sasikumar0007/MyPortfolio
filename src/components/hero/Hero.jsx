import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar';

const variants = {

    initial: {
        x: -1000,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerchildren: 0.1,
        },
    },
}

const slidervariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
const Hero = () => {
    const handleDownloadCV = () => {
        // Logic to trigger download of the resume
        window.open('/path/to/your/resume.pdf', '_blank');
    };
    return (
        <div className='hero'>
            
            <motion.div className="slidingtext" variants={slidervariants} initial="initial" animate="animate">
                Software Engineer
            </motion.div>
            <motion.div className='imageContainer' variants={variants} initial="initial" animate="animate">
                <img src="/myimage3.png" alt="" />
            </motion.div>
            <Sidebar />
            <div className="wrapper">
                <motion.div className="text" variants={variants} initial="initial" animate="animate" >
                <div className='name-with-button'>
                        <motion.h2 variants={variants}>SASI KUMAR A</motion.h2>
                        {/* <motion.div className='button1'>
                            <a href='#' onClick={handleDownloadCV}>Download CV</a>
                        </motion.div> */}
                    </div>
                    <motion.h1 variants={variants}>Full Stack Developer and Software Engineer</motion.h1>
                    <motion.div className="button" >
                        <a href="#Projects" >See my works</a>
                        <a href="#Contact">Contact Me</a>
                    </motion.div>
                </motion.div>
            </div>
            
            
        </div>
    )
}

export default Hero