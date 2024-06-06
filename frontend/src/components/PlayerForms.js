import React from 'react';
import Joueur1Formulaire from './Joueur1Formulaire';
import Joueur2Formulaire from './Joueur2Formulaire';

const PlayerForms = ({ setCouleurFond1, setCouleurFond2, setJoueur1Image, setJoueur2Image }) => {
    return (
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
    );
};

export default PlayerForms;
