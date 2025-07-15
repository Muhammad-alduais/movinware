import React from 'react';

// Translation system for Arabic and English
export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      value: "360° Value",
      platform: "Platform",
      industries: "Industries",
      solutions: "Solutions",
      services: "Services",
      packages: "Packages",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      badge: "ERP Solutions",
      title: "Intelligent Operations.<br/>Seamless Transformation",
      subtitle: "AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare's intelligent solutions.",
      cta: "Start Your Journey"
    },
    
    // Value Section
    value: {
      badge: "360° VALUE",
      title: "We don't just build software",
      subtitle: "We build your business future",
      cards: {
        aiFeatures: "AI Features",
        unmatchedSpeed: "Unmatched Speed", 
        culturalFit: "Cultural Fit",
        easyAdoption: "Easy Adoption"
      },
      aiFeatures: {
        title: "Intelligent automation that learns from your business",
        features: [
          "• Automatic Forecasting",
          "• Decision Automation", 
          "• Smart Workflows",
          "• Advanced Analytics"
        ]
      },
      speed: {
        title: "From setup to results in record time",
        features: [
          "• Rapid Deployment",
          "• Immediate ROI",
          "• Instant Benefits", 
          "• Proven Methodology"
        ]
      },
      cultural: {
        title: "Built for MENA businesses",
        features: [
          "• Bilingual Support",
          "• Native RTL Interfaces",
          "• Local Compliance",
          "• Cultural Alignment"
        ]
      },
      adoption: {
        title: "Simple, intuitive, and user-friendly",
        features: [
          "• Intuitive Design",
          "• Simplified Training", 
          "• User-Friendly Interface",
          "• Ongoing Support"
        ]
      }
    },
    
    // Platform Capabilities
    platform: {
      badge: "Platform Capabilities",
      title: "Everything you need,<br/>beautifully integrated",
      subtitle: "A comprehensive platform designed for modern businesses with advanced features that grow with you",
      coreModules: {
        title: "Core Modules",
        description: "Essential business modules for complete operations management and workflow automation.",
        timeline: "Core Foundation"
      },
      aiFeatures: {
        title: "AI Features", 
        description: "Advanced AI technology that learns and optimizes your business processes automatically.",
        timeline: "Smart Enhancement"
      },
      integration: {
        title: "Integration Hub",
        description: "Connect with 500+ platforms and systems seamlessly for unified data flow.",
        timeline: "Seamless Connection"
      },
      mobile: {
        title: "Mobile & Cloud Platform",
        description: "Access your business data anywhere with 99.9% uptime guarantee and offline capabilities.",
        timeline: "Anywhere Access"
      }
    },
    
    // Industries
    industries: {
      badge: "Industries",
      title: "Tailored for<br/>every sector",
      subtitle: "Industry-specific solutions designed to meet the unique challenges and requirements of your business sector",
      education: {
        title: "Education",
        description: "Complete educational management solutions for modern institutions and learning environments.",
        timeline: "500+ Institutions"
      },
      retail: {
        title: "Retail", 
        description: "End-to-end retail management for omnichannel success and customer satisfaction.",
        timeline: "1,000+ Stores"
      },
      manufacturing: {
        title: "Manufacturing",
        description: "Smart manufacturing solutions for Industry 4.0 transformation and operational excellence.",
        timeline: "200+ Factories"
      },
      logistics: {
        title: "Logistics",
        description: "Intelligent logistics and supply chain optimization platform for seamless operations.",
        timeline: "300+ Companies"
      }
    },
    
    // ERP Solutions
    erp: {
      badge: "ERP Solutions",
      title: "Complete business<br/>solutions",
      subtitle: "Integrated modules that work together seamlessly to power every aspect of your business operations",
      accounting: {
        title: "Accounting & Finance",
        description: "Complete financial management with real-time insights.",
        timeline: "Full Integration"
      },
      hr: {
        title: "Human Resources",
        description: "End-to-end HR management for the complete employee lifecycle.",
        timeline: "Complete HR Suite"
      },
      sales: {
        title: "Sales & CRM",
        description: "AI-powered sales and customer relationship management.",
        timeline: "Sales Optimization"
      },
      inventory: {
        title: "Inventory Management", 
        description: "Smart inventory optimization with real-time tracking.",
        timeline: "Smart Inventory"
      },
      manufacturing: {
        title: "Manufacturing",
        description: "Intelligent production management and quality control.",
        timeline: "Production Excellence"
      },
      assets: {
        title: "Asset Management",
        description: "Predictive asset management and maintenance optimization.",
        timeline: "Asset Optimization"
      }
    },
    
    // Services
    services: {
      badge: "Professional Services",
      title: "Expert services for<br/>successful implementation",
      subtitle: "Our certified professionals ensure your ERP implementation is delivered on time, within budget, and exceeds expectations",
      implementation: {
        title: "ERP Implementation",
        description: "End-to-end implementation with proven methodologies and dedicated project management.",
        timeline: "8-12 weeks"
      },
      industry: {
        title: "Industry Solutions",
        description: "Specialized solutions tailored to your industry's unique requirements and compliance needs.",
        timeline: "6-10 weeks"
      },
      ai: {
        title: "AI Integration",
        description: "Advanced AI capabilities to automate processes and provide intelligent business insights.",
        timeline: "4-8 weeks"
      },
      ux: {
        title: "UX Design & Localization",
        description: "User-centered design with full localization support for MENA markets.",
        timeline: "3-6 weeks"
      },
      data: {
        title: "Data Migration & Integration",
        description: "Secure, efficient data migration with seamless third-party system integrations.",
        timeline: "2-4 weeks"
      },
      support: {
        title: "Support & Maintenance",
        description: "Comprehensive support services ensuring optimal system performance and user satisfaction.",
        timeline: "Ongoing"
      }
    },
    
    // Implementation Process
    implementation: {
      badge: "Implementation Process",
      title: "From concept to<br/>go-live in 11 weeks",
      subtitle: "Our proven methodology ensures successful implementation with minimal disruption to your business"
    },
    
    // Packages
    packages: {
      badge: "Packages",
      title: "Choose your<br/>perfect plan",
      subtitle: "Transparent pricing with no hidden fees. Start your free trial today.",
      startup: {
        title: "Startup",
        description: "Perfect for growing businesses ready to scale their operations efficiently.",
        price: "$299",
        period: "/month",
        originalPrice: "$399"
      },
      professional: {
        title: "Professional",
        description: "Comprehensive solution for established companies with complex operational needs.",
        price: "$599", 
        period: "/month",
        originalPrice: "$799"
      },
      enterprise: {
        title: "Enterprise",
        description: "Advanced solution for large organizations with complex compliance and customization requirements.",
        price: "$1,299",
        period: "/month", 
        originalPrice: "$1,599"
      }
    },
    
    // Testimonials
    testimonials: {
      badge: "Testimonials",
      title: "What others say",
      testimonial1: {
        content: "MovinWare transformed our production operations, streamlining workflows while our team focuses on strategic growth. 40% increase in efficiency within two months.",
        author: "Sarah Chen",
        role: "VP of Operations, Axion Manufacturing"
      },
      testimonial2: {
        content: "Implementing MovinWare in our logistics centers reduced operational costs by 35% while improving accuracy. The AI-powered insights are game-changing.",
        author: "Michael Rodriguez", 
        role: "Director of Logistics, GlobalShip"
      },
      testimonial3: {
        content: "As a mid-size business, we never thought advanced ERP would be accessible to us. MovinWare changed that with its intuitive design and affordable pricing.",
        author: "Jason Lee",
        role: "CEO, Innovative Solutions Inc."
      }
    },
    
    // Contact
    contact: {
      badge: "Contact Us",
      title: "Get In Touch",
      subtitle: "Ready to transform your business? Contact us today to get started.",
      form: {
        title: "Send us a message",
        fullName: "Full Name",
        email: "Email",
        company: "Company",
        phone: "Phone",
        inquiryType: "Inquiry Type",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message Sent!",
        tryAgain: "Try Again"
      },
      info: {
        title: "Contact Information",
        email: "info@movinware.com",
        phone: "+966 561820949",
        location: "Online"
      },
      quickActions: {
        title: "Quick Actions",
        expert: {
          title: "Talk to Expert",
          description: "Schedule a call with our experts"
        },
        consultation: {
          title: "Schedule Consultation", 
          description: "Book a free consultation"
        },
        whatsapp: {
          title: "WhatsApp Support",
          description: "Get instant support via WhatsApp"
        }
      }
    },
    
    // Footer
    footer: {
      description: "AI-powered ERP solutions designed for modern businesses. Streamline operations, boost efficiency, and future-proof your business with intelligent automation.",
      quickLinks: "Quick Links",
      contact: "Contact",
      builtBy: "Built entirely by",
      rights: "All rights reserved."
    },
    
    // Common
    common: {
      learnMore: "Learn more",
      getStarted: "Get Started",
      scheduleDemo: "Schedule Demo",
      startFreeTrial: "Start Free Trial",
      viewDetails: "View Details",
      requestDemo: "Request Demo",
      backToTop: "Back to top"
    }
  },
  
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      value: "القيمة الشاملة",
      platform: "المنصة",
      industries: "الصناعات",
      solutions: "الحلول",
      services: "الخدمات",
      packages: "الباقات",
      contact: "اتصل بنا"
    },
    
    // Hero Section
    hero: {
      badge: "حلول تخطيط موارد المؤسسات",
      title: "عمليات ذكية.<br/>تحول سلس",
      subtitle: "نظام تخطيط موارد المؤسسات المدعوم بالذكاء الاصطناعي مصمم لسير عملك. قم بتبسيط العمليات وزيادة الكفاءة وإعداد عملك للمستقبل مع حلول MovinWare الذكية.",
      cta: "ابدأ رحلتك"
    },
    
    // Value Section
    value: {
      badge: "القيمة الشاملة",
      title: "نحن لا نبني البرمجيات فقط",
      subtitle: "نحن نبني مستقبل عملك",
      cards: {
        aiFeatures: "ميزات الذكاء الاصطناعي",
        unmatchedSpeed: "سرعة لا مثيل لها",
        culturalFit: "التوافق الثقافي", 
        easyAdoption: "اعتماد سهل"
      },
      aiFeatures: {
        title: "أتمتة ذكية تتعلم من عملك",
        features: [
          "• التنبؤ التلقائي",
          "• أتمتة القرارات",
          "• سير عمل ذكي",
          "• تحليلات متقدمة"
        ]
      },
      speed: {
        title: "من الإعداد إلى النتائج في وقت قياسي",
        features: [
          "• نشر سريع",
          "• عائد فوري على الاستثمار",
          "• فوائد فورية",
          "• منهجية مثبتة"
        ]
      },
      cultural: {
        title: "مبني للشركات في منطقة الشرق الأوسط وشمال أفريقيا",
        features: [
          "• دعم ثنائي اللغة",
          "• واجهات أصلية من اليمين إلى اليسار",
          "• امتثال محلي",
          "• توافق ثقافي"
        ]
      },
      adoption: {
        title: "بسيط وبديهي وسهل الاستخدام",
        features: [
          "• تصميم بديهي",
          "• تدريب مبسط",
          "• واجهة سهلة الاستخدام",
          "• دعم مستمر"
        ]
      }
    },
    
    // Platform Capabilities
    platform: {
      badge: "قدرات المنصة",
      title: "كل ما تحتاجه،<br/>متكامل بشكل جميل", 
      subtitle: "منصة شاملة مصممة للشركات الحديثة مع ميزات متقدمة تنمو معك",
      coreModules: {
        title: "الوحدات الأساسية",
        description: "وحدات الأعمال الأساسية لإدارة العمليات الكاملة وأتمتة سير العمل.",
        timeline: "الأساس الأساسي"
      },
      aiFeatures: {
        title: "ميزات الذكاء الاصطناعي",
        description: "تقنية ذكاء اصطناعي متقدمة تتعلم وتحسن عمليات عملك تلقائياً.",
        timeline: "تحسين ذكي"
      },
      integration: {
        title: "مركز التكامل",
        description: "اتصل مع أكثر من 500 منصة ونظام بسلاسة لتدفق البيانات الموحد.",
        timeline: "اتصال سلس"
      },
      mobile: {
        title: "منصة الهاتف المحمول والسحابة",
        description: "الوصول إلى بيانات عملك في أي مكان مع ضمان وقت تشغيل 99.9% وقدرات غير متصلة.",
        timeline: "الوصول في أي مكان"
      },
      integrationOverview: {
        title: "نظرة عامة على تكامل المنصة",
        subtitle: "نظام بيئي موحد حيث تعمل جميع القدرات معًا بسلاسة لتوفير إدارة أعمال شاملة"
      },
      stats: {
        apiIntegrations: {
          metric: "500+",
          label: "تكاملات API",
          desc: "اتصالات الطرف الثالث المتاحة"
        },
        uptime: {
          metric: "99.9%",
          label: "اتفاقية مستوى الخدمة",
          desc: "موثوقية على مستوى المؤسسة"
        },
        monitoring: {
          metric: "24/7",
          label: "مراقبة النظام",
          desc: "تتبع الأداء المستمر"
        },
        dataSync: {
          metric: "الوقت الفعلي",
          label: "مزامنة البيانات",
          desc: "تحديثات فورية عبر الأجهزة"
        }
      }
    },
    
    // Industries
    industries: {
      badge: "الصناعات",
      title: "مصمم خصيصاً<br/>لكل قطاع",
      subtitle: "حلول خاصة بالصناعة مصممة لتلبية التحديات والمتطلبات الفريدة لقطاع عملك",
      education: {
        title: "التعليم",
        description: "حلول إدارة تعليمية كاملة للمؤسسات الحديثة وبيئات التعلم.",
        timeline: "500+ مؤسسة"
      },
      retail: {
        title: "التجزئة",
        description: "إدارة التجزئة الشاملة للنجاح متعدد القنوات ورضا العملاء.",
        timeline: "1,000+ متجر"
      },
      manufacturing: {
        title: "التصنيع",
        description: "حلول تصنيع ذكية لتحول الصناعة 4.0 والتميز التشغيلي.",
        timeline: "200+ مصنع"
      },
      logistics: {
        title: "اللوجستيات",
        description: "منصة لوجستيات ذكية وتحسين سلسلة التوريد للعمليات السلسة.",
        timeline: "300+ شركة"
      },
      companySizes: {
        title: "موثوق به من قبل الشركات من جميع الأحجام",
        subtitle: "من الشركات الناشئة إلى المؤسسات، نحن نتوسع مع احتياجات عملك ونقدم حلولاً مخصصة لكل مرحلة نمو",
        startups: {
          count: "50+",
          title: "الشركات الناشئة",
          description: "الشركات النامية الجاهزة للتوسع",
          details: "حلول مرنة تنمو مع عملك"
        },
        smes: {
          count: "500+",
          title: "الشركات الصغيرة والمتوسطة",
          description: "الشركات الراسخة في السوق المتوسط",
          details: "ميزات شاملة للعمليات المعقدة"
        },
        enterprises: {
          count: "100+",
          title: "المؤسسات",
          description: "المؤسسات الكبيرة ذات الاحتياجات المعقدة",
          details: "أمان وتخصيص على مستوى المؤسسة"
        }
      },
      cta: {
        title: "مستعد للحلول الخاصة بالصناعة؟",
        subtitle: "اكتشف كيف يمكن لحلولنا الصناعية المخصصة أن تعالج التحديات الفريدة لقطاعك ومتطلبات الامتثال",
        scheduleDemo: "جدولة عرض توضيحي للصناعة",
        viewCaseStudies: "عرض دراسات الحالة"
      }
    },
    
    // ERP Solutions
    erp: {
      badge: "حلول تخطيط موارد المؤسسات",
      title: "حلول أعمال<br/>كاملة",
      subtitle: "وحدات متكاملة تعمل معاً بسلاسة لتشغيل كل جانب من جوانب عمليات عملك",
      accounting: {
        title: "المحاسبة والمالية",
        description: "إدارة مالية كاملة مع رؤى في الوقت الفعلي.",
        timeline: "تكامل كامل"
      },
      hr: {
        title: "الموارد البشرية",
        description: "إدارة الموارد البشرية الشاملة لدورة حياة الموظف الكاملة.",
        timeline: "مجموعة الموارد البشرية الكاملة"
      },
      sales: {
        title: "المبيعات وإدارة علاقات العملاء",
        description: "مبيعات مدعومة بالذكاء الاصطناعي وإدارة علاقات العملاء.",
        timeline: "تحسين المبيعات"
      },
      inventory: {
        title: "إدارة المخزون",
        description: "تحسين المخزون الذكي مع التتبع في الوقت الفعلي.",
        timeline: "مخزون ذكي"
      },
      manufacturing: {
        title: "التصنيع",
        description: "إدارة الإنتاج الذكية ومراقبة الجودة.",
        timeline: "تميز الإنتاج"
      },
      assets: {
        title: "إدارة الأصول",
        description: "إدارة الأصول التنبؤية وتحسين الصيانة.",
        timeline: "تحسين الأصول"
      },
      integration: {
        title: "تكامل سلس عبر جميع الوحدات",
        subtitle: "جميع الوحدات تتشارك البيانات في الوقت الفعلي، مما يوفر رؤية موحدة لعمليات عملك مع الشفافية والتحكم الكاملين",
        moduleIntegration: {
          metric: "100%",
          label: "تكامل الوحدات",
          desc: "تدفق البيانات السلس عبر جميع الوحدات"
        },
        dataUpdates: {
          metric: "الوقت الفعلي",
          label: "تحديثات البيانات",
          desc: "مزامنة فورية في كل مكان"
        },
        database: {
          metric: "واحدة",
          label: "قاعدة البيانات",
          desc: "مصدر موحد للحقيقة لجميع البيانات"
        },
        workflows: {
          metric: "مخصصة",
          label: "سير العمل",
          desc: "مصممة خصيصاً لعمليات عملك"
        }
      },
      cta: {
        title: "مستعد للتكامل التجاري الكامل؟",
        subtitle: "اختبر قوة وحدات تخطيط موارد المؤسسات المتكاملة بالكامل التي تعمل معًا لتبسيط عملية عملك بالكامل",
        viewDemo: "عرض عرض التكامل التوضيحي",
        downloadGuide: "تحميل دليل الوحدة"
      }
    },
    
    // Services
    services: {
      badge: "الخدمات المهنية",
      title: "خدمات خبراء<br/>للتنفيذ الناجح",
      subtitle: "يضمن محترفونا المعتمدون تسليم تنفيذ تخطيط موارد المؤسسات في الوقت المحدد وضمن الميزانية ويتجاوز التوقعات",
      implementation: {
        title: "تنفيذ تخطيط موارد المؤسسات",
        description: "تنفيذ شامل مع منهجيات مثبتة وإدارة مشاريع مخصصة.",
        timeline: "8-12 أسبوع"
      },
      industry: {
        title: "حلول الصناعة",
        description: "حلول متخصصة مصممة خصيصاً لمتطلبات صناعتك الفريدة واحتياجات الامتثال.",
        timeline: "6-10 أسابيع"
      },
      ai: {
        title: "تكامل الذكاء الاصطناعي",
        description: "قدرات ذكاء اصطناعي متقدمة لأتمتة العمليات وتوفير رؤى أعمال ذكية.",
        timeline: "4-8 أسابيع"
      },
      ux: {
        title: "تصميم تجربة المستخدم والتوطين",
        description: "تصميم محوره المستخدم مع دعم التوطين الكامل لأسواق الشرق الأوسط وشمال أفريقيا.",
        timeline: "3-6 أسابيع"
      },
      data: {
        title: "ترحيل البيانات والتكامل",
        description: "ترحيل بيانات آمن وفعال مع تكاملات أنظمة طرف ثالث سلسة.",
        timeline: "2-4 أسابيع"
      },
      support: {
        title: "الدعم والصيانة",
        description: "خدمات دعم شاملة تضمن الأداء الأمثل للنظام ورضا المستخدم.",
        timeline: "مستمر"
      },
      methodology: {
        title: "منهجية خدماتنا",
        subtitle: "نهج منظم يضمن التسليم عالي الجودة ورضا العملاء في كل مرحلة",
        consultation: {
          step: "الاستشارة",
          description: "فهم متطلباتك"
        },
        planning: {
          step: "التخطيط",
          description: "خارطة طريق مفصلة للمشروع"
        },
        execution: {
          step: "التنفيذ",
          description: "تنفيذ مهني"
        },
        delivery: {
          step: "التسليم",
          description: "ضمان الجودة والتسليم"
        },
        support: {
          step: "الدعم",
          description: "الصيانة والتحسين المستمر"
        }
      },
      stats: {
        professionals: {
          metric: "50+",
          label: "محترفون معتمدون",
          desc: "استشاريون ومطورون خبراء"
        },
        projects: {
          metric: "500+",
          label: "مشاريع ناجحة",
          desc: "عبر صناعات مختلفة"
        },
        satisfaction: {
          metric: "99%",
          label: "رضا العملاء",
          desc: "بناءً على استطلاعات إكمال المشروع"
        }
      },
      cta: {
        title: "مستعد للعمل مع الخبراء؟",
        subtitle: "جدولة استشارة مع فريق الخدمات المهنية لدينا لمناقشة متطلبات مشروعك والجدول الزمني.",
        scheduleConsultation: "جدولة استشارة",
        viewCaseStudies: "عرض دراسات الحالة"
      }
    },
    
    // Implementation Process
    implementation: {
      badge: "عملية التنفيذ",
      title: "من المفهوم إلى<br/>البدء في 11 أسبوع",
      subtitle: "تضمن منهجيتنا المثبتة التنفيذ الناجح مع الحد الأدنى من الاضطراب لعملك",
      timeline: {
        title: "الجدول الزمني للتنفيذ",
        discovery: {
          week: "1-2",
          phase: "الاستكشاف"
        },
        design: {
          week: "3-5",
          phase: "التصميم"
        },
        development: {
          week: "6-9",
          phase: "التطوير"
        },
        deployment: {
          week: "10-11",
          phase: "النشر"
        },
        support: {
          week: "12+",
          phase: "الدعم"
        }
      },
      phases: {
        discovery: {
          title: "الاستكشاف والتقييم",
          duration: "الأسبوع 1-2",
          description: "نحلل عملياتك الحالية، ونحدد نقاط الألم، وننشئ خارطة طريق تنفيذ مفصلة.",
          deliverables: ["تحليل العمليات", "وثيقة المتطلبات", "خطة التنفيذ"]
        },
        design: {
          title: "التصميم والتكوين",
          duration: "الأسبوع 3-5",
          description: "سير عمل مخصص، وتكوين النظام، وتصميم واجهة المستخدم المصممة خصيصاً لاحتياجات عملك.",
          deliverables: ["تصميم النظام", "تكوين سير العمل", "نماذج واجهة المستخدم"]
        },
        development: {
          title: "التطوير والتكامل",
          duration: "الأسبوع 6-9",
          description: "تطوير النظام، وترحيل البيانات، وتكاملات الطرف الثالث، والاختبار الشامل.",
          deliverables: ["النظام المطور", "ترحيل البيانات", "اختبار التكامل"]
        },
        deployment: {
          title: "النشر والتدريب",
          duration: "الأسبوع 10-11",
          description: "دعم البدء مع التدريب الشامل للمستخدمين، ومراقبة النظام، والدعم الفوري.",
          deliverables: ["النظام المباشر", "المستخدمون المدربون", "وثائق الدعم"]
        },
        optimization: {
          title: "التحسين والدعم",
          duration: "مستمر",
          description: "التحسين المستمر، ومراقبة الأداء، وتحسينات الميزات، والدعم المخصص.",
          deliverables: ["تقارير الأداء", "تحديثات الميزات", "دعم 24/7"]
        }
      },
      whyItWorks: {
        title: "لماذا تعمل عمليتنا",
        subtitle: "نتائج مثبتة من منهجية التنفيذ لدينا",
        fasterImplementation: {
          metric: "85%",
          label: "تنفيذ أسرع",
          desc: "مقارنة بالطرق التقليدية"
        },
        zeroDowntime: {
          metric: "صفر",
          label: "وقت التوقف",
          desc: "عملية انتقال سلسة"
        },
        userAdoption: {
          metric: "98%",
          label: "اعتماد المستخدم",
          desc: "خلال الشهر الأول"
        },
        support: {
          metric: "24/7",
          label: "الدعم",
          desc: "فريق تنفيذ مخصص"
        }
      },
      cta: {
        title: "مستعد للبدء؟",
        subtitle: "جدولة استشارة مع خبراء التنفيذ لدينا لمناقشة الجدول الزمني لمشروعك والمتطلبات.",
        scheduleConsultation: "جدولة استشارة"
      }
    },
    
    // Packages
    packages: {
      badge: "الباقات",
      title: "اختر<br/>خطتك المثالية",
      subtitle: "أسعار شفافة بدون رسوم خفية. ابدأ تجربتك المجانية اليوم.",
      billing: {
        monthly: "شهرياً",
        annual: "سنوياً (وفر 20%)"
      },
      startup: {
        title: "الناشئة",
        description: "مثالي للشركات النامية الجاهزة لتوسيع عملياتها بكفاءة.",
        price: "$299",
        period: "/شهر",
        originalPrice: "$399",
        features: [
          "التنفيذ السريع",
          "الوحدات الأساسية", 
          "الدعم الأساسي",
          "الاستضافة السحابية",
          "حتى 10 مستخدمين",
          "الوصول عبر الهاتف المحمول"
        ]
      },
      professional: {
        title: "المهنية",
        description: "حل شامل للشركات الراسخة ذات الاحتياجات التشغيلية المعقدة.",
        price: "$599",
        period: "/شهر",
        originalPrice: "$799",
        features: [
          "الميزات المتقدمة",
          "سير العمل المخصص",
          "الدعم ذو الأولوية",
          "متعدد المواقع",
          "التحليلات المتقدمة",
          "الوصول إلى API",
          "حتى 50 مستخدم",
          "التقارير المخصصة"
        ],
        popular: true
      },
      enterprise: {
        title: "المؤسسية",
        description: "حل متقدم للمؤسسات الكبيرة ذات متطلبات الامتثال والتخصيص المعقدة.",
        price: "$1,299",
        period: "/شهر",
        originalPrice: "$1,599",
        features: [
          "خيارات العلامة البيضاء",
          "الدعم المخصص",
          "التطوير المخصص",
          "أدوات الامتثال",
          "الأمان المتقدم",
          "ضمان اتفاقية مستوى الخدمة",
          "مستخدمون غير محدودون",
          "خيار في الموقع"
        ]
      },
      actions: {
        viewDetails: "عرض التفاصيل",
        startFreeTrial: "ابدأ التجربة المجانية",
        trialInfo: "تجربة مجانية لمدة 14 يوماً • لا حاجة لبطاقة ائتمان"
      },
      custom: {
        title: "تحتاج شيئاً مخصصاً؟",
        subtitle: "كل عمل فريد. دعنا ننشئ حلاً مخصصاً يناسب متطلباتك المحددة وميزانيتك.",
        getQuote: "احصل على عرض أسعار مخصص"
      },
      included: {
        title: "ما هو مدرج في كل خطة",
        freeSetup: {
          title: "إعداد مجاني",
          desc: "تأهيل مهني مدرج"
        },
        dataMigration: {
          title: "ترحيل البيانات",
          desc: "نحن نتعامل مع نقل بياناتك"
        },
        training: {
          title: "التدريب مدرج",
          desc: "تدريب شامل للمستخدمين"
        },
        support: {
          title: "دعم 24/7",
          desc: "دائماً هنا عندما تحتاجنا"
        }
      },
      guarantee: {
        title: "ضمان استرداد الأموال لمدة 30 يوماً",
        subtitle: "غير راضٍ؟ احصل على استرداد كامل خلال 30 يوماً، بدون أسئلة."
      }
    },
    
    // Testimonials  
    testimonials: {
      badge: "الشهادات",
      title: "ما يقوله الآخرون",
      testimonial1: {
        content: "حولت MovinWare عمليات الإنتاج لدينا، وبسطت سير العمل بينما يركز فريقنا على النمو الاستراتيجي. زيادة 40% في الكفاءة خلال شهرين.",
        author: "سارة تشين",
        role: "نائب رئيس العمليات، أكسيون للتصنيع"
      },
      testimonial2: {
        content: "تنفيذ MovinWare في مراكز اللوجستيات لدينا قلل التكاليف التشغيلية بنسبة 35% مع تحسين الدقة. الرؤى المدعومة بالذكاء الاصطناعي تغير قواعد اللعبة.",
        author: "مايكل رودريغيز",
        role: "مدير اللوجستيات، GlobalShip"
      },
      testimonial3: {
        content: "كشركة متوسطة الحجم، لم نعتقد أبداً أن تخطيط موارد المؤسسات المتقدم سيكون متاحاً لنا. غيرت MovinWare ذلك بتصميمها البديهي والأسعار المعقولة.",
        author: "جيسون لي",
        role: "الرئيس التنفيذي، شركة الحلول المبتكرة"
      }
    },
    
    // Contact
    contact: {
      badge: "اتصل بنا",
      title: "تواصل معنا",
      subtitle: "مستعد لتحويل عملك؟ اتصل بنا اليوم للبدء.",
      form: {
        title: "أرسل لنا رسالة",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        company: "الشركة",
        phone: "الهاتف",
        inquiryType: "نوع الاستفسار",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة!",
        tryAgain: "حاول مرة أخرى"
      },
      info: {
        title: "معلومات الاتصال",
        email: "info@movinware.com",
        phone: "+966 561820949",
        location: "عبر الإنترنت"
      },
      quickActions: {
        title: "إجراءات سريعة",
        expert: {
          title: "تحدث مع خبير",
          description: "جدولة مكالمة مع خبرائنا"
        },
        consultation: {
          title: "جدولة استشارة",
          description: "احجز استشارة مجانية"
        },
        whatsapp: {
          title: "دعم واتساب",
          description: "احصل على دعم فوري عبر واتساب"
        }
      }
    },
    
    // Footer
    footer: {
      description: "حلول تخطيط موارد المؤسسات المدعومة بالذكاء الاصطناعي مصممة للشركات الحديثة. قم بتبسيط العمليات وزيادة الكفاءة وإعداد عملك للمستقبل مع الأتمتة الذكية.",
      quickLinks: "روابط سريعة",
      contact: "اتصل",
      builtBy: "تم البناء بالكامل بواسطة",
      rights: "جميع الحقوق محفوظة."
    },
    
    // Common
    common: {
      learnMore: "اعرف المزيد",
      getStarted: "ابدأ",
      scheduleDemo: "جدولة عرض توضيحي",
      startFreeTrial: "ابدأ التجربة المجانية",
      viewDetails: "عرض التفاصيل",
      requestDemo: "طلب عرض توضيحي",
      backToTop: "العودة إلى الأعلى"
    }
  }
};

// Get nested translation value
export function getTranslation(key: string, lang: string = 'en'): any {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }
  
  return value !== undefined ? value : key;
}

// Translation hook for React components
export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  const t = React.useCallback((key: string): any => {
    return getTranslation(key, currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = React.useCallback((lang: string) => {
    setCurrentLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      
      // Update document attributes
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // Update page title and meta tags if needed
      document.title = lang === 'ar' ? 'MovinWare - حلول تخطيط موارد المؤسسات' : 'MovinWare - ERP Solutions';
    }
  }, []);

  return { t, currentLanguage, changeLanguage };
}