import React, { useState } from 'react';

const Equipe2Formulaire = ({ setCouleurFond, setImage }) => {
    const [colorText, setColorText] = useState('#ffffff');

    const handleColorChange = (e) => {
        setColorText(e.target.value);
        setCouleurFond(e.target.value);
    };

    const handleColorTextChange = (e) => {
        setColorText(e.target.value);
        setCouleurFond(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="equipe-formulaire right">
            <div className="color-picker-container right">
                <input
                    type="color"
                    id="couleur-fond-2"
                    className="color-input"
                    value={colorText}
                    onChange={handleColorChange}
                />
                <input
                    type="text"
                    id="couleur-text-2"
                    className="color-text-input"
                    value={colorText}
                    onChange={handleColorTextChange}
                />
            </div>
            <div className="logo-upload-container">
                <label htmlFor="image-joueur-2" className="custom-file-upload lined thin">
                    Choisir un logo
                </label>
                <input
                    type="file"
                    id="image-joueur-2"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
};

export default Equipe2Formulaire;
