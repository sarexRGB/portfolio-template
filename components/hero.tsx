import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          Desarrollador Web Full Stack
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Sara Vélez González
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Desarrolladora Web Full Stack con formación en JavaScript, Python y SQL,
          y conocimientos en desarrollo Front-end y Back-end, integración
          de APIs REST y gestión de bases de datos.
        </p>
      </div>
    </div>
  );
};

export default Hero;
