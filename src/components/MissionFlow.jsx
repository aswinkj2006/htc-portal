import React from 'react';
import { MapPin, ShieldCheck, Key, Code, FastForward } from 'lucide-react';
import './MissionFlow.css';

const flowSteps = [
    {
        phase: '1',
        title: 'The Retrieval',
        subtitle: 'Round 1 Phase 1',
        description: 'You will be given a specific location to investigate. Find the physical QR code placed there and return to the lab.',
        icon: <MapPin size={28} />,
    },
    {
        phase: '2',
        title: 'The Authentication',
        subtitle: 'Round 1 Phase 2',
        description: 'Once you present the QR code to a volunteer, scan it to reveal a logic riddle. Solve it to retrieve the Unlock Password.',
        icon: <ShieldCheck size={28} />,
    },
    {
        phase: '3',
        title: 'The Patching',
        subtitle: 'Round 1 Phase 3',
        description: 'Use the password to unlock your corrupted code file. Identify and fix logic errors until the system returns "Success".',
        icon: <Code size={28} />,
    },
    {
        phase: '4',
        title: 'The Selection',
        subtitle: 'Evaluation',
        description: 'The top 5 participants who solve the task accurately and swiftly will be selected to advance to Round 2.',
        icon: <FastForward size={28} />,
    },
    {
        phase: '5',
        title: '[ENCRYPTED]',
        subtitle: 'Round 2',
        description: 'The final round is heavily classified. Secure your place in the Top 5 and register to know more about the ultimate challenge.',
        icon: <Key size={28} />,
    }
];

const MissionFlow = () => {
    return (
        <section className="mission-flow-container">
            <h2 className="section-title">MISSION FLOW</h2>

            <div className="timeline-wrapper">
                <div className="timeline-line"></div>
                {flowSteps.map((step, index) => (
                    <div className="timeline-item" key={step.phase}>
                        <div className="timeline-marker">
                            <span className="phase-num">0{step.phase}</span>
                        </div>
                        <div className="timeline-content glass-panel">
                            <div className="step-header">
                                <span className="step-icon">{step.icon}</span>
                                <div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <span className="step-subtitle">[{step.subtitle}]</span>
                                </div>
                            </div>
                            <p className="step-desc">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MissionFlow;
