import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad - Anime KW Track",
    description:
        "Política de Privacidad de la aplicación móvil Anime KW Track. Conozca cómo gestionamos los datos de inicio de sesión con Google.",
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
                    Última actualización: Junio 2026
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
                    1. Datos que recopilamos
                </h2>
                <p className="mb-3">
                    Anime KW Track puede utilizarse de forma completamente
                    anónima. Sin embargo, si elige iniciar sesión con{" "}
                    <strong>Google Sign-In</strong>, la aplicación accede
                    únicamente a su{" "}
                    <strong>dirección de correo electrónico</strong> con los
                    siguientes fines exclusivos:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Personalizar el envío de notificaciones push sobre
                        nuevos episodios de los anime que sigue.
                    </li>
                    <li>
                        Guardar y sincronizar sus preferencias (series
                        favoritas, configuración) entre dispositivos o
                        reinstalaciones.
                    </li>
                </ul>
                <p className="mt-3">
                    <strong>No accedemos</strong> al contenido de su bandeja de
                    entrada, calendarios, contactos ni a ningún otro dato de su
                    cuenta de Google. El inicio de sesión es completamente
                    opcional; todas las funciones principales de la aplicación
                    están disponibles sin crear una cuenta.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    2. Datos que NO recopilamos
                </h2>
                <p className="mb-3">
                    En ningún caso recopilamos:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Nombres completos, números de teléfono ni direcciones físicas.</li>
                    <li>Contraseñas ni credenciales de ningún servicio.</li>
                    <li>Acceso a cámara, micrófono o lista de contactos.</li>
                    <li>Datos de pago o información financiera.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    3. Uso de Internet
                </h2>
                <p>
                    La aplicación utiliza su conexión a Internet para obtener
                    información actualizada sobre los estrenos de anime y, en
                    caso de haber iniciado sesión con Google, para sincronizar
                    sus preferencias y gestionar las notificaciones. Ninguna
                    comunicación involucra el envío de datos personales más allá
                    del identificador de correo electrónico necesario para las
                    funciones descritas.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    4. Uso de la ubicación
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
                    5. Almacenamiento local y en la nube
                </h2>
                <p>
                    Por defecto, los datos generados por el usuario (listas de
                    seguimiento, favoritos, configuración) se almacenan de forma
                    local en su dispositivo. Si ha iniciado sesión con Google,
                    sus preferencias se sincronizan también en nuestros
                    servidores asociados a su correo electrónico, con el único
                    fin de permitir la personalización de notificaciones y la
                    recuperación de sus datos ante un cambio de dispositivo.
                    Puede eliminar su cuenta y datos asociados contactándonos en{" "}
                    <span className="font-mono text-blue-600 dark:text-blue-400">
                        soporte@lumekostudio.com
                    </span>
                    .
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    6. Servicios de terceros
                </h2>
                <p className="mb-3">
                    La aplicación consume datos públicos de{" "}
                    <strong>MyAnimeList</strong> únicamente para sincronizar las
                    fechas y el estado de emisión de los episodios de anime.
                    Esta integración no requiere que usted comparta sus
                    credenciales de MyAnimeList con nosotros ni vincula su
                    cuenta personal a la aplicación.
                </p>
                <p>
                    Para la autenticación utilizamos{" "}
                    <strong>Google Sign-In</strong>, cuya política de privacidad
                    puede consultarse en{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
                    >
                        policies.google.com/privacy
                    </a>
                    .
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                    7. Seguridad
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
                    8. Cambios a esta política
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
                    9. Contacto
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
