import { NavLink } from "react-router-dom";

function Accomplishment(){
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
            
            <div className="relative h-screen flex flex-col gap-8 p-24 bg-black text-white text-lg">
                
                <img className="absolute z-10 top-2 right-56 h-52" src="https://i.pinimg.com/originals/3c/bd/9c/3cbd9c1b732a3d8d683b356b53b5c1c0.jpg"></img>
                <img className="absolute bottom-10 right-0" src="https://static.vecteezy.com/system/resources/thumbnails/047/616/558/small_2x/glowing-looping-valentine-day-debate-neon-frame-effect-black-background-free-video.jpg"></img>
               <div className="flex flex-col gap-4 z-10">
                <h2 className="text-3xl text-yellow-500 font-bold">Accomplishments</h2>                
                <ul className="flex flex-col gap-2">
                    <li> <h3>Cleared the<span className="font-bold"> National Defence Academy written Examination</span> in first Attempt</h3></li>
                    <li><h3>Received scholarship of 2 Lakh from <span className="font-bold">Reliance Foundation</span></h3></li>
                </ul> 
                </div> 
               <div className="flex flex-col gap-4">                                       
                <h3 className="text-2xl text-yellow-500 font-bold">Extra Curriculum</h3>
                <ul className="flex flex-col gap-2">
                    <li>2nd Position in Hindi Declamation Competition</li>
                    <li>3rd Position in English debate Competition</li>
                    <li>Participated in Inter School Hindi Poetry Competition</li>                                     
                </ul> 
                </div>               
            </div>
        </div>
    )
}
export default Accomplishment;