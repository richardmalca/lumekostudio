import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Términos y Condiciones | Kawaii Animes",
    description:
        "Términos y Condiciones de uso de Kawaii Animes, la app de Lumeko Studio para seguir los estrenos de anime.",
    robots: "index, follow",
};

export default function TermsAndConditions() {
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
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
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
                            Términos y{" "}
                            <span className="akwt-gradient-text">Condiciones</span>
                        </h1>
                        <p className="akwt-legal-date">Última actualización: Octubre 2026</p>
                    </div>
                </div>

                <div className="akwt-legal-content">
                    <div className="akwt-legal-divider" />

                    <div className="akwt-legal-section">
                        <p>
                            Al descargar, instalar o usar <strong>Kawaii Animes</strong>, aceptas estos Términos y Condiciones. Si no
                            estás de acuerdo, te pedimos que no uses la aplicación. La app es desarrollada y mantenida por{" "}
                            <strong>Lumeko Studio</strong>.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>1. Qué es Kawaii Animes</h2>
                        <p>
                            Kawaii Animes es una app para Android que te muestra cuándo sale cada capítulo de los animes, te permite
                            guardar tu lista, buscar con filtros y recibir avisos de estrenos. La app no ofrece episodios para ver:
                            solo te indica en qué plataformas están disponibles.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>2. Tu cuenta</h2>
                        <p>
                            Para usar la app inicias sesión con tu cuenta de Google. La app recibe tu nombre, tu correo y un
                            identificador de usuario, y los usa para guardar tu lista y tus ajustes y para enviarte los avisos que
                            elijas. No leemos tu correo, calendarios ni contactos. Puedes revocar el acceso en cualquier momento
                            desde{" "}
                            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                                myaccount.google.com/permissions
                            </a>
                            .
                        </p>
                        <p>
                            Puedes eliminar tu cuenta cuando quieras desde la app o siguiendo los pasos de{" "}
                            <Link href="/anime-kw-track/delete-account">esta página</Link>.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>3. Anuncios</h2>
                        <p>
                            La app es gratuita y muestra anuncios de Google AdMob, que ayudan a mantenerla. Donde la ley lo exige, te
                            pedimos tu consentimiento antes de mostrarlos. Más detalles en la{" "}
                            <Link href="/anime-kw-track/privacy">Política de Privacidad</Link>.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>4. Salas de espera (chat)</h2>
                        <p>
                            Las salas de espera son un espacio público entre quienes siguen un anime. En ellas no puedes escribir
                            insultos, acoso, odio, amenazas, spam, enlaces ni datos personales. Podemos revisar los mensajes
                            reportados, borrarlos, silenciar cuentas o quitar el acceso al chat a quien incumpla estas normas. Puedes
                            reportar un mensaje o bloquear a una persona con la bandera que aparece junto a él.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>5. Uso aceptable</h2>
                        <p>Al usar Kawaii Animes te comprometes a:</p>
                        <ul>
                            <li>No usar la app para fines ilegales o no autorizados.</li>
                            <li>No intentar acceder, modificar o interferir con los sistemas o los datos de otras personas.</li>
                            <li>No enviar mensajes abusivos o con contenido ilegal desde Ayuda y sugerencias.</li>
                            <li>No copiar, distribuir ni modificar el contenido de la app sin autorización de Lumeko Studio.</li>
                        </ul>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>6. Propiedad intelectual</h2>
                        <p>
                            El diseño, el código y los materiales de Kawaii Animes son de <strong>Lumeko Studio</strong>, salvo que
                            se indique lo contrario. La información sobre los animes (títulos, portadas, sinopsis) viene de{" "}
                            <a href="https://anilist.co" target="_blank" rel="noopener noreferrer">AniList</a> y pertenece a sus
                            respectivos titulares. Kawaii Animes no está afiliada a AniList ni a las plataformas de streaming que
                            menciona.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>7. Limitación de responsabilidad</h2>
                        <p>
                            Lumeko Studio no se responsabiliza por inexactitudes en las fechas y horas de emisión, por
                            interrupciones del servicio ni por la pérdida de datos derivada del uso de la app. El servicio se
                            ofrece tal como está, sin garantías de ningún tipo.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>8. Cambios</h2>
                        <p>
                            Podemos actualizar estos términos en cualquier momento. Si el cambio es importante, lo avisaremos en la
                            app. Seguir usándola después del cambio significa que aceptas los nuevos términos.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>9. Contacto</h2>
                        <p>Para cualquier consulta sobre estos términos, escríbenos a:</p>
                        <a href="mailto:soporte@lumekostudio.com" className="akwt-legal-email">
                            soporte@lumekostudio.com
                        </a>
                    </div>
                </div>

                <footer className="akwt-footer">
                    <Link href="/" className="akwt-footer-brand">
                        <Image src="/icon.png" alt="Kawaii Animes" width={28} height={28} style={{ borderRadius: 8 }} />
                        Kawaii Animes · Lumeko Studio
                    </Link>
                    <ul className="akwt-footer-links">
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms" className="active">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                        <li><Link href="/anime-kw-track/delete-account">Eliminar cuenta</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="akwt-footer-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
