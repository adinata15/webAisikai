import BreadcrumbImage from '../assets/images/breadcrumbimage.webp';


const Breadcrumb = () => {
    return(
        <section className='w-screen'>
            <div className='w-full h-[3rem] xl:h-[10rem] flex justify-center items-center'>
                <div className='w-full'>
                    <img src={BreadcrumbImage} alt="breadcrumb" className="w-full h-auto object-cover" />
                </div>
                <div className='absolute flex flex-col justify-center items-center gap-2'>
                    <h2 className="font-bold text-2xl 3xl:text-3xl text-white">Products</h2>
                    <div className='flex flex-row gap-2 items-center'>
                        <p className='text-white'>Your are here:</p>
                        <nav className="flex gap-2 text-white text-sm">
                            <a href="/home" className="hover:underline">Home</a>
                            <span>/</span>
                            <a href="/products" className="hover:underline">Products</a>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb;