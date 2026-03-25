import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad - Anime KW Track",
    description:
        "Política de Privacidad de la aplicación móvil Anime KW Track.",
    robots: "index, follow",
};

export default function PrivacyPolicy() {
    return (
        <article className="max-w-2xl mx-auto px-6 py-12 text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-4 tracking-tight">
                    Política de Privacidad - Anime KW Track
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Última actualización: Marzo 2026
                </p>
            </header>

            <section className="mb-8">
                <p className="mb-4">
                    En <strong>Lumeko Studio</strong>, valoramos su privacidad
                    de manera prioritaria. Esta política describe cómo
                    <strong> Anime KW Track</strong> gestiona los datos en su
                    dispositivo móvil.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    1. Información que no recopilamos
                </h2>
                <p className="mb-3">
                    Anime KW Track es una aplicación diseñada para ser utilizada
                    de forma anónima. No recopilamos, solicitamos ni tenemos
                    acceso a ningún tipo de Datos Personales Identificables
                    (PII), tales como:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Nombres, direcciones de correo electrónico o números de
                        teléfono.
                    </li>
                    <li>Identificadores de cuentas o perfiles sociales.</li>
                    <li>Acceso a contactos, cámara o micrófono.</li>
                </ul>
                <p className="mt-3">
                    No se requiere registro ni inicio de sesión para utilizar
                    ninguna de las funcionalidades de la aplicación.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    2. Uso de Internet
                </h2>
                <p>
                    La aplicación utiliza su conexión a Internet exclusivamente
                    para obtener información actualizada sobre los estrenos de
                    anime. Esta comunicación se realiza directamente con los
                    servidores de información y no involucra el envío de ningún
                    dato del usuario.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    3. Uso de la ubicación
                </h2>
                <p className="mb-3">
                    Anime KW Track puede solicitar acceso a la ubicación de su
                    dispositivo únicamente con el fin de obtener de forma
                    precisa la hora y zona horaria local del usuario. Esto
                    permite que la aplicación muestre las fechas y horarios de
                    emisión de los episodios ajustados a su región.
                </p>
                <p className="font-medium">
                    Es importante destacar que la ubicación:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        No se almacena en el dispositivo ni en servidores
                        externos.
                    </li>
                    <li>
                        No se comparte con terceros ni con los desarrolladores.
                    </li>
                    <li>
                        No se utiliza para el seguimiento o rastreo del usuario.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    4. Almacenamiento local
                </h2>
                <p>
                    Todos los datos generados por el usuario, como listas de
                    seguimiento, favoritos o preferencias de configuración, se
                    almacenan de forma local y exclusiva en su dispositivo
                    móvil. El desarrollador no tiene acceso a esta información y
                    no se guarda ninguna copia en la nube ni en servidores
                    propios.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    5. Servicios de terceros
                </h2>
                <p>
                    La aplicación consume datos públicos de{" "}
                    <strong>MyAnimeList</strong> únicamente para sincronizar las
                    fechas y el estado de emisión de los episodios de anime.
                    Esta integración no requiere que usted comparta sus
                    credenciales de MyAnimeList con nosotros ni vincula su
                    cuenta personal a la aplicación.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    6. Seguridad
                </h2>
                <p>
                    Dado que no recopilamos datos personales ni almacenamos
                    información en servidores externos, el riesgo de exposición
                    de datos es mínimo. La seguridad de la información
                    almacenada localmente depende por completo de las medidas de
                    seguridad de su propio dispositivo móvil.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    7. Cambios a esta política
                </h2>
                <p>
                    Podemos actualizar nuestra Política de Privacidad de vez en
                    cuando. Se le recomienda revisar esta página periódicamente
                    para cualquier cambio. Las actualizaciones entrarán en vigor
                    tan pronto como se publiquen en esta ruta.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    8. Contacto
                </h2>
                <p>
                    Si tiene alguna pregunta o sugerencia sobre nuestra Política
                    de Privacidad, no dude en contactarnos a través de:
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
