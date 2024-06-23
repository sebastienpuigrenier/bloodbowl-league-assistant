import React, { useState } from 'react';
import Header from './components/header/Header';
import VersusSection from './components/versus-section/VersusSection';
import Navbar from './components/navbar/Navbar';
import AboutSection from './components/about-section/AboutSection';
import './css/HomePage.css';

const HomePage = () => {
    const [joueur1Image, setJoueur1Image] = useState(null);
    const [joueur2Image, setJoueur2Image] = useState(null);
    const [couleurFond1, setCouleurFond1] = useState('#ffffff');
    const [couleurFond2, setCouleurFond2] = useState('#ffffff');

    return (
        <div className="homepage">
            <Header />
            <Navbar />
            <VersusSection
                couleurFond1={couleurFond1}
                couleurFond2={couleurFond2}
                joueur1Image={joueur1Image}
                joueur2Image={joueur2Image}
                setCouleurFond1={setCouleurFond1}
                setCouleurFond2={setCouleurFond2}
                setJoueur1Image={setJoueur1Image}
                setJoueur2Image={setJoueur2Image}
            />
            <AboutSection />
        </div>
    );
};

export default HomePage;
