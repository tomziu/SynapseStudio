"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
    { label: "O mnie", id: "hero" },
    { label: "Usługi", id: "uslugi" },
    { label: "Realizacje", id: "realizacje" },
    { label: "Proces", id: "proces" },
    { label: "Cennik", id: "cennik" },
    { label: "FAQ", id: "faq" },
    { label: "Kontakt", id: "kontakt" }
];

export default function StickyNav() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple scroll spy logic
            const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100; // offset

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 70, // header offset
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Nawigacja główna">
            <div className="nav-inner">
                <div className="nav-logo">
                    SYNAPSE <span>STUDIO</span>
                </div>

                <div className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}

                    {/* Only show CTA in mobile menu layout */}
                    {isMobileOpen && (
                        <button
                            className="nav-cta"
                            style={{ margin: '0.5rem 1rem', width: 'calc(100% - 2rem)', padding: '0.8rem' }}
                            onClick={() => scrollToSection("kontakt")}
                        >
                            Darmowa wycena
                        </button>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        className="nav-cta"
                        onClick={() => scrollToSection("kontakt")}
                        style={{ display: isMobileOpen ? 'none' : 'block' }} // Hide desktop CTA when mobile menu is open (css handles main hiding)
                    >
                        Darmowa wycena
                    </button>

                    <button
                        className="nav-hamburger"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle Navigation"
                    >
                        <span style={{ transform: isMobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                        <span style={{ opacity: isMobileOpen ? 0 : 1 }}></span>
                        <span style={{ transform: isMobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
