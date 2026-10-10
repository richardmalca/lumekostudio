import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.lumekostudio.animekwtrack";

export const metadata: Metadata = {
    title: "Kawaii Animes | Calendario de estrenos de anime",
    description:
        "Kawaii Animes te dice cuándo sale cada capítulo, a la hora de tu zona, y te avisa para que no se te pase ninguno. Calendario, tu lista, búsqueda con filtros y widget. Para Android.",
    robots: "index, follow",
    openGraph: {
        title: "Kawaii Animes",
        description: "Tus estrenos de anime, a tu hora. Calendario, avisos y tu lista en una sola app.",
        images: ["/kawaii-animes/og.png"],
    },
};

const rows = [
    {
        tag: "Calendario",
        title: "Cada capítulo a su hora",
        accent: "su hora",
        text: "Mira los próximos 7 días con la hora exacta de cada capítulo, ya convertida a tu zona horaria. Filtra por tu lista para ver solo lo que sigues.",
        points: ["Selector de 7 días con el día de hoy marcado", "Línea de tiempo por hora", "Plataforma donde se emite cada capítulo"],
        img: "calendario",
        color: "#4EE2B0",
    },
    {
        tag: "Mi lista",
        title: "Tu lista, con aviso de cada novedad",
        accent: "novedad",
        text: "Guarda tus animes y la app te muestra primero cuál es el próximo en salir, con su cuenta atrás. Los avisos llegan al emitirse o hasta 60 minutos antes.",
        points: ["Próximo capítulo con cuenta atrás", "Avisos al emitirse, 15, 30 o 60 minutos antes", "Resumen diario con lo que sale hoy"],
        img: "mi-lista",
        color: "#AC87FF",
    },
    {
        tag: "Buscar",
        title: "Encuentra tu próximo anime",
        accent: "anime",
        text: "Busca por nombre o género y filtra por temporada, año, formato y estado. Si no sabes qué ver, el botón Sorpréndeme elige uno entre los más populares.",
        points: ["Filtros de temporada, año, formato y estado", "Vista en lista o en cuadrícula", "Historial de búsquedas recientes"],
        img: "buscar",
        color: "#FFDF6D",
    },
    {
        tag: "Historia",
        title: "Conoce toda la historia",
        accent: "historia",
        text: "Cada anime muestra su ficha completa: puntaje, géneros, personajes, equipo y dónde verlo. Y un orden de la historia para saber qué viene antes y qué después.",
        points: ["Precuelas y secuelas en una línea de tiempo", "Personajes y equipo de producción", "Enlaces a las plataformas donde verlo"],
        img: "historia",
        color: "#FF5E97",
    },
];

const extras = [
    { title: "Widget en tu pantalla", desc: "Los próximos capítulos de tu lista, siempre a la vista, en tres tamaños." },
    { title: "Avisos a tu medida", desc: "Elige si quieres avisos de series, de películas o de ambos, y con cuánta anticipación." },
    { title: "Tu zona horaria", desc: "Todas las horas se muestran en la zona que elijas, sin cuentas mentales." },
    { title: "Agrega al calendario", desc: "Guarda un capítulo en el calendario de tu teléfono con un toque." },
    { title: "Comparte un anime", desc: "Crea una tarjeta con la portada y compártela con tus amigos." },
    { title: "Teléfonos y tabletas", desc: "El diseño se adapta a pantallas grandes, con menú lateral y dos paneles." },
];

