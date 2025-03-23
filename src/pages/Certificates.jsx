import Header from "../components/Header";
import Footer from "../components/Footer";

const Certificates = () => {
    return(
        <section>
            <Header />

            <div>
                <h2 className="font-bold text-2xl 3xl:text-3xl">Featured Products</h2>
                <div className="flex flex-row gap-2 text-primary">
                    <IoStarSharp className="size-8" />
                    <IoStarSharp className="size-8"/>
                    <IoStarSharp className="size-8"/>
                    <IoStarSharp className="size-8"/>
                    <IoStarSharp className="size-8"/>
                </div>
            </div>

            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            
            <Footer />
        </section>
    )
}

export default Certificates;