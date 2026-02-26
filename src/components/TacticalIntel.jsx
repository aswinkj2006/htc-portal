import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import './TacticalIntel.css';

const TacticalIntel = () => {
    return (
        <section className="tactical-intel-wrapper">
            <div className="tactical-intel glass-panel">
                <div className="panel-header">
                    <div className="panel-decor-dot"></div>
                    <h2>TACTICAL INTEL // LOGISTICS</h2>
                    <div className="panel-line"></div>
                </div>

                <div className="intel-grid">
                    <div className="intel-item">
                        <div className="icon-wrapper">
                            <Calendar size={24} className="intel-icon" />
                        </div>
                        <div className="intel-details">
                            <span className="intel-label">DATE</span>
                            <span className="intel-value">12.03.2026</span>
                        </div>
                    </div>

                    <div className="intel-item">
                        <div className="icon-wrapper">
                            <Clock size={24} className="intel-icon" />
                        </div>
                        <div className="intel-details">
                            <span className="intel-label">WINDOW</span>
                            <span className="intel-value">09:00 AM – 12:00 PM</span>
                        </div>
                    </div>

                    <div className="intel-item location">
                        <div className="icon-wrapper">
                            <MapPin size={24} className="intel-icon" />
                        </div>
                        <div className="intel-details">
                            <span className="intel-label">LOCATION</span>
                            <span className="intel-value">CC2 Lab, B Block (Ground Floor), SNSCT.</span>
                        </div>
                    </div>
                </div>

                {/* Decorative corner accents matching sci-fi UI theme */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
            </div>
        </section>
    );
};

export default TacticalIntel;
