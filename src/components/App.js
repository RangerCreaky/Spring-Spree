import React from 'react';
import { Routes , Route } from 'react-router';

import Events from './Events';
import Gallery from './Gallery';
import Sponsors from './Sponsors';

import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Explore from './Explore';
import FAQ from './Faq';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const App = ()=>{
    return (
        <> 
            <Navbar />  
            <Routes> 
                <Route path='/' exact element={<LandingPage />} />
                <Route path="/events" exact element={<Events />} />
                <Route path="/sponsors" exact element={<Sponsors />} />
                <Route path="/gallery" exact element={<Gallery />} />
                <Route path="/explore" exact element={<Explore />} />
                <Route path="/faq" exact element={<FAQ />} />
            </Routes>

        </>
    )
}   

export default App;