"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UnicornScene from "unicornstudio-react/next";

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

            <div className="hero-content">
                <div className="online-status">
                    <span className="dot"></span>
                    Dostępny na nowe projekty
                </div>
                {/* Desktop Headline */}
                <h1 className="hidden md:block">
                    Tworzę nowoczesne strony internetowe i sklepy e-commerce, <br />
                    <span className="accent">które zdobywają klientów</span>
                </h1>
                
                {/* Mobile Headline - Neo Brutalist Style */}
                <h1 className="block md:hidden" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                    Strony, które <br/>
                    <span className="accent" style={{ 
                        background: 'var(--accent)', 
                        color: '#000', 
                        padding: '0 12px', 
                        display: 'inline-block', 
                        transform: 'rotate(-2deg)',
                        marginTop: '0.5rem'
                    }}>sprzedają.</span>
                </h1>

                {/* Desktop Subtitle */}
                <p className="hero-subtitle hidden md:block">
                    Pomagam biznesom rozwijać się w internecie. Projektuję szybkie,
                    zoptymalizowane pod SEO witryny oparte o przemyślany UX, które realnie zwiększają Twoją konwersję.
                </p>
                
                {/* Mobile Subtitle */}
                <p className="hero-subtitle block md:hidden" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                    Bezkompromisowy UX i kod, który zamienia kliknięcia w twój czysty zysk.
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
        </section>
    );
}
