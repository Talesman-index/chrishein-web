"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Search, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Zap, 
  Lock, 
  MapPin, 
  ChevronDown,
  Globe,
  MessageCircle as WhatsApp,
  Mail,
  Truck,
  Smartphone,
  Download,
  Share2,
  FileText,
  CheckCircle,
  Plane,
  ShieldCheck,
  Plus,
  Camera as Instagram
} from "lucide-react";

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-display text-2xl font-bold tracking-tightest">
          Chris<span className="text-brand-orange">hein</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#how" className="hover:text-brand-orange transition-colors">Comment ça marche</a>
          <a href="#pricing" className="hover:text-brand-orange transition-colors">Tarifs</a>
          <a href="#platforms" className="hover:text-brand-orange transition-colors">Plateformes</a>
          <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a>
        </div>

        <a href="https://wa.me/2290196142472" className="btn-pill btn-orange text-sm shadow-lg shadow-brand-orange/20">
          Commander maintenant
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const cards = [
    { title: "SHEIN", rate: "900 FCFA/$", delay: 0.1 },
    { title: "Temu", rate: "1000 FCFA/€", delay: 0.2 },
    { title: "Alibaba", rate: "Sur devis", delay: 0.3 },
    { title: "Amazon", rate: "650 FCFA/$", delay: 0.4 },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Organic Shape Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -z-10 rounded-l-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-beige overflow-hidden">
                  <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User" width={32} height={32} />
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Des centaines de clients satisfaits à Cotonou
            </p>
          </div>

          <h1 className="font-display text-5xl lg:text-[64px] leading-[1.05] tracking-tightest mb-8">
            Le monde entier, livré chez vous <span className="text-brand-orange italic">au Bénin.</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Chrishein commande à votre place sur SHEIN, Temu, Alibaba, Amazon et bien d'autres — sans stress, sans frontières, sans mauvaises surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a href="https://wa.me/2290196142472" className="btn-pill btn-black w-full sm:w-auto flex gap-3">
              <MessageCircle size={20} className="text-green-500 fill-green-500" />
              Envoyer mon lien WhatsApp
            </a>
            <a href="#how" className="text-sm font-semibold border-b-2 border-brand-orange hover:text-brand-orange transition-colors py-1">
              Voir comment ça marche →
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm p-4 lg:p-8 border border-white/20 flex justify-center items-center">
              <Image 
                src="/hero-v2.png" 
                alt="Chrishein Premium Logistics" 
                width={800} 
                height={800} 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

          {/* Decorative SVG */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 -z-0 opacity-30 select-none pointer-events-none"
          >
            <Image src="/assets/hero-decor.svg" alt="Decor" width={400} height={400} />
          </motion.div>

          {/* Floating Rate Cards */}
          <div className="absolute top-0 right-0 -mr-4 lg:-mr-12 -mt-8 hidden md:block z-20">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: card.delay + 0.5, duration: 0.6 }}
                className="bg-white/95 backdrop-blur-md shadow-2xl p-4 rounded-2xl mb-4 border border-brand-orange/10 flex justify-between items-center w-64 transform transition-transform hover:scale-105"
                style={{ transform: `translateX(${index * 16}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg p-1">
                    {card.title === "SHEIN" && <Image src="/assets/shein.png" alt="S" width={24} height={24} className="object-contain" />}
                    {card.title === "Temu" && <Image src="/assets/temu.png" alt="T" width={24} height={24} className="object-contain" />}
                    {card.title === "Alibaba" && <Image src="/assets/alibaba.png" alt="A" width={24} height={24} className="object-contain" />}
                    {card.title === "Amazon" && <Image src="/assets/amazon.png" alt="Am" width={24} height={24} className="object-contain" />}
                  </div>
                  <span className="font-bold text-sm tracking-tight">{card.title}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-brand-orange font-bold text-xs">{card.rate}</span>
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Taux Direct</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBand = () => {
  const items = [
    { icon: <Check className="text-brand-orange" />, text: "Devis transparent avant chaque commande" },
    { icon: <Zap className="text-brand-orange" />, text: "18 jours max pour SHEIN & Temu" },
    { icon: <Lock className="text-brand-orange" />, text: "Paiement sécurisé à validation du devis" },
    { icon: <MapPin className="text-brand-orange" />, text: "Livraison à Cotonou et partout au Bénin" },
  ];

  return (
    <div className="bg-brand-black py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-white/90 text-sm font-medium">
            <div className="bg-white/10 p-2 rounded-full">{item.icon}</div>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"link" | "search">("link");

  const steps = {
    link: [
      { id: "01", text: "Envoyez le lien" },
      { id: "02", text: "Devis TTC reçu" },
      { id: "03", text: "Validation & paiement" },
      { id: "04", text: "Commande passée" },
      { id: "05", text: "Livraison sécurisée" },
    ],
    search: [
      { id: "01", text: "Décrivez le produit" },
      { id: "02", text: "Chrishein recherche" },
      { id: "03", text: "Offre & Devis" },
      { id: "04", text: "Lancement commande" },
      { id: "05", text: "Livraison" },
    ]
  };

  return (
    <section id="how" className="bg-brand-beige py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl lg:text-5xl mb-12">Simple comme un message WhatsApp.</h2>
        
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab("link")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "link" ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" : "bg-white text-gray-500"
            }`}
          >
            Vous avez un lien
          </button>
          <button 
            onClick={() => setActiveTab("search")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "search" ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" : "bg-white text-gray-500"
            }`}
          >
            Vous cherchez un produit
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand-orange/20 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <AnimatePresence mode="wait">
              {steps[activeTab].map((step, i) => (
                <motion.div 
                  key={step.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white border-4 border-brand-beige rounded-full flex items-center justify-center font-display text-xl font-bold text-brand-orange shadow-sm z-10 mb-4">
                    {step.id}
                  </div>
                  <p className="font-semibold text-sm">{step.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpressDelivery = () => {
  return (
    <section className="bg-brand-black text-white py-24 overflow-hidden relative">
      {/* Decorative background fly.svg */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-full opacity-10 pointer-events-none -z-0"
      >
        <Image src="/assets/fly.svg" alt="Fly Path" width={800} height={800} className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-4 block">Expédition Premium</span>
          <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">De l'entrepôt international à votre salon.</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:bg-brand-orange/20 transition-colors">
                <Plane className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Fret Aérien Sécurisé</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Nous collaborons avec les meilleures compagnies aériennes pour garantir un transit rapide et sans accrocs.</p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:bg-brand-orange/20 transition-colors">
                <ShieldCheck className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Contrôle Qualité</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Chaque colis est inspecté à son arrivée dans nos centres logistiques avant d'être réexpédié au Bénin.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:bg-brand-orange/20 transition-colors">
                <Truck className="text-brand-orange" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Livraison Locale</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Une fois à Cotonou, recevez votre colis à domicile ou retirez-le en toute simplicité dans nos points relais.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-md p-10 rounded-[60px] border border-white/10 shadow-2xl">
            <Image 
              src="/assets/hero-packages.jpg" 
              alt="Logistique Chrishein" 
              width={600} 
              height={400} 
              className="w-full h-auto rounded-[40px] object-cover aspect-video shadow-lg"
            />
          </div>
          
          {/* Strategic floating fly.svg on top of image card */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-16 z-20 w-64 h-64 opacity-60 mix-blend-screen pointer-events-none drop-shadow-[0_0_20px_rgba(232,98,26,0.3)]"
          >
            <Image src="/assets/fly.svg" alt="Fly Illustration" width={300} height={300} className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background fly.svg */}
      <motion.div 
        animate={{ 
          x: [100, -100, 100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[600px] h-full opacity-[0.03] pointer-events-none -z-0"
      >
        <Image src="/assets/fly.svg" alt="Fly Path" width={600} height={600} className="w-full h-full object-contain grayscale" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4 text-brand-black">Des tarifs sans surprises.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Notre formule : <span className="font-bold text-brand-orange">Prix article + Expédition + Prestation = Votre Devis TTC</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* SHEIN Card */}
          <div className="card-premium">
            <h3 className="font-display text-2xl mb-6">SHEIN</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-brand-beige">
                  <span className="text-sm">Accessoires (TTC)</span>
                  <span className="font-bold text-brand-orange">900 FCFA/$</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-brand-beige">
                  <span className="text-sm">Mode & Chaussures (TTC)</span>
                  <span className="font-bold text-brand-orange">950 FCFA/$</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-[10px] font-bold text-brand-orange uppercase mb-3">Option Commande &gt; 25$</p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Taux HT</span>
                  <span className="font-bold">670 FCFA/$</span>
                </div>
                <p className="text-[10px] text-gray-400 italic leading-tight">
                  + Expédition : 10 000 FCFA/kg <br/>(payable à l'arrivée au Bénin)
                </p>
              </div>
              
              <div className="pt-4 flex items-center gap-2 text-xs text-gray-500">
                <Zap size={14} className="text-brand-orange" />
                <span>Livraison : 18 jours max</span>
              </div>
            </div>
          </div>

          {/* Temu Featured Card */}
          <div className="bg-brand-black text-white p-8 rounded-3xl lg:-mt-4 lg:py-12 border-2 border-brand-orange relative overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 bg-brand-orange text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-widest">Populaire</div>
            <h3 className="font-display text-3xl mb-8">Temu</h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-white/10 border-b">
                  <span className="text-sm text-gray-300">Accessoires (TTC)</span>
                  <span className="text-2xl font-bold text-brand-orange">1 000 FCFA/€</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-white/10 border-b">
                  <span className="text-sm text-gray-300">Mode & Chaussures (TTC)</span>
                  <span className="text-2xl font-bold text-brand-orange">1 100 FCFA/€</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Zap size={14} className="text-brand-orange" />
                <span>Livraison : 18 jours max</span>
              </div>
              <div className="pt-4">
                <a href="https://wa.me/2290196142472" className="btn-pill btn-orange w-full text-center block">Commander sur Temu</a>
              </div>
            </div>
          </div>

          {/* Alibaba Card */}
          <div className="card-premium">
            <h3 className="font-display text-2xl mb-6">Alibaba</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-brand-beige">
                <span className="text-sm">Taux HT</span>
                <span className="font-bold text-brand-orange">650 FCFA/$</span>
              </div>
              
              <div className="pt-4 space-y-4">
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Modes de transport</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-brand-beige rounded-xl">
                    <Plane size={16} className="text-brand-orange mb-2" />
                    <p className="font-bold text-xs">Aérien</p>
                    <p className="text-[9px] text-gray-500">Rapide & Urgence</p>
                  </div>
                  <div className="p-3 bg-brand-beige rounded-xl">
                    <ShoppingBag size={16} className="text-brand-orange mb-2" />
                    <p className="font-bold text-xs">Maritime</p>
                    <p className="text-[9px] text-gray-500">Économique & Gros Volumes</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 italic">
                  Frais d'expédition calculés selon poids et CBM à l'envoi du lien.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sites Note */}
        <div className="mt-12 p-6 bg-brand-beige/50 rounded-2xl border border-brand-orange/10 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-600">
            <span className="font-bold">Amazon, Fashion Nova, AliExpress & autres sites USA :</span> Taux de base <span className="font-bold text-brand-orange">650 FCFA/$ HT</span>. Expédition calculée séparément.
          </p>
        </div>
      </div>
    </section>
  );
};

const Platforms = () => {
  const items = [
    { name: "SHEIN", logo: "/assets/shein.png", type: "large", desc: "Mode, Beauté, Accessoires", color: "bg-brand-orange/5" },
    { name: "Temu", logo: "/assets/temu.png", type: "small", desc: "Généraliste & Gadgets", color: "bg-white" },
    { name: "Alibaba", logo: "/assets/alibaba.png", type: "small", desc: "B2B & Grossistes", color: "bg-white" },
    { name: "Amazon", logo: "/assets/amazon.png", type: "small", desc: "International (USA/EU)", color: "bg-white" },
    { name: "PrettyLittleThing", type: "small", desc: "Mode UK Premium", color: "bg-white" },
    { name: "Fashion Nova", logo: "/assets/fashionnova.png", type: "small", desc: "Style US Iconique", color: "bg-white" },
    { name: "Aroma-Zone", logo: "/assets/aromazone.png", type: "small", desc: "Cosmétique & Bio", color: "bg-white" },
    { name: "AliExpress", type: "small", desc: "Choix infini à prix mini", color: "bg-white" },
    { name: "Sites USA", type: "small", desc: "Made in USA (Stock dispo)", color: "bg-white" },
  ];

  return (
    <section id="platforms" className="bg-brand-beige py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl mb-16 text-center">Toutes vos boutiques préférées.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border border-brand-orange/5 shadow-sm transition-all hover:shadow-md ${item.color} ${item.type === 'large' ? 'col-span-2' : ''} flex flex-col items-start`}
            >
              <div className="h-12 flex items-center mb-6">
                {item.logo ? (
                  <Image src={item.logo} alt={item.name} width={120} height={40} className="h-full w-auto object-contain" />
                ) : (
                  <h3 className="font-display text-xl">{item.name}</h3>
                )}
              </div>
              <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformGuides = () => {
  const [activePlatform, setActivePlatform] = useState<"shein" | "temu" | "alibaba">("shein");

  const guides = {
    shein: {
      title: "SHEIN",
      steps: [
        { title: "Installation", desc: "Téléchargez l'app SHEIN et créez votre compte.", icon: <Download size={20} /> },
        { title: "Shopping", desc: "Faites votre shopping et 'Ajoutez au panier'.", icon: <ShoppingBag size={20} /> },
        { title: "Partage", desc: "Cliquez sur l'icône de partage en haut à droite du panier.", icon: <Share2 size={20} /> },
        { title: "Envoi", desc: "Envoyez le lien à Chrishein via WhatsApp pour votre devis.", icon: <WhatsApp size={20} /> },
        { title: "Livraison", desc: "Validez, payez et recevez votre colis en 18j max.", icon: <Truck size={20} /> },
      ]
    },
    temu: {
      title: "Temu",
      steps: [
        { title: "App Temu", desc: "Installez l'application Temu et inscrivez-vous.", icon: <Smartphone size={20} /> },
        { title: "Sélection", desc: "Parcourez les offres et remplissez votre panier.", icon: <ShoppingBag size={20} /> },
        { title: "Lien Panier", desc: "Partagez le lien de votre panier avec nous.", icon: <Share2 size={20} /> },
        { title: "Devis", desc: "Chrishein établit votre devis TTC immédiatement.", icon: <FileText size={20} /> },
        { title: "Réception", desc: "Commande passée dès paiement. Livraison en 18j.", icon: <CheckCircle size={20} /> },
      ]
    },
    alibaba: {
      title: "Alibaba",
      steps: [
        { title: "Recherche", desc: "Trouvez vos produits et fournisseurs sur Alibaba.", icon: <Search size={20} /> },
        { title: "Captures", desc: "Prenez des captures d'écran ou liens + quantités.", icon: <Smartphone size={20} /> },
        { title: "Logistique", desc: "Choisissez : Aérien (Rapide) ou Maritime (Éco).", icon: <Plane size={20} /> },
        { title: "Validation", desc: "Envoyez tout à Chrishein pour le devis final.", icon: <FileText size={20} /> },
        { title: "Livraison", desc: "Réception selon le mode de transport choisi.", icon: <Truck size={20} /> },
      ]
    }
  };

  return (
    <section id="guides" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-4 block">Mode d'emploi détaillé</span>
            <h2 className="font-display text-4xl lg:text-5xl mb-6">Comment commander ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Suivez ces étapes simples pour commander sur vos applications préférées avec Chrishein.</p>
          </div>
          
          <div className="flex justify-center gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
            {Object.keys(guides).map((key) => (
              <button 
                key={key}
                onClick={() => setActivePlatform(key as any)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap border-2 ${
                  activePlatform === key 
                    ? "bg-brand-black text-white border-brand-black shadow-xl shadow-brand-black/20" 
                    : "bg-white text-gray-500 border-brand-beige hover:border-brand-orange/30"
                }`}
              >
                {guides[key as keyof typeof guides].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative">
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-orange/10 hidden lg:block -translate-y-12" />
             
             <AnimatePresence mode="wait">
               {guides[activePlatform].steps.map((step, i) => (
                 <motion.div 
                   key={step.title + activePlatform}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ delay: i * 0.1 }}
                   className="relative z-10 flex flex-col items-center text-center group"
                 >
                   <div className="w-16 h-16 bg-white border-2 border-brand-orange/20 rounded-[22px] flex items-center justify-center text-brand-orange mb-6 shadow-sm group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-500">
                     {step.icon}
                   </div>
                   <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                   <p className="text-[11px] text-gray-500 leading-relaxed px-2">{step.desc}</p>
                 </motion.div>
               ))}
             </AnimatePresence>
          </div>

          {activePlatform === "alibaba" && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 p-8 sm:p-12 bg-brand-beige/40 rounded-[50px] border border-brand-orange/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="font-display text-2xl mb-8 text-center relative z-10">Logistique Alibaba : Aérien vs Maritime</h4>
              <div className="grid sm:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-6 p-6 bg-white rounded-3xl shadow-sm border border-brand-orange/5">
                  <div className="flex items-center gap-3 text-brand-orange font-bold">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                      <Plane size={18} />
                    </div>
                    <span>Mode Aérien (Express)</span>
                  </div>
                  <ul className="text-[11px] text-gray-500 space-y-3">
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Livraison ultra-rapide au Bénin</li>
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Idéal pour petits volumes et urgences</li>
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Recommandé pour tester des échantillons</li>
                  </ul>
                </div>
                <div className="space-y-6 p-6 bg-brand-black text-white rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 text-brand-orange font-bold">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <ShoppingBag size={18} />
                    </div>
                    <span>Mode Maritime (Éco)</span>
                  </div>
                  <ul className="text-[11px] text-gray-400 space-y-3">
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Tarif le plus bas du marché</li>
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Recommandé pour gros volumes (CBM élevé)</li>
                    <li className="flex gap-3"><Check size={14} className="text-brand-orange flex-shrink-0" /> Idéal pour approvisionner un commerce</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const WhyChrishein = () => {
  const args = [
    { title: "Transparence totale", desc: "Aucun frais caché, vous connaissez le montant final avant de payer." },
    { title: "Rapidité garantie", desc: "18 jours maximum pour recevoir vos commandes SHEIN & Temu." },
    { title: "Accompagnement", desc: "On vous aide à trouver les meilleures pépites au meilleur prix." },
    { title: "Logistique flexible", desc: "Aérien ou maritime pour optimiser vos coûts de transport." },
  ];

  return (
    <section className="bg-brand-black py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">Pourquoi choisir <span className="text-brand-orange">Chrishein ?</span></h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {args.map((arg, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center mb-4 text-brand-orange">
                  <Check size={20} />
                </div>
                <h4 className="font-bold mb-2">{arg.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{arg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/20 blur-[100px] rounded-full" />
          <div className="relative space-y-6">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-gray-300 italic mb-4">"Je commande mes tenues SHEIN tous les mois avec Chrishein. Le service est impeccable et les délais sont toujours respectés. Plus besoin de stresser pour la livraison à Cotonou !"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-bold text-xs">AF</div>
                <span className="font-bold text-sm">Aminata F. (SHEIN)</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 ml-8">
              <p className="text-gray-300 italic mb-4">"Pour mon commerce, je fais confiance à Chrishein pour mes achats sur Alibaba. Ils gèrent tout l'aspect maritime, c'est un gain de temps et d'argent énorme."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-beige text-brand-black rounded-full flex items-center justify-center font-bold text-xs">RK</div>
                <span className="font-bold text-sm">Roland K. (Alibaba)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Comment commander sur SHEIN ou Temu ?", a: "1. Téléchargez l'app et remplissez votre panier. 2. Partagez le lien du panier via le bouton de partage en haut à droite. 3. Chrishein établit votre devis TTC." },
    { q: "Comment commander sur Alibaba ?", a: "Envoyez-nous des captures d'écran ou liens des produits avec les quantités. Précisez si vous préférez le transport aérien (rapide) ou maritime (économique)." },
    { q: "Que comprend exactement le devis ?", a: "Le devis Chrishein est transparent : Prix de l'article + Frais d'expédition + Frais de prestation Chrishein." },
    { q: "Quels sont les délais de livraison ?", a: "Pour SHEIN et Temu, le délai est de 18 jours maximum. Pour Alibaba et les autres sites, cela dépend du mode de transport choisi." },
    { q: "Comment se passe le paiement ?", a: "La commande est passée immédiatement après la validation et le paiement de votre devis par Orange Money, Moov Money ou virement." },
    { q: "Vous avez des produits en stock ?", a: "Oui ! Nous proposons régulièrement des articles 'Made in USA' authentiques disponibles pour acquisition immédiate à Cotonou." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl mb-8">Vous avez des questions ?</h2>
          <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">Nous sommes là pour vous aider à y voir plus clair. Si vous ne trouvez pas votre réponse, contactez-nous directement.</p>
          <a href="https://wa.me/2290196142472" className="btn-pill btn-orange">Parler à un conseiller</a>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-beige pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4 font-bold hover:text-brand-orange transition-colors"
              >
                {faq.q}
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <Plus size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-sm leading-relaxed pb-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-brand-orange/5 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
        
        <h2 className="font-display text-4xl lg:text-6xl mb-8 relative z-10">Votre prochain favori <br className="hidden lg:block" /> vous attend déjà en ligne.</h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto relative z-10">Envoyez-nous vos liens aujourd'hui et recevez votre colis dans quelques jours.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href="https://wa.me/2290196142472" className="btn-pill bg-[#25D366] text-white hover:bg-opacity-90 gap-2">
            <MessageCircle size={20} fill="white" />
            Commander sur WhatsApp
          </a>
          <a href="#pricing" className="btn-pill btn-black">Voir les tarifs</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-20 border-b border-white/10">
          <div className="max-w-xs">
            <div className="font-display text-3xl font-bold tracking-tightest mb-6">
              Chris<span className="text-brand-orange">hein</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Le shopping international sans stress. Livraison sécurisée et transparente partout au Bénin.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://instagram.com/chri-shein" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Instagram size={18} /></a>
              <a href="https://wa.me/2290196142472" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><WhatsApp size={18} /></a>
              <a href="mailto:contact@chrishein.bj" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h5 className="font-bold mb-6">Services</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#how" className="hover:text-brand-orange transition-colors">Comment ça marche</a></li>
                <li><a href="#pricing" className="hover:text-brand-orange transition-colors">Tarifs</a></li>
                <li><a href="#platforms" className="hover:text-brand-orange transition-colors">Plateformes</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Contact</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="https://wa.me/2290196142472" className="hover:text-brand-orange transition-colors">WhatsApp : 01 96 14 24 72</a></li>
                <li><a href="https://instagram.com/chri-shein" className="hover:text-brand-orange transition-colors">Instagram : @chri-shein</a></li>
                <li>Cotonou, Bénin</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <p>© 2024 Chrishein. Tous droits réservés.</p>
          <p>Design & Code by Antigravity</p>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBand />
      <HowItWorks />
      <ExpressDelivery />
      <Pricing />
      <Platforms />
      <PlatformGuides />
      <WhyChrishein />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
