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
  Car
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
      description: "Communication fluide avec vos voyageurs 24h/24",
    },
    {
      icon: DoorOpen,
      title: "Arrivées & Départs",
      description: "Organisation complète des check-in et check-out",
    },
    {
      icon: Sparkles,
      title: "Ménage & Linge",
      description: "Coordination professionnelle du nettoyage et du linge",
    },
    {
      icon: ClipboardCheck,
      title: "Suivi des séjours",
      description: "Gestion proactive des imprévus et demandes",
    },
    {
      icon: Bell,
      title: "Assistance sur place",
      description: "Intervention réactive en cas de besoin",
    },
    {
      icon: CheckCircle,
      title: "Vérification logement",
      description: "Contrôle qualité après chaque séjour",
    },
  ];

  const whyUs = [
    {
      icon: Zap,
      title: "Service réactif et personnalisé",
      description: "Une approche sur-mesure pour chaque propriétaire",
    },
    {
      icon: Target,
      title: "Nombre de logements limité",
      description: "Pour garantir une qualité de service optimale",
    },
    {
      icon: Rocket,
      title: "Mise en place sous 48h",
      description: "Démarrage rapide de la gestion de votre bien",
    },
    {
      icon: FileText,
      title: "Aucune contrainte administrative",
      description: "Nous gérons tout, vous restez serein",
    },
  ];

  const additionalServices = [
    { name: "Panier d'accueil local", price: "25€ + coût", icon: Gift },
    { name: "Cadeau / attention particulière", price: "15€ + coût", icon: Award },
    { name: "Organisation activité", price: "25€", icon: Star },
    { name: "Courses avant arrivée", price: "25€", icon: ShoppingBag },
    { name: "Intervention exceptionnelle", price: "30€", icon: AlertCircle },
    { name: "Déplacement supplémentaire", price: "20€", icon: Car },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
          padding: isScrolled ? '12px 0' : '20px 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#">
            <Image
              src="/images/logo-without-bg.png"
              alt="Lokizio"
              width={140}
              height={40}
              style={{ height: '40px', width: 'auto' }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#pourquoi" className="nav-link">Pourquoi nous</a>
            <a href="#tarifs" className="nav-link">Tarifs</a>
            <a href="#processus" className="nav-link">Processus</a>
            <a href="#contact" className="btn-primary">Contactez-nous</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: 'rgba(255,255,255,0.98)', borderTop: '1px solid #eee', padding: '20px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#pourquoi" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pourquoi nous</a>
              <a href="#tarifs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
              <a href="#processus" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Processus</a>
              <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Contactez-nous</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.05) 0%, rgba(255, 255, 255, 0) 50%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', top: '80px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(184, 134, 11, 0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184, 134, 11, 0.05) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', position: 'relative', zIndex: 1 }} className="lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FDF8F0',
              color: '#B8860B',
              padding: '8px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '24px',
              border: '1px solid rgba(184, 134, 11, 0.2)'
            }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#B8860B', borderRadius: '50%' }} />
              Conciergerie de locations courte durée
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', color: '#1a1a1a' }}>
              Déléguez enfin{' '}
              <span className="gold-gradient-text">la gestion quotidienne</span>{' '}
              de votre logement
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '32px', maxWidth: '540px', lineHeight: 1.6 }}>
              LOKIZIO prend en charge la gestion de vos locations saisonnières.
              Vous encaissez directement vos loyers, nous gérons le reste.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#contact" className="btn-primary">
                Demander un devis gratuit
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary">
                Découvrir nos services
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px' }}>
              <MapPin size={18} style={{ color: '#B8860B' }} />
              Paris • Île-de-France • Chartres • Orléans
            </div>
          </div>

          <div className="hidden lg:block" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
              <Image
                src="/images/IMG_2114.jpeg"
                alt="Intérieur luxueux"
                width={600}
                height={500}
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '180px',
              height: '180px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              border: '4px solid white'
            }}>
              <Image
                src="/images/IMG_2115.jpeg"
                alt="Service de qualité"
                width={180}
                height={180}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="animate-float" style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#FDF8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={24} style={{ color: '#B8860B' }} />
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#1a1a1a' }}>5.0</p>
                <p style={{ fontSize: '12px', color: '#666' }}>Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce" style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
          <ArrowDown size={24} style={{ color: '#B8860B' }} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '100px 0', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title">Prestations incluses dans la gestion</h2>
            <p className="section-subtitle">Une prise en charge complète pour vous libérer du temps</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ cursor: 'pointer' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(184, 134, 11, 0.2)'
                }}>
                  <service.icon size={28} style={{ color: '#B8860B' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#1a1a1a' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="pourquoi" style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'center' }} className="lg:grid-cols-2">
            <div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Pourquoi choisir <span className="gold-gradient-text">LOKIZIO</span> ?
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '40px', lineHeight: 1.7 }}>
                Nous ne sommes pas une simple conciergerie. Nous sommes votre
                partenaire de confiance pour maximiser vos revenus tout en
                préservant votre tranquillité d&apos;esprit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {whyUs.map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(184, 134, 11, 0.2)'
                    }}>
                      <item.icon size={20} style={{ color: '#B8860B' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block" style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                <Image
                  src="/images/IMG_2116.jpeg"
                  alt="Paris"
                  width={600}
                  height={500}
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                maxWidth: '280px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image src="/images/IMG_2115.jpeg" alt="Maimouna" width={50} height={50} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#1a1a1a' }}>Maimouna</p>
                    <p style={{ fontSize: '12px', color: '#B8860B' }}>Fondatrice LOKIZIO</p>
                  </div>
                </div>
                <p style={{ color: '#666', fontSize: '14px', fontStyle: 'italic' }}>
                  &quot;Notre mission : vous permettre de profiter de vos revenus locatifs sans les contraintes du quotidien.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" style={{ padding: '100px 0', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title">Tarification transparente</h2>
            <p className="section-subtitle">LOKIZIO gagne uniquement lorsque votre logement génère des revenus</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', maxWidth: '1000px', margin: '0 auto' }} className="lg:grid-cols-2">
            {/* Main Pricing */}
            <div className="pricing-card">
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                  Gestion opérationnelle complète
                </h3>
                <p style={{ color: '#666' }}>Tout ce dont vous avez besoin pour une gestion sereine</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                  <span className="gold-gradient-text" style={{ fontSize: '3rem', fontWeight: 700 }}>20%</span>
                  <span style={{ color: '#666' }}>du chiffre d&apos;affaires Airbnb</span>
                </div>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(184, 134, 11, 0.1)',
                  color: '#B8860B',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Minimum : 200€ / mois / logement
                </div>
              </div>

              <ul className="check-list" style={{ marginBottom: '32px' }}>
                {services.map((service, index) => (
                  <li key={index}>
                    <CheckCircle size={20} style={{ color: '#B8860B', flexShrink: 0 }} />
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Commencer maintenant
              </a>
            </div>

            {/* Additional Services */}
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                Services complémentaires
              </h3>
              <p style={{ color: '#666', marginBottom: '32px' }}>
                Sur demande, pour améliorer l&apos;expérience de vos voyageurs
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {additionalServices.map((service, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: index < additionalServices.length - 1 ? '1px solid rgba(184, 134, 11, 0.1)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <service.icon size={18} style={{ color: '#B8860B' }} />
                      <span style={{ color: '#444' }}>{service.name}</span>
                    </div>
                    <span style={{ fontWeight: 600, color: '#B8860B', fontSize: '14px' }}>{service.price}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '32px', padding: '20px', backgroundColor: '#FDF8F0', borderRadius: '16px' }}>
                <h4 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={18} style={{ color: '#B8860B' }} />
                  Engagement de transparence
                </h4>
                <ul style={{ fontSize: '14px', color: '#666' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={16} style={{ color: '#B8860B' }} /> Aucun encaissement des loyers par LOKIZIO
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={16} style={{ color: '#B8860B' }} /> Aucune exclusivité imposée
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={16} style={{ color: '#B8860B' }} /> Résiliation possible avec préavis simple
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title">
              Mise en place rapide en <span className="gold-gradient-text">3 étapes</span>
            </h2>
            <p className="section-subtitle">Un processus simplifié pour démarrer votre collaboration avec LOKIZIO</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', position: 'relative' }}>
            {[
              { step: 1, title: "Signature du contrat", description: "Nous définissons ensemble les modalités de notre collaboration", icon: FileText },
              { step: 2, title: "Ajout co-hôte Airbnb", description: "Vous nous ajoutez comme co-hôte pour gérer les réservations", icon: Home },
              { step: 3, title: "Gestion lancée", description: "Nous prenons en charge la gestion complète de votre bien", icon: Rocket },
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div className="step-circle" style={{ margin: '0 auto 20px' }}>{item.step}</div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#FDF8F0',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '1px solid rgba(184, 134, 11, 0.2)'
                }}>
                  <item.icon size={28} style={{ color: '#B8860B' }} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '24px' }}>
              Prêt à simplifier la gestion de votre location ?
            </p>
            <a href="#contact" className="btn-primary">
              Démarrer en moins de 48h
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">
              Des logements d&apos;exception méritent{' '}
              <span className="gold-gradient-text">un service d&apos;exception</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="md:grid-cols-4">
            {["/images/IMG_2113.jpeg", "/images/IMG_2114.jpeg", "/images/IMG_2115.jpeg", "/images/IMG_2116.jpeg"].map((src, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3'
                }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }} className="lg:grid-cols-2">
            <div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Prêt à nous confier votre logement ?
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé gratuit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(184, 134, 11, 0.2)'
                  }}>
                    <Phone size={24} style={{ color: '#B8860B' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#888' }}>Téléphone</p>
                    <a href="tel:0605553391" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1a1a1a', textDecoration: 'none' }}>06 05 55 33 91</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(184, 134, 11, 0.2)'
                  }}>
                    <Mail size={24} style={{ color: '#B8860B' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#888' }}>Email</p>
                    <a href="mailto:contact@lokizio.fr" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1a1a1a', textDecoration: 'none' }}>contact@lokizio.fr</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(184, 134, 11, 0.2)'
                  }}>
                    <MapPin size={24} style={{ color: '#B8860B' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#888' }}>Zones d&apos;intervention</p>
                    <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1a1a1a' }}>Paris • Île-de-France • Chartres • Orléans</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: '#FDF8F0', borderRadius: '16px', border: '1px solid rgba(184, 134, 11, 0.1)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src="/images/IMG_2115.jpeg" alt="Maimouna" width={60} height={60} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1a1a1a' }}>Maimouna</p>
                  <p style={{ fontSize: '14px', color: '#B8860B' }}>Fondatrice LOKIZIO</p>
                  <p style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>À votre écoute pour répondre à toutes vos questions</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
                Envoyez-nous un message
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#444', marginBottom: '8px' }}>Nom complet</label>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#444', marginBottom: '8px' }}>Email</label>
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
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#444', marginBottom: '8px' }}>Téléphone</label>
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
                  <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#444', marginBottom: '8px' }}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-input"
                    style={{ resize: 'none' }}
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Envoyer le message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div style={{ gridColumn: 'span 2' }} className="md:col-span-1 lg:col-span-2">
              <Image
                src="/images/logo-without-bg.png"
                alt="Lokizio"
                width={160}
                height={50}
                style={{ height: '48px', width: 'auto', marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ color: '#888', maxWidth: '400px', marginBottom: '20px', lineHeight: 1.7 }}>
                Conciergerie de locations courte durée. Nous intervenons pour les propriétaires souhaitant déléguer la gestion des voyageurs, des entrées/sorties et du ménage.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '16px' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Services', 'Pourquoi nous', 'Tarifs', 'Processus', 'Contact'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} style={{ color: '#888', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '16px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#888' }}>
                <li style={{ marginBottom: '12px' }}><a href="tel:0605553391" style={{ color: '#888', textDecoration: 'none' }}>06 05 55 33 91</a></li>
                <li style={{ marginBottom: '12px' }}><a href="mailto:contact@lokizio.fr" style={{ color: '#888', textDecoration: 'none' }}>contact@lokizio.fr</a></li>
                <li style={{ marginBottom: '12px' }}>Paris • Île-de-France</li>
                <li>Chartres • Orléans</li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #333', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <p style={{ color: '#666', fontSize: '14px' }}>© 2026 LOKIZIO. Tous droits réservés.</p>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#666' }}>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Mentions légales</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
