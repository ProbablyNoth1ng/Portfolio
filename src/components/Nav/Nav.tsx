import './Nav.scss'


const Nav = () => {
    return (
        <>
        <nav className='nav '>
            <div className="container flex justify-between py-8 mx-auto items-center ">
                <div className="logo text-4xl text-white font-bold">
                    ProbablyNoth1ng
                </div>
                <ul className="links flex">
                     <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#about" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> About</a></li>
                    <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#projects" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Projects</a></li>
                    <li className="link px-3 text-2xl text-white font-medium uppercase "><a href="#footer" className='after:block after:w-0 after:h-[2px] after:bg-[#FF0653] after:transition-all after:duration-300 hover:after:w-full'> Contact</a></li>
                </ul>
                <div className="socials">
                   <a href="" className="resume"><button className='nav_button text-white uppercase font-bold '>Resume</button></a>
                </div>
            </div>
            
        </nav>
        </>
    )
}


export default Nav