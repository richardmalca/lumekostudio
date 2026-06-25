import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Términos y Condiciones — Anime KW Track",
    description:
        "Términos y Condiciones de uso de la aplicación móvil Anime KW Track de Lumeko Studio.",
    robots: "index, follow",
};

export default function TermsAndConditions() {
    return (
        <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

                .akwt-root {
                    background-color: #070e27;
                    color: #f0f8ff;
                    min-height: 100vh;
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

                .akwt-legal-hero {
                    padding: 140px clamp(1.5rem, 5vw, 4rem) 60px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .akwt-legal-hero::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(26,171,204,0.14) 0%, transparent 70%);
                    pointer-events: none;
                }

                .akwt-legal-hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(122,232,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(122,232,255,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
                    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
                }

                .akwt-legal-hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 720px;
                    margin: 0 auto;
                }

                .akwt-legal-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(122,232,255,0.08);
                    border: 1px solid rgba(122,232,255,0.2);
                    border-radius: 50px;
                    padding: 5px 14px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #7ae8ff;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .akwt-legal-hero h1 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    color: #f0f8ff;
                }

                .akwt-gradient-text {
                    background: linear-gradient(135deg, #fff 0%, #7ae8ff 60%, #1aabcc 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .akwt-legal-date {
                    font-size: 0.85rem;
                    color: #8ba8cc;
                    font-weight: 500;
                }

                .akwt-legal-content {
                    max-width: 720px;
                    margin: 0 auto;
                    padding: 0 clamp(1.5rem, 5vw, 4rem) 80px;
                }

                .akwt-legal-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #1a2d5a, transparent);
                    margin-bottom: 60px;
                }

                .akwt-legal-section {
                    margin-bottom: 3rem;
                }

                .akwt-legal-section h2 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #f0f8ff;
                    letter-spacing: -0.02em;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .akwt-legal-section h2::before {
                    content: '';
                    display: block;
                    width: 3px;
                    height: 1.2em;
                    background: linear-gradient(to bottom, #7ae8ff, #1aabcc);
                    border-radius: 2px;
                    flex-shrink: 0;
                }

                .akwt-legal-section p {
                    font-size: 0.95rem;
                    color: #8ba8cc;
                    line-height: 1.8;
                    margin-bottom: 0.9rem;
                }

                .akwt-legal-section p:last-child { margin-bottom: 0; }

                .akwt-legal-section ul,
                .akwt-legal-section ol {
                    padding-left: 1.5rem;
                    margin: 0.5rem 0 0.9rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .akwt-legal-section li {
                    font-size: 0.95rem;
                    color: #8ba8cc;
                    line-height: 1.7;
                }

                .akwt-legal-section li strong {
                    color: #c8dff5;
                }

                .akwt-legal-section strong {
                    color: #c8dff5;
                    font-weight: 600;
                }

                .akwt-legal-section a {
                    color: #4dd0e1;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-legal-section a:hover { color: #7ae8ff; }

                .akwt-legal-highlight {
                    background: rgba(122,232,255,0.06);
                    border: 1px solid rgba(122,232,255,0.15);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin: 1rem 0;
                }

                .akwt-legal-highlight p {
                    margin: 0;
                    color: #a8c8e8;
                }

                .akwt-legal-email {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(122,232,255,0.08);
                    border: 1px solid rgba(122,232,255,0.2);
                    border-radius: 8px;
                    padding: 8px 14px;
                    font-family: monospace;
                    font-size: 0.9rem;
                    color: #7ae8ff;
                    font-weight: 600;
                    margin-top: 0.5rem;
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .akwt-legal-email:hover {
                    background: rgba(122,232,255,0.14);
                    transform: translateY(-1px);
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
                .akwt-footer-links .active { color: #7ae8ff; }

                .akwt-footer-copy {
                    font-size: 0.78rem;
                    color: #8ba8cc;
                    opacity: 0.6;
                }

                @media (max-width: 700px) {
                    .akwt-nav-links { display: none; }
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
                        <li><Link href="/anime-kw-track">Inicio</Link></li>
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                    </ul>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.lumekostudio.animekwtrack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="akwt-btn-primary"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.16.8 1.21-.24 2.37-.94 3.68-.84 1.56.12 2.74.72 3.51 1.84-3.21 1.93-2.75 6.28.65 7.54-.7 1.74-1.52 3.36-3 4.54zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        Descargar
                    </a>
                </nav>

                <div className="akwt-legal-hero">
                    <div className="akwt-legal-hero-grid" />
                    <div className="akwt-legal-hero-inner">
                        <div className="akwt-legal-badge">Documento legal</div>
                        <h1>
                            Términos y{" "}
                            <span className="akwt-gradient-text">Condiciones</span>
                        </h1>
                        <p className="akwt-legal-date">Última actualización: Junio 2026</p>
                    </div>
                </div>

                <div className="akwt-legal-content">
                    <div className="akwt-legal-divider" />

                    <div className="akwt-legal-section">
                        <p>
                            Al descargar, instalar o utilizar <strong>Anime KW Track</strong>, aceptas los presentes
                            Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices
                            la aplicación. Esta aplicación es desarrollada y mantenida por <strong>Lumeko Studio</strong>.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>1. Descripción del Servicio</h2>
                        <p>
                            Anime KW Track es una aplicación móvil que permite al usuario hacer seguimiento de series de
                            anime, recibir notificaciones de nuevos episodios y guardar sus preferencias personales.
                            La aplicación ofrece opcionalmente inicio de sesión con Google para mejorar la experiencia
                            de notificaciones y personalización.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>2. Inicio de Sesión con Google</h2>
                        <p>
                            La aplicación ofrece la posibilidad de autenticarse mediante <strong>Google Sign-In</strong>.
                            Este proceso es opcional y se realiza exclusivamente para:
                        </p>
                        <ul>
                            <li>Personalizar el envío de notificaciones push de nuevos episodios de anime.</li>
                            <li>Guardar y sincronizar las preferencias del usuario (series favoritas y configuraciones).</li>
                            <li>Identificar de forma segura al usuario para mantener sus preferencias entre dispositivos o reinstalaciones.</li>
                        </ul>
                        <div className="akwt-legal-highlight">
                            <p>
                                Al iniciar sesión con Google, la aplicación accede únicamente a tu{" "}
                                <strong>dirección de correo electrónico</strong> como identificador. No accedemos ni leemos
                                el contenido de tu correo, calendarios, contactos ni ningún otro dato asociado a tu cuenta.
                            </p>
                        </div>
                        <p>
                            Puedes revocar el acceso en cualquier momento desde la configuración de tu cuenta en{" "}
                            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                                myaccount.google.com/permissions
                            </a>
                            .
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>3. Uso Aceptable</h2>
                        <p>Al usar Anime KW Track, te comprometes a:</p>
                        <ul>
                            <li>No utilizar la aplicación para fines ilegales o no autorizados.</li>
                            <li>No intentar acceder, modificar o interferir con los sistemas o datos de otros usuarios.</li>
                            <li>No reproducir, distribuir ni modificar el contenido de la aplicación sin autorización expresa de Lumeko Studio.</li>
                        </ul>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>4. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido, diseño, código y materiales de <strong>Anime KW Track</strong> son propiedad
                            exclusiva de <strong>Lumeko Studio</strong>, a menos que se indique lo contrario. La información
                            sobre anime (títulos, imágenes, sinopsis) proviene de fuentes públicas como{" "}
                            <strong>AniList</strong> y pertenece a sus respectivos titulares.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>5. Limitación de Responsabilidad</h2>
                        <p>
                            Lumeko Studio no se responsabiliza por inexactitudes en las fechas de emisión de episodios,
                            interrupciones del servicio ni por cualquier pérdida de datos derivada del uso de la aplicación.
                            El servicio se proporciona <em>«tal como está»</em> sin garantías de ningún tipo.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>6. Modificaciones</h2>
                        <p>
                            Lumeko Studio se reserva el derecho de actualizar estos Términos y Condiciones en cualquier
                            momento. Se notificará dentro de la aplicación ante cambios significativos. El uso continuado
                            de la aplicación después de dichos cambios constituye la aceptación de los nuevos términos.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>7. Política de Privacidad</h2>
                        <p>
                            El uso de la aplicación también está sujeto a nuestra{" "}
                            <Link href="/anime-kw-track/privacy">Política de Privacidad</Link>
                            , la cual forma parte integral de estos Términos.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>8. Contacto</h2>
                        <p>Para cualquier consulta sobre estos Términos y Condiciones, contáctanos en:</p>
                        <a href="mailto:soporte@lumekostudio.com" className="akwt-legal-email">
                            soporte@lumekostudio.com
                        </a>
                    </div>
                </div>

                <footer className="akwt-footer">
                    <Link href="/" className="akwt-footer-brand">
                        <Image src="/icon.png" alt="Anime KW Track" width={28} height={28} style={{ borderRadius: 8 }} />
                        Anime KW Track · Lumeko Studio
                    </Link>
                    <ul className="akwt-footer-links">
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms" className="active">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="akwt-footer-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
