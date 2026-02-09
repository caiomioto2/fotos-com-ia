import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CTA_WHATSAPP =
  "https://wa.me/5551920000910?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!";

const RESULTS = [
  "https://ahsolucoesdigitais.com/images/testimonial-after-1.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-2.png",
];

const FEATURES = [
  "Resultado hiper-realista",
  "Você escolhe o estilo no catálogo",
  "Processo simples e rápido",
  "Curadoria humana + IA",
  "Ideal para perfil profissional, redes sociais e negócios",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Badge className="w-fit" variant="secondary">
              ✨ Mais de 4.000 ensaios IA já realizados
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Seu ensaio fotográfico profissional, criado com Inteligência
              Artificial
            </h1>
            <p className="text-lg text-muted-foreground">
              Fotos realistas, personalizadas e com aparência de estúdio — sem
              sair de casa.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={CTA_WHATSAPP} target="_blank">
                  Quero meu Ensaio IA Personalizado
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/catalogo">Ver Catálogo de Referências</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {RESULTS.map((src, index) => (
              <Card key={src} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Resultado IA ${index + 1}`}
                    className="h-72 w-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>Resultados reais</span>
            <span>•</span>
            <span>Estilo profissional</span>
            <span>•</span>
            <span>Aparência natural</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {FEATURES.map((item) => (
              <Card key={item}>
                <CardContent className="p-4 text-sm font-medium">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={CTA_WHATSAPP} target="_blank">
                Quero meu Ensaio IA Personalizado
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalogo">Ver Catálogo de Referências</Link>
            </Button>
          </div>

          <blockquote className="border-l-2 pl-4 text-muted-foreground">
            “Mesmo que você nunca tenha usado IA ou não goste de fotos, nós
            cuidamos de todo o processo para você.”
          </blockquote>

          <div className="text-sm text-muted-foreground">
            Clique abaixo e veja como seu ensaio pode ficar.
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={CTA_WHATSAPP} target="_blank">
                Quero meu Ensaio IA Personalizado
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalogo">Ver Catálogo de Referências</Link>
            </Button>
          </div>

          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            Ensaios IA personalizados • Atendimento humano • Qualidade
            profissional
          </div>
        </div>
      </section>
    </main>
  );
}
