import './Technologies.scss'
import { motion  } from "framer-motion"

const Technologies = () => {

    return (
        <>
            <div className="technologies mx-auto container py-20">
                <h2 className='text-white text-5xl text-center font-bold'>Technologies I Use </h2>
                <motion.div
                            className='   technology_blocks flex justify-center pt-10 flex-wrap  '
                            initial={{ opacity: 0,scale: 0.5 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileInView={{ opacity: 1 , scale:1  }}
                            viewport={{ once: true, amount: 0 }}
                    >
           
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">React</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">TypeScript</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">JavaScript</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">HTML</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">CSS</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Vite</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Webpack</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Tailwind</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Bootstrap</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">MongoDB</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Redux</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Firebase</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Postman</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Figma</div>
                    <div className="technology_block text-3xl uppercase font-bold text-white mx-3 mb-3 ">Github</div>   
                
                </motion.div>

            </div>
        </>
    )
}

export default Technologies;