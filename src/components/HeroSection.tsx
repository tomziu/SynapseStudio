"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UnicornScene from "unicornstudio-react/next";
import { motion } from "framer-motion";

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    // Hide UnicornStudio branding and check mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const remove = () => {
            document
                .querySelectorAll('a[href*="unicorn.studio"], a[href*="unicornstudio"]')
                .forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    htmlEl.style.display = 'none';
                    htmlEl.style.opacity = '0';
                    htmlEl.remove();
                });
        };
        remove();
        const observer = new MutationObserver(remove);
        observer.observe(document.body, { childList: true, subtree: true });
        const timer = setTimeout(remove, 2000);
        return () => {
            window.removeEventListener('resize', checkMobile);
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

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
                {isMobile ? (
                    <Image 
                        src="/mobile.webp" 
                        alt="Background" 
                        fill 
                        priority 
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    <UnicornScene
                        projectId="rYSFpVo7tyQugiuC51jD"
                        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js"
                        width="100%"
                        height="100%"
                    />
                )}
            </div>

            <div className="hero-overlay" />

            {/* ── Desktop View ── */}
            <div className="hero-content hidden md:block">
                <div className="online-status">
                    <span className="dot"></span>
                    Dostępny na nowe projekty
                </div>
                <h1>
                    Tworzę nowoczesne strony internetowe i sklepy e-commerce, <br />
                    <span className="accent">które zdobywają klientów</span>
                </h1>

                <p className="hero-subtitle">
                    Pomagam biznesom rozwijać się w internecie. Projektuję szybkie,
                    zoptymalizowane pod SEO witryny oparte o przemyślany UX, które realnie zwiększają Twoją konwersję.
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        Darmowa wycena
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <button className="btn btn-outline" onClick={scrollToPortfolio}>
                        Zobacz realizacje
                    </button>
                </div>
            </div>

            {/* ── Mobile Storytelling Scroll View ── */}
            <div className="block md:hidden w-full relative z-10 pb-16">
                
                {/* View 1: The Hook */}
                <div className="flex flex-col justify-center px-6 min-h-[85svh] relative pt-10">
                    <div className="online-status mb-8 self-start bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                        <span className="dot" style={{ width: '8px', height: '8px' }}></span>
                        Dostępny od zaraz
                    </div>
                    
                    <h1 style={{ fontSize: '13vw', lineHeight: '1.05', marginBottom: '1.5rem', fontWeight: 900 }}>
                        Strony, które <br/>
                        <span className="accent" style={{ background: 'var(--accent)', color: '#000', padding: '0 16px', display: 'inline-block', transform: 'rotate(-3deg)', marginTop: '0.8rem' }}>sprzedają.</span>
                    </h1>

                    {/* Bouncing Scroll Indicator */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }} 
                        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                    </motion.div>
                </div>

                {/* View 2: The Pitch (Appears on Scroll) */}
                <div className="min-h-[50svh] flex flex-col justify-center px-6 relative mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="hero-subtitle text-white/90" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '3rem', fontWeight: 400 }}>
                            Zbuduję dla Twojej firmy błyskawiczną platformę opartą o nienaganny UX, która zamieni każdego przypadkowego odwiedzającego w Twój czysty zysk.
                        </p>

                        <div className="flex flex-col gap-4 w-full">
                            <button className="btn btn-primary w-full justify-center shadow-xl shadow-[#7c5cfc]/25 border-none" onClick={scrollToContact}>
                                Poproś o darmową wycenę
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                            <button className="btn btn-outline w-full justify-center bg-black/40 backdrop-blur-md" onClick={scrollToPortfolio}>
                                Zobacz moje realizacje
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
