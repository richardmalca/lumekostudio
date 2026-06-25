import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política DMCA — Anime KW Track",
    description:
        "Política de eliminación de contenido bajo la Ley de Derechos de Autor del Milenio Digital (DMCA) para Anime KW Track.",
    robots: "index, follow",
};

export default function DmcaPolicy() {
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

                .akwt-legal-section em {
                    color: #a8c8e8;
                    font-style: italic;
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

                .akwt-legal-warning {
                    background: rgba(245,101,101,0.07);
                    border: 1px solid rgba(245,101,101,0.2);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin: 1rem 0;
                }

                .akwt-legal-warning p {
                    margin: 0;
                    color: #fc8181;
                    font-size: 0.92rem;
                    line-height: 1.7;
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

                .akwt-legal-subject {
                    display: inline-block;
                    background: rgba(122,232,255,0.05);
                    border: 1px solid rgba(122,232,255,0.15);
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-family: monospace;
                    font-size: 0.85rem;
                    color: #8ba8cc;
                    margin-top: 6px;
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
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
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
                            Política{" "}
                            <span className="akwt-gradient-text">DMCA</span>
                        </h1>
                        <p className="akwt-legal-date">Última actualización: Junio 2026</p>
                    </div>
                </div>

                <div className="akwt-legal-content">
                    <div className="akwt-legal-divider" />

                    <div className="akwt-legal-section">
                        <p>
                            <strong>Lumeko Studio</strong> respeta los derechos de propiedad intelectual de terceros
                            y cumple con las disposiciones de la{" "}
                            <em>Digital Millennium Copyright Act (DMCA)</em> de los Estados Unidos y legislación
                            equivalente aplicable.
                        </p>
                        <p>
                            Si consideras que algún contenido presente en <strong>Anime KW Track</strong> infringe
                            tus derechos de autor, puedes notificarnos siguiendo el procedimiento descrito a continuación.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>1. Naturaleza del Contenido</h2>
                        <p>
                            Anime KW Track es una aplicación de seguimiento que muestra información pública sobre series
                            de anime, incluyendo títulos, fechas de emisión y datos obtenidos de{" "}
                            <strong>AniList</strong>. La aplicación no aloja ni distribuye contenido de video, audio
                            ni archivos con obra protegida.
                        </p>
                        <p>
                            Las imágenes de portada de anime que pudieran mostrarse provienen de APIs públicas y son
                            propiedad de sus respectivos titulares (estudios de animación, distribuidores u otras entidades).
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>2. Cómo Reportar una Infracción</h2>
                        <p>
                            Para enviar una notificación de infracción de derechos de autor válida bajo la DMCA,
                            tu comunicación debe incluir:
                        </p>
                        <ol>
                            <li>
                                <strong>Identificación de la obra protegida:</strong>{" "}
                                descripción del material con derechos de autor que consideras infringido.
                            </li>
                            <li>
                                <strong>Identificación del contenido infractor:</strong>{" "}
                                descripción precisa de dónde se encuentra el material dentro de la aplicación
                                (captura de pantalla, descripción del elemento, etc.).
                            </li>
                            <li>
                                <strong>Información de contacto:</strong>{" "}
                                nombre completo, dirección de correo electrónico y número de teléfono.
                            </li>
                            <li>
                                <strong>Declaración de buena fe:</strong>{" "}
                                una declaración de que crees, de buena fe, que el uso del material no está autorizado
                                por el titular de los derechos de autor, su agente o la ley.
                            </li>
                            <li>
                                <strong>Declaración de exactitud:</strong>{" "}
                                una declaración bajo pena de perjurio de que la información es exacta y que eres
                                el titular de los derechos o estás autorizado para actuar en su nombre.
                            </li>
                            <li>
                                <strong>Firma:</strong>{" "}
                                firma física o electrónica del titular o del representante autorizado.
                            </li>
                        </ol>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>3. Dónde Enviar la Notificación</h2>
                        <p>Envía tu notificación DMCA a nuestro agente designado mediante correo electrónico:</p>
                        <a href="mailto:soporte@lumekostudio.com" className="akwt-legal-email">
                            soporte@lumekostudio.com
                        </a>
                        <div>
                            <span className="akwt-legal-subject">Asunto recomendado: DMCA Notice - Anime KW Track</span>
                        </div>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>4. Respuesta ante Notificaciones Válidas</h2>
                        <p>
                            Tras recibir una notificación válida, Lumeko Studio investigará la reclamación y, si corresponde,
                            procederá a eliminar o desactivar el acceso al contenido señalado en un plazo razonable.
                            En caso de reclamaciones repetidas o infractores reincidentes, podremos cancelar el acceso
                            a la aplicación.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>5. Contra-Notificación</h2>
                        <p>
                            Si consideras que tu contenido fue eliminado por error, puedes enviar una contra-notificación
                            con tu información de contacto, la identificación del contenido eliminado y una declaración bajo
                            pena de perjurio de que la eliminación fue producto de un error. Lumeko Studio analizará la
                            contra-notificación y actuará conforme a la normativa aplicable.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>6. Avisos Falsos</h2>
                        <div className="akwt-legal-warning">
                            <p>
                                Presentar una notificación DMCA falsa o fraudulenta puede acarrear responsabilidad legal.
                                Lumeko Studio se reserva el derecho de tomar medidas legales contra cualquier parte
                                que abuse de este proceso.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="akwt-footer">
                    <Link href="/" className="akwt-footer-brand">
                        <Image src="/icon.png" alt="Anime KW Track" width={28} height={28} style={{ borderRadius: 8 }} />
                        Anime KW Track · Lumeko Studio
                    </Link>
                    <ul className="akwt-footer-links">
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca" className="active">DMCA</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="akwt-footer-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
