import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import AboutUs from '../components/AboutUs';
import SecondHero from '../components/SecondHero';
import Footer from '../components/Footer';

const Index = () => {
    return(
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col gap-12">
                <Header />
                <Hero />
                <Featured />
                <AboutUs />
                <SecondHero />
                <Footer />
            </div>
        </section>
    )
}

export default Index;