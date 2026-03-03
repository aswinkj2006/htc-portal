import React, { useState, useEffect } from 'react';
import './CommandHeader.css';

const CommandHeader = () => {
    const [blinkVisible, setBlinkVisible] = useState(true);

    // Terminal cursor blinking effect for status
    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkVisible(v => !v);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="command-header">
            <div className="title-wrapper">
                <h1 className="main-title" data-text="HUNT THE CODE">
                    HUNT THE CODE
                </h1>
                <div className="title-scanline"></div>
            </div>

            <p className="tagline">Find It. Fix It. Finish It.</p>

            <div className="status-readout">
                <span className="status-bracket">[</span>
                <span className="status-text online">
                    STATUS: SYSTEM ONLINE
                </span>
                <span className="status-cursor" style={{ opacity: blinkVisible ? 1 : 0 }}>_</span>
                <span className="status-bracket">]</span>
            </div>
        </header>
    );
};

export default CommandHeader;
