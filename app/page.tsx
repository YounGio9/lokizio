"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MessageCircle,
  DoorOpen,
  Sparkles,
  ClipboardCheck,
  Bell,
  CheckCircle,
  Zap,
  Target,
  Rocket,
  FileText,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowDown,
  Send,
  Star,
  Shield,
  Home,
  Award,
  X,
  Menu,
  Gift,
  ShoppingBag,
  AlertCircle,
  Car,
  Check,
  Quote,
  Play
} from "lucide-react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@lokizio.fr?subject=Demande de contact - ${formData.name}&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
  };

  const services = [
    {
      icon: MessageCircle,
      title: "Gestion des messages",
      description: "Communication fluide avec vos voyageurs 24h/24, réponses rapides et professionnelles",
    },
    {
      icon: DoorOpen,
      title: "Arrivées & départs",
      description: "Organisation complète des check-in et check-out en toute sérénité",
    },
    {
      icon: Sparkles,
      title: "Ménage & linge",
      description: "Coordination professionnelle du nettoyage et du linge de qualité hôtelière",
    },
    {
      icon: ClipboardCheck,
      title: "Suivi des séjours",
      description: "Gestion proactive des imprévus et demandes spéciales",
    },
    {
      icon: Bell,
      title: "Assistance sur place",
      description: "Intervention réactive en cas de besoin urgent",
    },
    {
      icon: CheckCircle,
      title: "Vérification logement",
      description: "Contrôle qualité après chaque séjour pour maintenir l'excellence",
    },
  ];

  const whyUs = [
    {
      icon: Zap,
      title: "Service réactif et personnalisé",
      description: "Une approche sur-mesure adaptée à chaque propriétaire et chaque bien",
    },
    {
      icon: Target,
      title: "Nombre de logements limité",
      description: "Nous sélectionnons nos partenaires pour garantir une qualité irréprochable",
    },
    {
      icon: Rocket,
      title: "Mise en place sous 48h",
      description: "Un démarrage rapide pour commencer à rentabiliser votre bien",
    },
    {
      icon: FileText,
      title: "Aucune contrainte administrative",
      description: "Nous gérons tout le quotidien, vous restez serein",
    },
  ];

  const additionalServices = [
    { name: "Panier d'accueil local", price: "25€", icon: Gift },
    { name: "Cadeau personnalisé", price: "15€", icon: Award },
    { name: "Organisation d'activités", price: "25€", icon: Star },
    { name: "Courses avant arrivée", price: "25€", icon: ShoppingBag },
    { name: "Intervention exceptionnelle", price: "30€", icon: AlertCircle },
    { name: "Déplacement supplémentaire", price: "20€", icon: Car },
  ];

  const steps = [
    {
      step: 1,
      title: "Signature du contrat",
      description: "Nous définissons ensemble les modalités de notre collaboration sur-mesure",
      icon: FileText
    },
    {
      step: 2,
      title: "Ajout co-hôte Airbnb",
      description: "Vous nous ajoutez simplement comme co-hôte sur votre annonce",
      icon: Home
    },
    {
      step: 3,
      title: "Gestion lancée",
      description: "Nous prenons en charge la gestion complète de votre bien",
      icon: Rocket
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAFA' }}>
      {/* Header with Centered Logo */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          boxShadow: isScrolled ? '0 2px 30px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Top Section - Logo */}
        <div
          className={isScrolled ? "header-logo-container scrolled" : "header-logo-container"}
          style={{
            textAlign: 'center',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            borderBottom: '1px solid rgba(0,0,0,0.04)'
          }}>
          <a href="#" style={{ display: 'inline-block' }}>
            {/* Using a simpler approach for responsive image sizing via CSS class in globals.css */}
            <Image
              src="/images/logo-without-bg.png"
              alt="Lokizio"
              width={200}
              height={75}
              className="logo-responsive"
              style={{
                width: 'auto',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              priority
            />
          </a>
          <p className="hidden md:block" style={{
            color: '#6B7280',
            fontSize: '14px',
            marginTop: '8px',
            letterSpacing: '0.05em',
            display: isScrolled ? 'none' : 'block'
          }}>
            Conciergerie de locations courte durée
          </p>
        </div>

        {/* Navigation Row */}
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Desktop Menu */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '48px' }}>
            <a href="#services" className="nav-link">Prestations</a>
            <a href="#pourquoi" className="nav-link">Pourquoi nous choisir?</a>
            <a href="#tarifs" className="nav-link">Tarifs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{
              padding: '12px',
              background: 'rgba(196, 160, 82, 0.1)',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '12px',
              transition: 'all 0.3s'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} color="#C4A052" /> : <Menu size={22} color="#2D2D2D" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden animate-fade-in"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0,0,0,0.05)',
              padding: '24px 32px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Prestations</a>
              <a href="#pourquoi" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pourquoi nous choisir?</a>
              <a href="#tarifs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
              <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '220px',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, #FAF8F5 0%, #FAFAFA 100%)',
        position: 'relative',
        overflow: 'visible'
      }}>
        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(196, 160, 82, 0.06) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(196, 160, 82, 0.04) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div
          className="hero-grid"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 48px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'white',
              color: '#C4A052',
              padding: '12px 24px',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 500,
              marginBottom: '36px',
              border: '1px solid rgba(196, 160, 82, 0.25)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#C4A052',
                borderRadius: '50%',
                boxShadow: '0 0 0 3px rgba(196, 160, 82, 0.2)'
              }} />
              Conciergerie Airbnb
            </div>

            <h1 className="heading-font" style={{
              fontSize: 'clamp(3rem, 5.5vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              marginBottom: '32px',
              color: '#2D2D2D',
              letterSpacing: '-0.02em'
            }}>
              Déléguez enfin{' '}
              <span className="gold-gradient-text" style={{ display: 'block', marginTop: '8px' }}>
                la gestion quotidienne
              </span>
              <span style={{ display: 'block', marginTop: '8px' }}>de votre logement</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#6B7280',
              marginBottom: '44px',
              lineHeight: 1.8,
              maxWidth: '520px'
            }}>
              LOKIZIO prend en charge la gestion complète de vos locations saisonnières.
              Vous encaissez directement vos loyers, nous gérons le reste.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
              <a href="#contact" className="btn-primary">
                Demander un devis gratuit
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary">
                Découvrir nos services
              </a>
            </div>

            {/* Location Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              color: '#6B7280',
              fontSize: '15px'
            }}>
              <MapPin size={20} style={{ color: '#C4A052' }} />
              <span>Paris • Île-de-France • Chartres • Orléans</span>
            </div>
          </div>

          {/* Hero Images */}
          <div className="hidden lg:block" style={{ position: 'relative', height: '580px' }}>
            {/* Main Image */}
            <div
              className="animate-fade-in"
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '85%',
                height: '420px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
              }}
            >
              <Image
                src="/images/IMG_2114.jpeg"
                alt="Intérieur luxueux"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Secondary Image */}
            <div
              className="animate-fade-in"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '220px',
                height: '280px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                border: '5px solid white',
                animationDelay: '0.2s'
              }}
            >
              <Image
                src="/images/IMG_2115.jpeg"
                alt="Service de qualité"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating Card */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '20px 24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                background: 'linear-gradient(135deg, #FAF8F5 0%, #F0EDE7 100%)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(196, 160, 82, 0.15)'
              }}>
                <Star size={24} style={{ color: '#C4A052' }} />
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#2D2D2D', fontSize: '1.5rem', lineHeight: 1 }}>5.0</p>
                <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>Satisfaction client</p>
              </div>
            </div>

            {/* Trust Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '100px',
                right: '40px',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              <Shield size={20} style={{ color: '#C4A052' }} />
              <span style={{ fontSize: '13px', color: '#2D2D2D', fontWeight: 500 }}>Service de confiance</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-bounce hidden lg:flex"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '12px', color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Découvrir</span>
          <ArrowDown size={20} style={{ color: '#C4A052' }} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
            <p style={{
              color: '#C4A052',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Nos services
            </p>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Prestations incluses dans la gestion
            </h2>
            <p className="section-subtitle">
              Une prise en charge complète pour vous libérer du temps et maximiser vos revenus locatifs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                className="card"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div className="icon-container">
                  <service.icon size={26} style={{ color: '#C4A052' }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#2D2D2D'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '15px' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="pourquoi" style={{ padding: '120px 0', backgroundColor: '#FAF8F5' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '80px',
            alignItems: 'center'
          }} className="lg:grid-cols-2">

            {/* Content */}
            <div>
              <p style={{
                color: '#C4A052',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Pourquoi nous
              </p>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                Pourquoi choisir{' '}
                <span className="gold-gradient-text">LOKIZIO</span> ?
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#6B7280',
                marginBottom: '48px',
                lineHeight: 1.8
              }}>
                Nous ne sommes pas une simple conciergerie. Nous sommes votre
                partenaire de confiance pour maximiser vos revenus tout en
                préservant votre tranquillité d&apos;esprit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      padding: '20px',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                  >
                    <div className="icon-container" style={{ width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0 }}>
                      <item.icon size={22} style={{ color: '#C4A052' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, color: '#2D2D2D', marginBottom: '6px', fontSize: '1rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with Quote Card */}
            <div className="hidden lg:block" style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
                height: '600px',
                position: 'relative'
              }}>
                <Image
                  src="/images/IMG_2116.jpeg"
                  alt="Paris"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Founder Card */}
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '28px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                maxWidth: '320px',
                border: '1px solid rgba(0,0,0,0.04)'
              }}>
                <Quote size={24} style={{ color: '#C4A052', marginBottom: '16px', opacity: 0.6 }} />
                <p style={{ color: '#6B7280', fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px' }}>
                  Notre mission : vous permettre de profiter de vos revenus locatifs sans les contraintes du quotidien.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #C4A052' }}>
                    <Image src="/images/IMG_2115.jpeg" alt="Maimouna" width={48} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: '#2D2D2D', fontSize: '15px' }}>Maimouna</p>
                    <p style={{ fontSize: '13px', color: '#C4A052' }}>Fondatrice LOKIZIO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px' }}>
            <p style={{
              color: '#C4A052',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Tarification
            </p>
            <h2 className="section-title">Tarification transparente</h2>
            <p className="section-subtitle">
              LOKIZIO gagne uniquement lorsque votre logement génère des revenus
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="lg:grid-cols-2">
            {/* Main Pricing */}
            <div className="pricing-card">
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#2D2D2D', marginBottom: '8px' }}>
                  Gestion opérationnelle complète
                </h3>
                <p style={{ color: '#6B7280', fontSize: '15px' }}>
                  Tout ce dont vous avez besoin pour une gestion sereine
                </p>
              </div>

              <div style={{ marginBottom: '36px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span className="gold-gradient-text" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>20%</span>
                  <span style={{ color: '#6B7280', fontSize: '15px' }}>du CA Airbnb</span>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(196, 160, 82, 0.1)',
                  color: '#C4A052',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  <Check size={16} />
                  Minimum : 200€ / mois / logement
                </div>
              </div>

              <ul className="check-list" style={{ marginBottom: '36px' }}>
                {services.map((service, index) => (
                  <li key={index}>
                    <CheckCircle size={18} style={{ color: '#C4A052', flexShrink: 0 }} />
                    <span style={{ color: '#2D2D2D', fontSize: '15px' }}>{service.title}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Commencer maintenant
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Additional Services */}
            <div className="card" style={{ backgroundColor: '#FAFAFA' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#2D2D2D', marginBottom: '8px' }}>
                Services complémentaires
              </h3>
              <p style={{ color: '#6B7280', marginBottom: '32px', fontSize: '15px' }}>
                Sur demande, pour améliorer l&apos;expérience de vos voyageurs
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 20px',
                      backgroundColor: 'white',
                      borderRadius: '14px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <service.icon size={18} style={{ color: '#C4A052' }} />
                      <span style={{ color: '#2D2D2D', fontSize: '15px' }}>{service.name}</span>
                    </div>
                    <span style={{ fontWeight: 600, color: '#C4A052', fontSize: '14px' }}>+ {service.price}</span>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '24px',
                background: 'linear-gradient(145deg, white 0%, #FAF8F5 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(196, 160, 82, 0.15)'
              }}>
                <h4 style={{
                  fontWeight: 600,
                  color: '#2D2D2D',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '15px'
                }}>
                  <Shield size={18} style={{ color: '#C4A052' }} />
                  Engagement de transparence
                </h4>
                <ul style={{ fontSize: '14px', color: '#6B7280' }}>
                  {[
                    'Aucun encaissement des loyers par LOKIZIO',
                    'Aucune exclusivité imposée',
                    'Résiliation possible avec préavis simple'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: i < 2 ? '12px' : 0 }}>
                      <Check size={14} style={{ color: '#C4A052' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" style={{ padding: '120px 0', backgroundColor: '#FAF8F5' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px' }}>
            <p style={{
              color: '#C4A052',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Processus
            </p>
            <h2 className="section-title">
              Mise en place en <span className="gold-gradient-text">3 étapes</span>
            </h2>
            <p className="section-subtitle">
              Un processus simplifié pour démarrer votre collaboration
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            position: 'relative'
          }}>
            {steps.map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '40px 32px',
                  backgroundColor: 'white',
                  borderRadius: '28px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                <div className="step-circle" style={{ margin: '0 auto 24px' }}>
                  {item.step}
                </div>
                <div
                  className="icon-container"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    margin: '0 auto 20px'
                  }}
                >
                  <item.icon size={24} style={{ color: '#C4A052' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2D2D2D', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <a href="#contact" className="btn-primary">
              Démarrer en moins de 48h
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Staggered Bento Grid */}
      <section style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '600px', margin: '0 auto 64px' }}>
            <p style={{
              color: '#C4A052',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Portfolio
            </p>
            <h2 className="section-title">
              Des logements d&apos;exception
            </h2>
            <p className="section-subtitle">
              Nous mettons notre expertise au service de biens de qualité
            </p>
          </div>

          {/* Bento Grid Gallery */}
          <div className="bento-gallery">
            {/* Large Featured Image */}
            <div
              className="image-wrapper"
              style={{
                borderRadius: '28px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <Image
                src="/images/IMG_2113.jpeg"
                alt="Appartement de luxe"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'white',
                padding: '12px 20px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                zIndex: 10
              }}>
                <Star size={16} style={{ color: '#C4A052' }} />
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#2D2D2D' }}>Coup de cœur</span>
              </div>
            </div>

            {/* Other Images */}
            {["/images/IMG_2114.jpeg", "/images/IMG_2115.jpeg", "/images/IMG_2116.jpeg"].map((src, index) => (
              <div
                key={index}
                className="image-wrapper"
                style={{
                  borderRadius: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  // Only apply grid column span on desktop via media query if needed, 
                  // but for now relying on globals.css class structure
                }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 2}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '120px 0', backgroundColor: '#FAF8F5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px'
          }} className="lg:grid-cols-2">

            {/* Contact Info */}
            <div>
              <p style={{
                color: '#C4A052',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Contact
              </p>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                Prêt à nous confier votre logement ?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#6B7280', marginBottom: '40px', lineHeight: 1.8 }}>
                Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé gratuit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {[
                  { icon: Phone, label: 'Téléphone', value: '06 05 55 33 91', href: 'tel:0605553391' },
                  { icon: Mail, label: 'Email', value: 'contact@lokizio.fr', href: 'mailto:contact@lokizio.fr' },
                  { icon: MapPin, label: 'Zones d\'intervention', value: 'Paris • Île-de-France • Chartres • Orléans', href: null }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px 24px',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                      border: '1px solid rgba(0,0,0,0.04)'
                    }}
                  >
                    <div className="icon-container" style={{ width: '52px', height: '52px', borderRadius: '14px' }}>
                      <item.icon size={22} style={{ color: '#C4A052' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '4px' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '1rem', fontWeight: 600, color: '#2D2D2D', textDecoration: 'none' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#2D2D2D' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '24px',
                background: 'linear-gradient(145deg, white 0%, #FAF8F5 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(196, 160, 82, 0.15)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
              }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid #C4A052' }}>
                  <Image src="/images/IMG_2115.jpeg" alt="Maimouna" width={70} height={70} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: '#2D2D2D', fontSize: '1.1rem' }}>Maimouna</p>
                  <p style={{ fontSize: '14px', color: '#C4A052', marginBottom: '6px' }}>Fondatrice LOKIZIO</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>
                    À votre écoute pour répondre à toutes vos questions
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* Contact Form */}
            {/*
            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#2D2D2D', marginBottom: '32px' }}>
                Envoyez-nous un message
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#2D2D2D', marginBottom: '10px' }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#2D2D2D', marginBottom: '10px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#2D2D2D', marginBottom: '10px' }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="06 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#2D2D2D', marginBottom: '10px' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-input"
                    style={{ resize: 'none' }}
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
                  Envoyer le message
                  <Send size={16} />
                </button>
              </form>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1F1F1F', color: 'white', padding: '60px 0 30px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div 
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
              marginBottom: '48px'
            }}
          >
            {/* Brand */}
            <div className="footer-brand" style={{ gridColumn: 'span 1' }}>
              <Image
                src="/images/logo-without-bg.png"
                alt="Lokizio"
                width={160}
                height={50}
                style={{ height: '44px', width: 'auto', marginBottom: '24px', filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ color: '#9CA3AF', maxWidth: '340px', marginBottom: '28px', lineHeight: 1.8, fontSize: '15px' }}>
                Conciergerie de locations courte durée. Nous intervenons pour les propriétaires souhaitant déléguer la gestion des voyageurs.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['facebook', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    {social === 'facebook' ? (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '24px', fontSize: '15px' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Services', 'Pourquoi nous', 'Tarifs', 'Processus', 'Contact'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '14px' }}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      style={{
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.3s'
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '24px', fontSize: '15px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF', fontSize: '15px' }}>
                <li style={{ marginBottom: '14px' }}>
                  <a href="tel:0605553391" style={{ color: '#9CA3AF', textDecoration: 'none' }}>06 05 55 33 91</a>
                </li>
                <li style={{ marginBottom: '14px' }}>
                  <a href="mailto:contact@lokizio.fr" style={{ color: '#9CA3AF', textDecoration: 'none' }}>contact@lokizio.fr</a>
                </li>
                <li style={{ marginBottom: '14px' }}>Paris • Île-de-France</li>
                <li>Chartres • Orléans</li>
              </ul>
            </div>
          </div>

          <div 
            className="footer-bottom"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <p style={{ color: '#6B7280', fontSize: '14px' }}>
              © 2026 LOKIZIO. Tous droits réservés.
            </p>
            <div className="footer-links" style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#6B7280' }}>
              <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Mentions légales</a>
              <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
