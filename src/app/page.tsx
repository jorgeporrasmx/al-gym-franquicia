"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

// Icons as simple SVG components
const DumbbellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.4 14.4 9.6 9.6"/>
    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/>
    <path d="m21.5 21.5-1.4-1.4"/>
    <path d="M3.9 3.9 2.5 2.5"/>
    <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2"/>
    <rect width="6" height="6" x="9" y="9" rx="1"/>
    <path d="M15 2v2"/>
    <path d="M15 20v2"/>
    <path d="M2 15h2"/>
    <path d="M2 9h2"/>
    <path d="M20 15h2"/>
    <path d="M20 9h2"/>
    <path d="M9 2v2"/>
    <path d="M9 20v2"/>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const HeadphonesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4"/>
    <path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

// Logo AL GYM Component
const AlGymLogo = ({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) => {
  const sizes = {
    small: { height: 32, fontSize: "text-xl" },
    default: { height: 40, fontSize: "text-2xl" },
    large: { height: 56, fontSize: "text-4xl" },
  };
  const { height } = sizes[size];

  return (
    <svg
      viewBox="0 0 200 60"
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Letter 'a' - Gray */}
      <text x="0" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="#9CA3AF">
        a
      </text>
      {/* Letter 'l' - Gray */}
      <text x="32" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="#9CA3AF">
        l
      </text>
      {/* Letter 'g' - Orange */}
      <text x="52" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="#FF6B35">
        g
      </text>
      {/* Letter 'y' - Orange */}
      <text x="88" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="#FF6B35">
        y
      </text>
      {/* Letter 'm' - Orange */}
      <text x="118" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="#FF6B35">
        m
      </text>
      {/* Dot above 'y' - Orange */}
      <circle cx="107" cy="8" r="5" fill="#FF6B35"/>
    </svg>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="dark min-h-screen bg-[#1A1A2E] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <AlGymLogo size="default" className="hover:opacity-90 transition-opacity cursor-pointer" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Inicio", id: "hero" },
                { name: "Inversión", id: "inversion" },
                { name: "Tecnología", id: "tecnologia" },
                { name: "Plan", id: "plan" },
                { name: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-[#FF6B35] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D04A1B] text-white"
              >
                Solicitar Info
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2D2D44] border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {[
                { name: "Inicio", id: "hero" },
                { name: "Inversión", id: "inversion" },
                { name: "Tecnología", id: "tecnologia" },
                { name: "Plan", id: "plan" },
                { name: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-[#FF6B35] py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo prominente en el hero */}
          <div className="flex justify-center mb-8">
            <AlGymLogo size="large" className="scale-150 md:scale-[2]" />
          </div>

          <Badge className="mb-6 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30 px-4 py-2">
            +15 años de experiencia en el sector fitness
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Franquicia</span>{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] bg-clip-text text-transparent">
              AL GYM
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Gimnasios 24/7 con Tecnología de Vanguardia
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            La evolución de los gimnasios tradicionales hacia un modelo
            automatizado, con tecnología de punta y enfoque en la
            experiencia del usuario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D04A1B] text-white px-8 py-6 text-lg animate-pulse-glow"
            >
              Solicitar Información
              <ArrowRightIcon />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("inversion")}
              className="border-gray-600 text-gray-300 hover:bg-[#2D2D44] px-8 py-6 text-lg"
            >
              Ver Inversión
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "24/7", label: "Acceso Total" },
              { value: "Semi", label: "Automatizado" },
              { value: "35", label: "Meses ROI" },
              { value: "$250K", label: "Inversión Inicial" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#2D2D44]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDownIcon />
          </div>
        </div>
      </section>

      {/* Ventaja Competitiva */}
      <section className="py-20 bg-[#16162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Ventaja Competitiva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir AL GYM?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nuestra propuesta única nos diferencia de la competencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <UsersIcon />,
                title: "Atención Personalizada",
                description:
                  "Enfocada en personas no acostumbradas al gimnasio",
              },
              {
                icon: <CpuIcon />,
                title: "Semi-Automatizado",
                description: "Sistema integral de ventas, cobranza y seguimiento",
              },
              {
                icon: <ChartIcon />,
                title: "Financiamiento Pre-aprobado",
                description: "Para equipamiento completo desde el día uno",
              },
              {
                icon: <HeadphonesIcon />,
                title: "Soporte Tecnológico",
                description: "Completo desde el primer día de operación",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="fade-in-up bg-[#2D2D44] border-gray-700 hover:border-[#FF6B35]/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión Section */}
      <section id="inversion" className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Modelo de Inversión
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inversión Inicial Requerida
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Investment Card */}
            <Card className="fade-in-up bg-gradient-to-br from-[#2D2D44] to-[#1A1A2E] border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <BuildingIcon />
                  Desglose de Inversión
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#1A1A2E] rounded-lg">
                  <span className="text-gray-300">Cuota de Franquicia</span>
                  <span className="text-xl font-bold text-[#FF6B35]">
                    $250,000 MXN
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#1A1A2E] rounded-lg">
                  <span className="text-gray-300">Equipamiento Completo</span>
                  <span className="text-xl font-bold text-[#FF6B35]">
                    $5,750,000 MXN
                  </span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#FF6B35]/20 to-transparent rounded-lg">
                  <span className="text-white font-semibold">
                    TOTAL INVERSIÓN
                  </span>
                  <span className="text-2xl font-bold text-[#FF6B35]">
                    $6,000,000 MXN
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Financing Card */}
            <Card className="fade-in-up bg-gradient-to-br from-[#FF6B35]/10 to-[#2D2D44] border-[#FF6B35]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <ShieldCheckIcon />
                  Financiamiento para Equipamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Condiciones del financiamiento */}
                <div className="p-4 bg-[#1A1A2E] rounded-xl">
                  <h4 className="text-white font-semibold mb-3">Condiciones Pre-aprobadas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-[#2D2D44] rounded-lg">
                      <div className="text-2xl font-bold text-[#FF6B35]">$5.75M</div>
                      <div className="text-gray-400 text-xs">Monto financiable</div>
                    </div>
                    <div className="text-center p-3 bg-[#2D2D44] rounded-lg">
                      <div className="text-2xl font-bold text-[#FF6B35]">48</div>
                      <div className="text-gray-400 text-xs">Meses plazo</div>
                    </div>
                    <div className="text-center p-3 bg-[#2D2D44] rounded-lg">
                      <div className="text-2xl font-bold text-[#FF6B35]">18%</div>
                      <div className="text-gray-400 text-xs">Tasa anual aprox.</div>
                    </div>
                    <div className="text-center p-3 bg-[#2D2D44] rounded-lg">
                      <div className="text-2xl font-bold text-[#FF6B35]">~$167K</div>
                      <div className="text-gray-400 text-xs">Pago mensual</div>
                    </div>
                  </div>
                </div>

                {/* Beneficios */}
                {[
                  "Financiamiento gestionado por AL GYM con instituciones aliadas",
                  "Sin necesidad de historial crediticio empresarial",
                  "Equipamiento como garantía del crédito",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-[#1A1A2E]/50 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}

                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    <strong>Nota:</strong> El pago del financiamiento (~$167K/mes) está incluido en los costos operativos de las proyecciones.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financial Scenarios */}
          <Card className="fade-in-up bg-[#2D2D44] border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <ChartIcon />
                Escenarios de Proyección Financiera
              </CardTitle>
              <p className="text-gray-400 text-sm mt-2">
                Análisis transparente con tres escenarios para tu planificación
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Escenario Pesimista */}
                <div className="p-6 bg-[#1A1A2E] rounded-xl border border-gray-700">
                  <div className="text-center mb-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-2">
                      Conservador
                    </Badge>
                    <div className="text-3xl font-bold text-yellow-400">400 socios</div>
                    <p className="text-gray-500 text-sm">Mes 12</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ingresos</span>
                      <span className="text-white">$320,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Costos Op.</span>
                      <span className="text-gray-400">-$280,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Regalías + Mkt</span>
                      <span className="text-gray-400">-$21,000</span>
                    </div>
                    <Separator className="bg-gray-700 my-2" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Utilidad</span>
                      <span className="text-yellow-400">$19,000</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">ROI</span>
                      <span className="text-gray-400">~276 meses</span>
                    </div>
                  </div>
                </div>

                {/* Escenario Realista */}
                <div className="p-6 bg-gradient-to-b from-[#FF6B35]/10 to-[#1A1A2E] rounded-xl border-2 border-[#FF6B35]/50 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#FF6B35] text-white border-none">
                      Recomendado
                    </Badge>
                  </div>
                  <div className="text-center mb-4 mt-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-2">
                      Realista
                    </Badge>
                    <div className="text-3xl font-bold text-green-400">600 socios</div>
                    <p className="text-gray-500 text-sm">Mes 12 - Punto de Equilibrio</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ingresos</span>
                      <span className="text-white">$480,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Costos Op.</span>
                      <span className="text-gray-400">-$300,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Regalías + Mkt</span>
                      <span className="text-gray-400">-$29,000</span>
                    </div>
                    <Separator className="bg-gray-700 my-2" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Utilidad</span>
                      <span className="text-green-400">$151,000</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">ROI</span>
                      <span className="text-[#FF6B35]">~35 meses</span>
                    </div>
                  </div>
                </div>

                {/* Escenario Optimista */}
                <div className="p-6 bg-[#1A1A2E] rounded-xl border border-gray-700">
                  <div className="text-center mb-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2">
                      Optimista
                    </Badge>
                    <div className="text-3xl font-bold text-blue-400">800 socios</div>
                    <p className="text-gray-500 text-sm">Mes 12</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ingresos</span>
                      <span className="text-white">$640,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Costos Op.</span>
                      <span className="text-gray-400">-$320,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Regalías + Mkt</span>
                      <span className="text-gray-400">-$37,000</span>
                    </div>
                    <Separator className="bg-gray-700 my-2" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Utilidad</span>
                      <span className="text-blue-400">$283,000</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">ROI</span>
                      <span className="text-gray-400">~19 meses</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs text-center mt-4">
                * Proyecciones basadas en membresía promedio de $800 MXN. Los resultados pueden variar según ubicación y gestión.
              </p>
            </CardContent>
          </Card>

          {/* Desglose de Costos Operativos */}
          <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <BuildingIcon />
                Desglose de Costos Operativos Mensuales
              </CardTitle>
              <p className="text-gray-400 text-sm">Basado en escenario realista (600 socios)</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  {[
                    { label: "Renta del local (500m²)", value: "$80,000", percent: "27%" },
                    { label: "Nómina (3-4 empleados)", value: "$65,000", percent: "22%" },
                    { label: "Servicios (luz, agua, internet)", value: "$45,000", percent: "15%" },
                    { label: "Mantenimiento equipos", value: "$35,000", percent: "12%" },
                    { label: "Seguros y permisos", value: "$25,000", percent: "8%" },
                    { label: "Limpieza y suministros", value: "$20,000", percent: "7%" },
                    { label: "Software y licencias", value: "$15,000", percent: "5%" },
                    { label: "Varios / Contingencias", value: "$15,000", percent: "5%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#1A1A2E] rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                        <span className="text-gray-300">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-sm">{item.percent}</span>
                        <span className="text-white font-medium w-20 text-right">{item.value}</span>
                      </div>
                    </div>
                  ))}
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between items-center p-3 bg-[#FF6B35]/10 rounded-lg border border-[#FF6B35]/30">
                    <span className="text-white font-semibold">TOTAL COSTOS OPERATIVOS</span>
                    <span className="text-xl font-bold text-[#FF6B35]">$300,000</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-[#1A1A2E] rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Capital de Trabajo Requerido</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Además de la cuota de franquicia, necesitarás capital para operar los primeros meses mientras alcanzas el punto de equilibrio.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 border-b border-gray-700">
                        <span className="text-gray-400">Costos pre-apertura</span>
                        <span className="text-white">$150,000</span>
                      </div>
                      <div className="flex justify-between p-2 border-b border-gray-700">
                        <span className="text-gray-400">Capital operativo (3 meses)</span>
                        <span className="text-white">$450,000</span>
                      </div>
                      <div className="flex justify-between p-2 border-b border-gray-700">
                        <span className="text-gray-400">Fondo de contingencia</span>
                        <span className="text-white">$100,000</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#FF6B35]/10 rounded-lg mt-2">
                        <span className="text-white font-semibold">Total Capital de Trabajo</span>
                        <span className="text-xl font-bold text-[#FF6B35]">$700,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <p className="text-yellow-400 text-sm">
                      <strong>Inversión total estimada:</strong> Cuota de franquicia ($250K) + Capital de trabajo ($700K) = <strong>$950,000 MXN</strong> de desembolso inicial (sin contar equipamiento financiado).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tecnología Section */}
      <section id="tecnologia" className="py-20 bg-[#16162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Sistema Integral
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnología y Automatización
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Todo lo que necesitas para operar tu gimnasio de forma eficiente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tech Card */}
            <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <CpuIcon />
                  Tecnología y Automatización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {[
                    "Control de acceso 24/7 automatizado",
                    "Sistema de pagos integrado",
                    "CRM avanzado para seguimiento de prospectos",
                    "Cobranza automatizada con recordatorios personalizados",
                    "Plataforma Monday.com para gestión operativa",
                    "Software Poliwin (transición a software propio en 2ª etapa)",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1A1A2E] rounded-lg hover:bg-[#1A1A2E]/80 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Marketing Card */}
            <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <TargetIcon />
                  Marketing y Ventas Completo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {[
                    "Agente de ventas automatizado (voz y chat)",
                    "Sistema de onboarding personalizado",
                    "Campañas de marketing dirigidas",
                    "Seguimiento de funnel completo",
                    "Promociones personalizadas",
                    "Reportes mensuales detallados",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1A1A2E] rounded-lg hover:bg-[#1A1A2E]/80 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div className="mt-12 fade-in-up">
            <Card className="bg-gradient-to-r from-[#2D2D44] to-[#FF6B35]/10 border-[#FF6B35]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <HeadphonesIcon />
                  Soporte Integral al Franquiciatario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#FF6B35] mb-4">
                      Capacitación y Entrenamiento
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Programa de capacitación en video",
                        "Sesiones presenciales especializadas",
                        "Participación activa en lanzamiento (primera semana)",
                        "Soporte continuo durante operación",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckIcon />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#FF6B35] mb-4">
                      Especificaciones Técnicas
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: "Local mínimo", value: "500 m²" },
                        { label: "Duración del contrato", value: "5 años" },
                        {
                          label: "Ubicación inicial",
                          value: "CDMX y Zona Metropolitana",
                        },
                        {
                          label: "Expansión programada",
                          value: "Megalópolis 2026, México 2027",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-[#1A1A2E] rounded-lg"
                        >
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white font-medium">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciadores Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Diferenciadores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AL GYM vs Competencia Tradicional
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* AL GYM Column */}
            <Card className="fade-in-up bg-gradient-to-br from-[#FF6B35]/10 to-[#2D2D44] border-[#FF6B35]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35] text-center">
                  AL GYM
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Atención personalizada no intimidante",
                  "Sistema semi-automatizado",
                  "Marketing integral incluido",
                  "Financiamiento pre-aprobado",
                  "Enfoque en principiantes",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#1A1A2E] rounded-lg"
                  >
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Competition Column */}
            <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-400 text-center">
                  Competencia Tradicional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Ambiente intimidante",
                  "Procesos manuales",
                  "Marketing por cuenta propia",
                  "Financiamiento complicado",
                  "Enfoque en atletas",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#1A1A2E] rounded-lg"
                  >
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-red-400">
                      <XIcon />
                    </div>
                    <span className="text-gray-500">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Target Audience */}
          <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <TargetIcon />
                Público Objetivo Único
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Personas que nunca han ido al gimnasio",
                  "Usuarios intimidados por gimnasios tradicionales",
                  "Horarios flexibles 24/7",
                  "Ambiente cómodo y no competitivo",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#1A1A2E] rounded-xl text-center hover:bg-[#FF6B35]/10 transition-colors border border-transparent hover:border-[#FF6B35]/30"
                  >
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Plan de Implementación */}
      <section id="plan" className="py-20 bg-[#16162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Plan de Implementación
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu camino al éxito
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Fase 1",
                title: "Preparación",
                period: "Mes 1-2",
                items: [
                  "Firma de contrato de franquicia",
                  "Búsqueda y acondicionamiento de local",
                  "Gestión de financiamiento de equipamiento",
                ],
              },
              {
                phase: "Fase 2",
                title: "Instalación",
                period: "Mes 3",
                items: [
                  "Instalación de equipamiento",
                  "Implementación de sistemas tecnológicos",
                  "Capacitación intensiva del franquiciatario",
                ],
              },
              {
                phase: "Fase 3",
                title: "Lanzamiento",
                period: "Mes 4",
                items: [
                  "Campaña de pre-lanzamiento",
                  "Inauguración con soporte AL GYM",
                  "Inicio de operaciones con acompañamiento",
                ],
              },
              {
                phase: "Fase 4",
                title: "Crecimiento",
                period: "Mes 5+",
                items: [
                  "Estrategias de adquisición de socios",
                  "Optimización de operaciones",
                  "Escalamiento hacia punto de equilibrio",
                ],
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="fade-in-up bg-[#2D2D44] border-gray-700 hover:border-[#FF6B35]/50 transition-all duration-300 relative overflow-hidden group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]"></div>
                <CardHeader>
                  <Badge className="w-fit bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30 mb-2">
                    {phase.phase}
                  </Badge>
                  <CardTitle className="text-xl text-white">
                    {phase.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">{phase.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos y Regalías */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Requisitos */}
            <div className="fade-in-up">
              <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
                Requisitos del Franquiciatario
              </Badge>
              <h3 className="text-2xl font-bold mb-6">Perfil Ideal</h3>

              <Card className="bg-[#2D2D44] border-gray-700 mb-6">
                <CardContent className="p-6 space-y-4">
                  {[
                    {
                      label: "Inversión inicial disponible",
                      value: "$250,000 + capital de trabajo",
                    },
                    {
                      label: "Compromiso de tiempo",
                      value: "Dedicación administrativa",
                    },
                    {
                      label: "Ubicación",
                      value: "CDMX y Zona Metropolitana",
                    },
                    {
                      label: "Visión de negocio",
                      value: "Enfoque en servicio al cliente",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1A1A2E] rounded-lg"
                    >
                      <CheckIcon />
                      <div>
                        <span className="text-gray-400 text-sm">
                          {item.label}:
                        </span>
                        <span className="text-white ml-2">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                NO Requiere:
              </h4>
              <div className="space-y-3">
                {[
                  "Experiencia previa en gimnasios",
                  "Conocimientos técnicos especializados",
                  "Inversión completa inmediata (gracias al financiamiento)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <XIcon />
                    </div>
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regalías */}
            <div className="fade-in-up">
              <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
                Estructura de Costos
              </Badge>
              <h3 className="text-2xl font-bold mb-6">Regalías Mensuales</h3>

              <Card className="bg-[#2D2D44] border-gray-700 mb-6">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-[#FF6B35] mb-2">
                      $20
                    </div>
                    <div className="text-gray-400">por socio activo</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Modelo transparente y escalable",
                      "Solo pagas por socios reales, no cuotas fijas",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#FF6B35]/10 to-[#2D2D44] border-[#FF6B35]/30">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Servicio de Marketing (Obligatorio)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-[#1A1A2E] rounded-lg">
                    <span className="text-gray-400">Cuota fija</span>
                    <span className="text-white font-semibold">
                      $5,000/mes
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#1A1A2E] rounded-lg">
                    <span className="text-gray-400">Cuota variable</span>
                    <span className="text-white font-semibold">
                      $20/socio activo
                    </span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="p-4 bg-[#1A1A2E] rounded-lg">
                    <p className="text-sm text-gray-400 mb-3">
                      Ejemplo con 600 socios:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Regalías:</span>
                        <span className="text-white">$12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Marketing:</span>
                        <span className="text-white">$17,000</span>
                      </div>
                      <Separator className="bg-gray-700" />
                      <div className="flex justify-between font-semibold">
                        <span className="text-[#FF6B35]">Total franquicia:</span>
                        <span className="text-[#FF6B35]">$29,000/mes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Siguientes Pasos */}
      <section className="py-20 bg-[#16162A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Siguientes Pasos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {[
                "Reunión de presentación detallada",
                "Visita a instalaciones modelo",
                "Revisión de documentación financiera",
                "Firma de carta de intención",
                "Proceso de selección de ubicación",
                "Inicio del proceso de franquicia",
              ].map((step, index) => (
                <div
                  key={index}
                  className="fade-in-up flex items-center gap-6 mb-6 last:mb-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 p-4 bg-[#2D2D44] rounded-xl border border-gray-700 hover:border-[#FF6B35]/50 transition-colors">
                    <span className="text-gray-300">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              Contacto
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicita más información
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Esta es tu oportunidad de ser pionero en un concepto
              revolucionario de gimnasios en México, con el respaldo de 15 años
              de experiencia y tecnología de vanguardia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="fade-in-up bg-[#2D2D44] border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Formulario de contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-[#1A1A2E] border border-gray-700 rounded-lg text-white focus:border-[#FF6B35] focus:outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 bg-[#1A1A2E] border border-gray-700 rounded-lg text-white focus:border-[#FF6B35] focus:outline-none transition-colors"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 bg-[#1A1A2E] border border-gray-700 rounded-lg text-white focus:border-[#FF6B35] focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Ubicación de interés
                    </label>
                    <select className="w-full p-3 bg-[#1A1A2E] border border-gray-700 rounded-lg text-white focus:border-[#FF6B35] focus:outline-none transition-colors">
                      <option value="">Selecciona una zona</option>
                      <option value="cdmx-norte">CDMX Norte</option>
                      <option value="cdmx-sur">CDMX Sur</option>
                      <option value="cdmx-poniente">CDMX Poniente</option>
                      <option value="cdmx-oriente">CDMX Oriente</option>
                      <option value="edomex">Estado de México</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      className="w-full p-3 bg-[#1A1A2E] border border-gray-700 rounded-lg text-white focus:border-[#FF6B35] focus:outline-none transition-colors h-32 resize-none"
                      placeholder="Cuéntanos sobre tu interés en la franquicia..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D04A1B] text-white py-6 text-lg"
                  >
                    Enviar Solicitud
                    <ArrowRightIcon />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="fade-in-up space-y-6">
              <Card className="bg-[#2D2D44] border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-xl flex items-center justify-center">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono</p>
                      <p className="text-white text-lg">+52 55 1234 5678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2D2D44] border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-xl flex items-center justify-center">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white text-lg">
                        franquicias@algym.mx
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2D2D44] border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-xl flex items-center justify-center">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white text-lg">
                        CDMX y Zona Metropolitana
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#FF6B35]/20 to-[#2D2D44] border-[#FF6B35]/30">
                <CardContent className="p-6 text-center">
                  <RocketIcon />
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    ¿Listo para transformar vidas?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Únete a la revolución del fitness en México
                  </p>
                  <Badge className="bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
                    +15 años de experiencia
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#16162A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/30">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question:
                  "¿Cuánto tiempo toma abrir una franquicia AL GYM?",
                answer:
                  "El proceso completo desde la firma del contrato hasta la inauguración toma aproximadamente 4 meses, divididos en fases de preparación, instalación y lanzamiento.",
              },
              {
                question: "¿Necesito experiencia previa en el sector fitness?",
                answer:
                  "No, no es necesario tener experiencia previa. Proporcionamos capacitación completa en video y sesiones presenciales, además de soporte continuo durante la operación.",
              },
              {
                question: "¿Cómo funciona el financiamiento del equipamiento?",
                answer:
                  "Ofrecemos financiamiento pre-aprobado para el equipamiento completo. Solo necesitas liquidar la cuota de franquicia ($250,000 MXN) más capital de trabajo inicial.",
              },
              {
                question: "¿En qué zonas puedo abrir mi franquicia?",
                answer:
                  "Actualmente operamos en CDMX y Zona Metropolitana. La expansión a la Megalópolis está programada para 2026 y a todo México para 2027.",
              },
              {
                question: "¿Qué incluye el servicio de marketing?",
                answer:
                  "Incluye gestión completa de marketing digital, CRM, cobranza automatizada, agente de ventas automatizado (voz y chat), campañas dirigidas, y reportes mensuales detallados.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#2D2D44] border border-gray-700 rounded-lg px-6 data-[state=open]:border-[#FF6B35]/50"
              >
                <AccordionTrigger className="text-white hover:text-[#FF6B35] hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1A1A2E] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <AlGymLogo size="default" />
            </div>

            <p className="text-gray-400 text-center md:text-left">
              Transformando vidas, construyendo el futuro del fitness.
            </p>

            <p className="text-gray-500 text-sm">
              © 2024 AL GYM. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
