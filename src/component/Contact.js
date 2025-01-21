import { useState } from "react";
import { NavLink } from "react-router-dom"
import Again from './Again'

function Contact(){
    const detail=[
        {
            id:1,
            logo:"https://www.shutterstock.com/shutterstock/videos/1107770905/thumb/9.jpg?ip=x480",
            name:"+91 1234567890",
        },
        {
            id:2,
            logo:"https://i.pinimg.com/736x/75/6d/5e/756d5e1dd22690d94747864f306322a4.jpg",
            name:"xyz@gmail.com",
        },
        {
            id:3,
            logo:"https://www.shutterstock.com/shutterstock/videos/1105591301/thumb/10.jpg?ip=x480",
            name:"xyz123-@linkedIn",
        },
        {
            id:4,
            logo:"https://img.freepik.com/premium-photo/facebook-f-dark-night-glowing-logo-neon-light-neon-sign-neon-light-concept-editorial-image_181020-4628.jpg",
            name:"xyz_official_qwe",
        },
        {
            id:5,
            logo:"https://www.shutterstock.com/shutterstock/videos/1105507575/thumb/10.jpg?ip=x480",
            name:"_twit_xyz_abx",
        },
    ];
    const[logo,setLogo]=useState(detail);
    return(
        <div className="h-screen overflow-hidden">
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

            <Again logo={logo} setLogo={setLogo}></Again>
        </div>
    )
}

export default Contact;