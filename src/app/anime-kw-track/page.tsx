import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Anime KW Track — Sigue tu anime favorito",
    description:
        "Aplicación móvil para seguir tus series de anime, recibir notificaciones de nuevos episodios y organizar tus favoritos. Datos impulsados por AniList.",
    robots: "index, follow",
    openGraph: {
        title: "Anime KW Track",
        description: "Tu tracker de anime definitivo. Datos en tiempo real de AniList.",
        images: ["/icon.png"],
    },
};

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        title: "Notificaciones en tiempo real",
        desc: "Recibe alertas instantáneas cuando estrena un nuevo episodio de los animes que sigues.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Lista de favoritos",
        desc: "Guarda y organiza tus series favoritas. Sincronización automática entre dispositivos con Google.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: "Calendario de emisiones",
        desc: "Consulta el horario semanal de todos los animes en emisión, ajustado a tu zona horaria.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
        ),
        title: "Búsqueda avanzada",
        desc: "Encuentra cualquier anime por nombre, género, temporada o estudio de producción.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Estadísticas de seguimiento",
        desc: "Visualiza cuántos episodios has visto, qué géneros dominas y tu actividad semanal.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: "Sincronización en la nube",
        desc: "Tus datos siempre disponibles. Inicia sesión con Google y accede desde cualquier dispositivo.",
    },
];

