import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import AboutUs from '../components/AboutUs';
import SecondHero from '../components/SecondHero';
import Footer from '../components/Footer';
import SideContact from '../components/SideContact';

const Index = () => {
    return(
        <section className="font-primary m-0 p-0 box-border">
            <div className="relative flex flex-col gap-12">
                <SideContact className="absolute"/>
                <div className="-mt-12">
                    <Header />
                </div>
                
                <Hero />
                <Featured />
                <AboutUs />
                <SecondHero />
                <div className='-mt-12'>
                    <Footer/>
                </div>
                
            </div>
        </section>
    )
}

export default Index;