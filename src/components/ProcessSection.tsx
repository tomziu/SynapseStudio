"use client";

import { motion } from "framer-motion";
import "./ProcessSection.css";

export default function ProcessSection() {
    const steps = [
        {
            num: "1",
            title: "Brief i Architektura",
            desc: "Zaczynamy od spotkania technicznego. Analizuję Twój dotychczasowy flow biznesowy, definiujemy cel wejścia na rynek i proponuję najbardziej rygorystyczny stos technologiczny pod Twój Use-Case.",
            color: "#7c5cfc", // Accent / Violet
            align: "right", // Right side card
            visual: (
                <div className="process-graphic-wrapper">
                    <div className="pg-bg-1" />
                    <div className="pg-blueprint" />
                </div>
            )
        },
        {
            num: "2",
            title: "Projekt Interfejsu (UX/UI)",
            desc: "Tworzę i udoskonalam prototyp graficzny. Zostawiamy w tyle nudę – wdrażamy animacje, nietuzinkowe layouty i potężny User Experience (UX), który konwertuje odwiedzających natychmiastowo.",
            color: "#38bdf8", // Blue
            align: "left",
            visual: (
                <div className="process-graphic-wrapper">
                    <div className="pg-bg-2" />
                    <div className="pg-ui-window">
                        <div className="pg-ui-header">
                            <div className="pg-ui-dot"/>
                            <div className="pg-ui-dot"/>
                            <div className="pg-ui-dot"/>
                        </div>
                        <div className="pg-ui-body" />
                        <div className="pg-ui-body" style={{ height: '10px', flex: 'none', width: '50%' }} />
                    </div>
                </div>
            )
        },
        {
            num: "3",
            title: "Front-end & Back-end",
            desc: "Zmieniam perfekcyjny projekt w surowy kod React/Next.js. Każdy komponent projektowany jest obiektowo, po to, aby Twoja platforma mogła w przyszłości skalować się na rynki zagraniczne w mgnieniu oka.",
            color: "#34A853", // Green
            align: "right",
            visual: (
                <div className="process-graphic-wrapper">
                    <div className="pg-bg-3" />
                    <div className="pg-code-lines">
                        <div className="pg-code-line" />
                        <div className="pg-code-line" />
                        <div className="pg-code-line" />
                        <div className="pg-code-line" />
                    </div>
                </div>
            )
        },
        {
            num: "4",
            title: "Testy i Optymalizacja",
            desc: "Wduszam aplikację na dedykowany, bezpłatny link w celach restrykcyjnych testów. Audyty Lighthouse zmuszamy do pokazania rezultatu 100/100, optymalizujemy grafiki WebP do niemal zera kilobajtów.",
            color: "#FBBC05", // Yellow
            align: "left",
            visual: (
                <div className="process-graphic-wrapper">
                    <div className="pg-bg-4" />
                    <div className="pg-gear" />
                </div>
            )
        },
        {
            num: "5",
            title: "Launch & Przeszkolenie",
            desc: "Uruchamiamy wielką infrastrukturę w domenie docelowej i monitorujemy ruch od 1 minuty otwarcia. Uzyskujesz dedykowane panele CMS, w których modyfikujesz ofertę na własną rękę bez udziału programistów.",
            color: "#ff3366", // Red-Pink
            align: "right",
            visual: (
                <div className="process-graphic-wrapper">
                    <div className="pg-bg-5" />
                    <div style={{ position: 'relative' }}>
                        <div className="pg-rocket" />
                        <div className="pg-flame" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="proces" className="section relative overflow-hidden" style={{ background: '#050505' }}>
            <div className="section-inner relative z-10">
                <div className="flex flex-col items-center text-center mb-20 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <span className="section-label" style={{ color: '#38bdf8' }}>Cykl Projektowy</span>
                        <h2 className="section-title !mb-6 text-4xl md:text-5xl font-black">
                            Jak przebiega współpraca<br/>
                            <span style={{ background: 'linear-gradient(90deg, #38bdf8, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>z profesjonalistą?</span>
                        </h2>
                        <p className="section-subtitle text-lg text-white/60 mx-auto">
                            Znasz mój każdy kolejny ruch, nie stosuję trików i trzymam mocne ramy czasowe. 5 klarownych kroków chronologii – od rozmowy wprowadzającej po potężny launch do internetu. Mądrze.
                        </p>
                    </motion.div>
                </div>

                <div className="process-timeline-new">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={`process-item-new ${step.align === 'left' ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ "--node-color": step.color } as React.CSSProperties}
                        >
                            {/* Central Colored Node */}
                            <div className="process-node-new">
                                {step.num}
                            </div>

                            {/* Card Item */}
                            <div className="process-card-new">
                                {step.visual}
                                <div className="process-content-new">
                                    <h3 style={{ color: step.color }}>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                            
                            {/* Empty div for flex spacing grid trick */}
                            <div className="hidden md:block w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
