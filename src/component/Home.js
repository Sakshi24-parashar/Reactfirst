import { NavLink } from 'react-router-dom';
import './Home.css'
import { useState } from 'react';
import This from './This';

function  Home(){
    let extra=[
        {
            id:1,
            text:"Hello, so good to see you!",
            para:"I am a Web Developer with innovative and creative ideas that help organization to give a boost to their business.",
            shakal:"https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-clip-art--royalty--7.png",
            buton:"Contact Me",
        },
        {
            id:2,
            text:"Hello, so good to see you!",
            para:"I am a Web Developer with innovative and creative ideas that help organization to give a boost to their business.",
            shakal:"https://cdn.prod.website-files.com/5e8bd2ab8e48e69429cb4fd8/6266be26800e39d25a5512fa_images-7.png",
            buton:"See Skills",
        },
        {
            id:3,
            text:"Hello, so good to see you!",
            para:"I am a Web Developer with innovative and creative ideas that help organization to give a boost to their business.",
            shakal:"https://toppng.com/uploads/preview/icons2-11-orange-project-management-icons-11563137619feycdqrvy6.png",
            buton:"See Projects",
        },
    ];
    const[slide,setSlide]=useState(extra);
    

    return(
        <div className="h-screen overflow-hidden" >
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
            <div className=" relative bg-black h-screen p-28 flex flex-col align-baseline gap-4 items-center text-5xl font-bold font-mono overflow-hidden shadow-inner">
                <img className=' code  object-fill absolute bottom-0 left-0 ' src='https://wallpapers.com/images/hd/programming-hd-nutnj7cgiprbs1j2.jpg'></img>
                {/* <h2 className="move p-2 rounded-lg bg-purple-200 border-2 border-yellow-600">Know Me</h2>
                <h2 className="move p-2 rounded-lg bg-purple-200 border-2 border-yellow-600">Assess Me</h2>
                <h2 className="move p-2 rounded-lg bg-purple-200 border-2 border-yellow-600">Hire Me</h2> */}

                <This slide={slide} setSlide={setSlide}></This>
            </div>
        </div>
    );
}

export default Home;