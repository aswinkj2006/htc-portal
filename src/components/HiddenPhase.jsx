import React from 'react';
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

            <footer className="portal-footer">
                <p>SYSTEM COORDINATORS:</p>
                <div className="coordinators">
                    <span className="coord-name">ASWIN <span className="coord-contact">(9072239871)</span></span>
                    <span className="coord-divider"> // </span>
                    <span className="coord-name">MEGHA</span>
                </div>
            </footer>
        </section>
    );
};

export default HiddenPhase;
