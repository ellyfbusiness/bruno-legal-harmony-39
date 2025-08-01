import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Silva & Associados Ltda",
      content: "Bruno conseguiu regularizar nossa empresa que estava com débitos de mais de R$ 500 mil. A redução das multas foi incrível e hoje estamos com todas as certidões em dia.",
      rating: 5,
      savings: "R$ 450.000"
    },
    {
      name: "João Santos",
      company: "Pessoa Física",
      content: "Meu CPF estava bloqueado há 3 anos. Em apenas 2 meses, Bruno resolveu tudo e ainda conseguiu um parcelamento que cabe no meu orçamento. Profissionalismo exemplar!",
      rating: 5,
      savings: "R$ 15.000"
    },
    {
      name: "Carlos Mendes",
      company: "Tech Solutions Inc",
      content: "O planejamento tributário desenvolvido pelo escritório resultou em uma economia anual significativa. Recomendo para qualquer empresa que queira otimizar sua carga fiscal.",
      rating: 5,
      savings: "R$ 120.000/ano"
    },
    {
      name: "Ana Costa",
      company: "Comércio de Roupas",
      content: "Estava desesperada com as dívidas tributárias que pareciam impossíveis de resolver. Bruno encontrou uma solução que me permitiu manter meu negócio funcionando.",
      rating: 5,
      savings: "R$ 80.000"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centenas de empresas e pessoas físicas já resolveram seus problemas fiscais 
            conosco. Veja alguns depoimentos reais de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-secondary">
                      Economia: {testimonial.savings}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-success p-8 rounded-2xl text-white shadow-success inline-block">
            <h3 className="text-2xl font-bold mb-2">Mais de 500 Casos de Sucesso</h3>
            <p className="text-lg opacity-90">Junte-se aos nossos clientes satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;