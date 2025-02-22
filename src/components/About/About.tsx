import './About.scss'
import img from '../../assets/ava.jpg'

import { motion  } from "framer-motion"
const About = () => {


    return (
        <>
        
            <header className='header ' id='about'>
        
                <div className="container mx-auto w-full flex justify-evenly max-lg:flex-col py-15">
                <motion.div
                        className='   text_side flex justify-center pt-5 relative lg:w-1/2   '
                       initial={{ opacity: 0, x:-300 ,scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, x: 0, scale:1  }}
                        viewport={{ once: true, amount: 0 }}
               >
            
                        <div className="wrapp">
                            <p className="title text-white text-5xl max-sm:text-3xl max-[375px]:text-2xl! flex  font-bold items-center">Hi, I am <span className='name  text-6xl max-sm:text-5xl max-[375px]:text-4xl! uppercase'>Andrii</span></p>
                            <p className='text-5xl max-sm:text-3xl max-[375px]:text-2xl! title text-white font-bold flex   '>Frontend Developer</p>
                            <p className="subtitle flex  mx-auto header_subtitle text-gray-300  text-2xl max-sm:text-lg max-xs:text-base pt-2 ">I am a Frontend Developer based in Poznań, Poland. Originally from Ukraine, I specialize in building and enhancing beautiful websites. Currently, I'm looking for exciting opportunities to grow and expand my skills.</p>
                        </div>
                       
             
            </motion.div>

                <motion.div
                            className='   img_side lg:w-1/2 flex justify-center max-lg:pt-10  '
                            initial={{ opacity: 0, x:300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                >
                  
                        <img src={img} alt="pfp" className='pfp max-md:w-full max-md:max-w-full max-md:h-auto'/>
                    
                </motion.div>
                </div>

                    <div className="wrap relative">
                        <div className="container flex justify-between  mx-auto w-full max-lg:flex-col">
                       
                        <motion.div
                            className='   left_part relative max-lg:w-full w-1/2 flex justify-center flex justify-center '
                            initial={{ opacity: 0, y:200 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, y: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                        >
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
                           
                        </motion.div>

                        <motion.div
                            className='   right_part max-lg:text-center max-lg:w-full w-1/2 py-15 max-lg:py-10  '
                            initial={{ opacity: 0, y:100 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, y: 0, scale:1  }}
                            viewport={{ once: true, amount:  0}}
                         >
                           
                                <p className="title text-white font-bold text-3xl">
                                    An experienced web developer too...
                                </p>
                                <p className='max-lg:!max-w-none subtitle  text-xl pt-2'>
                                I am always eager to learn and stay updated with the latest trends and technologies in web development. I constantly seek opportunities to apply my skills, whether in my work or personal projects. For me, web development is more than just a profession—it's a mindset, a way of thinking, and a passion for solving problems. That’s why I remain deeply committed to growing as a developer.
                                </p>
                       
                            </motion.div>
                        </div>
                    </div>
               
            </header>
        </>
    )
}



export default About