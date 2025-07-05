import './Showcase.scss'
import { motion  } from "framer-motion"

import extensionImage from  '../../assets/extension.png'
import quizImage from  '../../assets/quiz.png'
import todoImage from  '../../assets/todo.png'
import discordCheckerImage from  '../../assets/discordChecker.png'
import bjornImage from  '../../assets/bjorn.png'
import solarImage from  '../../assets/solar.png'
import burndImage from  '../../assets/burnd.png'
import bankruptImage from  '../../assets/bankrupt.png'



const Showcase = () => {
    return (
        <>
            <div className='showcase py-20' id='projects'>
                <h2 className='text-white text-5xl font-bold text-center pb-10'>Projects</h2>
                <div className="container mx-auto flex justify-center flex-wrap " >
                    

                    <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:-300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={bankruptImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Bankrupt</h3>
                            <p className="subtitle text-xl pb-5">This project represents a demo version of a banking application. It showcases modern frontend technologies such as React and TypeScript, including data fetching, form handling, and frontend architecture. </p>
                            <div className="stack flex flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">TypeScript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Tailwind</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Postman</div>
                                <div className="stack_crumb text-white mr-2 mb-2">REST</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/GormanProg123/Bankrupt" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                    
                    </motion.div>

                    <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:-300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={extensionImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">NoDistractionsYT</h3>
                            <p className="subtitle text-xl pb-5">A chrome extension that prevents user wasting time on Youtube</p>
                            <div className="stack flex flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">TypeScript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/NoDistractionsYT" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                    
                    </motion.div>


                     <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={quizImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text   rounded-lg">
                                <h3 className="title text-white text-3xl font-bold pb-1">Quiz-app</h3>
                                <p className="subtitle text-xl pb-5">A quiz application that integrates with an external API to fetch questions and validate user responses </p>
                                <div className="stack flex flex-wrap pb-5">
                                    <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                    <div className="stack_crumb text-white mr-2 mb-2">TypeScript</div>
                                    <div className="stack_crumb text-white mr-2 mb-2">Redux</div>
                                    <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                    <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                    <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                                </div>
                                <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/Quiz-app" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                    </motion.div>

                    <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:-300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={todoImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Todo</h3>
                            <p className="subtitle text-xl pb-5">CRUD Todo list </p>
                            <div className="stack flex pb-5 flex-wrap">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">TypeScript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Redux</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Postman</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/todo" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                    </motion.div>
                    

                    <motion.div
                            className='   showcase_block m-3 q  '
                            initial={{ opacity: 0, x:300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={solarImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Solar system</h3>
                            <p className="subtitle text-xl pb-5">A 3D interactive recreation of our solar system built with Three.js, React, and TypeScript. Explore celestial bodies with realistic motion and visuals. </p>
                            <div className="stack flex flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">TypeScript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Three.js</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/Solar-system" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                        
                    </motion.div>


                    <motion.div
                            className='   showcase_block m-3 q  '
                            initial={{ opacity: 0, x:-300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={discordCheckerImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Discord checker</h3>
                            <p className="subtitle text-xl pb-5">An application that uses OAuth2 login to securely fetch and display all your Discord data, allowing you to view your servers and account details in one place.</p>
                            <div className="stack flex flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Javascript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/discord-checker" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                        
                    </motion.div>

                    <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={bjornImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Bjorn</h3>
                            <p className="subtitle text-xl pb-5">Freelance project based on react, javascript and vite</p>
                            <div className="stack flex  flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Javascript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Express</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/bjorn" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>
                    </motion.div>


                    <motion.div
                            className='   showcase_block m-3  '
                            initial={{ opacity: 0, x:-300 ,scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, x: 0, scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
                        <img src={burndImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-tl-lgrounded-tr-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">Burnd</h3>
                            <p className="subtitle text-xl pb-5">Copy of cool website, based on react, javascript and vite</p>
                            <div className="stack flex  flex-wrap pb-5">
                                <div className="stack_crumb text-white mr-2 mb-2">React</div>
                                <div className="stack_crumb text-white mr-2 mb-2">Javascript</div>
                                <div className="stack_crumb text-white mr-2 mb-2">HTML</div>
                                <div className="stack_crumb text-white mr-2 mb-2">SASS</div>
                                <div className="stack_crumb text-white mr-2 mb-2">VITE</div>
                            </div>
                            <span className='text-white '><a href="https://burnd.vercel.app/" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='no-underline hover:underline hover:decoration-[#FF0653] transition duration-300'> View on Github</span></a> </span>
                        </div>  
                    </motion.div>

                </div>
            </div>
        </>
    )
}


export default Showcase;