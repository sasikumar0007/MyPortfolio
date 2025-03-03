import { useRef, useState } from "react"
import "./Contact.scss"
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {
    const ref=useRef();
    const formRef=useRef();
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);

    const isInView=useInView
    (ref,{margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_0rhxai4', 'template_8ftod8k', formRef.current, {
            publicKey: 'EmWp5rcWPi0OeS1S0',
          })
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
              setError(true);
            },
          );
      };

    return (
        <motion.div ref={ref} className='Contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="text" variants={variants} >
                <h1>Wanna contact me?</h1>
                <motion.div className="item" variants={variants} >
                    <h2>Mail</h2>
                    <span>sasikumaranbu07@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants} >
                    <h2>Location</h2>
                    <span>West mambalam, Chennai</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone number</h2>
                    <span>+91 9514709084</span>
                </motion.div>
            </motion.div>
            <motion.div className="form">
                
                <motion.form ref={formRef}
                onSubmit={sendEmail}
                >
                    <input type="text" required placeholder='Name' name="name"/>
                    <input type="email" required placeholder='Email' name="email" />
                    <textarea rows={8} placeholder='Message' name="message"/>
                    <motion.button whileHover={{scale:1.2}}whileTap={{ scale: 0.9 }}>Submit</motion.button>
                    {error && "Error" }
                    {success && "Message sent succesfully"}
                </motion.form>
            </motion.div>
        </motion.div>
    )
}

export default Contact