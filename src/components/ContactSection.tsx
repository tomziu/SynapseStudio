"use client";

import { useState } from "react";
import { Send, Handshake, MessageCircle, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";
import "./ContactSection.css";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="kontakt" className="section relative overflow-hidden" style={{ background: '#050505' }}>
            {/* Calendly resources */}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

            {/* Background elements to make it feel warm */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="section-inner relative z-10">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label" style={{ color: '#f43f5e' }}>Przejdźmy do konkretów</span>
                        <h2 className="section-title !mb-4 text-4xl md:text-5xl font-black">
                            Gotowy wyskalować<br/>
                            <span style={{ background: 'linear-gradient(90deg, #f43f5e, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>działania online?</span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div 
                    className="contact-card-premium"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* LEFT SIDE: WARM WELCOME */}
                    <div className="contact-welcome">
                        <div className="avatar-wrapper">
                            <div className="avatar-inner">
                                👋 {/* Możesz tu wstawić zdjęcie: <img src="/moje-zdjecie.jpg" alt="Kacper" /> */}
                            </div>
                        </div>
                        <h3>Cześć, tu Kacper!</h3>
                        <p>
                            Cieszę się, że dotarłeś aż tutaj. Wiem, jak stresujące potrafią być rozmowy z wielkimi, "zimnymi" agencjami. 
                            Dlatego moje podejście jest w 100% partnerskie. Bez presji i naciągania.
                        </p>
                        <p>
                            Masz pomysł na projekt, ale nie wiesz od czego zacząć? A może potrzebujesz tylko luźnej porady architektonicznej? 
                            Wypełnij formularz obok, albo złapmy się na 15-minutowe intro i mądrą kawę. 
                        </p>

                        <div className="contact-methods-grid">
                            <a href="mailto:kacper.tomzik1@gmail.com" className="c-method-card method-email">
                                <div className="c-method-icon">
                                    <MessageCircle size={22} />
                                </div>
                                <div className="c-method-text">
                                    <span className="c-method-label">Napisz e-mail</span>
                                    <span className="c-method-value">kacper.tomzik1@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+48570854348" className="c-method-card method-phone">
                                <div className="c-method-glow" />
                                <div className="c-method-icon">
                                    <Phone size={22} className="phone-shake" />
                                </div>
                                <div className="c-method-text">
                                    <span className="c-method-label">Telefon bezpośredni</span>
                                    <span className="c-method-value">+48 570 854 348 (Porozmawiajmy)</span>
                                </div>
                            </a>

                            <button 
                                className="c-method-card method-coffee"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (typeof window !== 'undefined' && (window as any).Calendly) {
                                        (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/kacper-tomzik1/30min'});
                                    }
                                }}
                            >
                                <div className="c-method-icon">
                                    <span className="coffee-emoji">☕</span>
                                </div>
                                <div className="c-method-text">
                                    <span className="c-method-label">Niezobowiązująco</span>
                                    <span className="c-method-value">Umów luźną rozmowę</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM */}
                    <div className="contact-form-area">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group-premium">
                                <label htmlFor="name">Jak się nazywasz?</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="input-premium" 
                                    placeholder="Jan Kowalski" 
                                    required 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div className="form-group-premium">
                                <label htmlFor="email">Gdzie mam odpisać?</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="input-premium" 
                                    placeholder="jan@twojafirma.pl" 
                                    required 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="form-group-premium">
                                <label htmlFor="message">Opowiedz mi o swoim pomyśle</label>
                                <textarea 
                                    id="message" 
                                    className="input-premium textarea-premium" 
                                    placeholder="Cześć Kacper, szukam kogoś kto zbuduje dla mnie..." 
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-submit-premium" disabled={status === "loading"}>
                                {status === "loading" ? "Wysyłanie..." : status === "success" ? <><CheckCircle2 size={20}/> Wysłano pomyślnie!</> : (
                                    <>
                                        <Handshake size={20} />
                                        Wyślij zapytanie — to niezobowiązujące!
                                        <Send size={18} style={{ marginLeft: 'auto' }} />
                                    </>
                                )}
                            </button>
                            {status === "error" && <p style={{ color: '#f43f5e', textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>Wystąpił błąd przy wysyłaniu.</p>}
                            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>
                                Odpowiadam zazwyczaj w 24 godziny. 
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
