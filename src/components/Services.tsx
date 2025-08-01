import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Calculator, 
  Shield, 
  TrendingDown, 
  Users, 
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Regularização de Débitos",
      description: "Negociação e parcelamento de dívidas tributárias com redução significativa de multas e juros.",
      features: ["Redução de até 90% em multas", "Parcelamento facilitado", "Análise completa do caso"],
      color: "primary"
    },
    {
      icon: FileText,
      title: "Refis e Parcelamentos",
      description: "Adesão aos programas governamentais de refinanciamento com as melhores condições.",
      features: ["Análise de elegibilidade", "Documentação completa", "Acompanhamento do processo"],
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Defesa Administrativa",
      description: "Representação em processos administrativos perante Receita Federal e Estadual.",
      features: ["Impugnações", "Recursos administrativos", "Defesa especializada"],
      color: "accent"
    },
    {
      icon: TrendingDown,
      title: "Planejamento Tributário",
      description: "Estratégias legais para redução da carga tributária e otimização fiscal.",
      features: ["Análise fiscal completa", "Elisão fiscal", "Consultoria preventiva"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Pessoa Física",
      description: "Regularização de CPF, declarações em atraso e questões tributárias pessoais.",
      features: ["Regularização de CPF", "IRPF em atraso", "Consultoria personalizada"],
      color: "secondary"
    },
    {
      icon: Building2,
      title: "Pessoa Jurídica",
      description: "Soluções tributárias completas para empresas de todos os portes.",
      features: ["Regularização fiscal", "Certidões negativas", "Compliance tributário"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em regularização fiscal, com foco em resultados 
            concretos e economia tributária para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-primary transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.color === 'primary' ? 'bg-gradient-primary' :
                  service.color === 'secondary' ? 'bg-gradient-success' :
                  'bg-gradient-radial from-accent to-accent/80'
                }`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6"
          >
            Fale Conosco - Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;