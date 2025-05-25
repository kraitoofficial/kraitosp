import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const features = [
    "SEO-Optimized",
    "Conversion-Focused",
    "Mobile Responsive",
    "Speed Optimized",
  ];

  return (
    <section id="home" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            Web Development Professionals
          </Badge>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We Build Websites That Drive{" "}
              <span className="text-primary">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A boutique web development team crafting high-performance,
              conversion-focused websites for entrepreneurs and growing
              businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Standard Banner with 16:9 aspect ratio */}
          <div className="w-full max-w-6xl mx-auto">
            <Card className="relative overflow-hidden p-0 rounded-lg border-0 shadow-none">
              {/* Using aspect-video for standard 16:9 ratio */}
              <div className="aspect-video w-full">
                <img
                  src="https://eba88uequf.ufs.sh/f/1ZJ049kRLBlDZBulv49Ln5sjbq89WouRUIpc4Pvh21OMQg0i"
                  alt="Team working on web development projects"
                  className="w-full h-full object-cover m-0 p-0 align-top"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                <blockquote className="text-lg md:text-xl font-medium text-white">
                  "Our websites aren't just beautiful—they're crafted to drive
                  results and grow your business."
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
