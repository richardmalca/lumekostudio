import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidad | Kawaii Animes",
    description:
        "Política de Privacidad de Kawaii Animes. Qué datos recopila la app, para qué se usan, cómo funcionan los anuncios y cómo eliminar tu cuenta.",
    robots: "index, follow",
};

export default function PrivacyPolicy() {
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
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
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
                            Política de{" "}
                            <span className="akwt-gradient-text">Privacidad</span>
                        </h1>
                        <p className="akwt-legal-date">Última actualización: Octubre 2026</p>
                    </div>
                </div>

                <div className="akwt-legal-content">
                    <div className="akwt-legal-divider" />

                    <div className="akwt-legal-section">
                        <p>
                            En <strong>Lumeko Studio</strong> nos importa tu privacidad. Esta política explica qué datos trata{" "}
                            <strong>Kawaii Animes</strong> (antes Kawaii Animes), la app para seguir los estrenos de anime,
                            para qué los usa y qué puedes hacer con ellos.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>1. Datos que recopilamos</h2>
                        <p>Para usar la app inicias sesión con tu cuenta de Google. Estos son los datos que se tratan:</p>
                        <ul>
                            <li>
                                <strong>Datos de tu cuenta:</strong> tu nombre, tu correo electrónico y un identificador único de
                                usuario, que nos entrega Google al iniciar sesión.
                            </li>
                            <li>
                                <strong>Tu lista y tus ajustes:</strong> los animes que guardas como favoritos y tus preferencias
                                de avisos. Se guardan en tu cuenta para que no los pierdas al cambiar de teléfono.
                            </li>
                            <li>
                                <strong>Mensajes de Ayuda y sugerencias:</strong> el texto que nos escribes desde la app, junto con
                                tu correo, la versión de la app y el tipo de dispositivo.
                            </li>
                            <li>
                                <strong>Salas de espera (chat):</strong> los mensajes que escribes en la sala de un capítulo, tu
                                primer nombre, tu identificador de usuario y la hora. Los ven quienes siguen el mismo anime. Si
                                reportas un mensaje, guardamos ese mensaje, a quien lo escribió y a quien lo reportó para revisarlo.
                                Al enviarse, cada mensaje pasa por un filtro automático de palabras graves; si lo incumple, no
                                llega a las demás personas. Los mensajes que alguien reporta se analizan con el servicio de inteligencia
                                artificial Gemini de Google (Vertex AI), que recibe solo el texto del mensaje, sin tu nombre ni tu
                                identificador; Google no lo usa para entrenar sus modelos.
                            </li>
                            <li>
                                <strong>Datos técnicos y de uso:</strong> identificadores de instalación y del dispositivo, el
                                identificador para recibir notificaciones, registros de errores, diagnósticos e interacciones con
                                la app (por ejemplo, qué pantallas se abren o si agregas un anime a tu lista). No registramos el
                                texto de tus búsquedas.
                            </li>
                            <li>
                                <strong>Datos para anuncios:</strong> la app muestra anuncios de Google AdMob, que puede usar el
                                identificador de publicidad de tu dispositivo, una ubicación aproximada deducida de tu conexión y
                                datos de interacción con los anuncios.
                            </li>
                        </ul>
                        <div className="akwt-legal-highlight">
                            <p>
                                <strong>No accedemos</strong> a tu ubicación exacta, ni a tus contactos, cámara, micrófono, fotos,
                                correos o calendarios de tu cuenta de Google. Tampoco recopilamos datos de pago ni contraseñas.
                            </p>
                        </div>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>2. Para qué usamos los datos</h2>
                        <ul>
                            <li>Iniciar tu sesión y guardar tu lista y tus ajustes.</li>
                            <li>Enviarte avisos cuando sale un capítulo, antes del estreno o en el resumen diario, según lo que elijas.</li>
                            <li>Responder las ideas y los problemas que nos reportas.</li>
                            <li>Entender cómo se usa la app, corregir fallas y mejorarla.</li>
                            <li>Mostrar anuncios y medir su rendimiento, lo que ayuda a mantener la app.</li>
                        </ul>
                        <p>No vendemos tus datos.</p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>3. Notificaciones</h2>
                        <p>
                            Para avisarte usamos Firebase Cloud Messaging. Te suscribimos a avisos de los animes de tu lista y
                            puedes cambiar o apagar los avisos en cualquier momento desde Perfil, en Ajustes, o desde los
                            ajustes de notificaciones de tu teléfono.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>4. Anuncios y tu consentimiento</h2>
                        <p>
                            Kawaii Animes muestra anuncios de Google AdMob. Donde la ley lo exige, como en el Espacio Económico
                            Europeo y el Reino Unido, la app te pide tu consentimiento antes de mostrar anuncios y puedes cambiar
                            tu elección en Perfil, Ajustes, Privacidad de anuncios. También puedes restablecer o eliminar el
                            identificador de publicidad desde los ajustes de tu teléfono.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>5. Servicios de terceros</h2>
                        <ul>
                            <li>
                                <strong>AniList:</strong> de aquí salen los datos públicos de los animes (fechas, portadas,
                                géneros). No recibe tus datos personales.
                            </li>
                            <li>
                                <strong>Google Sign-In y Firebase</strong> (Autenticación, Base de datos, Notificaciones, Analytics y
                                Crashlytics): procesan datos en nuestro nombre para que la app funcione.
                            </li>
                            <li>
                                <strong>Google AdMob:</strong> muestra los anuncios y puede recibir los datos descritos arriba.
                            </li>
                        </ul>
                        <p>
                            Puedes consultar la política de Google en{" "}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                policies.google.com/privacy
                            </a>
                            .
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>6. Cuánto tiempo guardamos los datos</h2>
                        <p>
                            Guardamos los datos de tu cuenta, tu lista y tus ajustes mientras tengas la cuenta. Los mensajes de
                            Ayuda y sugerencias se conservan para atender tu consulta. Los mensajes y la presencia de las salas
                            de espera se borran solos pocas horas después del estreno del capítulo; los reportes se conservan
                            para moderar. Los datos de analítica y errores se
                            conservan durante el periodo de retención de Firebase.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>7. Eliminar tu cuenta y tus datos</h2>
                        <p>
                            Puedes eliminar tu cuenta cuando quieras desde la app, en Perfil, con la opción Eliminar cuenta. Esto
                            borra tu perfil, tu lista, tus suscripciones a avisos y tu cuenta. Si no puedes entrar a la app, o
                            quieres que borremos también los mensajes que nos enviaste, sigue los pasos de esta página:
                        </p>
                        <p>
                            <Link href="/anime-kw-track/delete-account">Cómo eliminar tu cuenta y tus datos</Link>
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>8. Seguridad</h2>
                        <p>
                            Los datos viajan cifrados entre la app y nuestros servicios. Aun así, ningún sistema es perfecto; por
                            eso te recomendamos mantener tu teléfono y tu cuenta de Google protegidos.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>9. Cambios a esta política</h2>
                        <p>
                            Podemos actualizar esta política de vez en cuando. La fecha de arriba indica la última revisión y los
                            cambios entran en vigor cuando se publican en esta página.
                        </p>
                    </div>

                    <div className="akwt-legal-section">
                        <h2>10. Contacto</h2>
                        <p>Si tienes preguntas sobre esta política o sobre tus datos, escríbenos a:</p>
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
                        <li><Link href="/anime-kw-track/privacy" className="active">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
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
