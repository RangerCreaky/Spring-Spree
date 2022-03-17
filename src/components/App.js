import React from 'react';
import { Routes , Route } from 'react-router';

import Events from './Events';
import Gallery from './Gallery';
import Sponsors from './Sponsors';

import Navbar from './Navbar';
import LandingPage from './LandingPage';

import Faq from './Faq';

const App = ()=>{
    return (
        <> 
            <Navbar />  
            <Routes> 
                <Route path='/' exact element={<LandingPage />} />
                <Route path="/events" exact element={<Events />} />
                <Route path="/sponsors" exact element={<Sponsors />} />
                <Route path="/gallery" exact element={<Gallery />} />
                <Route path="/faq" exact element={<Faq />} />

            </Routes>

        </>
    )
}   

export default App;