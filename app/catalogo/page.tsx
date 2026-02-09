import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA_WHATSAPP =
  "https://wa.me/5551920000910?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!";

const GALLERY = [
  "https://ahsolucoesdigitais.com/images/testimonial-after-1.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-2.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-3.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-4.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-5.png",
  "https://ahsolucoesdigitais.com/images/testimonial-after-6.png",
];

const MALE_STYLES = [
  {
    title: "Profissão",
    description: "Ensaios focados em carreiras e profissões",
    image: "https://ahsolucoesdigitais.com/images/executive-profile.png",
  },
  {
    title: "Estúdio",
    description: "Ensaios em ambiente de estúdio profissional",
    image: "https://ahsolucoesdigitais.com/images/estudio-photo.png",
    cta: "Ver referências",
  },
  {
    title: "Externo",
    description: "Ensaios em locações externas",
    image: "https://ahsolucoesdigitais.com/images/externo-masculino-photo.avif",
    cta: "Ver referências",
  },
  {
    title: "Corporativo",
    description: "Fotos profissionais para LinkedIn e negócios",
    image: "https://ahsolucoesdigitais.com/images/corporativo-photo.png",
    cta: "Ver referências",
  },
  {
    title: "Hobbies",
    description: "Ensaios temáticos com seus hobbies favoritos",
    image: "https://ahsolucoesdigitais.com/images/hobbies-masculino-photo.avif",
  },
];

const FEMALE_STYLES = [
  {
    title: "Profissão",
    description: "Ensaios focados em carreiras e profissões",
    image: "https://ahsolucoesdigitais.com/images/testimonial-after-1.png",
  },
  {
    title: "Estúdio",
    description: "Ensaios em ambiente de estúdio profissional",
    image: "https://ahsolucoesdigitais.com/images/estudio-feminino-photo.avif",
    cta: "Ver referências",
  },
  {
    title: "Externo",
    description: "Ensaios em locações externas e natureza",
    image: "https://ahsolucoesdigitais.com/images/externo-photo.png",
    cta: "Ver referências",
  },
  {
    title: "Casual",
    description: "Estilo despojado e natural",
    image: "https://ahsolucoesdigitais.com/images/casual-feminino-photo.avif",
    cta: "Ver referências",
  },
  {
    title: "Formatura",
    description: "Ensaios temáticos de formatura",
    image: "https://ahsolucoesdigitais.com/images/formatura-feminino-photo.avif",
    cta: "Ver referências",
  },
  {
    title: "Aniversário",
    description: "Ensaios especiais de aniversário",
    image: "https://ahsolucoesdigitais.com/images/aniversario-feminino-photo.avif",
    cta: "Ver referências",
  },
  {
    title: "Premium",
    description: "Estilos exclusivos e sofisticados",
    image: "https://ahsolucoesdigitais.com/images/premium-feminino-photo.avif",
  },
  {
    title: "Western",
    description: "Estilo country e rústico",
    image: "https://ahsolucoesdigitais.com/images/western-feminino-photo.avif",
    cta: "Ver referências",
  },
];

function StyleGrid({ items }: { items: typeof MALE_STYLES }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden">
          <CardContent className="p-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            {item.cta && (
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.cta}
              </span>
            )}
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight">
              Escolha o Estilo do Seu Ensaio IA
            </h1>
            <p className="text-lg text-muted-foreground">
              Navegue pelos estilos e referências e selecione exatamente o visual
              que você deseja para o seu ensaio fotográfico personalizado com IA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={CTA_WHATSAPP} target="_blank">
                  Explorar Catálogo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Voltar para Home</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Badge className="w-fit" variant="secondary">
              Mais de 4.000 ensaios IA já realizados
            </Badge>
            <span className="text-sm text-muted-foreground">
              para clientes em todo o Brasil
            </span>
            <p className="text-muted-foreground">
              Resultados hiper-realistas, personalizados e adaptados ao estilo
              de cada pessoa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Galeria de Resultados</h2>
            <p className="text-muted-foreground">
              Resultados reais de clientes que escolheram seus estilos
              diretamente no nosso catálogo
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {GALLERY.map((src, index) => (
                <Card key={src} className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Resultado de ensaio IA ${index + 1}`}
                      className="h-52 w-full object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ensaios para Homens</h2>
            <p className="text-muted-foreground">
              Explore os estilos disponíveis para ensaios masculinos
            </p>
            <StyleGrid items={MALE_STYLES} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Ensaios para Mulheres</h2>
            <p className="text-muted-foreground">
              Explore os estilos disponíveis para ensaios femininos
            </p>
            <StyleGrid items={FEMALE_STYLES} />
          </div>

          <div className="space-y-3 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Como usar este catálogo?</h3>
            <p className="text-muted-foreground">
              Escolha quantos estilos quiser, explore as referências e envie os
              códigos ou links no momento do seu atendimento. Nosso time utiliza
              exatamente essas referências para criar seu ensaio IA
              personalizado.
            </p>
          </div>

          <footer className="text-xs text-muted-foreground">
            Ensaios IA · Fotografia profissional com Inteligência Artificial
            <br />© 2026 Ensaios IA. Todos os direitos reservados.
          </footer>
        </div>
      </section>
    </main>
  );
}
