// src/components/about-section/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about-section">
            <div className="about-container">
                <h2>A propos du Créateur</h2>
                <p>Créé par : Sébastien Puigrenier</p>
                <p>pour : Fil Sanguinaire Choletais</p>
                <p>Version: 1.0.0</p>
                <h3>Patch Notes</h3>
                <ul>
                    <li>Mise en place de la section versus</li>
                    <li>Ajout des styles et animations</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