export default function KawaiiAnimesHome() {
    return (
        <div style={{ fontFamily: "'Roboto Condensed', 'Segoe UI', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700;800&display=swap');

                .kw-root { background: #0D0C13; color: #FBFBFE; min-height: 100vh; overflow-x: hidden; }
                .kw-root * { box-sizing: border-box; }
                .kw-root a { text-decoration: none; }

                .kw-nav {
                    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 0 clamp(1.25rem, 5vw, 4rem); height: 68px;
                    background: rgba(13,12,19,0.85); backdrop-filter: blur(18px);
                    border-bottom: 1px solid #262436;
                }
                .kw-brand { display: flex; align-items: center; gap: 12px; color: #FBFBFE; font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; }
                .kw-nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; margin: 0; padding: 0; }
                .kw-nav-links a { color: #9895AB; font-size: 0.95rem; font-weight: 500; transition: color .2s; }
                .kw-nav-links a:hover { color: #FF5E97; }

                .kw-btn {
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                    border-radius: 999px; font-weight: 700; font-size: 0.95rem; padding: 0.6rem 1.4rem;
                    transition: transform .2s, box-shadow .2s; cursor: pointer; border: 0;
                }
                .kw-btn-primary { background: linear-gradient(135deg, #AC87FF, #FF5E97); color: #0D0C13; }
                .kw-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,94,151,0.35); }
                .kw-btn-ghost { background: transparent; color: #FBFBFE; border: 1px solid #262436; }
                .kw-btn-ghost:hover { border-color: #FF5E97; color: #FF5E97; }
                .kw-btn-lg { padding: 0.9rem 2rem; font-size: 1.05rem; }

                .kw-hero {
                    position: relative; padding: 130px clamp(1.25rem, 5vw, 4rem) 90px;
                    display: grid; grid-template-columns: 1.05fr 1fr; gap: 3rem; align-items: center;
                    max-width: 1200px; margin: 0 auto;
                }
                .kw-glow { position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; z-index: 0; }
                .kw-hero > *:not(.kw-glow) { position: relative; z-index: 1; }
                .kw-badge {
                    display: inline-flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700;
                    letter-spacing: 0.12em; text-transform: uppercase; color: #FF5E97;
                    background: rgba(255,94,151,0.1); border: 1px solid rgba(255,94,151,0.3);
                    padding: 6px 14px; border-radius: 999px; margin-bottom: 1.5rem;
                }
                .kw-hero h1 { font-size: clamp(2.6rem, 6vw, 4.6rem); font-weight: 800; line-height: 1.02; letter-spacing: -0.03em; margin: 0 0 1.25rem; }
                .kw-grad { background: linear-gradient(135deg, #FF5E97, #AC87FF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
                .kw-hero p { font-size: 1.2rem; line-height: 1.6; color: #9895AB; max-width: 34rem; margin: 0 0 2rem; }
                .kw-actions { display: flex; flex-wrap: wrap; gap: 0.9rem; }
                .kw-note { margin-top: 1.1rem; font-size: 0.85rem; color: #676479; }

                .kw-phones { position: relative; display: flex; justify-content: center; align-items: flex-start; min-height: 560px; }
                .kw-phone {
                    border-radius: 38px; padding: 9px; background: #16151f; border: 1px solid #3a384a;
                    box-shadow: 0 30px 70px rgba(0,0,0,0.55), 0 0 60px rgba(172,135,255,0.18);
                }
                .kw-phone img { display: block; width: 100%; height: auto; border-radius: 30px; }
                .kw-phone-a { width: min(250px, 44vw); transform: rotate(-5deg) translateY(30px); }
                .kw-phone-b { width: min(250px, 44vw); transform: rotate(5deg); margin-left: -34px; }

                .kw-section { max-width: 1100px; margin: 0 auto; padding: 4rem clamp(1.25rem, 5vw, 4rem); }
                .kw-label { font-size: 0.8rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 0.8rem; }
                .kw-title { font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.08; margin: 0 0 1rem; }
                .kw-sub { color: #9895AB; font-size: 1.1rem; line-height: 1.65; max-width: 36rem; }

                .kw-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 3rem 0; }
                .kw-row.rev .kw-row-media { order: -1; }
                .kw-row-media { display: flex; justify-content: center; }
                .kw-row-media .kw-phone { width: min(290px, 70vw); }
                .kw-points { list-style: none; margin: 1.5rem 0 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
                .kw-points li { display: flex; gap: 12px; align-items: flex-start; color: #D8D6E6; font-size: 1.02rem; line-height: 1.5; }
                .kw-dot { flex: 0 0 auto; width: 9px; height: 9px; border-radius: 50%; margin-top: 0.5rem; }

                .kw-extras { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
                .kw-card { background: #15141E; border: 1px solid #262436; border-radius: 22px; padding: 1.6rem; }
                .kw-card h3 { margin: 0 0 0.5rem; font-size: 1.15rem; font-weight: 700; }
                .kw-card p { margin: 0; color: #9895AB; font-size: 0.97rem; line-height: 1.6; }

                .kw-anilist { display: flex; align-items: center; gap: 1.25rem; background: #15141E; border: 1px solid #262436; border-radius: 22px; padding: 1.5rem 1.75rem; }
                .kw-anilist b { font-size: 1.05rem; }
                .kw-anilist p { margin: 0.25rem 0 0; color: #9895AB; font-size: 0.97rem; line-height: 1.6; }
                .kw-anilist a { color: #FF5E97; }
                .kw-al { flex: 0 0 auto; width: 52px; height: 52px; border-radius: 14px; background: rgba(172,135,255,0.15); color: #AC87FF; display: grid; place-items: center; font-weight: 800; }

                .kw-cta { text-align: center; padding: 5rem clamp(1.25rem, 5vw, 4rem); position: relative; }
                .kw-cta h2 { font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; letter-spacing: -0.03em; margin: 0 0 1rem; }
                .kw-cta p { color: #9895AB; font-size: 1.1rem; margin: 0 auto 2rem; max-width: 30rem; }
                .kw-cta .kw-actions { justify-content: center; }

                .kw-footer {
                    border-top: 1px solid #262436; padding: 2rem clamp(1.25rem, 5vw, 4rem);
                    display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center; justify-content: space-between;
                }
                .kw-footer ul { display: flex; flex-wrap: wrap; gap: 1.5rem; list-style: none; margin: 0; padding: 0; }
                .kw-footer a { color: #9895AB; font-size: 0.92rem; }
                .kw-footer a:hover { color: #FF5E97; }
                .kw-copy { color: #676479; font-size: 0.85rem; }

                @media (max-width: 900px) {
                    .kw-nav-links { display: none; }
                    .kw-hero { grid-template-columns: 1fr; padding-top: 110px; text-align: center; }
                    .kw-hero p { margin-left: auto; margin-right: auto; }
                    .kw-actions { justify-content: center; }
                    .kw-phones { min-height: 440px; }
                    .kw-row, .kw-row.rev { grid-template-columns: 1fr; gap: 2rem; text-align: left; }
                    .kw-row.rev .kw-row-media { order: 0; }
                    .kw-extras { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .kw-extras { grid-template-columns: 1fr; }
                    .kw-anilist { flex-direction: column; align-items: flex-start; }
                }
            `}</style>

            <div className="kw-root">
                <nav className="kw-nav">
                    <Link href="/anime-kw-track" className="kw-brand">
                        <Image src="/kawaii-animes/icono.png" alt="Kawaii Animes" width={36} height={36} style={{ borderRadius: 10 }} />
                        Kawaii Animes
                    </Link>
                    <ul className="kw-nav-links">
                        <li><a href="#funciones">Funciones</a></li>
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                    </ul>
                    <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="kw-btn kw-btn-primary">
                        Descargar
                    </a>
                </nav>

                <header className="kw-hero">
                    <div className="kw-glow" style={{ width: 460, height: 460, left: "-8%", top: "8%", background: "rgba(255,94,151,0.28)" }} />
                    <div className="kw-glow" style={{ width: 420, height: 420, right: "-4%", top: "4%", background: "rgba(172,135,255,0.28)" }} />
                    <div>
                        <div className="kw-badge">Para Android</div>
                        <h1>
                            Tus estrenos,
                            <br />
                            <span className="kw-grad">a tu hora</span>
                        </h1>
                        <p>
                            Kawaii Animes te dice cuándo sale cada capítulo de los animes que sigues, en la hora de tu zona, y te
                            avisa para que no se te pase ninguno.
                        </p>
                        <div className="kw-actions">
                            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="kw-btn kw-btn-primary kw-btn-lg">
                                Descargar en Google Play
                            </a>
                            <a href="#funciones" className="kw-btn kw-btn-ghost kw-btn-lg">
                                Ver funciones
                            </a>
                        </div>
                        <div className="kw-note">Gratis, con anuncios.</div>
                    </div>
                    <div className="kw-phones">
                        <div className="kw-phone kw-phone-a">
                            <Image src="/kawaii-animes/inicio.webp" alt="Pantalla de inicio de Kawaii Animes" width={600} height={1300} priority />
                        </div>
                        <div className="kw-phone kw-phone-b">
                            <Image src="/kawaii-animes/mi-lista.webp" alt="Mi lista en Kawaii Animes" width={600} height={1300} priority />
                        </div>
                    </div>
                </header>

                <section id="funciones" className="kw-section">
                    {rows.map((r, i) => (
                        <div key={r.tag} className={`kw-row${i % 2 === 1 ? " rev" : ""}`}>
                            <div>
                                <div className="kw-label" style={{ color: r.color }}>{r.tag}</div>
                                <h2 className="kw-title">
                                    {r.title.split(r.accent)[0]}
                                    <span style={{ color: r.color }}>{r.accent}</span>
                                    {r.title.split(r.accent)[1]}
                                </h2>
                                <p className="kw-sub">{r.text}</p>
                                <ul className="kw-points">
                                    {r.points.map((p) => (
                                        <li key={p}>
                                            <span className="kw-dot" style={{ background: r.color }} />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="kw-row-media">
                                <div className="kw-phone">
                                    <Image src={`/kawaii-animes/${r.img}.webp`} alt={`${r.tag} en Kawaii Animes`} width={600} height={1300} />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="kw-section" style={{ paddingTop: 0 }}>
                    <div className="kw-label" style={{ color: "#FF5E97" }}>Y además</div>
                    <h2 className="kw-title">Los detalles que se agradecen</h2>
                    <div className="kw-extras">
                        {extras.map((e) => (
                            <div key={e.title} className="kw-card">
                                <h3>{e.title}</h3>
                                <p>{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="kw-section" style={{ paddingTop: 0 }}>
                    <div className="kw-anilist">
                        <div className="kw-al">AL</div>
                        <div>
                            <b>Datos de AniList</b>
                            <p>
                                La información de los animes viene de{" "}
                                <a href="https://anilist.co" target="_blank" rel="noopener noreferrer">AniList</a>. Kawaii Animes no
                                ofrece episodios para ver: te dice en qué plataformas están disponibles.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="kw-cta">
                    <div className="kw-glow" style={{ width: 520, height: 320, left: "50%", top: "10%", transform: "translateX(-50%)", background: "rgba(255,94,151,0.2)" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2>
                            No te pierdas <span className="kw-grad">ningún capítulo</span>
                        </h2>
                        <p>Descarga Kawaii Animes y ten tus estrenos siempre a la mano.</p>
                        <div className="kw-actions">
                            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="kw-btn kw-btn-primary kw-btn-lg">
                                Descargar en Google Play
                            </a>
                            <Link href="/anime-kw-track/privacy" className="kw-btn kw-btn-ghost kw-btn-lg">
                                Política de privacidad
                            </Link>
                        </div>
                    </div>
                </section>

                <footer className="kw-footer">
                    <Link href="/anime-kw-track" className="kw-brand" style={{ fontSize: "1rem" }}>
                        <Image src="/kawaii-animes/icono.png" alt="Kawaii Animes" width={28} height={28} style={{ borderRadius: 8 }} />
                        Kawaii Animes · Lumeko Studio
                    </Link>
                    <ul>
                        <li><Link href="/anime-kw-track/privacy">Privacidad</Link></li>
                        <li><Link href="/anime-kw-track/delete-account">Eliminar cuenta</Link></li>
                        <li><Link href="/anime-kw-track/terms">Términos</Link></li>
                        <li><Link href="/anime-kw-track/dmca">DMCA</Link></li>
                        <li><a href="mailto:soporte@lumekostudio.com">Contacto</a></li>
                    </ul>
                    <span className="kw-copy">© {new Date().getFullYear()} Lumeko Studio</span>
                </footer>
            </div>
        </div>
    );
}
