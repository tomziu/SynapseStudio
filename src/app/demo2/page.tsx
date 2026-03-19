"use client";

import { useEffect } from "react";
import UnicornScene from "unicornstudio-react/next";
import "./demo2.css";

export default function Demo2Page() {
    // Hide UnicornStudio branding
    useEffect(() => {
        const remove = () => {
            document
                .querySelectorAll('a[href*="unicorn.studio"], a[href*="unicornstudio"]')
                .forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    htmlEl.style.display = "none";
                    htmlEl.style.opacity = "0";
                    htmlEl.remove();
                });
        };
        remove();
        const observer = new MutationObserver(remove);
        observer.observe(document.body, { childList: true, subtree: true });
        const timer = setTimeout(remove, 2000);
        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="demo2-nike">
            {/* ── WebGL Background ── */}
            <div className="nike-bg">
                <UnicornScene
                    projectId="az12bYyxo6ZG5qz9CyES"
                    sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js"
                    width="100%"
                    height="100%"
                />
            </div>

            <div className="nike-overlay" />

            {/* ── Top Bar ── */}
            <nav className="nike-nav">
                <div className="nike-logo">
                    <svg viewBox="0 0 69 32" fill="currentColor" width="64" height="28">
                        <path d="M68.56 4.06L12.52 30.5l-1 .45A9.14 9.14 0 017.5 32a7.07 7.07 0 01-5.59-2.6A6.2 6.2 0 010 25.19a8.77 8.77 0 01.72-3.49 8.56 8.56 0 011.63-2.62l22.3-22.3A5.92 5.92 0 0128.8.35a3.62 3.62 0 012 3.14 5 5 0 01-.37 1.85L16 32.06l52.56-28z" />
                    </svg>
                </div>
                <div className="nike-nav-links">
                    <span>Nowe wydania</span>
                    <span>Męskie</span>
                    <span>Damskie</span>
                    <span>Dzieci</span>
                </div>
                <div className="nike-nav-actions">
                    <button className="nike-nav-icon" aria-label="Szukaj">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                    <button className="nike-nav-icon" aria-label="Koszyk">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        <span className="cart-count">2</span>
                    </button>
                </div>
            </nav>

            {/* ── Hero Content ── */}
            <main className="nike-hero">
                <div className="nike-hero-left">
                    <span className="nike-badge">JUST IN</span>
                    <h1 className="nike-title">
                        NIKE AIR JORDAN
                        <br />
                        <span>1</span>
                    </h1>

                    <div className="nike-actions">
                        <button className="nike-btn-buy">
                            Do koszyka — 799 PLN
                        </button>
                        <button className="nike-btn-fav" aria-label="Dodaj do ulubionych">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="nike-hero-right">
                    <div className="nike-shoe-placeholder">
                        <div className="shoe-glow" />
                        <div className="shoe-silhouette">
                            <svg viewBox="0 0 512 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 180c0-20 16-40 40-60s60-40 100-55c40-15 90-25 140-30s100-5 140 5c20 5 30 15 30 30s-10 30-30 40-50 20-90 25-90 10-150 15-120 10-160 20S48 200 48 180z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                            </svg>
                        </div>
                        <span className="shoe-label">AIR JORDAN 1</span>
                    </div>
                </div>
            </main>

            {/* ── Bottom Bar ── */}
            <footer className="nike-footer">
                <div className="nike-footer-left">
                    <span>Darmowa dostawa od 200 PLN</span>
                    <span className="divider">·</span>
                    <span>30 dni na zwrot</span>
                </div>
                <div className="nike-footer-right">
                    <span>Synapse Studio × Demo</span>
                </div>
            </footer>
        </div>
    );
}
