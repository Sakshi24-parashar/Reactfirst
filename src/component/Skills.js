import { NavLink } from "react-router-dom";
import './Skills.css'

function Skills(){
    return(
        <div className="h-screen  overflow-hidden">
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
            <div className="relative flex justify-around h-screen bg-black  py-24">
                <img className="absolute bottom-20 left-12 rounded-full h-56" src="https://img.freepik.com/premium-photo/modern-laptop-computer-tabl-black-background_180633-4675.jpg?w=360"></img>
                <img className="absolute bottom-24 right-12 h-72 w-96 " src="https://static4.depositphotos.com/1007566/491/i/450/depositphotos_4913148-stock-photo-teamwork-chrome-word-black-background.jpg"></img>
                <img className="absolute arrow h-28 top-32 left-[580px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYc3DYlX0PJ3XwG141cBSnQ1JLmVAuo4gY8BKaAoRc883KSw6TEVRCljqyZekfql42B4I&usqp=CAU"></img>
                <div className="z-50">
                    <h2 className="text-4xl font-bold font-serif text-yellow-500">Technical Skills</h2>
                    <h3 className="text-xl text-white font-semibold">Web Development with<span className="font-bold"> MERN </span>stack</h3>
                    <h3 className="text-xl text-white font-semibold">C++</h3>
                    <h3 className="text-xl text-white font-semibold">Python</h3>
                    <h3 className="text-xl text-white font-semibold">Data Structures And Algorithm</h3>
                    <h3 className="text-xl text-white font-semibold">Familiar with SQL</h3>
                    <h3 className="text-xl text-white font-semibold">Familiar with Machine Learning</h3>
                </div>
                <div className="z-50">
                <h2 className="text-4xl font-bold font-serif text-yellow-500">Soft Skills</h2>
                <h3 className="text-xl text-white font-semibold">Leadership Qualities</h3>
                <h3 className="text-xl text-white font-semibold">Time Management</h3>
                <h3 className="text-xl text-white font-semibold">Event Planning</h3>
                <h3 className="text-xl text-white font-semibold">Problem Solving</h3>
                <h3 className="text-xl text-white font-semibold">Active Listening</h3>
                <h3 className="text-xl text-white font-semibold">Adaptability and feasibility</h3>
                </div>

            </div>
        </div>
    )
}

export default Skills;