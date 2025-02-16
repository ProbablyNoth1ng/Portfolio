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
                    <li className="link px-3 text-2xl text-white">Home</li>
                    <li className="link px-3 text-2xl text-white">Projects</li>
                    <li className="link px-3 text-2xl text-white">Contacts</li>
                </ul>
                <div className="socials">
                    <i className="fa-brands fa-linkedin px-2 text-2xl text-white"></i>
                    <i className="fa-brands fa-github px-2 text-2xl text-white"></i>
                    <i className="fa-solid fa-envelope px-2 text-2xl text-white"></i>
                </div>
            </div>
            
        </nav>
        </>
    )
}


export default Nav