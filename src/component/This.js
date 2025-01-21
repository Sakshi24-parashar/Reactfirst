import { useState } from "react";
import Last from "./Last";
import './This.css'


function This(props){
    let slide=props.slide;
    const[index,setIndex]=useState(0);
    function prevHandler(){
        if((index-1)<0){
            setIndex(slide.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function nextHandler(){
        if((index+1)>=slide.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    return (
        <div className="relative text-white">
            <Last slide={slide[index]} ></Last>
            <button onClick={prevHandler} className=" absolute rounded-full h-14 w-14 bg-yellow-400  -left-16 top-28 p-4 hover:bg-white hover:text-yellow-500 transition-all duration-200">
                <i ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="size-6 left">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                </i>
            </button>
            <button onClick={nextHandler} className=" absolute rounded-full h-14 w-14 bg-yellow-400  -right-16 top-28 p-4 hover:bg-white hover:text-yellow-500 transition-all duration-200">
                <i><svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="size-6 right">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                </i>
            </button>
        </div>
    );
}
export default This;