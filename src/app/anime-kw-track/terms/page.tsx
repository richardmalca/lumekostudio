import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Términos y Condiciones - Anime KW Track",
    description:
        "Términos y Condiciones de uso de la aplicación móvil Anime KW Track de Lumeko Studio.",
    robots: "index, follow",
};

export default function TermsAndConditions() {
    return (
        <article className="max-w-2xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-4 tracking-tight">
                    Términos y Condiciones - Anime KW Track
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Última actualización: Junio 2026
                </p>
            </header>

            <section className="mb-8">
                <p className="mb-4">
                    Al descargar, instalar o utilizar{" "}
                    <strong>Anime KW Track</strong>, usted acepta los presentes
                    Términos y Condiciones. Si no está de acuerdo con alguno de
                    ellos, le pedimos que no utilice la aplicación.
                </p>
                <p>
                    Esta aplicación es desarrollada y mantenida por{" "}
                    <strong>Lumeko Studio</strong>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    1. Descripción del Servicio
                </h2>
                <p>
                    Anime KW Track es una aplicación móvil que permite al
                    usuario hacer seguimiento de series de anime, recibir
                    notificaciones de nuevos episodios y guardar sus preferencias
                    personales. La aplicación ofrece opcionalmente inicio de
                    sesión con Google para mejorar la experiencia de
                    notificaciones y personalización.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    2. Inicio de Sesión con Google
                </h2>
                <p className="mb-3">
                    La aplicación ofrece la posibilidad de autenticarse mediante{" "}
                    <strong>Google Sign-In</strong>. Este proceso es opcional y
                    se realiza exclusivamente para:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>
                        Personalizar el envío de notificaciones push de nuevos
                        episodios de anime.
                    </li>
                    <li>
                        Guardar y sincronizar las preferencias del usuario (como
                        series favoritas y configuraciones).
                    </li>
                    <li>
                        Identificar de forma segura al usuario para mantener sus
                        preferencias entre dispositivos o reinstalaciones.
                    </li>
                </ul>
                <p className="mb-3">
                    Al iniciar sesión con Google, la aplicación accede
                    únicamente a su{" "}
                    <strong>dirección de correo electrónico</strong> como
                    identificador. No accedemos ni leemos el contenido de su
                    correo, calendarios, contactos ni ningún otro dato asociado
                    a su cuenta de Google.
                </p>
                <p>
                    Puede revocar el acceso en cualquier momento desde la
                    configuración de su cuenta de Google en{" "}
                    <a
                        href="https://myaccount.google.com/permissions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
                    >
                        myaccount.google.com/permissions
                    </a>
                    .
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    3. Uso Aceptable
                </h2>
                <p className="mb-3">Al usar Anime KW Track, usted se compromete a:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        No utilizar la aplicación para fines ilegales o no
                        autorizados.
                    </li>
                    <li>
                        No intentar acceder, modificar o interferir con los
                        sistemas o datos de otros usuarios.
                    </li>
                    <li>
                        No reproducir, distribuir ni modificar el contenido de
                        la aplicación sin autorización expresa de Lumeko Studio.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    4. Propiedad Intelectual
                </h2>
                <p>
                    Todo el contenido, diseño, código y materiales de{" "}
                    <strong>Anime KW Track</strong> son propiedad exclusiva de{" "}
                    <strong>Lumeko Studio</strong>, a menos que se indique lo
                    contrario. La información sobre anime (títulos, imágenes,
                    sinopsis) proviene de fuentes públicas como{" "}
                    <strong>MyAnimeList</strong> y pertenece a sus respectivos
                    titulares.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    5. Limitación de Responsabilidad
                </h2>
                <p>
                    Lumeko Studio no se responsabiliza por inexactitudes en las
                    fechas de emisión de episodios, interrupciones del servicio
                    ni por cualquier pérdida de datos derivada del uso de la
                    aplicación. El servicio se proporciona{" "}
                    <em>«tal como está»</em> sin garantías de ningún tipo.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    6. Modificaciones
                </h2>
                <p>
                    Lumeko Studio se reserva el derecho de actualizar estos
                    Términos y Condiciones en cualquier momento. Se notificará
                    dentro de la aplicación ante cambios significativos. El uso
                    continuado de la aplicación después de dichos cambios
                    constituye la aceptación de los nuevos términos.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    7. Política de Privacidad
                </h2>
                <p>
                    El uso de la aplicación también está sujeto a nuestra{" "}
                    <Link
                        href="/anime-kw-track/privacy"
                        className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
                    >
                        Política de Privacidad
                    </Link>
                    , la cual forma parte integral de estos Términos.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    8. Contacto
                </h2>
                <p>
                    Para cualquier consulta sobre estos Términos y Condiciones,
                    puede contactarnos a través de:
                </p>
                <p className="mt-2 font-mono text-blue-600 dark:text-blue-400">
                    soporte@lumekostudio.com
                </p>
            </section>

            <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm italic">
                Anime KW Track - Lumeko Studio
            </footer>
        </article>
    );
}
