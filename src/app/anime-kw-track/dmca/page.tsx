import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política DMCA - Anime KW Track",
    description:
        "Política de eliminación de contenido bajo la Ley de Derechos de Autor del Milenio Digital (DMCA) para Anime KW Track.",
    robots: "index, follow",
};

export default function DmcaPolicy() {
    return (
        <article className="max-w-2xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-4 tracking-tight">
                    Política DMCA - Anime KW Track
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Última actualización: Junio 2026
                </p>
            </header>

            <section className="mb-8">
                <p className="mb-4">
                    <strong>Lumeko Studio</strong> respeta los derechos de
                    propiedad intelectual de terceros y cumple con las
                    disposiciones de la{" "}
                    <em>
                        Digital Millennium Copyright Act (DMCA) de los Estados
                        Unidos
                    </em>{" "}
                    y legislación equivalente aplicable.
                </p>
                <p>
                    Si considera que algún contenido presente en{" "}
                    <strong>Anime KW Track</strong> infringe sus derechos de
                    autor, puede notificarnos siguiendo el procedimiento que se
                    describe a continuación.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    1. Naturaleza del Contenido
                </h2>
                <p className="mb-3">
                    Anime KW Track es una aplicación de seguimiento que muestra
                    información pública sobre series de anime, incluyendo
                    títulos, fechas de emisión y datos obtenidos de fuentes como{" "}
                    <strong>MyAnimeList</strong>. La aplicación no aloja ni
                    distribuye contenido de video, audio ni archivos con obra
                    protegida.
                </p>
                <p>
                    Las imágenes de portada de anime que pudieran mostrarse
                    provienen de APIs públicas y son propiedad de sus respectivos
                    titulares (estudios de animación, distribuidores u otras
                    entidades).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    2. Procedimiento para Reportar una Infracción
                </h2>
                <p className="mb-3">
                    Para enviar una notificación de infracción de derechos de
                    autor válida bajo la DMCA, su comunicación debe incluir la
                    siguiente información:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>
                        <strong>Identificación de la obra protegida:</strong>{" "}
                        descripción del material con derechos de autor que
                        considera infringido.
                    </li>
                    <li>
                        <strong>Identificación del contenido infractor:</strong>{" "}
                        descripción precisa de dónde se encuentra el material
                        dentro de la aplicación (captura de pantalla,
                        descripción del elemento, etc.).
                    </li>
                    <li>
                        <strong>Información de contacto:</strong> nombre
                        completo, dirección de correo electrónico y número de
                        teléfono.
                    </li>
                    <li>
                        <strong>Declaración de buena fe:</strong> una declaración
                        de que cree, de buena fe, que el uso del material no
                        está autorizado por el titular de los derechos de autor,
                        su agente o la ley.
                    </li>
                    <li>
                        <strong>Declaración de exactitud:</strong> una
                        declaración bajo pena de perjurio de que la información
                        en la notificación es exacta y que usted es el titular
                        de los derechos de autor o está autorizado para actuar
                        en su nombre.
                    </li>
                    <li>
                        <strong>Firma:</strong> firma física o electrónica del
                        titular o del representante autorizado.
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    3. Dónde Enviar la Notificación
                </h2>
                <p className="mb-3">
                    Envíe su notificación DMCA a nuestro agente designado
                    mediante correo electrónico:
                </p>
                <p className="font-mono text-blue-600 dark:text-blue-400">
                    soporte@lumekostudio.com
                </p>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                    Asunto recomendado: <em>DMCA Notice - Anime KW Track</em>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    4. Respuesta ante Notificaciones Válidas
                </h2>
                <p>
                    Tras recibir una notificación válida, Lumeko Studio
                    investigará la reclamación y, si corresponde, procederá a
                    eliminar o desactivar el acceso al contenido señalado en un
                    plazo razonable. En caso de reclamaciones repetidas o
                    infractores reincidentes, podremos cancelar el acceso a la
                    aplicación.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    5. Contra-Notificación
                </h2>
                <p>
                    Si considera que su contenido fue eliminado por error, puede
                    enviar una contra-notificación con su información de
                    contacto, la identificación del contenido eliminado y una
                    declaración bajo pena de perjurio de que la eliminación fue
                    producto de un error. Lumeko Studio analizará la
                    contra-notificación y actuará conforme a la normativa
                    aplicable.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    6. Avisos Falsos
                </h2>
                <p>
                    Tenga en cuenta que presentar una notificación DMCA falsa o
                    fraudulenta puede acarrear responsabilidad legal. Lumeko
                    Studio se reserva el derecho de tomar medidas legales contra
                    cualquier parte que abuse de este proceso.
                </p>
            </section>

            <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm italic">
                Anime KW Track - Lumeko Studio
            </footer>
        </article>
    );
}
