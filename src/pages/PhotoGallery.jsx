import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import PG1 from '../assets/images/photogallery1.jpg';
import PG2 from '../assets/images/photogallery2.jpg';
import PG3 from '../assets/images/photogallery3.jpg';
import PG4 from '../assets/images/photogallery4.jpg';
import PG5 from '../assets/images/photogallery5.jpg';
import PG6 from '../assets/images/photogallery6.jpg';

import PG7 from '../assets/images/photogallery7.jpg';
import PG8 from '../assets/images/photogallery8.webp';
import PG9 from '../assets/images/photogallery9.jpg';
import PG10 from '../assets/images/photogallery10.jpg';
import PG11 from '../assets/images/photogallery11.jpg';
import PG12 from '../assets/images/photogallery12.jpg';


const PhotoGallery = () => {

    return(
        <section>
            <Header />
            <Breadcrumb pageName={"Photo Gallery"} />

            <div className="flex flex-col py-12 gap-12 xl:gap-24 xl:px-8 -mb-12">
            </div>

            <Footer />
        </section>
    )
}

export default PhotoGallery;