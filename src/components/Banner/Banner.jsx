import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div
                className=""
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundSize: '100% 100%'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content text-center w-full lg:h-[600px] md:h-[400px] h-[300px] flex justify-center items-center">
                    <div className="w-full lg:w-[60%]">
                        <h1 className="mb-5 text-xl md:text-[30px] lg:text-[52px] text-white font-bold lg:leading-[50px]">Discover an exceptional cooking class <br /> tailored for you!</h1>
                        <p className="mb-5 text-sm md:text-base lg:text-lg text-white font-normal">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex gap-4 justify-center'>
                        <button className="btn btn-primary bg-[#0BE58A] text-black rounded-full border border-solid border-white">Get Started</button>
                        <button className="btn btn-primary bg-transparent text-white rounded-full border border-solid border-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;