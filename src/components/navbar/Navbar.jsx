import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './navbar.scss'
import { motion } from "framer-motion";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <motion.span className="sk" initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >Sasi Kumar</motion.span>
                <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }} className="social">
                    <a href="https://leetcode.com/sasikumar0007/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width="30" height="30" />
                    </a>
                    <a href="https://linkedin.com/in/sasi-kumar-a-b04036213/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/sasikumar0007">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar