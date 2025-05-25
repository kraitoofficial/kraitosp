import {
  Globe,
  Code,
  ShoppingBag,
  Square,
  Circle,
  Grid,
  Rocket,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "WordPress",
      description:
        "Custom WordPress themes and plugins tailored to your business needs.",
    },
    {
      icon: Code,
      title: "React & Next.js",
      description:
        "Modern web applications with the latest React and Next.js frameworks.",
    },
    {
      icon: ShoppingBag,
      title: "Shopify",
      description: "E-commerce stores with custom themes and functionalities.",
    },
    {
      icon: Square,
      title: "Wix",
      description: "Professional Wix websites with custom code integration.",
    },
    {
      icon: Circle,
      title: "Webflow",
      description:
        "Stunning Webflow sites with complex interactions and animations.",
    },
    {
      icon: Grid,
      title: "HubSpot & Kajabi",
      description:
        "Marketing-focused websites integrated with HubSpot or Kajabi.",
    },
    {
      icon: Rocket,
      title: "SEO Optimization",
      description:
        "Websites built with search engines in mind for better rankings.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description:
        "Regular updates, and ongoing support to keep your website running smoothly.",
    },
  ];

  return (
    <section id="services" className="w-full py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Main Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in crafting custom websites across various platforms,
            ensuring your online presence perfectly matches your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
