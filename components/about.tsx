import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              Sobre mi
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Apasionada por crear soluciones web funcionales
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Soy desarrolladora web Full Stack, con formación en el desarrollo
              de aplicaciones utilizando tecnologías como JavaScript, React, Python, Django y MySQL.
              Me interesa crear soluciones funcionales responsivas,
              combinando el desarrollo Front-end, la lógica del Back-end
              y la gestión de bases de datos.
              <br />
              Me considero una persona responsable, curiosa y con disposición
              para aprender. Disfruto resolver problemas, explorar nuevas
              tecnologías y transformar ideas en proyectos funcionales.
              <br />
              Actualmente busco mi primera oportunidad profecional como desarrolladora
              Full Stack, donde pueda aplicar mis conocimientos, continuar aprendiendo
              y crecer dentro de un equipo de desarrollo.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full" asChild>
                <a href="https://github.com/sarexRGB?tab=repositories">
                  <GithubLogo />
                  Ver Github
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/cv/CV_Sara_Velez.pdf" download="/Curriculum_Sara_Vélez.pdf">
                  <Download />
                  Descargar CV
                </a>

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/placeholder.svg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
