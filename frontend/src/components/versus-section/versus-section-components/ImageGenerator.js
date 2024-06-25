import React from 'react';
import CalqueCouleurEquipe1 from './CalqueCouleurEquipe1';
import CalqueCouleurEquipe2 from './CalqueCouleurEquipe2';

export const ImageGenerator = ({
                                   couleurFond1,
                                   couleurFond2,
                                   joueur1Image,
                                   joueur2Image
                               }) => {
    const backgroundImage = `${process.env.PUBLIC_URL}/versusImg/versusFond.png`;

    return (
        <div className="image-generator-container">
            <img src={backgroundImage} alt="Background Preview" className="background-image"/>
            <div className="calque-couleur-equipe-1-container">
                <CalqueCouleurEquipe1 color={couleurFond1}/>
            </div>
            <div className="calque-equipe-2-container">
                <CalqueCouleurEquipe2 color={couleurFond2}/>
            </div>
            <img src={`${process.env.PUBLIC_URL}/versusImg/pattern.png`} alt="Pattern" className="pattern-image" />
            {joueur1Image && <img src={joueur1Image} alt="Logo 1" className="logo-image left"/>}
            {joueur2Image && <img src={joueur2Image} alt="Logo 2" className="logo-image right"/>}
            <img src={`${process.env.PUBLIC_URL}/versusImg/vs.png`} alt="VS" className="vs-image"/>
            <img src={`${process.env.PUBLIC_URL}/versusImg/bordure.png`} alt="Bordure" className="bordure-image"/>
        </div>
    );
};

export default ImageGenerator;