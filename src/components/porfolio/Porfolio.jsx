import { useRef } from 'react'
import './porfolio.scss'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"React Commerce",
        img: "https://images.pexels.com/photos/27669807/pexels-photo-27669807/free-photo-of-a-road-is-winding-through-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:2,
        title:"Traders Prediction Model",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:3,
        title:"Scan2Invest",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:4,
        title:"Wells Fargo UI / UX Work",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:5,
        title:"Smart City of Aurora",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:6,
        title:"Let's Fargo!",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:7,
        title:"University LMS Grader",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
    {
        id:8,
        title:"React Portfolio",
        img: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, asperiores. Quam quod sequi maiores blanditiis quidem ipsum corporis officiis! Architecto eum rem placeat sint excepturi, veniam a! Corrupti, expedita similique." 
    },
]

const Single = ({item}) => {
    
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref})

    const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=''/>
                    </div>                
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More!</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Porfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='porfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}


export default Porfolio