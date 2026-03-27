import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import CourseOverview from '../components/sections/CourseOverview';
import ToppersSpotlight from '../components/sections/ToppersSpotlight';
import AnnouncementPopup from '../components/AnnouncementPopup';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Kranti Classes | Best Coaching for JEE, NEET & Foundation</title>
                <meta name="description" content="Kranti Classes offers expert coaching for Class 6-12, JEE, and NEET. Join us to shape your future with top results and experienced faculty." />
            </Helmet>
            <main>
                <AnnouncementPopup />
                <Hero />
                <TrustBar />
                <CourseOverview />
                <ToppersSpotlight />
            </main>
        </>
    );
};

export default Home;
