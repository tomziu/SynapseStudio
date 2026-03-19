"use client";

import { useRef } from "react";
import { MonitorSmartphone, ShoppingCart, SearchCheck, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ServicesSection.css";

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section id="uslugi" className="section relative overflow-hidden" ref={containerRef}>
            {/* Abstract Background Element */}
            <motion.div
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
                style={{ y: yBackground }}
            />

            <div className="section-inner relative z-10">
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="section-label">Specjalizacja</span>
                        <h2 className="section-title !mb-4">Co mogę dla<br />Ciebie zbudować?</h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl w-full mx-auto"
                    >
                        <div className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl text-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-pop/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="relative text-lg md:text-xl leading-relaxed mx-auto text-balance">
                                <span className="text-muted/60 opacity-80">Nie produkuję masowych szablonów.</span>{" "}
                                <span className="text-text-primary">Dostarczam unikalne cyfrowe narzędzia <strong className="font-semibold text-accent-light">klasy premium</strong>, które budują autorytet i <span className="bg-accent-pop/10 text-accent-pop px-2 py-0.5 rounded-md font-medium border border-accent-pop/20 shadow-[0_0_10px_rgba(165,180,252,0.15)] inline-block mt-2 sm:mt-0">generują zyski.</span></span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="services-bento-grid">
                    
                    {/* 1. Strony Wizerunkowe (Wide) */}
                    <motion.div 
                        className="bento-card wide-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bento-graphics">
                            <div className="g-wireframe" />
                            <div className="g-sphere" />
                        </div>
                        <div className="bento-content">
                            <div className="bento-icon" style={{ color: '#a78bfa' }}>
                                <MonitorSmartphone size={24} strokeWidth={1.5} />
                            </div>
                            <h3>Strony wizerunkowe</h3>
                            <p>Wizytówki, strony firmowe i zaawansowane landing page'e z WebGL (Three.js), które zostawiają konkurencję daleko w tyle i zachwycają odbiorców.</p>
                        </div>
                    </motion.div>

                    {/* 2. E-Commerce (Square) */}
                    <motion.div 
                        className="bento-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bento-graphics">
                            <div className="g-glow-orange" />
                            <div className="g-cube" />
                        </div>
                        <div className="bento-content">
                            <div className="bento-icon" style={{ color: '#ff5e00' }}>
                                <ShoppingCart size={24} strokeWidth={1.5} />
                            </div>
                            <h3>E-commerce platformy</h3>
                            <p>Skalowalne sklepy zoptymalizowane pod wysoką konwersję. Redukcja porzuconych koszyków poprzez friction-less UX.</p>
                        </div>
                    </motion.div>

                    {/* 3. Optymalizacja & SEO (Square) */}
                    <motion.div 
                        className="bento-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="bento-graphics">
                            <div className="g-glow-green" />
                            <div className="g-dial-container">
                                <div className="g-dial-bg" />
                                <div className="g-dial-fill" />
                                <div className="g-dial-needle" />
                            </div>
                        </div>
                        <div className="bento-content">
                            <div className="bento-icon" style={{ color: '#c8ff00' }}>
                                <SearchCheck size={24} strokeWidth={1.5} />
                            </div>
                            <h3>Optymalizacja & SEO</h3>
                            <p>Audyty Lighthouse na 100/100. Eliminacja milisekund opóźnień i perfekcyjna struktura techniczna dla nowoczesnych wyszukiwarek.</p>
                        </div>
                    </motion.div>

                    {/* 4. Cyber-utrzymanie (Wide) */}
                    <motion.div 
                        className="bento-card wide-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="bento-graphics">
                            <div className="g-glow-blue" />
                            <div className="g-data-stream g-ds-1" />
                            <div className="g-data-stream g-ds-2" />
                            <div className="g-data-stream g-ds-3" />
                            <div className="g-shield">
                                <div className="g-shield-inner" />
                            </div>
                        </div>
                        <div className="bento-content">
                            <div className="bento-icon" style={{ color: '#0ea5e9' }}>
                                <ShieldCheck size={24} strokeWidth={1.5} />
                            </div>
                            <h3>Cyber-utrzymanie</h3>
                            <p>Ciągły monitoring, zautomatyzowane backupy bezpieczeństwa, błyskawiczne aktualizacje środowiska i ochrona przed nowoczesnymi atakami sieciowymi.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
