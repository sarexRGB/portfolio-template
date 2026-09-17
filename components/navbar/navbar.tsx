import { Button } from "@/components/ui/button";
import { GithubLogo, XLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        {/* <Logo /> */}

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          {/* cambiar por enlaces de github convirtiendo
          usando la prop del button asChild para pasar
          por medio del hijo un componente "a" o Link importar de next/link */}
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <GithubLogo className="h-5! w-5!" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