export default function AnimeKwTrackPage() {
    return (
        <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

                .akwt-root {
                    background-color: #070e27;
                    color: #f0f8ff;
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                * { box-sizing: border-box; }

                .akwt-nav {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 clamp(1.5rem, 5vw, 4rem);
                    height: 68px;
                    background: rgba(7,14,39,0.88);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid #1a2d5a;
                }

                .akwt-nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    color: #f0f8ff;
                }

                .akwt-nav-brand span {
                    font-size: 1.1rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }

                .akwt-nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .akwt-nav-links a {
                    color: #8ba8cc;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-nav-links a:hover { color: #7ae8ff; }

                .akwt-btn-primary {
                    background: linear-gradient(135deg, #1aabcc, #7ae8ff);
                    color: #070e27;
                    border: none;
                    padding: 0.55rem 1.4rem;
                    border-radius: 50px;
                    font-size: 0.88rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.25s;
                }

                .akwt-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(122,232,255,0.35);
                }

                .akwt-hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
                }

                .akwt-hero-bg {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,171,204,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(122,232,255,0.08) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 40% at 10% 60%, rgba(26,171,204,0.06) 0%, transparent 60%);
                    pointer-events: none;
                }

                .akwt-hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(122,232,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(122,232,255,0.04) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
                    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
                }

                .akwt-hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 800px;
                    width: 100%;
                    text-align: center;
                    margin: 0 auto;
                }

                .akwt-hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(122,232,255,0.08);
                    border: 1px solid rgba(122,232,255,0.25);
                    border-radius: 50px;
                    padding: 6px 16px 6px 10px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #7ae8ff;
                    margin-bottom: 2rem;
                }

                .akwt-badge-dot {
                    width: 8px; height: 8px;
                    background: #7ae8ff;
                    border-radius: 50%;
                    animation: pulseDot 2s infinite;
                }

                @keyframes pulseDot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }

                .akwt-hero h1 {
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.05;
                    margin-bottom: 1.5rem;
                    color: #f0f8ff;
                }

                .akwt-gradient-text {
                    background: linear-gradient(135deg, #fff 0%, #7ae8ff 60%, #1aabcc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .akwt-hero-desc {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: #8ba8cc;
                    margin-bottom: 2.5rem;
                    max-width: 560px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .akwt-hero-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .akwt-btn-ghost {
                    background: transparent;
                    color: #8ba8cc;
                    border: 1px solid #1a2d5a;
                    padding: 0.65rem 1.4rem;
                    border-radius: 50px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.25s;
                }

                .akwt-btn-ghost:hover {
                    border-color: #7ae8ff;
                    color: #7ae8ff;
                    background: rgba(122,232,255,0.08);
                }

                .akwt-btn-lg {
                    padding: 0.85rem 2rem;
                    font-size: 1rem;
                    font-weight: 700;
                    border-radius: 50px;
                }

                .akwt-hero-scroll {
                    margin-top: 4rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    color: #8ba8cc;
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                .akwt-scroll-arrow {
                    width: 1px;
                    height: 40px;
                    background: linear-gradient(to bottom, #1a2d5a, transparent);
                    animation: scrollPulse 2s infinite;
                }

                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 1; }
                }

                .akwt-section {
                    padding: 100px clamp(1.5rem, 5vw, 4rem);
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .akwt-section-label {
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #7ae8ff;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: center;
                }

                .akwt-section-label::before {
                    content: '';
                    display: block;
                    width: 24px; height: 2px;
                    background: #7ae8ff;
                    border-radius: 2px;
                }

                .akwt-section-label::after {
                    content: '';
                    display: block;
                    width: 24px; height: 2px;
                    background: #7ae8ff;
                    border-radius: 2px;
                }

                .akwt-section-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    letter-spacing: -0.04em;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    color: #f0f8ff;
                    text-align: center;
                }

                .akwt-section-sub {
                    font-size: 1.05rem;
                    color: #8ba8cc;
                    max-width: 560px;
                    line-height: 1.7;
                    text-align: center;
                    margin: 0 auto;
                }

                .akwt-features-wrap {
                    background: linear-gradient(180deg, #070e27 0%, #0a1430 50%, #070e27 100%);
                    position: relative;
                }

                .akwt-features-wrap::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 80% 50% at 50% 50%, rgba(26,171,204,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                .akwt-features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-top: 3.5rem;
                }

                .akwt-feature-card {
                    background: #111e42;
                    border: 1px solid #1a2d5a;
                    border-radius: 20px;
                    padding: 2rem;
                    transition: all 0.3s;
                    position: relative;
                    overflow: hidden;
                }

                .akwt-feature-card:hover {
                    border-color: rgba(122,232,255,0.35);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(122,232,255,0.1);
                }

                .akwt-feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(122,232,255,0.4), transparent);
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .akwt-feature-card:hover::before { opacity: 1; }

                .akwt-feature-icon {
                    width: 52px; height: 52px;
                    background: rgba(122,232,255,0.08);
                    border: 1px solid rgba(122,232,255,0.2);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7ae8ff;
                    margin-bottom: 1.25rem;
                }

                .akwt-feature-icon svg { width: 26px; height: 26px; }

                .akwt-feature-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin-bottom: 0.6rem;
                    letter-spacing: -0.02em;
                    color: #f0f8ff;
                }

                .akwt-feature-desc {
                    font-size: 0.9rem;
                    color: #8ba8cc;
                    line-height: 1.65;
                }

                .akwt-anilist-section {
                    padding: 0 clamp(1.5rem, 5vw, 4rem) 80px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .akwt-anilist-card {
                    background: linear-gradient(135deg, #111e42 0%, #0d1a3a 100%);
                    border: 1px solid #1a2d5a;
                    border-radius: 24px;
                    padding: 3rem;
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .akwt-anilist-card::before {
                    content: '';
                    position: absolute;
                    top: -50px; right: -50px;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(2,169,244,0.12) 0%, transparent 70%);
                    pointer-events: none;
                }

                .akwt-anilist-icon {
                    width: 72px; height: 72px;
                    background: linear-gradient(135deg, #0288d1, #01579b);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: white;
                    flex-shrink: 0;
                    box-shadow: 0 8px 24px rgba(2,136,209,0.35);
                }

                .akwt-anilist-title {
                    font-size: 1.3rem;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    margin-bottom: 0.5rem;
                    color: #f0f8ff;
                }

                .akwt-anilist-desc {
                    font-size: 0.92rem;
                    color: #8ba8cc;
                    line-height: 1.6;
                    margin: 0;
                }

                .akwt-anilist-link {
                    color: #4dd0e1;
                    text-decoration: none;
                    font-weight: 600;
                    transition: color 0.2s;
                }

                .akwt-anilist-link:hover { color: #7ae8ff; }

                .akwt-cta-section {
                    text-align: center;
                    padding: 100px clamp(1.5rem, 5vw, 4rem);
                    position: relative;
                    overflow: hidden;
                }

                .akwt-cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 50%; transform: translateX(-50%);
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(26,171,204,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .akwt-cta-section h2 {
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.1;
                    margin-bottom: 1.25rem;
                    position: relative;
                    z-index: 1;
                    color: #f0f8ff;
                }

                .akwt-cta-section p {
                    font-size: 1.05rem;
                    color: #8ba8cc;
                    margin-bottom: 2.5rem;
                    max-width: 480px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.7;
                    position: relative;
                    z-index: 1;
                }

                .akwt-cta-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    position: relative;
                    z-index: 1;
                }

                .akwt-footer {
                    border-top: 1px solid #1a2d5a;
                    padding: 2.5rem clamp(1.5rem, 5vw, 4rem);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .akwt-footer-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: #8ba8cc;
                    text-decoration: none;
                }

                .akwt-footer-links {
                    display: flex;
                    gap: 1.5rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .akwt-footer-links a {
                    color: #8ba8cc;
                    text-decoration: none;
                    font-size: 0.82rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-footer-links a:hover { color: #7ae8ff; }

                .akwt-footer-copy {
                    font-size: 0.78rem;
                    color: #8ba8cc;
                    opacity: 0.6;
                }

                @media (max-width: 900px) {
                    .akwt-features-grid { grid-template-columns: repeat(2, 1fr); }
                    .akwt-nav-links { display: none; }
                    .akwt-anilist-card { flex-direction: column; text-align: center; }
                }

                @media (max-width: 580px) {
                    .akwt-features-grid { grid-template-columns: 1fr; }
                    .akwt-footer { flex-direction: column; text-align: center; }
                }
            `}</style>

            <div className="akwt-root">
                <nav className="akwt-nav">
                    <Link href="/anime-kw-track" className="akwt-nav-brand">
                        <Image src="/icon.png" alt="Anime KW Track" width={36} height={36} style={{ borderRadius: 10 }} />
                        <span>Anime KW Track</span>
                    </Link>
                    <ul className="akwt-nav-links">
                        <li><a href="#features">Características</a></li>
                        <li><a href="#anilist">AniList</a></li>
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                    </ul>
                    <a href="#download" className="akwt-btn-primary">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.16.8 1.21-.24 2.37-.94 3.68-.84 1.56.12 2.74.72 3.51 1.84-3.21 1.93-2.75 6.28.65 7.54-.7 1.74-1.52 3.36-3 4.54zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        Descargar
                    </a>
                </nav>

                <section className="akwt-hero">
                    <div className="akwt-hero-bg" />
                    <div className="akwt-hero-grid" />
                    <div className="akwt-hero-inner">
                        <div className="akwt-hero-badge">
                            <span className="akwt-badge-dot" />
                            Datos en tiempo real · AniList API
                        </div>
                        <h1>
                            Tu tracker de anime
                            <br />
                            <span className="akwt-gradient-text">definitivo</span>
                        </h1>
                        <p className="akwt-hero-desc">
                            Sigue todas tus series en un solo lugar. Recibe notificaciones de nuevos episodios,
                            organiza tus favoritos y nunca pierdas un estreno.
                        </p>
                        <div className="akwt-hero-actions">
                            <a href="#download" className="akwt-btn-primary akwt-btn-lg">
                                Descargar gratis
                            </a>
                            <a href="#features" className="akwt-btn-ghost akwt-btn-lg">
                                Ver características
                            </a>
                        </div>
                        <div className="akwt-hero-scroll">
                            <div className="akwt-scroll-arrow" />
                        </div>
                    </div>
                </section>

                <section id="features" className="akwt-features-wrap">
                    <div className="akwt-section">
                        <div className="akwt-section-label">Características</div>
                        <h2 className="akwt-section-title">
                            Todo lo que necesitas
                            <br />
                            para seguir tu anime
                        </h2>
                        <p className="akwt-section-sub">
                            Diseñado para fans del anime. Sin complicaciones, sin distracciones.
                            Solo tus series, tus notificaciones y tu lista.
                        </p>
                        <div className="akwt-features-grid">
                            {features.map((f, i) => (
                                <div key={i} className="akwt-feature-card">
                                    <div className="akwt-feature-icon">{f.icon}</div>
                                    <div className="akwt-feature-title">{f.title}</div>
                                    <div className="akwt-feature-desc">{f.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div id="anilist">
                    <div className="akwt-anilist-section">
                        <div className="akwt-anilist-card">
                            <div className="akwt-anilist-icon">AL</div>
                            <div>
                                <div className="akwt-anilist-title">Impulsado por AniList</div>
                                <p className="akwt-anilist-desc">
                                    Toda la información sobre series, episodios, fechas de emisión y portadas proviene
                                    de{" "}
                                    <a href="https://anilist.co" target="_blank" rel="noopener noreferrer" className="akwt-anilist-link">
                                        AniList
                                    </a>
                                    , la base de datos de anime y manga más completa.
                                    Los datos de los animes y sus imágenes son propiedad de sus respectivos titulares
                                    (estudios de animación y distribuidores).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="download" className="akwt-cta-section">
                    <div className="akwt-hero-grid" style={{ opacity: 0.4 }} />
                    <h2>
                        Empieza a seguir tu anime
                        <br />
                        <span className="akwt-gradient-text">hoy mismo</span>
                    </h2>
                    <p>
                        Gratis, sin anuncios intrusivos. Disponible para <strong style={{ color: '#c8dff5' }}>Android</strong>.<br />
                        Inicia sesión con Google para sincronizar tus favoritos entre dispositivos.
                    </p>
                    <div className="akwt-cta-actions">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.lumekostudio.animekwtrack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="akwt-btn-primary akwt-btn-lg"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                                <path d="M3.18 23.76c.37.21.8.22 1.18.04L14.6 12 4.36.2C3.98.02 3.55.03 3.18.24 2.44.66 2 1.43 2 2.28v19.44c0 .85.44 1.62 1.18 2.04zm4.93-14.4l2.17 2.17-6.73 3.88 4.56-6.05zm9.07 5.23l-2.56 1.48-2.38-2.38 2.38-2.38 2.56 1.48c.73.42.73 1.48 0 1.8zm-11.64 4.4l6.73 3.88-2.17 2.17-4.56-6.05z" />
                            </svg>
                            Descargar en Google Play
                        </a>
                        <Link href="/anime-kw-track/privacy" className="akwt-btn-ghost akwt-btn-lg">
                            Política de privacidad
                        </Link>
                    </div>
                </section>

                <footer className="akwt-footer">
                    <Link href="/" className="akwt-footer-brand">
                        <Image src="/icon.png" alt="Anime KW Track" width={28} height={28} style={{ borderRadius: 8 }} />
                        Anime KW Track · Lumeko Studio
                    </Link>
                    <ul className="akwt-footer-links">
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="akwt-footer-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
