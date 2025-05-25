"use client";
import {
  Check,
  ArrowRight,
  Code,
  ShoppingCart,
  Zap,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function SolutionsSection() {
  const solutions = {
    "custom-websites": {
      icon: Code,
      title: "Custom Websites",
      description:
        "Tailored websites that perfectly match your brand and business needs.",
      features: [
        "Responsive design for all devices",
        "SEO optimization built-in",
        "Custom functionality",
        "Content management systems",
      ],
      technologies: [
        "WordPress",
        "Next.js",
        "React",
        "Webflow",
        "Wix",
        "HubSpot",
      ],
      // Replace with your UploadThing custom websites image URL
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDxF4sIgrN4vSMbWQw2Cr7fqcnaTKXJkzheEIt",
    },
    "e-commerce": {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Powerful online stores that drive sales and enhance customer experience.",
      features: [
        "Secure payment processing",
        "Inventory management",
        "Mobile-optimized checkout",
        "Analytics and reporting",
      ],
      technologies: ["Shopify", "WooCommerce", "Next.js", "Custom"],
      // Replace with your UploadThing e-commerce image URL
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDw8XbIt7f8PSjK3csD9IVhHLt14ZUx0JeRWlE",
    },
    "web-applications": {
      icon: Zap,
      title: "Web Applications",
      description:
        "Scalable web applications built with modern technologies and frameworks.",
      features: [
        "Real-time functionality",
        "User authentication",
        "Database integration",
        "API development",
      ],
      technologies: ["React", "Next.js", "Webflow", "HubSpot"],
      // Replace with your UploadThing web applications image URL
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDmUfABkjNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
    },
    "digital-marketing": {
      icon: Search,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence.",
      features: [
        "Search engine optimization",
        "Social media marketing",
        "Content strategy",
        "Performance tracking",
      ],
      technologies: ["HubSpot", "WordPress", "Wix", "Webflow"],
      // Replace with your UploadThing digital marketing image URL
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDmzStLRjNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
    },
  };

  return (
    <section id="solutions" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Solutions Offered
          </Badge>{" "}
          <h2 className="text-3xl md:text-4xl font-bold">
            Tailored Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build websites and digital experiences that help your business
            grow.
          </p>
        </div>

        <Tabs defaultValue="custom-websites" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {Object.entries(solutions).map(([key, solution]) => {
              const Icon = solution.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{solution.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(solutions).map(([key, solution]) => {
            const Icon = solution.icon;
            return (
              <TabsContent key={key} value={key}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground">
                      {solution.description}
                    </p>

                    <div className="space-y-3">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="font-medium mb-3">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Card>
                    <CardContent className="p-6 py-0 aspect-[4/3]">
                      <img
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
