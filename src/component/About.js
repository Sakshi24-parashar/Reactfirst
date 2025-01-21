import { useState } from "react";
import { NavLink } from "react-router-dom";
import './About.css'

function About(){
    const[read,setRead]=useState(false);
    let par="Talented Web Development student currently pursuing graduation, blending education and internship experience. Skilled in design principles, progrmming languages, and data analysis with a strong focus on visual aesthetics and backend functionality.Enthusiast fresher in the field to acheive most out of everything. I am a smart worker along with workholic. With innovative and great ideas striving to reach goals";
    let showpar=read?par:`${par.substring(0,245)}...`;
    function readHandler(){
        setRead(!read);
    }
    return(
        <div className="  h-screen overflow-hidden">
           
            <div className="p-4 z-50 bg-blue-950 flex justify-between shadow-xl">
            <h1 className="text-3xl font-bold cursor-pointer text-yellow-400 font-serif">Sakshi Parashar</h1>
            <div className="flex gap-5 text-white text-lg font-semibold cursor-pointer">               
                <NavLink to='/About' ><h2 className="hover:text-yellow-400  transition-all duration-200">About</h2></NavLink>
                <NavLink to='/Skills'><h2 className="hover:text-yellow-400  transition-all duration-200">Skills</h2></NavLink>
                <NavLink to='/Projects'><h2 className="hover:text-yellow-400  transition-all duration-200">Projects</h2></NavLink>
                <NavLink to='/Education'><h2 className="hover:text-yellow-400  transition-all duration-200">Education</h2></NavLink>
                <NavLink to='/Accomplishment'><h2 className="hover:text-yellow-400  transition-all duration-200">Accomplishment</h2></NavLink>
                <NavLink to='/Certification'><h2 className="hover:text-yellow-400  transition-all duration-200">Certification</h2></NavLink>
                <NavLink to='/Connect'><h2 className="hover:text-yellow-400  transition-all duration-200">Connect</h2></NavLink>
            </div>
            </div>

            <div className="relative bg-black h-screen p-28 flex justify-between align-baseline gap-4 items-center text-5xl font-bold font-mono overflow-hidden shadow-inner">
            <img className="drop absolute h-[700px] w-[1800px] opacity-20 top-0 left-0" src="https://media.istockphoto.com/id/1441160591/video/water-drops-video-on-black-background.jpg?s=640x640&k=20&c=EGlAb5vA9GymIGbbUJeNs_hLQWCBSUMxT2OXh2JjiSc="></img>
                <img className="h-[510px] w-[510px] " src="https://static.vecteezy.com/system/resources/previews/025/851/790/non_2x/girl-profile-face-with-closed-eyes-dotwork-tattoo-with-dots-shading-depth-illusion-tippling-tattoo-hand-drawing-emblem-on-black-background-for-body-art-sketch-monochrome-logo-illustration-vector.jpg"></img>
                <div className="flex flex-col gap-5 z-50">
                    <h2 className="text-5xl font-bold text-white font-serif">Sakshi Parashar</h2>
                                
                    <div className="text-lg text-white font-semibold">                        
                            {showpar}                        
                    </div>
                    <span className="text-lg text-yellow-500 font-semibold cursor-pointer" onClick={readHandler}>
                            {read?"Show less":"Read More"}
                    </span>
                    
                </div>
            </div>
        </div>
    )
}
export default About;