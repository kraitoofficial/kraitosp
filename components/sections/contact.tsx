"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Youtube,
  Linkedin,
  Github,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { countryCodes } from "@/lib/countryCodes";
import { useTheme } from "next-themes";
import Image from "next/image";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { BsWhatsapp } from "react-icons/bs";
import type { LucideProps } from "lucide-react";

// Declare global types for Turnstile
declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: () => void;
    turnstile?: {
      render: (element: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

// Define the type for social links
type SocialLink = {
  label: string;
  href: string;
} & (
  | {
      type: "lucide";
      icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >;
    }
  | { type: "react-icon"; icon: React.ReactElement }
  | { type: "custom"; iconSrc: { dark: string; light: string } }
);

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+880",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };

    window.onTurnstileError = () => {
      setTurnstileToken("");
      toast.error("Verification Error", {
        description: "Please try the security verification again.",
      });
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      delete window.onTurnstileSuccess;
      delete window.onTurnstileError;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      toast.error("Verification Required", {
        description: "Please complete the security verification.",
      });
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid Email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.phone) {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        toast.error("Invalid Phone Number", {
          description: "Please enter a valid phone number.",
        });
        return;
      }
      if (/^(\d)\1+$/.test(phoneDigits)) {
        toast.error("Invalid Phone Number", {
          description: "Please enter a realistic phone number.",
        });
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          phone: "",
          message: "",
        });
        setTurnstileToken("");
        if (window.turnstile) {
          window.turnstile.reset();
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("Error", {
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sanitizeInput = (value: string) => value.replace(/<[^>]*>?/gm, "");
  const handleChange = (field: string, value: string) => {
    let sanitizedValue = sanitizeInput(value);
    if (field === "phone") {
      sanitizedValue = sanitizedValue.replace(/\D/g, "");
    }
    setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801313347660",
      href: "tel:+8801313347660",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@kraito.com",
      href: "mailto:contact@kraito.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Dhaka, Bangladesh",
      href: "https://www.google.com/maps/place/Dhaka/",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: "+8801313347660",
      href: "https://wa.me/8801313347660",
      icon: <BsWhatsapp size={12} />,
      type: "react-icon",
    },
    {
      icon: Facebook,
      label: "kraitodev",
      href: "https://www.facebook.com/kraitodev/",
      type: "lucide",
    },
    {
      icon: Youtube,
      label: "@kraitoofficial",
      href: "https://www.youtube.com/@kraitoofficial",
      type: "lucide",
    },
    {
      icon: Linkedin,
      label: "kraito",
      href: "https://www.linkedin.com/company/kraito/",
      type: "lucide",
    },
    {
      icon: Github,
      label: "kraitoofficial",
      href: "https://github.com/kraitoofficial",
      type: "lucide",
    },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Let's Craft Something Amazing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Transform Your Digital Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your vision and bring it
            to life together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Let's Discuss Your Project</CardTitle>
              <CardDescription>
                Share your ideas with us, and we'll help bring your vision to
                life with cutting-edge web solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                    maxLength={50}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <div className="flex gap-2">
                    <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={countryOpen}
                          className="w-[140px] justify-between"
                        >
                          {formData.countryCode
                            ? countryCodes.find(
                                (country) =>
                                  country.code === formData.countryCode
                              )?.code
                            : "Select..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput placeholder="Search country..." />
                          <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countryCodes.map((country) => (
                                <CommandItem
                                  key={country.code}
                                  value={`${country.code} ${country.country}`}
                                  onSelect={() => {
                                    handleChange("countryCode", country.code);
                                    setCountryOpen(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      formData.countryCode === country.code
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {country.code} ({country.country})
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <Input
                      id="phone"
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="1234567890"
                      className="flex-1"
                      maxLength={15}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    rows={5}
                    maxLength={1000}
                  />
                </div>

                {/* Cloudflare Turnstile - Only render if we have the site key */}
                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                  <div className="space-y-2">
                    <Label>Security Verification *</Label>
                    <div
                      className="cf-turnstile"
                      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      data-callback="onTurnstileSuccess"
                      data-error-callback="onTurnstileError"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={
                    isSubmitting ||
                    (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
                    !turnstileToken
                      ? true
                      : undefined)
                  }
                >
                  {isSubmitting ? "Sending..." : "Start Your Project"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Social Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        asChild
                        className="justify-start"
                      >
                        <a href={social.href}>
                          {/* Handle different icon types */}
                          {social.type === "lucide" && social.icon ? (
                            <social.icon className="w-4 h-4 mr-2" />
                          ) : social.type === "react-icon" && social.icon ? (
                            <span className="mr-2">{social.icon}</span>
                          ) : social.type === "custom" && social.iconSrc ? (
                            <Image
                              src={
                                theme === "dark"
                                  ? social.iconSrc.dark
                                  : social.iconSrc.light
                              }
                              alt={`${social.label} icon`}
                              width={12}
                              height={12}
                              className="mr-2"
                            />
                          ) : null}
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
