const trainerData = {
  branding: {
    primaryColor: "#ff4c29",
    secondaryColor: "#8b5cf6",
  },

  name: "Fitness Trainer",
  role: "Elite Fitness Coach",
  brandName: "Fitness Trainer",

  phone: "96171505994",
  email: "coach@fitcoach.com",
  location: "Beirut, Lebanon",

  whatsappMessage: "Hi I want to start training",

  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },

  images: {
    profile:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200",

    heroBackground:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070",

    about:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200",
  },

  hero: {
    tag: "PERSONAL FITNESS COACH",
    titleStart: "Transform Your",
    titleHighlight: "Body",
    titleEnd: "Into Strength",
    subtitle:
      "Personalized coaching, nutrition guidance, and elite-level fitness programs designed to unlock your full potential.",
    primaryButton: "Start Your Transformation",
    secondaryButton: "View Results",
    stats: [
      { number: "500+", label: "Clients Transformed" },
      { number: "8+", label: "Years Experience" },
      { number: "24/7", label: "Online Support" },
    ],
  },

  about: {
    tag: "ABOUT THE COACH",
    headingStart: "Build The Strongest",
    headingHighlight: "Version Of Yourself",
    paragraphs: [
      "I'm Fitness trainer, a certified fitness coach with over 8 years of experience helping people transform their physique, confidence, and mindset.",
      "My coaching philosophy combines science-based training, nutrition strategies, and elite-level accountability to help clients achieve long-term sustainable results.",
    ],
    stats: [
      { number: "500+", label: "Clients" },
      { number: "8+", label: "Years" },
      { number: "15+", label: "Programs" },
    ],
    buttonText: "Start Your Journey",
  },

  programsSection: {
    tag: "TRAINING PROGRAMS",
    headingStart: "Programs Built For",
    headingHighlight: "Real Results",
    description:
      "Personalized coaching programs designed to help you build strength, confidence, and a powerful physique.",
  },

  programs: [
    {
      title: "Weight Loss",
      desc: "Burn fat, improve endurance, and transform your physique with customized fat-loss programs.",
      icon: "🔥",
    },
    {
      title: "Muscle Gain",
      desc: "Build lean muscle mass and increase strength using elite-level hypertrophy training methods.",
      icon: "💪",
    },
    {
      title: "Online Coaching",
      desc: "Train from anywhere with personalized coaching, nutrition guidance, and weekly check-ins.",
      icon: "⚡",
    },
  ],

  pricingSection: {
    tag: "PRICING PLANS",
    headingStart: "Choose Your",
    headingHighlight: "Transformation",
    description:
      "Flexible coaching plans designed for every level, from beginners to elite athletes.",
    buttonText: "Get Started",
    monthlyText: "/month",
    popularBadge: "MOST POPULAR",
  },

  plans: [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for beginners starting their fitness journey.",
      features: [
        "Custom Workout Plan",
        "Basic Nutrition Guide",
        "Weekly Check-ins",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "The most popular plan for serious transformations.",
      features: [
        "Workout + Nutrition Plan",
        "24/7 Support",
        "Progress Tracking",
        "Weekly Video Calls",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$149",
      description: "Premium one-on-one coaching for maximum results.",
      features: [
        "Everything in Pro",
        "Daily Coaching",
        "Priority Support",
        "Personalized Adjustments",
      ],
      popular: false,
    },
  ],

  testimonialsSection: {
    tag: "CLIENT REVIEWS",
    headingStart: "What Clients",
    headingHighlight: "Say About Us",
    description:
      "Real stories from clients who transformed their bodies, mindset, and confidence.",
  },

  testimonials: [
    {
      name: "John M.",
      role: "Fitness Client",
      text: "This program completely changed my life. I lost 12kg in 3 months and gained confidence I never had before.",
    },
    {
      name: "Sarah L.",
      role: "Fitness Client",
      text: "Amazing coaching and support. The personalized plan helped me become stronger physically and mentally.",
    },
    {
      name: "Michael R.",
      role: "Fitness Client",
      text: "The best fitness coach I've worked with. Professional, motivating, and the results speak for themselves.",
    },
  ],

  transformationsSection: {
    tag: "CLIENT RESULTS",
    headingStart: "Real People.",
    headingHighlight: "Real Transformations",
    description:
      "Every transformation is built through discipline, consistency, and personalized coaching strategies.",
  },

  transformations: [
    {
      before:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800",
      result: "-12KG",
    },
    {
      before:
        "https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800",
      result: "+8KG Muscle",
    },
    {
      before:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800",
      result: "90 Days",
    },
  ],

  contact: {
    tag: "CONTACT US",
    headingStart: "Ready To",
    headingHighlight: "Transform?",
    description:
      "Start your fitness journey today with personalized coaching, expert guidance, and elite-level support.",
    buttonText: "Send Message",
  },

  footer: {
    text:
      "Premium fitness coaching for real transformations, strength, and confidence.",
    designerText: "Designed by Chris Sabbak",
  },
}

export default trainerData