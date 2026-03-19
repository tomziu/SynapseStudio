"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

    const faqs = [
        {
            q: "Ile szacunkowo czasu przypada na realizację pełnej witryny?",
            a: "Profilowe platformy marketingowe na bazie standardowego CMS'a zamykają się zwykle w oknie 5 do 9 dni roboczych. Przy rozwiązaniach stricte Custom oraz cięższych platformach E-commerce harmonogram potrafi przedłużyć się od 3 do 5 tygodni zależnie od gęstości zaplanowanych funkcjonalności."
        },
        {
            q: "Co determinuje tak różnorodne wyceny sklepów w branży IT?",
            a: "Agencje opierające się na spopularyzowanych w kreatorach rozwiązaniach (SaaS) proponują najczęściej tanie starty z racji na powielanie tego samego zasobu, jednak w cenie abonamentowych ukrytych oplat z reguły cierpi wtedy skalowalność i wolność własności Twojej domeny. Jako programista wywżam indywidualny, bezkompromisowy szlif wydajności pod wymiar z modelem gwarancyjnym na własność kupującego – koszt ponosisz zazwyczaj za bezkonkurencyjny i bezbłędny rozwój oraz pełne prawa do unikalnego oprogramowania napisanego od a do z pod Twój biznesowy scenariusz."
        },
        {
            q: "Czy jako klient będę móc w pewnym zakresie edytować treści po handoverze samodzielnie?",
            a: "Oczywiście. Niemal każde wdrożenie uzbrajam w środowisko dostosowanego panelu CMS typu headless lub full-stack dla nietechnicznych współpracowników. Dzięki niemu aktualizacje blogów, sekcji portfolio i treści na bieżąco, w czasie rzeczywistym jest wygodne i samodzielne niczym pisanie w edytorze Word."
        }
    ];

    return (
        <section id="faq" className="section">
            <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="section-label">Knowledge Base</span>
                <h2 className="section-title" style={{ textAlign: 'center' }}>Wątpliwości na etapie planowania</h2>
                <p className="section-subtitle" style={{ textAlign: 'center' }}>
                    Kierowanie budżetu w narzędzie IT, wiąże się często z technicznymi i biznesowymi zagwozdkami. Skompletowałem bezpośrednie odpowiedzi na najpowszechniejsze zagadnienia.
                </p>

                <div className="faq-list">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div key={idx} className="faq-item">
                                <button
                                    className={`faq-question ${isOpen ? 'open' : ''}`}
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${idx}`}
                                    id={`faq-btn-${idx}`}
                                >
                                    {faq.q}
                                    <ChevronDown />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            role="region"
                                            id={`faq-panel-${idx}`}
                                            aria-labelledby={`faq-btn-${idx}`}
                                        >
                                            <div className="faq-answer">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
