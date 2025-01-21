import { useNavigate } from "react-router-dom";

function Card({id,role,image,tool,work,crossHandler}){
    let navigate=useNavigate();
    function selectHandler(){
        navigate('/Contact');
    }
    
    return(
        <div className="relative flex flex-col gap-1 rounded-xl bg-slate-900 h-52 p-6 w-96">
            <h2 className="text-2xl text-yellow-400 font-bold">{role}</h2>
            <i onClick={()=>crossHandler(id)} className="absolute top-5 right-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </i>
            <h2 className="text-lg font-semibold">{tool}</h2>
            <h3  className="text-lg">{work}</h3>
            <button onClick={selectHandler} className=" absolute bottom-5 h-10 w-24 bg-yellow-500 rounded-lg text-white text-lg font-semibold hover:bg-white hover:text-yellow-500 transition-all duration-200">Select</button>

        </div>
    )
}

export default Card;