import React from 'react';
import {ImageGenerator} from './versus-section-components/ImageGenerator';
import Equipe1Formulaire from './versus-section-components/Equipe1Formulaire';
import Equipe2Formulaire from './versus-section-components/Equipe2Formulaire';
import ImageMerger from './versus-section-components/ImageMerger';

import './VersusSection.css';

const VersusSection = ({
                           couleurFond1,
                           couleurFond2,
                           joueur1Image,
                           joueur2Image,
                           setCouleurFond1,
                           setCouleurFond2,
                           setJoueur1Image,
                           setJoueur2Image
                       }) => {
    return (
        <section className="versus-section">
            <div className="versus-container">
                <ImageGenerator
                    couleurFond1={couleurFond1}
                    couleurFond2={couleurFond2}
                    joueur1Image={joueur1Image}
                    joueur2Image={joueur2Image}
                />
                <div className="form-container">
                    <Equipe1Formulaire
                        setCouleurFond={setCouleurFond1}
                        setImage={setJoueur1Image}
                    />
                    <Equipe2Formulaire
                        setCouleurFond={setCouleurFond2}
                        setImage={setJoueur2Image}
                    />
                </div>
                <ImageMerger
                    couleurFond1={couleurFond1}
                    couleurFond2={couleurFond2}
                    joueur1Image={joueur1Image}
                    joueur2Image={joueur2Image}
                />
            </div>
        </section>
    );
};

export default VersusSection;
