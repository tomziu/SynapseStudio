"use client";

import { motion } from "framer-motion";

export default function HeroSection() {

    const scrollToContact = () => {
        const el = document.getElementById('kontakt');
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    };

    const scrollToPortfolio = () => {
        const el = document.getElementById('realizacje');
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <video
                    src="/video.mp4"
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-[0.8] md:scale-100 transition-transform duration-500 origin-center"
                />
            </div>

            <div className="hero-overlay" />

            {/* ── Desktop View ── */}
            <div className="hero-content hidden md:block">
                <h1>
                    Tworzę nowoczesne strony internetowe, <br />
                    <span className="accent">które zdobywają klientów</span>
                </h1>

                <p className="hero-subtitle">
                    Pomagam biznesom rozwijać się w internecie. Projektuję szybkie,
                    zoptymalizowane pod SEO witryny oparte o przemyślany UX, które realnie zwiększają Twoją konwersję.
                </p>
            </div>

            {/* ── Mobile Storytelling Scroll View ── */}
            <div className="block md:hidden w-full relative z-10 pb-16">

                {/* View 1: The Hook */}
                <div className="flex flex-col justify-center px-6 min-h-[85svh] relative pt-10">
                    <h1 style={{ fontSize: '12vw', lineHeight: '1.05', marginBottom: '1.5rem', fontWeight: 900 }}>
                        Strony, które <br />
                        <span className="accent" style={{ background: 'var(--accent)', color: '#000', padding: '0 16px', display: 'inline-block', transform: 'rotate(-3deg)', marginTop: '0.8rem' }}>sprzedają.</span>
                    </h1>
                </div>

                {/* View 2: The Pitch (Appears on Scroll) */}
                <div className="min-h-[50svh] flex flex-col px-6 relative mt-2">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
