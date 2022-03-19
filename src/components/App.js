import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Explore from './Explore';
import FAQ from './Faq';
import Sponsors from './Sponsors';
import Event from './Events';
import Gallery from './Gallery';

import SolarBg from './SolarBg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route } from 'react-router-dom';


AOS.init();
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<LandingPage />} />
                <Route path="/events" exact element={<Event />} />
                <Route path="/sponsors" exact element={<Sponsors />} />
                <Route path="/gallery" exact element={<Gallery />} />
                <Route path="/explore" exact element={<Explore />} />
                <Route path="/faq" exact element={<FAQ />} />
            </Routes>

        </>
    )
}

export default App;
