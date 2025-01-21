import { useState } from "react";
import { NavLink ,Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";


function Navbar(){
    const[data,setData]=useState({uname:"",pass:""});
    function Changehandler(event){
        const {name,value,type}=event.target;
        setData(prevdata=>{
            return{
                ...prevdata,
                [name]:value
            }
        })
    }
    const navigate=useNavigate();  
    function submitHandler(event){
        event.preventDefault();
             
        let lengths=data.pass;
        let name=data.uname;
        const char=['~','!','@','#','$','%','^','&','*','(',')','-','+','=','{','}','[',']','|','<','>','?','/',',','`',':',';','"']
        let flag=0;
        for(let a of name){
            for(let b of char){
                if(a===b){
                    flag=1;
                }
            }
        }
        if(flag===1){
            alert("Username cannot include special characters");
        }
        else{
        if((name.length)<1){
            alert("Username cannot be empty");
        }
        else if((name.length)<5){
            alert("Username should be atleast 5 characters");
        }
        else{

        if((lengths.length)<6 ){
            alert("Password should be atleast of 6 characters.");
        }
        else{
            navigate("/Home");
        }
        }
       
        }
    }
    return(
        <div className="h-screen bg-blue-950 flex flex-col items-center gap-7 justify-center">   
           <h1 className="text-5xl font-bold text-white font-serif">WELCOME</h1>   
           <form onSubmit={submitHandler} className="flex flex-col gap-4 bg-slate-300 rounded-lg shadow-2xl p-10">
            <input className="h-12 w-72 p-2 text-lg font-semibold  bg-slate-500 border-2 border-slate-600 rounded-lg" type="text" id='uname' name="uname" value={data.uname} onChange={Changehandler} placeholder="UserName"></input>
            <input className="h-12 w-72 p-2 text-lg font-semibold bg-slate-500 border-2 border-slate-600 rounded-lg" type="password" id="pass" name="pass" value={data.pass} onChange={Changehandler} placeholder="Password"></input>
            <button className=" mx-16 text-lg font-semibold text-slate-900  h-12 w-40 bg-yellow-500 rounded-lg hover:text-white hover:bg-blue-950 border-2 border-yellow-500 hover:border-black transition-all duration-200 ">Submit</button>
           </form>
        </div>
    );
}

export default Navbar;