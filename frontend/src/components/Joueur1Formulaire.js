import React from 'react';

const Joueur1Formulaire = ({ setCouleurFond, setImage }) => {
    const handleColorChange = (e) => {
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
        <div className="joueur-formulaire left">
            <div className="color-picker-container">
                <input
                    type="color"
                    id="couleur-fond-1"
                    className="color-input"
                    onChange={handleColorChange}
                />
                <label htmlFor="image-joueur-1" className="custom-file-upload">
                    Choisir un logo
                </label>
                <input
                    type="file"
                    id="image-joueur-1"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
};

export default Joueur1Formulaire;
