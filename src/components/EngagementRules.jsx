import React from 'react';
import './EngagementRules.css';

const EngagementRules = () => {
    return (
        <section className="engagement-rules-wrapper">
            <div className="secure-terminal-window">
                {/* Fake Terminal Chrome  */}
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control maximize"></span>
                    </div>
                    <div className="terminal-title">sudo view /etc/engagement_rules.conf</div>
                </div>

                <div className="terminal-body">
                    <p className="sys-prompt">guest@hunt-the-code:~$ <span className="cmd">cat rules.txt</span></p>

                    <ul className="rules-list">
                        <li>
                            <span className="bullet">[SYS_RULE_01]</span> Individual participant event.
                        </li>
                        <li>
                            <span className="bullet">[SYS_RULE_02]</span> Event consists of 2 rounds. Round 1 involves location scouting and code patching. Top 5 participants proceed to Round 2.
                        </li>
                        <li>
                            <span className="bullet">[SYS_RULE_03]</span> No external AI assistance permitted.
                        </li>
                        <li>
                            <span className="bullet fatal">[WARNING]</span> Two-minute 'System Lock' penalty for rule violations.
                        </li>
                    </ul>

                    <p className="sys-prompt blinking-cursor">guest@hunt-the-code:~$ <span className="cursor">_</span></p>
                </div>
            </div>
        </section>
    );
};

export default EngagementRules;
