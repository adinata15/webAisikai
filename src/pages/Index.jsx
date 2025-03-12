import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';

const Index = () => {
    return(
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col gap-12">
                <Header />
                <Hero />
                <Featured />
            </div>
        </section>
    )
}

export default Index;