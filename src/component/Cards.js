import Card from './Card'

function Cards(props){
    let bio=props.bio;
    let setBio=props.setBio;
    let crossHandler=props.crossHandler;
   
    return(
        <div className='grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-20 bg-black h-screen text-white py-4 px-4'>
            {
                bio.map(single=>{
                    return(<Card {...single} crossHandler={crossHandler}></Card>)
                })
            }

        </div>
    )
}

export default Cards;