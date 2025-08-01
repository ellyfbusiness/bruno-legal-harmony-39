import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">BR</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-foreground">Bruno Rogério</h1>
            <p className="text-sm text-muted-foreground">Advocacia Tributária</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@brunorogerio.adv.br</span>
            </div>
          </div>
          <Button variant="default" className="bg-gradient-primary hover:shadow-primary">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;