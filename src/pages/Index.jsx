import PageShell from '../components/PageShell';
import Hero from '../components/Hero';
import ProofStrip from '../components/ProofStrip';
import Featured from '../components/Featured';
import AboutUs from '../components/AboutUs';
import SecondHero from '../components/SecondHero';

const Index = () => {
    return (
        <PageShell>
            <div className="flex flex-col gap-12">
                <Hero />
                <ProofStrip />
                <Featured />
                <AboutUs />
                <SecondHero />
            </div>
        </PageShell>
    );
};

export default Index;
