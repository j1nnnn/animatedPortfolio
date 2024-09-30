import {motion} from "framer-motion"
import { useState } from "react"

const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        // visible:{opacity:1},
        // visible:{opacity:1, x:1000, transition:{duration:2}},
        // visible:{opacity:1, 
        //         x:100, 
        //         // transition:{type:"spring", stiffness: 100, damping: 100} // stiffness: 200 
        //         transition: {staggerChildren: 1}
        //     }, 
        visible: (i)=>({
            opacity:1, 
            x:100, 
            transition: {delay: i * 0.3}
        }), 
        hidden:{opacity:0}
    };

    const items = ["item1", "item2", "item3", "item4"];

    return (
        // <div className='course'>
        //     <motion.div 
        //         className='box' 
        //         // initial={{opacity: 0.5, scale: 0.5}}
        //         // // animate={{opacity:1, scale: 1, x:200, y:500}} 
        //         // // whileHover={{opacity:1, scale:2}}
        //         // whileInView={{opacity:1, scale:2}}
        //         // drag
        //         // transition={{duration:2}}

        //         variants={variants}
        //         // initial="hidden"
        //         // animate="visible"
        //         // transition={{duration:2}}
        //         animate={open ? "visible" : "hidden"}
        //     ></motion.div>
        //     {/* When the button is first default false and you click on it, it will be true then visible. Now if
        //     you click on the button, then it will become false and it will disappear. */}
        //     <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
        // </div>
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item, i)=>(
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}
                <motion.li></motion.li>
            </motion.ul>
        </div>
    )
}

export default Test