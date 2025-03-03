import { useState } from "react"
import Link from "./link/Link"
import "./sidebar.scss"
import Tbutton from "./togglebutton/Tbutton"
import { motion } from "framer-motion"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const variants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants} initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <Link setOpen={setOpen} />
      </motion.div>
      <Tbutton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar