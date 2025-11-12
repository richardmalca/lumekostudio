import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative flex h-[calc(100vh-5rem)] w-full items-center justify-center p-4">
          <div className="relative z-10 rounded-2xl text-center">
            <div className="space-y-6">
              <h1
                className={`${styles["animate-glow"]} bg-linear-to-r from-primary to-secondary bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl`}
              >
                LumekoStudio
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
                Desarrollamos aplicaciones web y móviles a la medida de tus
                necesidades.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Ver Proyectos</Button>
                <Button size="lg" variant="secondary">
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
