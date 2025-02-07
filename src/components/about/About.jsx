import './about.scss'
// import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <div className="textContainer">
                <p>Hello, my name is Jinwoo Lim or you can call me Jin. Welcome to my personal portfolio website! Originally from a small town, 
                    I have had ambitions in the Technology world ever since I had the opportunity to touch a computer. As I was pursuing a bachelor's degree 
                    in Computer Science, it confirmed my passion for cutting edge technology and I have since engaged in many challenging and diverse projects 
                    that required my leadership and technical skillsets. <br/>

                    I'd like to believe I'm an ambitious, adaptive, naturally curious, creative problem solver who also loves to lead any conversation or implementation 
                    of recent innovations. I'd like to explore more into the field of programming and ultimately to the fantastic world of artificial intelligence. I was 
                    fortunate enough to have experience in leading and managing teams of developers, business analysts, and financial advisors to reinvent new applications 
                    and frameworks of current softwares used at Wells Fargo. Along with the experience gained from business and programming projects done at NJIT, I believe
                    I can fulfill most positions in the software engineering world with skills that I have acquired throughout these years. I will always be striving for more 
                    business ideas that involves progress through technology! <br/>

                    If I need to define myself in one sentence that would be a family person, caring son, sports fanatic, an open artist, and tech obsessed!
                </p>
            </div>
        </div>
    )
    
}

export default About