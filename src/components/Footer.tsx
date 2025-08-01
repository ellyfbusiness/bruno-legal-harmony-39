import { 
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BR</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Bruno Rogério</h3>
                <p className="text-sm opacity-80">Advocacia Tributária</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Especialistas em regularização fiscal com mais de 15 anos de experiência. 
              Seu problema tributário tem solução.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Início</a></li>
              <li><a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Serviços</a></li>
              <li><a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Sobre</a></li>
              <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Principais Serviços</h4>
            <ul className="space-y-2">
              <li><span className="text-sm opacity-80">Regularização de Débitos</span></li>
              <li><span className="text-sm opacity-80">Refis e Parcelamentos</span></li>
              <li><span className="text-sm opacity-80">Defesa Administrativa</span></li>
              <li><span className="text-sm opacity-80">Planejamento Tributário</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm opacity-80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm opacity-80">contato@brunorogerio.adv.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm opacity-80">Av. Paulista, 1000 - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="text-sm opacity-80">
              © 2024 Bruno Rogério Advocacia. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;