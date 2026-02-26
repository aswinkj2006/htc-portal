import React from 'react';
import { Eye, Network, Terminal } from 'lucide-react';
import './OperationRoles.css';

const rolesData = [
    {
        id: 'scout',
        title: 'THE SCOUT',
        icon: <Eye size={36} />,
        description: 'Field operative. Should go and hunt the QR codes to access the codes.',
        accentColor: '#00F0FF'
    },
    {
        id: 'architect',
        title: 'THE ARCHITECT',
        icon: <Network size={36} />,
        description: 'The Bridge. Translate field logic to the terminal. Verbal communication only—NO keyboard access.',
        accentColor: '#B470FF'
    },
    {
        id: 'terminal',
        title: 'THE TERMINAL',
        icon: <Terminal size={36} />,
        description: 'The Specialist. Reside in CC2. Execute logic patches in Python, C, or Java based on Architect directives.',
        accentColor: '#ff3366'
    }
];

const OperationRoles = () => {
    return (
        <section className="operation-roles">
            <h2 className="section-title">OPERATION ROLES</h2>

            <div className="roles-grid">
                {rolesData.map((role) => (
                    <div className="role-card" key={role.id} style={{ '--role-color': role.accentColor }}>
                        <div className="role-card-front">
                            <div className="role-icon">
                                {role.icon}
                            </div>
                            <h3>{role.title}</h3>
                            <div className="hover-indicator">CLASSIFIED INTEL BELOW</div>
                        </div>

                        <div className="role-card-back">
                            <h3>{role.title}</h3>
                            <p>{role.description}</p>
                            <div className="deco-line"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OperationRoles;
