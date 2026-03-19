"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./PortfolioShowcase.css";

/* ─────────── Project Data ─────────── */
const PROJECTS = [
    {
        id: "kwiat-indygo",
        title: "Kwiat Indygo",
        category: "Strona Wizerunkowa",
        description: "Interaktywny profil wizytówkowy dla pracowni holistycznej. Przełożenie nietuzinkowego, organicznego klimatu marki na płynne animacje interfejsu (Framer Motion). Doświadczenie uspokajające jak sama usługa.",
        color: "#c084fc", // Purple/Magenta
        route: "https://kwiatindygo.eu/",
        isExternal: true,
        image: "/kwiatindygo.webp",
        tags: ["Next.js", "TailwindCSS", "Framer Motion", "UI/UX"]
    },
    {
        id: "k-si",
        title: "K-SI Bosch",
        category: "Corporate Site",
        description: "Witryna biznesowa dedykowana regionalnemu systemowemu instalatorowi marki Bosch. Silna optymalizacja Core Web Vitals i bezkompromisowe lokalne SEO napędzające każdego dnia nowe zapytania ofertowe.",
        color: "#38bdf8", // Blue
        route: "https://k-si.pl/",
        isExternal: true,
        image: "/k-si.webp",
        tags: ["React", "SEO Optimization", "Performance", "B2B"]
    },
    {
        id: "nike-hero",
        title: "Nike Hero Section",
        category: "Demo Interaktywny · Sports",
        description: "Poczuj dynamikę i prędkość. Interaktywne doświadczenie na pierwszej linii z klientem z płynnymi przejściami — wzorcowy przykład hero sekcji produktowej, która hipnotyzuje i zachęca do zakupu.",
        color: "#ff3366",
        route: "/demo2",
        isExternal: false,
        image: "/screenshot.webp",
        customVisual: false,
        tags: ["Next.js", "GSAP", "Animation", "UI/UX"]
    }
];

export default function PortfolioShowcase() {
    return (
        <section id="realizacje" className="section relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-inner relative z-10">
                <div className="flex flex-col items-center text-center mb-24 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label" style={{ color: '#c084fc' }}>Track Record</span>
                        <h2 className="section-title !mb-4 text-5xl md:text-6xl font-black">
                            Zrealizowane wdrożenia
                        </h2>
                        <p className="section-subtitle mx-auto max-w-2xl text-lg text-white/60">
                            Zamiast wyłącznie mówić, co potrafię zrobić, wolę żebyś zobaczył to na własne oczy. Oto platformy internetowe, które pracują i zarabiają dla moich klientów każdego dnia.
                        </p>
                    </motion.div>
                </div>

                <div className="portfolio-grid-premium">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
                        >
                            <a
                                href={project.route}
                                target={project.isExternal ? "_blank" : "_self"}
                                rel={project.isExternal ? "noopener noreferrer" : ""}
                                className="portfolio-card-premium"
                                style={{ "--card-color": project.color } as React.CSSProperties}
                            >
                                <div className="portfolio-img-wrapper">
                                    <div className="portfolio-glow" />
                                    {(project as any).customVisual ? (
                                        <div className="visual-demo2">
                                            <div className="vd2-glow" />
                                            <div className="vd2-curve-1" />
                                            <div className="vd2-curve-2" />
                                        </div>
                                    ) : project.image ? (
                                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} loading="lazy" />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span style={{ opacity: 0.2, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '4px' }}>Wczytywanie...</span>
                                        </div>
                                    )}
                                </div>

                                <div className="portfolio-content">
                                    <p className="portfolio-category">{project.category}</p>
                                    <h3 className="portfolio-title">
                                        {project.title}
                                        <ArrowUpRight strokeWidth={2.5} size={36} />
                                    </h3>
                                    <p className="portfolio-desc">{project.description}</p>

                                    <div className="portfolio-tags-premium">
                                        {project.tags?.map((tag, tIdx) => (
                                            <span key={tIdx} className="ptag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="btn-view-case">
                                        {project.isExternal ? 'Odwiedź stronę' : 'Zobacz live demo'}
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
