import React from 'react';
import { User, Phone } from 'lucide-react';
import './HiddenPhase.css';

const HiddenPhase = () => {
    return (
        <section className="hidden-phase-section">
            <div className="hidden-phase-container glass-panel">
                <h2 className="encrypted-title">PHASE 03: [ENCRYPTED]</h2>

                <div className="progress-container">
                    <div className="progress-bar-wrapper">
                        <div className="progress-fill" style={{ width: '66%' }}>
                            <div className="progress-glitch"></div>
                        </div>
                    </div>
                    <div className="progress-text">
                        <span>LOADING...</span>
                        <span className="percent">66%</span>
                    </div>
                </div>

                <p className="teaser-text">
                    Final objective hidden. Clear Phase 01 & 02 to unlock.
                </p>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfcuXcn7lFSqHfIY47O9ZfjRrbsYwM6vajyVHl9AEXDKWGyeg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    <span className="cta-border-glow"></span>
                    <span className="cta-text">START NOW</span>
                </a>
            </div>

            <div className="contact-station glass-panel">
                <div className="contact-header">
                    <h3>SECURE COMM-LINK</h3>
                    <p>Contact System Coordinators for Manual Override</p>
                </div>

                <div className="coordinators-grid">
                    <div className="coord-card">
                        <User className="coord-icon" size={32} />
                        <div className="coord-details">
                            <span className="coord-name">ASWIN</span>
                            <span className="coord-phone"><Phone size={16} /> 9072239871</span>
                        </div>
                    </div>
                    <div className="coord-card">
                        <User className="coord-icon" size={32} />
                        <div className="coord-details">
                            <span className="coord-name">MEGHA</span>
                            <span className="coord-phone sys-admin">[SYS_ADMIN]</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiddenPhase;
