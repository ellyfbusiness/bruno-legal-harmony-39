import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Regularize sua
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Situação Fiscal </span>
                com Segurança
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialistas em regularização tributária para empresas e pessoas físicas. 
                Resolva seus problemas fiscais com quem entende do assunto há mais de 15 anos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Resultados Garantidos</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Máxima Segurança</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Economia Fiscal</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6"
              >
                Consulta Gratuita Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Conheça Nossos Casos
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Escritório de Advocacia Tributária" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Regularização Aprovada</div>
                  <div className="text-sm text-muted-foreground">Economia de R$ 2.5M em impostos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;