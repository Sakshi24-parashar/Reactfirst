import { NavLink } from "react-router-dom";
import './Education.css'

function Education(){
    return(
        <div className="h-screen overflow-hidden">
            
            <div className="p-4 z-10 bg-blue-950 flex justify-between shadow-xl ">
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

            <div className="relative flex justify-around bg-black h-screen py-24 px-24"> 
                <img className=" star1 absolute top-5 left-10 h-20" src="https://img.freepik.com/premium-vector/shining-blue-stars-isolated-black-background-star-burst-with-brilliance-glow-effect_370567-3373.jpg"></img>
                <img className=" star1 absolute top-3 right-3 h-20" src="https://static.vecteezy.com/system/resources/thumbnails/001/913/492/small/abstract-blue-light-in-black-background-free-video.jpg"></img>
                <img className=" star1 absolute top-20 right-52 h-20" src="https://img.freepik.com/premium-vector/shining-golden-stars-isolated-black-background-star-burst-with-brilliance-glow-effect_370567-3189.jpg"></img>
                <img  className=" star1 absolute top-3 right-[540px] h-20"  src="https://i.pinimg.com/474x/fc/97/62/fc97624e9d6b4afc2337de86f9059bd9.jpg"></img>
                <img className=" star1 absolute top-20 left-96 h-20" src="https://img.freepik.com/premium-vector/shining-golden-stars-isolated-black-background-star-burst-with-brilliance-glow-effect_370567-3189.jpg"></img>
                <img  className=" star1 absolute -top-0 left-52 h-20"  src="https://i.pinimg.com/474x/fc/97/62/fc97624e9d6b4afc2337de86f9059bd9.jpg"></img>
                <img className="absolute -bottom-12 left-16 h-[480px]" src="https://i.pinimg.com/736x/a8/f0/03/a8f00344dd557563e9591d84fb1b1f51.jpg"></img>
                <img className="absolute bottom-6 left-[480px] h-72" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwjBoesmnmHkGMLtW50JQdkF0zEQhJHfrKDjkUXum5T9lWi64XEDElhxtbPDxRtljz8I&usqp=CAU"></img>
                <img className="absolute right-24 bottom-16 h-72" src="https://img.freepik.com/premium-photo/stack-books-black-background-back-school-education-concept-generative-ai_128711-6000.jpg"></img>
                <div className="w-1/3 flex flex-col gap-4 z-10">
                    <h2 className="text-yellow-500 text-lg font-semibold">Bachelor of Engineering, AIML</h2>
                    <h2 className="text-white text-lg">Expected in 05/2024</h2>
                    <h2 className="text-white text-lg"><span className="font-bold text-yellow-300">Chandigarh University</span>,Mohali,Punjab</h2>
                    <h2 className="text-white text-lg ">Current CGPA-<span className="font-bold text-yellow-300">8.71</span></h2>
                </div>
                <div  className="w-1/3  flex flex-col gap-4 z-10">
                    <h2 className="text-yellow-500 text-lg font-semibold">12th, PCM</h2>
                    <h2 className="text-white text-lg">06/2022</h2>
                    <h2 className="text-white text-lg"><span className="font-bold text-yellow-300">Army Public School</span>,Hisar Cantt,Haryana</h2>
                    <p className="text-white text-lg">Received a smartwatch and certificate of aprreciation for securing <span className="font-bold text-yellow-300">95.4%</span> in CBSE board.</p>
                </div>
                <div  className="w-1/3 flex flex-col gap-4 z-10">
                    <h2 className="text-yellow-500 text-lg font-semibold">10th</h2>
                    <h2 className="text-white text-lg">05/2020</h2>
                    <h2 className="text-white text-lg"><span className="font-bold text-yellow-300">Army Public School</span>,Hisar Cantt,Haryana</h2>
                    <p className="text-white text-lg">Received cashprice of Rs 7500 , Rs 5000 and a tablet for securing <span  className="font-bold text-yellow-300">97%</span> in CBSE board.</p>
                </div>
            </div>

        </div>
    )
}

export default Education;