import Logo from './Logo'

function Again(props){
         let logo=props.logo;
         return(
            <div className='bg-black h-screen flex justify-center items-center gap-8'>
                {
                    logo.map(each=>{
                        return(<Logo {...each}></Logo>)
                    })
                }
            </div>
         )
}

export default Again;