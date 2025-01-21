import { NavLink } from "react-router-dom";
import './Projects.css'

function Projects(){
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

        <div className=" relative flex  h-screen bg-black py-24 px-20 gap-20">
            <img className="absolute bottom-16 right-10 h-60" src="https://static.vecteezy.com/system/resources/thumbnails/047/618/889/original/glowing-looping-world-soil-day-harvesting-crops-from-fertile-soil-neon-frame-effect-black-background-free-video.jpg"></img>
            <img className="absolute bottom-12 left-10 h-56" src="https://img.freepik.com/premium-photo/robot-with-microphone-his-head-is-black-background_758669-47.jpg"></img>
            <img className="hello absolute bottom-24 left-60 h-56" src="https://i.pinimg.com/originals/e0/14/be/e014be3bfd3c2873af65d1664fbe0a20.png"></img>
            <div className="w-1/2 flex flex-col gap-8">
                <h2 className="text-3xl text-yellow-400 font-bold">MERN stack Web Development using Voice Assistant</h2>
                <p className="text-lg z-10 text-white font-mono text-justify">It was a group project.My role was to develop the UI of the website.In this project, we developed a website similar to the existing ChatGPT. It took prompt from the user in the form of text and voice and gave output in the form of text.  </p>
            </div>
            <div className="w-1/2 flex flex-col gap-16">
                <h2 className="text-3xl text-yellow-400 font-bold">Crop Prediction Model</h2>
                <p className="text-lg  text-white font-mono text-justify">It was a group project in which i developed the frontend of the website. We developed a website that we predict whether the soil is suitable for the cultivation of a specific crop. Also the model will tell the necessary conditions required by the crop to grow.</p>
            </div>
        </div>             
        </div>
    )
}

export default Projects;