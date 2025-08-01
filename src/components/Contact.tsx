import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para regularizar sua situação fiscal? Entre em contato conosco 
            e tenha uma consulta gratuita com nossos especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicite uma Consulta Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome completo" />
                <Input placeholder="Seu email" type="email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Telefone/WhatsApp" />
                <Input placeholder="Empresa (opcional)" />
              </div>
              <Textarea 
                placeholder="Descreva brevemente sua situação fiscal..." 
                className="min-h-[120px]"
              />
              <Button 
                className="w-full bg-gradient-primary hover:shadow-primary text-lg py-6"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitação
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                * Retornamos em até 2 horas úteis
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <Card className="bg-gradient-success p-8 text-white border-0 shadow-success">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Consulta 100% Gratuita</h3>
                <p className="text-lg opacity-90">
                  Analisamos seu caso sem custos e apresentamos as melhores soluções
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-gradient-card border-0 shadow-md">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 9999-9999</p>
                    <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-md">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contato@brunorogerio.adv.br</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 2h</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-md">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">Av. Paulista, 1000 - Sala 1501</p>
                    <p className="text-sm text-muted-foreground">São Paulo, SP</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-md">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Horários</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;