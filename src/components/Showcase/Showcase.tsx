import './Showcase.scss'
const extensionImage = 'src/assets/extension.png'
const Showcase = () => {
    return (
        <>
            <div className='showcase py-20'>
                <h2 className='text-white text-5xl font-bold text-center pb-10'>Projects</h2>
                <div className="container mx-auto flex justify-center flex-wrap ">
                    
                    <div className="showcase_block m-3">
                        <img src={extensionImage} alt="" className='showcase_img w-full max-w-full h-auto rounded-lg shadow-md'/>
                        <div className="showcase_text">
                            <h3 className="title text-white text-3xl pb-1 font-bold">NoDistractionsYT</h3>
                            <p className="subtitle text-xl pb-2">A chrome extension that prevents user wasting time on Youtube</p>
                            <div className="stack flex pb-5">
                                <div className="stack_crumb text-white mr-2">React</div>
                                <div className="stack_crumb text-white mr-2">Javascript</div>
                                <div className="stack_crumb text-white mr-2">TypeScript</div>
                            </div>
                            <span className='text-white '><a href="https://github.com/ProbablyNoth1ng/NoDistractionsYT" className=''><i className="fa-brands fa-github px-2 text-2xl text-white"></i> <span className='hover:underline'> View on Github</span></a> </span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}


export default Showcase;