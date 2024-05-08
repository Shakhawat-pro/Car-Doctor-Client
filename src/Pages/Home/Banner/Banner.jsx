import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div>

            {/* Slide 1 */}
            
            <div className="carousel w-full h-[600px] mt-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img5} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl  font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide2" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>

                {/* Slide 2 */}

                <div id="slide2" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img2} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide3" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>

                {/* Slide 3 */}

                <div id="slide3" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img3} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide4" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>

                {/* Slide 4 */}

                <div id="slide4" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img4} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide5" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>

                {/* Slide 5 */}

                <div id="slide5" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img1} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide6" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>

                {/* Slide 5 */}

                <div id="slide6" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative rounded-lg overflow-clip">
                        <img src={img6} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent "></div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 left-16 top-1/2">
                        <div className='space-y-8'>
                            <h2 className='text-white text-6xl max-sm:text-4xl font-bold leading-[70px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className='text-slate-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <button className='btn w-44 bg-[#FF3811] border-none text-white'>Discover More</button>
                                <button className='btn bg-transparent text-white w-44'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg></a>
                        <a href="#slide1" className="btn btn-circle opacity-75 bg-black hover:bg-[#FF3811] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;