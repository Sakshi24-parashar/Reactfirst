import { NavLink } from "react-router-dom";
import './Certification.css'
function Certification(){
    return(
        <div className=" h-screen overflow-hidden">
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

            <div className=" bg-black flex justify-around gap-4 h-screen text-white text-lg p-24">
                 
               <div className="flex flex-col gap-3">           
                <h2 className="text-3xl font-bold text-yellow-500">Certifications</h2>
                <ul className="flex flex-col gap-2">
                    <li>Certification in Fundamentals of Azure by <span className="font-bold">Microsoft</span></li>
                    <li>Certification in Generative AI Professional from<span className="font-bold">  Oracle</span></li>
                </ul>
                </div>  
                <div className=" relative z-10 p-1 h-[395px] w-[395px] shadow-md shadow-white bg-gradient-to-br  from-pink-600 via-orange-400 to-purple-600">
                <div className="absolute   overflow-y-hidden h-96 w-96">
                    <div className="absolute -top-6 bg-gradient-to-t from-transparent via-white to-black h-20 w-96 z-10"></div>
                    <div className="absolute -bottom-6 bg-gradient-to-b from-transparent via-white to-black h-20 w-96 z-10"></div>
                    <img className="pic absolute h-[1250px] w-[950px] top-0"  src="https://aseanup.com/wp-content/uploads/2017/05/Indonesia-LQ45-companies-list-2s-2017.jpg"></img>
                </div>  
               </div>
            </div>

        </div>
    )
}
export default Certification;