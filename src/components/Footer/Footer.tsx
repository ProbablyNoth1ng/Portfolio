import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer py-20" id='footer'>
                <div className="container mx-auto">
                    <h2 className='text-5xl text-white text-center pb-10'>LET’S WORK TOGETHER!</h2>
                    <div className='flex justify-center'><a href="mailto:android.kaplan@gmail.com" className=''><button className='cursor-pointer footer_btn text-white uppercase text-2xl font-bold' >Send an email </button></a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer;