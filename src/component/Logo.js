import React,{ useState } from "react";

function Logo({id,logo,name}){
    const[shows,setShows]=useState(false);
    function clickHandler(){
        setShows(!shows);
    }
    return(
        <div>
            <img onClick={clickHandler} className="h-28 w-36 cursor-pointer" src={logo} alt={name}></img>
            <span className="text-lg text-yellow-200 font-semibold">
                {
                    shows?name:""
                }
            </span>

        </div>
    )
}
export default Logo;