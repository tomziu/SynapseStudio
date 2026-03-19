"use client";

import { Check, X, ShieldCheck, FileText, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./PricingSection.css";

export default function PricingSection() {
    const plans = [
        {
            name: "Wizytówka",
            price: "1000",
            desc: "Idealna dla freelancerów i małych firm. Szybki start w internecie bez przytłaczających kosztów.",
            features: [
                { text: "Do 5 podstron", enabled: true },
                { text: "Autorski i unikalny design", enabled: true },
                { text: "Formularz kontaktowy", enabled: true },
                { text: "Podstawowa optymalizacja SEO", enabled: true },
                { text: "Certyfikat SSL", enabled: true },
                { text: "Panel CMS (Zarządzanie treścią)", enabled: false },
            ]
        },
        {
            name: "Standard",
            price: "1500",
            isFeatured: true,
            desc: "Rozbudowana witryna korporacyjna z naciskiem na konwersję, design i swobodę edycji.",
            features: [
                { text: "Do 10 podstron", enabled: true },
                { text: "Autorski i unikalny design", enabled: true },
                { text: "Zaawansowane integracje", enabled: true },
                { text: "Zaawansowane SEO (Lighthouse 100)", enabled: true },
                { text: "Panel CMS (Zarządzanie treścią)", enabled: true },
                { text: "Moduł e-commerce", enabled: false },
            ]
        },
        {
            name: "Business (E-commerce)",
            price: "2500",
            desc: "Wydajny sklep internetowy przygotowany na wysoką sprzedaż i automatyzację.",
            features: [
                { text: "Bez limitu podstron i produktów", enabled: true },
                { text: "Koszyk i bramki płatności", enabled: true },
                { text: "Automatyzacja maili / faktur", enabled: true },
                { text: "Pełny audyt i wdrożenie SEO", enabled: true },
                { text: "Panel CMS (Zarządzanie treścią)", enabled: true },
                { text: "Moduł e-commerce", enabled: true },
            ]
        }
    ];

    return (
        <section id="cennik" className="section pricing-section relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            <div className="section-inner relative z-10">
                <div className="flex flex-col items-center text-center mb-16 gap-4 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label" style={{ color: '#34A853' }}>Transparentny cennik</span>
                        <h2 className="section-title !mb-6 text-4xl md:text-5xl font-black">
                            Twój projekt,<br/>
                            <span style={{ color: '#34A853' }}>Twoja decyzja</span>
                        </h2>
                        <p className="section-subtitle text-lg text-white/60">
                            W odróżnieniu od dużych agencji, nie mam wysokich kosztów utrzymania biur i menedżerów. 
                            Cały Twój budżet idzie bezpośrednio w jakość i kod Twojej nowej strony. Zobacz pakiety poniżej.
                        </p>
                    </motion.div>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
                                {plan.isFeatured && <div className="plan-badge">Najpopularniejszy</div>}
                                
                                <h3 className="pricing-card-name">{plan.name}</h3>
                                <div className="pricing-card-price">
                                    <small>od </small>{plan.price}<small> PLN</small>
                                </div>
                                <p className="pricing-card-desc">{plan.desc}</p>

                                <div className="pricing-features">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className={`pricing-feature ${feature.enabled ? '' : 'disabled'}`}>
                                            {feature.enabled ? <Check size={18} color="#34A853" /> : <X size={18} color="#555" />}
                                            <span>{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    href="#kontakt" 
                                    className={`pricing-cta ${plan.isFeatured ? 'pricing-cta-filled' : 'pricing-cta-outline'}`}
                                >
                                    Wybierz pakiet
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CUSTOMER-FRIENDLY GUARANTEE SECTION */}
                <motion.div
                    className="guarantee-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="guarantee-glow" />
                    
                    <div className="guarantee-visual">
                        <div className="guarantee-icon-container">
                            <ShieldCheck size={40} />
                        </div>
                    </div>

                    <div className="guarantee-content">
                        <div className="guarantee-tag">0% Ryzyka</div>
                        <h3>Proste, bezpieczne i ludzkie podejście</h3>
                        <p>
                            Wiem, że powierzenie budowy strony to duży krok. Dlatego <strong>nie pobieram zapłaty za kodowanie, dopóki nie zatwierdzisz samego projektu graficznego na 100%</strong>. Buduję relacje oparte na zaufaniu i najwyższej jakości, aby moje portfolio mogło się dumnie powiększać o zadowolonych klientów.
                        </p>

                        <div className="guarantee-features">
                            <div className="g-feature">
                                <ThumbsUp size={24} />
                                <span>100% Gwarancji Satysfakcji</span>
                            </div>
                            <div className="g-feature vat-feature">
                                <FileText size={24} />
                                <span>Wystawiam Fakturę VAT 23%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
