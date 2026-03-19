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
        <section id="hero" className="hero relative min-h-screen flex items-center overflow-hidden">
            
            {/* ── Desktop Background ── */}
            <div className="hero-bg hidden md:block">
                <video 
                    src="/video.mp4" 
                    autoPlay 
                    muted 
                    loop
                    playsInline 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="hero-overlay hidden md:block" />

            {/* ── Mobile Background (Zoomed Out & Floating) ── */}
            <motion.div 
                className="absolute inset-[1rem] top-[80px] bottom-[2rem] z-0 block md:hidden rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(124,92,252,0.15)] origin-center"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Dark overlay for text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
                <video 
                    src="/video.mp4" 
                    autoPlay 
                    muted 
                    loop
                    playsInline 
                    className="w-full h-full object-cover scale-[1.05]"
                />
            </motion.div>

            {/* ── Desktop View ── */}
            <div className="hero-content hidden md:block relative z-20">
                <h1>
                    Tworzę nowoczesne strony internetowe i sklepy e-commerce, <br />
                    <span className="accent">które zdobywają klientów</span>
                </h1>

                <p className="hero-subtitle">
                    Pomagam biznesom rozwijać się w internecie. Projektuję szybkie,
                    zoptymalizowane pod SEO witryny oparte o przemyślany UX, które realnie zwiększają Twoją konwersję.
                </p>
            </div>

            {/* ── Mobile View ── */}
            <div className="flex md:hidden flex-col justify-end w-full relative z-20 h-[100svh] px-8 pb-[10vh] pointer-events-none">
                <motion.div
                    className="pointer-events-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse"></span>
                        <span className="text-[0.65rem] font-bold tracking-wider uppercase text-white/90">Dostępny</span>
                    </div>

                    <h1 className="text-4xl xs:text-5xl font-black leading-[1.05] tracking-tight mb-4 text-white">
                        Większa <br/>
                        <span className="inline-block bg-[#7c5cfc] text-black px-4 py-1 -rotate-2 mt-2 rounded-lg shadow-[0_10px_30px_rgba(124,92,252,0.4)]">
                            Sprzedaż.
                        </span>
                    </h1>
                    
                    <p className="text-white/80 text-sm font-medium mb-8 max-w-[260px] leading-relaxed">
                        Nowoczesne witryny zoptymalizowane pod konwersję i SEO.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button onClick={scrollToContact} className="w-full py-4 rounded-xl bg-[#7c5cfc] text-white font-bold text-[0.9rem] tracking-wide shadow-[0_8px_20px_rgba(124,92,252,0.3)] active:scale-95 transition-transform flex items-center justify-center gap-2">
                            Darmowa wycena
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
