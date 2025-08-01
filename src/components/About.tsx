import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award,
  BookOpen,
  Users2,
  Target,
  Briefcase,
  GraduationCap
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "OAB/SP",
      description: "Registro na Ordem dos Advogados do Brasil"
    },
    {
      icon: GraduationCap,
      title: "Pós-Graduação",
      description: "Especialização em Direito Tributário"
    },
    {
      icon: BookOpen,
      title: "15+ Anos",
      description: "Experiência em regularização fiscal"
    },
    {
      icon: Briefcase,
      title: "500+ Casos",
      description: "Processos tributários resolvidos"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre Bruno Rogério
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Advogado especialista em Direito Tributário com mais de 15 anos de experiência 
                em regularização fiscal. Formado pela Universidade de São Paulo (USP) e 
                pós-graduado em Direito Tributário pela FGV.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ao longo da carreira, desenvolveu expertise única em negociação com órgãos 
                fazendários, obtendo resultados excepcionais para empresas e pessoas físicas 
                em situação irregular perante o Fisco.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <achievement.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-scale-in">
            <Card className="bg-gradient-hero p-8 text-white border-0 shadow-elegant">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nossa Missão</h3>
              </div>
              <p className="text-lg leading-relaxed text-center">
                Proporcionar tranquilidade fiscal aos nossos clientes através de soluções 
                jurídicas eficazes, éticas e personalizadas, sempre buscando a máxima 
                economia tributária dentro da legalidade.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-success p-6 text-white border-0 shadow-success">
                <div className="text-center">
                  <Users2 className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-sm">Taxa de Sucesso</div>
                </div>
              </Card>
              
              <Card className="bg-gradient-primary p-6 text-white border-0 shadow-primary">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">R$ 50M+</div>
                  <div className="text-sm">Economia Gerada</div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;