import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política DMCA | Kawaii Animes",
    description:
        "Política de eliminación de contenido bajo la Ley de Derechos de Autor del Milenio Digital (DMCA) para Kawaii Animes.",
    robots: "index, follow",
};

export default function DmcaPolicy() {
    return (
        <div style={{ fontFamily: "'Roboto Condensed', 'Segoe UI', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700;800&display=swap');

                .akwt-root {
                    background-color: #0D0C13;
                    color: #FBFBFE;
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
                    background: rgba(13,12,19,0.88);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid #262436;
                }

                .akwt-nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    color: #FBFBFE;
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
                    color: #9895AB;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-nav-links a:hover { color: #FF5E97; }

                .akwt-btn-primary {
                    background: linear-gradient(135deg, #AC87FF, #FF5E97);
                    color: #0D0C13;
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
                    box-shadow: 0 8px 24px rgba(255,94,151,0.35);
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
                    background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(172,135,255,0.14) 0%, transparent 70%);
                    pointer-events: none;
                }

                .akwt-legal-hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,94,151,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,94,151,0.03) 1px, transparent 1px);
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
                    background: rgba(255,94,151,0.08);
                    border: 1px solid rgba(255,94,151,0.2);
                    border-radius: 50px;
                    padding: 5px 14px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #FF5E97;
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
                    color: #FBFBFE;
                }

                .akwt-gradient-text {
                    background: linear-gradient(135deg, #fff 0%, #FF5E97 60%, #AC87FF 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .akwt-legal-date {
                    font-size: 0.85rem;
                    color: #9895AB;
                    font-weight: 500;
                }

                .akwt-legal-content {
                    max-width: 720px;
                    margin: 0 auto;
                    padding: 0 clamp(1.5rem, 5vw, 4rem) 80px;
                }

                .akwt-legal-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #262436, transparent);
                    margin-bottom: 60px;
                }

                .akwt-legal-section {
                    margin-bottom: 3rem;
                }

                .akwt-legal-section h2 {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #FBFBFE;
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
                    background: linear-gradient(to bottom, #FF5E97, #AC87FF);
                    border-radius: 2px;
                    flex-shrink: 0;
                }

                .akwt-legal-section p {
                    font-size: 0.95rem;
                    color: #9895AB;
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

                .akwt-legal-section ul { list-style: disc; }
                .akwt-legal-section ol { list-style: decimal; }
                .akwt-legal-section li::marker { color: #FF5E97; font-weight: 700; }

                .akwt-legal-section li {
                    font-size: 0.95rem;
                    color: #9895AB;
                    line-height: 1.7;
                }

                .akwt-legal-section li strong {
                    color: #D8D6E6;
                }

                .akwt-legal-section strong {
                    color: #D8D6E6;
                    font-weight: 600;
                }

                .akwt-legal-section em {
                    color: #B9B6CC;
                    font-style: italic;
                }

                .akwt-legal-section a {
                    color: #4EE2B0;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-legal-section a:hover { color: #FF5E97; }

                .akwt-legal-highlight {
                    background: rgba(255,94,151,0.06);
                    border: 1px solid rgba(255,94,151,0.15);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin: 1rem 0;
                }

                .akwt-legal-highlight p {
                    margin: 0;
                    color: #B9B6CC;
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
                    background: rgba(255,94,151,0.08);
                    border: 1px solid rgba(255,94,151,0.2);
                    border-radius: 8px;
                    padding: 8px 14px;
                    font-family: monospace;
                    font-size: 0.9rem;
                    color: #FF5E97;
                    font-weight: 600;
                    margin-top: 0.5rem;
                    text-decoration: none;
                    transition: all 0.2s;
                }

                .akwt-legal-email:hover {
                    background: rgba(255,94,151,0.14);
                    transform: translateY(-1px);
                }

                .akwt-legal-subject {
                    display: inline-block;
                    background: rgba(255,94,151,0.05);
                    border: 1px solid rgba(255,94,151,0.15);
                    border-radius: 6px;
                    padding: 3px 10px;
                    font-family: monospace;
                    font-size: 0.85rem;
                    color: #9895AB;
                    margin-top: 6px;
                }

                .akwt-footer {
                    border-top: 1px solid #262436;
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
                    color: #9895AB;
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
                    color: #9895AB;
                    text-decoration: none;
                    font-size: 0.82rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .akwt-footer-links a:hover { color: #FF5E97; }
                .akwt-footer-links .active { color: #FF5E97; }

                .akwt-footer-copy {
                    font-size: 0.78rem;
                    color: #9895AB;
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
                        <Image src="/icon.png" alt="Kawaii Animes" width={36} height={36} style={{ borderRadius: 10 }} />
                        <span>Kawaii Animes</span>
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
                            <path d="M5 3.2v17.6c0 .8.9 1.3 1.6.9l14-8.8c.6-.4.6-1.3 0-1.7L6.6 2.3C5.9 1.9 5 2.4 5 3.2z" />
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
                        <p className="akwt-legal-date">Última actualización: Octubre 2026</p>
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
                            Si consideras que algún contenido presente en <strong>Kawaii Animes</strong> infringe
                            tus derechos de autor, puedes notificarnos siguiendo el procedimiento descrito a continuación.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>1. Naturaleza del Contenido</h2>
                        <p>
                            Kawaii Animes es una aplicación de seguimiento que muestra información pública sobre series
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
                            <span className="akwt-legal-subject">Asunto recomendado: DMCA Notice - Kawaii Animes</span>
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
                        <Image src="/icon.png" alt="Kawaii Animes" width={28} height={28} style={{ borderRadius: 8 }} />
                        Kawaii Animes · Lumeko Studio
                    </Link>
                    <ul className="akwt-footer-links">
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca" className="active">DMCA</Link></li>
                        <li><Link href="/anime-kw-track/delete-account">Eliminar cuenta</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="akwt-footer-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
