import {
  Headphones,
  MessagesSquare,
  Code,
  Search,
  Award,
  Bolt,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WhyUsSection() {
  const features = [
    {
      icon: MessagesSquare,
      title: "Direct Communication",
      description:
        "Work directly with the developers. No account managers or middlemen slowing things down.",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description:
        "Personalized attention to every project with custom solutions tailored to your unique needs.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Friendly, responsive support even after your project launches. We're invested in your success.",
    },
    {
      icon: Search,
      title: "SEO-Optimized",
      description:
        "Smart, search-friendly SEO built to boost visibility and drive organic traffic.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "We work efficiently to get your project live quickly without compromising on quality",
    },
    {
      icon: Award,
      title: "Verified Excellence",
      description:
        "Envato-certified quality and Fiverr-trusted service. We deliver with care and consistency.",
    },
  ];

  return (
    <section id="why-us" className="w-full py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Why Work With Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're your dedicated partners in crafting a smart online presence.
            Here's what sets us apart and makes us the web professionals you
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
