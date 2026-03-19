"use client";

import { motion } from "framer-motion";
import { Workflow, Cpu, Mail, BrainCircuit, Database, MessageSquare } from "lucide-react";
import "./AutomationSection.css";

export default function AutomationSection() {
    return (
        <section className="section overflow-hidden relative" id="automatyzacje">
            <div className="section-inner">
                <div className="automation-wrapper-new">
                    
                    {/* LEFT: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="automation-content-new"
                    >
                        <span className="section-label" style={{ color: '#a855f7' }}>Procesy i Automatyzacje</span>
                        <h2 className="section-title">
                            Pracuj mądrzej,<br/>
                            <span style={{ background: 'linear-gradient(90deg, #a855f7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>nie rzadziej</span>
                        </h2>
                        <p className="section-subtitle" style={{ marginBottom: '1rem'}}>
                            Uwolnij swój zespół od monotonnej klikaniny. Buduję układy nerwowe dla Twojego biznesu: od integracji API, po inteligentnych Agentów AI analizujących załączniki i wysyłających podsumowania prosto do CRM.
                        </p>

                        <div className="automation-features">
                            <motion.div 
                                className="automation-feature-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="automation-feature-icon" style={{ background: 'linear-gradient(135deg, #a855f7, #c084fc)' }}>
                                    <Workflow size={22} />
                                </div>
                                <div className="automation-feature-text">
                                    <h3>Integracja systemów typu Zapier/Make</h3>
                                    <p>Łączę systemy sprzedażowe, marketingowe i logistyczne. Przenoszę dane między nimi ułamkach sekund, bez błędów ludzkich i bez przepisywania ręcznego.</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="automation-feature-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className="automation-feature-icon" style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }}>
                                    <Cpu size={22} />
                                </div>
                                <div className="automation-feature-text">
                                    <h3>Agenci AI i Automatyzacji</h3>
                                    <p>Skonfiguruję modele językowe tak, aby obsługiwały powtarzalne zapytania, skanowały faktury czy kwalifikowały leady przez 24 godziny na dobę.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Visual / 3D Isometric Pipeline */}
                    <motion.div 
                        className="automation-visual-new"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
                    >
                        <div className="automation-glow" />
                        
                        <div className="automation-pipeline">
                            <div className="pipeline-base" />

                            {/* Connecting Lines SVG mapped to isometric coordinates */}
                            <svg className="pipeline-paths" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Mail -> AI */}
                                <polyline points="20,20 20,55 50,55" className="p-line" />
                                {/* AI -> CRM */}
                                <polyline points="50,55 80,55 80,80" className="p-line" />
                                {/* AI -> Slack */}
                                <polyline points="50,55 20,55 20,70" className="p-line" />
                            </svg>

                            {/* Mail Node (Input) */}
                            <div className="pipeline-node node-mail">
                                <Mail className="node-icon" size={32} />
                            </div>

                            {/* AI Node (Processor) */}
                            <div className="pipeline-node node-ai">
                                <BrainCircuit className="node-icon" size={48} />
                            </div>

                            {/* CRM Node (Output 1) */}
                            <div className="pipeline-node node-crm">
                                <Database className="node-icon" size={32} />
                            </div>

                            {/* Slack Node (Output 2) */}
                            <div className="pipeline-node node-slack">
                                <MessageSquare className="node-icon" size={32} />
                            </div>

                            {/* Animated Data Packets traveling along paths */}
                            {/* Packet 1: Mail -> AI */}
                            <motion.div 
                                className="data-packet packet-1"
                                animate={{ 
                                    left:   ["20%", "20%", "50%"], 
                                    top:    ["20%", "55%", "55%"], 
                                    opacity: [0, 1, 1, 0] 
                                }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />

                            {/* Packet 2: AI -> CRM */}
                            <motion.div 
                                className="data-packet packet-3"
                                animate={{ 
                                    left:   ["50%", "80%", "80%"], 
                                    top:    ["55%", "55%", "80%"], 
                                    opacity: [0, 1, 1, 0] 
                                }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                            />

                            {/* Packet 3: AI -> Slack */}
                            <motion.div 
                                className="data-packet packet-2"
                                animate={{ 
                                    left:   ["50%", "20%", "20%"], 
                                    top:    ["55%", "55%", "70%"], 
                                    opacity: [0, 1, 1, 0] 
                                }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1.5 }}
                            />

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
