"use client";

import { motion } from "framer-motion";
import { Search, MapPin, TrendingUp } from "lucide-react";
import "./GoogleSection.css";

export default function GoogleSection() {
    const features = [
        {
            icon: <MapPin size={24} color="#EA4335" />, // Google Red
            title: "Wizytówka Google (GMB)",
            desc: "Pojawiaj się w Mapach bezbłędnie i zdobywaj klientów lokalnych szybciej. Zoptymalizowana wizytówka to podstawa dzisiejszego biznesu.",
        },
        {
            icon: <Search size={24} color="#4285F4" />, // Google Blue
            title: "Pozycjonowanie i SEO",
            desc: "Wdrap się na szczyt wyników wyszukiwania. Bądź zawsze o krok przed konkurencją w grze, w której liczy się każde kliknięcie.",
        },
        {
            icon: <TrendingUp size={24} color="#34A853" />, // Google Green
            title: "Google Search Console",
            desc: "Dogłębna analityka Twojego sukcesu. Od eliminacji błędów po skalowanie zasięgów – przejmujesz pełną kontrolę nad swoim ruchem.",
        },
    ];

    return (
        <section className="section bg-card/30 relative overflow-hidden" id="google-services">            
            <div className="section-inner">
                <div className="google-showcase-wrapper">
                    
                    {/* Left: Content block */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="google-showcase-content"
                    >
                        <span className="section-label" style={{ color: '#4285F4' }}>
                            <span style={{ color: '#4285F4' }}>G</span>
                            <span style={{ color: '#EA4335' }}>o</span>
                            <span style={{ color: '#FBBC05' }}>o</span>
                            <span style={{ color: '#4285F4' }}>g</span>
                            <span style={{ color: '#34A853' }}>l</span>
                            <span style={{ color: '#EA4335' }}>e</span>
                            <span style={{ marginLeft: 6, color: 'var(--text-primary)' }}>Ecosystem</span>
                        </span>
                        
                        <h2 className="section-title">Dominacja w<br/><span style={{ background: 'linear-gradient(90deg, #4285F4, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>wynikach wyszukiwania</span></h2>
                        <p className="section-subtitle" style={{ marginBottom: '1rem'}}>
                            Uczyńmy Google Twoim najlepszym handlowcem. Kompleksowa widoczność, zoptymalizowana obecność lokalna i idealnie nastrojona konsola – wszystko po to, byś zawsze był pierwszy.
                        </p>

                        <div className="google-features-list">
                            {features.map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="google-feature-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                >
                                    <div className="google-feature-icon">
                                        {item.icon}
                                    </div>
                                    <div className="google-feature-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual block */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        className="google-showcase-visual"
                    >
                        <div className="google-glow-container" />
                        
                        <div className="google-ui-container">
                            
                            {/* Animated Search Menu */}
                            <motion.div 
                                className="google-search-bar"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className="google-search-icon" />
                                <div className="google-search-text" />
                                <div className="google-search-mic">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                            </motion.div>

                            {/* Animated Business Card */}
                            <motion.div 
                                className="google-business-card"
                                animate={{ y: [0, 15, 0], rotateZ: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="gb-header">
                                    <div className="gb-logo">S</div>
                                    <div className="gb-title-lines">
                                        <div className="gb-line long" />
                                        <div className="gb-line short" />
                                    </div>
                                </div>
                                <div className="gb-stars">
                                    <div className="gb-star" />
                                    <div className="gb-star" />
                                    <div className="gb-star" />
                                    <div className="gb-star" />
                                    <div className="gb-star" />
                                </div>
                                <div className="gb-button">
                                    <div className="gb-button-inner" />
                                </div>
                            </motion.div>

                            {/* Animated Console Chart Card */}
                            <motion.div 
                                className="google-console-card"
                                animate={{ y: [0, -15, 0], rotateZ: [0, -2, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                            >
                                <div className="gc-header">
                                    <div className="gc-stat"><div className="label"/><div className="value"/></div>
                                    <div className="gc-stat"><div className="label"/><div className="value" style={{background: '#34A853'}}/></div>
                                </div>
                                <div className="gc-chart">
                                    <div className="gc-bar" />
                                    <div className="gc-bar" />
                                    <div className="gc-bar" />
                                    <div className="gc-bar" />
                                    <div className="gc-bar" />
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
