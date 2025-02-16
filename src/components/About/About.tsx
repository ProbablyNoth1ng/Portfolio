import './About.scss'
let img = 'src/assets/ava.jpg'
const About = () => {
    return (
        <>
            <header className='header '>
                <div className="container mx-auto flex justify-evenly w-full py-15">
                    <div className="text_side flex justify-center pt-10 relative w-1/2">
                        <div className="wrapp">
                        <p className="title text-white text-5xl flex  font-bold items-center">Hi, I am <span className='name text-6xl uppercase'>Andrii</span>
</p>
<p className='text-5xl  title text-white font-bold flex '>Frontend Developer</p>
                        <p className="subtitle flex  mx-auto header_subtitle text-gray-300 text-2xl pt-5">I am a Frontend Developer from Poznan, Poland. Crafting and upgrading beautiful websites that helps your business grow online. I build things for the web.</p>
                        </div>
                       
                    </div>
                    <div className="img_side w-1/2">
                        <img src={img} alt="pfp" className='pfp'/>
                    </div>
                </div>

                                    <div className="wrap relative">
                        <div className="container flex justify-between mx-auto w-full">
                            {/* Left Section */}
                            <div className="left_part relative w-1/2 flex justify-center">
                                <div className="cv_part absolute  w-4/5 p-10 text-center">
                                    <p className="title text-white text-4xl pb-10 font-bold">When did it all start?</p>
                                    <p className="subtitle text-2xl pb-10">
                                        I started liking web development when I was in 2nd year of high school.
                                        I started wondering how websites were created. From there, I decided
                                        what course I am going to take.
                                    </p>
                                    <button onClick={() => console.log('lox')} className='cv_btn  text-white text-2xl '>
                                        Download my CV <i className="text-white fa-solid fa-download"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="right_part w-1/2 py-10">
                                <p className="title text-white font-bold text-3xl">
                                    An experienced web developer too...
                                </p>
                                <p className='subtitle text-xl'>
                                    I always keep myself updated with the latest trends and technologies in
                                    the industry. And I'm always looking for ways to apply my web development
                                    knowledge and skills in my current job or personal projects. I believe
                                    that being a web developer is not just a profession but also a mindset,
                                    a way of thinking, and problem-solving. And that's why I am still a web
                                    developer at heart.
                                </p>
                            </div>
                        </div>
                    </div>
               
            </header>
        </>
    )
}



export default About