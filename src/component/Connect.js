import { NavLink } from "react-router-dom";
import Cards from './Cards'
import { useState } from "react";

function Connect(){
    const data=[
        {
            id:1,
            role:"Web Developer",
            image:"https://p7.hiclipart.com/preview/683/171/756/christian-cross-symbol-computer-icons-american-red-cross-christian-cross-thumbnail.jpg",
            tool:"ReactJS,Tailwind,MongoDB,NodeJS",
            work:"Work From Home",
        },
        {
            id:2,
            role:"Web Developer",
            image:"https://p7.hiclipart.com/preview/683/171/756/christian-cross-symbol-computer-icons-american-red-cross-christian-cross-thumbnail.jpg",
            tool:"ReactJS,Tailwind,MongoDB,NodeJS",
            work:"Work From Office",
        },
        {
            id:3,
            role:"Data Analyst",
            image:"https://p7.hiclipart.com/preview/683/171/756/christian-cross-symbol-computer-icons-american-red-cross-christian-cross-thumbnail.jpg",
            tool:"Pandas,Numpy,Scikit",
            work:"Work From Home",
        },
        {
            id:4,
            role:"Data Analyst",
            image:"https://p7.hiclipart.com/preview/683/171/756/christian-cross-symbol-computer-icons-american-red-cross-christian-cross-thumbnail.jpg",
            tool:"Pandas,Numpy,Scikit",
            work:"Work From Office",
        },
        {
            id:5,
            role:"Any Other",
            image:"https://p7.hiclipart.com/preview/683/171/756/christian-cross-symbol-computer-icons-american-red-cross-christian-cross-thumbnail.jpg",
            tool:"",
            work:"Work From Home/Office",
        },
    ];
    const[bio,setBio]=useState(data);
    function crossHandler(id){
        let newbio=bio.filter(single=>single.id!==id);
        setBio(newbio);
    }
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

            <Cards bio={bio} setBio={setBio} crossHandler={crossHandler}></Cards>
        </div>
    )
}
export default Connect;