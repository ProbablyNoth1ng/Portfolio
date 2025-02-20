import { useEffect, useState } from 'react'
import './Nav.scss'

const Nav = () => {
    const [clicked, setClicked] = useState<Boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    function updateMenu(){
        setClicked(!clicked)
        let currentState = !clicked
        if(currentState) {
            document.body.classList.add('lock')
        } else {
            document.body.classList.remove('lock')
        }
    }


    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
            window.addEventListener("resize",handleResize)
            return () => window.removeEventListener('resize',handleResize)
    },[])
    return (
        <>
        
        {windowWidth > 768 ? 
                <nav className='nav '>
                <div className="container flex justify-between py-8 mx-auto items-center ">
                    <div className="logo text-3xl text-white font-bold">
                        ProbablyNoth1ng
                    </div>
                    <ul className="links flex">
                        <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#about" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> About</a></li>
                        <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#projects" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Projects</a></li>
                        <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#footer" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Contact</a></li>
                    </ul>
                    <div className="socials">
                    <a href="#cv" download="Andrii_Kaplan_CV" className='resume'>
                        <button  className=' text-xl nav_button text-white uppercase font-bold'>
                        Resume
                        </button> 
                    </a>
                    </div>
                </div>
                
            </nav>
         : (
            <div className={` bg `}>
            <nav className='nav  flex justify-between py-6 mx-auto items-center' >
                <div className=" nav__inner">
                    <div className="logo text-3xl text-white font-bold">
                        ProbablyNoth1ng
                    </div>
             
                
                    <div className={`links__body ${clicked ? 'opened' : ''}`}>
                        <ul className='links flex '>
                            <li className="link px-3 text-2xl text-white font-medium uppercase " onClick={updateMenu}><a href="#about" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> About</a></li>
                            <li className="link px-3 text-2xl text-white font-medium uppercase " onClick={updateMenu}><a href="#projects" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Projects</a></li>
                            <li className="link px-3 text-2xl text-white font-medium uppercase " onClick={updateMenu}><a href="#footer" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Contact</a></li>
                        </ul>
                    </div>
    

                    <div className={`burger_Menu ${clicked ? 'opened' : ''}` } onClick={updateMenu}>
                        <span></span>
                    </div>
                </div>
               
           </nav> 
        </div>
         )
           
        }
        </>

       
            
  
    )
}


export default Nav



// {
//     window.innerWidth > 768  ? {
//         <>
                
//         </>
//     }  : {
//         <> 
       
 
//         </>
//     }
// }
