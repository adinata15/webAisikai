import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const SideContact = () => {
    return(
        <div>
            <div className="xl:hidden">
                <div className='fixed z-20 flex items-end bottom-0 w-full'>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='bg-primary size-18 flex justify-center items-center w-50'>
                            <a href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai">
                                <RiWhatsappFill className='text-white size-10'/>
                            </a>
                        </div>

                        <div className="h-full border-[0.1rem] border-white bg-white"></div>

                        <div className='bg-primary size-18 flex justify-center items-center w-50'>
                            <a href="mailto:detapowergensetindonesia@gmail.com">
                                <MdEmail className='text-white size-10'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden xl:flex">
                <div className='min-h-screen fixed z-20 flex items-center right-0'>
                    <div className='flex flex-col gap-[0.1rem]'>
                        <div className='bg-primary size-16 flex justify-center items-center'>
                            <a href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai">
                                <RiWhatsappFill className='text-white size-10'/>
                            </a>
                        </div>
                        <div className='bg-primary size-16 flex justify-center items-center'>
                            <a href="mailto:detapowergensetindonesia@gmail.com">
                                <MdEmail className='text-white size-10'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideContact;