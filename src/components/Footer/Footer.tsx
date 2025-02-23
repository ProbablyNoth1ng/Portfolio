import './Footer.scss'
import img from '../../assets/cat.gif'

const Footer = () => {
    return (
        <>
            <footer className="footer pt-20 pb-5" id='footer'>
                <div className="container mx-auto">
                    <h2 className='text-5xl text-white text-center pb-10'>LET’S WORK TOGETHER!</h2>
                    <div className='flex justify-center'><a href="mailto:android.kaplan@gmail.com" className=''><button className='cursor-pointer footer_btn text-white uppercase text-2xl font-bold' >Send an email </button></a></div>
                    <div className="flex justify-center pt-10 items-center"> 
                        <div className='mx-5'><a href="https://www.linkedin.com/in/andriikaplan"><i className="fa-brands fa-linkedin  text-5xl text-white"></i></a></div>
                        <div className='mx-5'><img src={img} alt="" className='catgif'/></div>
                        <div className='mx-5'><a href="https://github.com/ProbablyNoth1ng"><i className="fa-brands fa-github  text-5xl text-white"></i></a></div>
                    </div>
                </div>
                <div className="row mt-5"></div>
                <div className='container flex justify-center pt-5 mx-auto'>
                    <p className="text-white">© 2025 ProbablyNoth1ng. All rights reserved.</p>
                 </div>
            </footer>
        </>
    )
}

export default Footer;