import './About.scss'
let img = 'src/assets/ava.jpg'
const About = () => {
    return (
        <>
            <header className='header ' id='about'>
                <div className="container max-lg:flex-col  mx-auto flex justify-evenly w-full py-15">
                    <div className="text_side flex justify-center pt-5 relative lg:w-1/2">
                        <div className="wrapp">
                            <p className="title text-white text-5xl flex  font-bold items-center">Hi, I am <span className='name text-6xl uppercase'>Andrii</span></p>
                            <p className='text-5xl  title text-white font-bold flex '>Frontend Developer</p>
                            <p className="subtitle flex  mx-auto header_subtitle text-gray-300 text-2xl pt-2">I am a Frontend Developer based in Poznań, Poland. Originally from Ukraine, I specialize in building and enhancing beautiful websites. Currently, I'm looking for exciting opportunities to grow and expand my skills.</p>
                        </div>
                       
                    </div>
                    <div className="img_side lg:w-1/2 flex justify-center max-lg:pt-10 ">
                        <img src={img} alt="pfp" className='pfp max-md:w-full max-md:max-w-full max-md:h-auto'/>
                    </div>
                </div>

                    <div className="wrap relative">
                        <div className="container flex justify-between  mx-auto w-full max-lg:flex-col">
                       
                            <div className="left_part relative max-lg:w-full w-1/2 flex justify-center">
                                <div className="cv_part max-lg:relative absolute  p-10 text-center">
                                    <p className="title text-white text-4xl pb-15 font-bold">When did it all start?</p>
                                    <p className="subtitle text-2xl pb-15">
                                        I started liking web development when I was in 2nd year of high school.
                                        I started wondering how websites were created. From there, I decided
                                        what course I am going to take.
                                    </p>
                                    <a href="#cv" download="Andrii_Kaplan_CV" >
                                        <button  className='cv_btn  text-white text-2xl '>
                                         Download my CV <i className="text-white fa-solid fa-download"></i>
                                        </button> 
                                    </a>
                                </div>
                            </div>

                          
                            <div className="right_part max-lg:text-center max-lg:w-full w-1/2 py-15 max-lg:py-10">
                                <p className="title text-white font-bold text-3xl">
                                    An experienced web developer too...
                                </p>
                                <p className='max-lg:!max-w-none subtitle  text-xl pt-2'>
                                I am always eager to learn and stay updated with the latest trends and technologies in web development. I constantly seek opportunities to apply my skills, whether in my work or personal projects. For me, web development is more than just a profession—it's a mindset, a way of thinking, and a passion for solving problems. That’s why I remain deeply committed to growing as a developer.
                                </p>
                            </div>
                        </div>
                    </div>
               
            </header>
        </>
    )
}



export default About