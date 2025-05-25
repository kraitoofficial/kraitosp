import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function WorkSection() {
  const projects = [
    {
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDdeCkDYimLfrGo8eZ9CNkbPERjwpWFT2X07Mt",
      platform: "React / Next.js",
      title: "Rabt | Organization Contacts Directory",
      description:
        "Rabt is a contact management system designed for enterprise-scale organizations. It provides a secure, efficient, user-friendly platform for managing professional contacts, organizational directories, and personal networks.",
      link: "https://rabt.kraito.com/",
    },
    {
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDpfozHPenrXvVz9bUxy3FhlC0atiEkPZ5sI6D",
      platform: "WordPress",
      title: "Safar | Premium Travel Agency & Tourism Elementor Template Kit",
      description:
        "Safar is a comprehensive Elementor Template Kit meticulously crafted for travel agencies, tour operators, tourism bureaus, and any travel-related business. Build a stunning, professional, and highly functional website visually using Elementor.",
      link: "https://safar.kraito.com/",
    },
    {
      image:
        "https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDm3X459jNxSFgVvqeKWOEdhCBY0csaMP8zbuw",
      platform: "React / Next.js",
      title: "CaseCobra | Custom Phone Case Order Platform",
      description:
        "CaseCobra is a custom phone case platform built with Next.js. Customers can upload images or designs to preview and personalize phone cases live before placing an order. Fast, interactive, and user-friendly design your perfect case with CaseCobra.",
      link: "https://casepython.vercel.app/",
    },
  ];

  return (
    <section id="work" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Portfolio Showcase
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Some of our latest projects across different platforms and
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              {/* Image Container with Padding */}
              <CardContent className="p-6 pt-0 pb-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>

              {/* Content Container */}
              <CardContent className="space-y-4 pt-0">
                <Badge variant="secondary">{project.platform}</Badge>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
