import "../sidebar.scss"
import { motion } from "framer-motion"
const items = ['Homepage', 'Services', 'About','Projects', 'Contact']

const variants = {
    open: {
        transition: {
            staggerchildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerchildren: 0.005,
            staggerdirection: -1,
        }
    }
}

const itemvariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}

const Link = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen(prev => !prev)} className="link" variants={variants}>{items.map((item) => (
            <motion.a href={`#${item}`} key={item} variants={itemvariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}>{item}</motion.a>
        ))}
        </button>

    )
}

export default Link