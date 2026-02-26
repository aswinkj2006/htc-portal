import React from 'react';
import './CircuitBackground.css';

const CircuitBackground = () => {
    return (
        <div className="circuit-background">
            {/* SVG Container overlaying a dark purple gradient background */}
            <svg className="circuit-pattern" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Diagonal Hex Base Grid subtly in background */}
                        <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="rgba(74, 14, 149, 0.1)" strokeWidth="0.5" />

                        {/* Main Circuit Traces */}
                        <path className="trace static" d="M10 10 L40 10 L50 20 L50 80 L80 80" fill="none" stroke="var(--neon-purple-dark)" strokeWidth="1" />
                        <path className="trace pulse pulse-1" d="M10 10 L40 10 L50 20 L50 80 L80 80" fill="none" stroke="var(--neon-purple-light)" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="10" cy="10" r="3" fill="var(--neon-purple-dark)" />
                        <circle className="node-glow" cx="80" cy="80" r="4" fill="var(--neon-purple-neon)" />

                        {/* Secondary Traces */}
                        <path className="trace static" d="M90 20 L70 20 L60 30 L60 60 L40 80" fill="none" stroke="var(--neon-purple-dark)" strokeWidth="1" />
                        <path className="trace pulse pulse-2" d="M90 20 L70 20 L60 30 L60 60 L40 80" fill="none" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="90" cy="20" r="2" fill="var(--neon-cyan)" className="node-glow" />

                        {/* More complex traces filling out the board */}
                        <path className="trace static" d="M20 90 L20 70 L30 60 L30 40 L10 20" fill="none" stroke="rgba(139, 44, 255, 0.2)" strokeWidth="1" />
                        <path className="trace pulse pulse-3" d="M20 90 L20 70 L30 60 L30 40 L10 20" fill="none" stroke="var(--neon-purple-light)" strokeWidth="1" />
                        <rect x="18" y="88" width="4" height="4" fill="var(--neon-purple-neon)" />
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#circuit-grid)" />
            </svg>
        </div>
    );
};

export default CircuitBackground;
