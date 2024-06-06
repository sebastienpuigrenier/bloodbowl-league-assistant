import React from 'react';
import FondJoueur1 from './FondJoueur1';
import FondJoueur2 from './FondJoueur2';

const BackgroundSelection = ({
                                 couleurFond1,
                                 couleurFond2,
                                 joueur1Image,
                                 joueur2Image
                             }) => {
    const backgroundImage = '/versusImg/versusFond.png';

    return (
        <div className="background-selection">
            <div className="background-container">
                <img src={backgroundImage} alt="Background Preview" className="background-image" />
                <div className="fond-joueur1-container">
                    <FondJoueur1 color={couleurFond1} />
                </div>
                <div className="fond-joueur2-container">
                    <FondJoueur2 color={couleurFond2} />
                </div>
                <img src="/versusImg/pattern.png" alt="Pattern" className="pattern-image" />
                {joueur1Image && <img src={joueur1Image} alt="Joueur 1" className="joueur-image left" />}
                {joueur2Image && <img src={joueur2Image} alt="Joueur 2" className="joueur-image right" />}
                <img src="/versusImg/vs.png" alt="VS" className="vs-image" />
                <img src="/versusImg/bordure.png" alt="Bordure" className="bordure-image" />
            </div>
        </div>
    );
};

export default BackgroundSelection;
