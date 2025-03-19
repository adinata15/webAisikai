import BreadcrumbImage from '../assets/images/breadcrumbimage.webp';

const Breadcrumb = () => {
    return(
        <section className='w-full'>
            <div className='py-2 flex flex-col justify-center items-center bg-cover bg-center'
                style={{backgroundImage: `url(${BreadcrumbImage})` }}>
                    <h3 className='font-bold text-2xl text-white'>Products</h3>
                    <div className='flex gap-2'>
                        <a href='/home' className='text-white'>Home</a>
                        <span className='text-white'>/</span>
                        <a href='/products' className='text-white'>Products</a>
                    </div>
            </div>
        </section>
    )
}

export default Breadcrumb;