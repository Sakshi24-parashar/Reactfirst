import { useNavigate } from "react-router-dom";

function Last(props){
    let navigate=useNavigate();
    let slide=props.slide;   
    function gotoHandler(){
        if(slide.id===1){
             navigate('/Contact');
        }
        else if(slide.id===2){
            navigate('/Skills')
        }
        else{
            navigate('/Projects');
        }
    } 
    return(
        <div className="relative text-lg flex gap-20 p-5 justify-around font-semibold z-10 bg-slate-500  h-80 rounded-2xl w-[550px]">
            <div className="flex flex-col w-2/3 gap-2">
                <h2 className="text-2xl font-bold text-yellow-200">{slide.text}</h2>
                <p className="text-lg font-normal font-mono">{slide.para}</p>
                <button onClick={gotoHandler} className="h-10 w-36 bg-yellow-500 text-white text-lg font-bold rounded-lg hover:bg-white hover:text-yellow-500 transition-all duration-200">{slide.buton}</button>
            </div>
            <div className="w-1/3 py-8 ">
                <img className="h-36 w-96 rounded-full" src={slide.shakal} alt="text"></img>
            </div>
            
        </div>
    )
}
export default Last;