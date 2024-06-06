import React, { useState } from 'react';
import './css/HomePage.css';
import PlayerForms from './components/PlayerForms';
import Joueur1Formulaire from './components/Joueur1Formulaire';
import Joueur2Formulaire from './components/Joueur2Formulaire';
import BackgroundSelection from './components/BackgroundSelection';

const HomePage = () => {
    const [joueur1Image, setJoueur1Image] = useState(null);
    const [joueur2Image, setJoueur2Image] = useState(null);
    const [couleurFond1, setCouleurFond1] = useState('#ffffff');
    const [couleurFond2, setCouleurFond2] = useState('#ffffff');

    return (
        <div className="homepage">
            <h1>Welcome to My One Page Website</h1>
            <div className="image-section">
                <BackgroundSelection
                    couleurFond1={couleurFond1}
                    couleurFond2={couleurFond2}
                    joueur1Image={joueur1Image}
                    joueur2Image={joueur2Image}
                />
                <div className="form-container">
                    <Joueur1Formulaire
                        setCouleurFond={setCouleurFond1}
                        setImage={setJoueur1Image}
                    />
                    <Joueur2Formulaire
                        setCouleurFond={setCouleurFond2}
                        setImage={setJoueur2Image}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
