import './Technologies.scss'

const Technologies = () => {

    const handleClickOnBlock = (techName:string) => {

    } 

    return (
        <>
            <div className="technologies mx-auto container py-20">
                <h2 className='text-white text-5xl text-center font-bold'>Technologies I Use </h2>
                <div className="technology_blocks flex justify-center pt-10 flex-wrap">
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
                    
                </div>
             
            </div>
        </>
    )
}

export default Technologies;