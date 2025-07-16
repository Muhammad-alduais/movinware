import React, { useState } from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useTranslation } from "@/lib/translations";

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<any>(null);
  
  const services = [
    {
      icon: Settings,
      title: t('services.implementation.title'),
      description: t('services.implementation.description'),
      capabilities: [
        "System Architecture Design & Planning",
        "Custom Development & Configuration",
        "Data Migration & Integration Services",
        "Comprehensive User Training Programs",
        "Go-Live Support & Optimization",
        "Performance Monitoring & Tuning",
        "Change Management & User Adoption",
        "Quality Assurance & Testing"
      ],
      timeline: t('services.implementation.timeline'),
      fullDescription: "Comprehensive ERP implementation services that transform your business operations with minimal disruption. Our proven methodology ensures successful deployment with dedicated project management, custom development, and comprehensive training programs that drive user adoption and business value.",
      benefits: [
        "85% faster implementation compared to traditional methods",
        "Dedicated project manager ensures timeline adherence",
        "Proven methodology with 98% success rate",
        "Comprehensive training drives user adoption"
      ],
      processSteps: [
        {
          title: "Discovery & Planning",
          description: "Analyze current processes and create implementation roadmap",
          deliverables: ["Requirements Analysis", "Project Timeline", "Resource Planning"]
        },
        {
          title: "System Configuration",
          description: "Configure system according to business requirements",
          deliverables: ["System Setup", "Custom Workflows", "Integration Points"]
        },
        {
          title: "Data Migration",
          description: "Secure transfer of existing data to new system",
          deliverables: ["Data Mapping", "Migration Scripts", "Validation Reports"]
        },
        {
          title: "Training & Go-Live",
          description: "User training and system deployment",
          deliverables: ["Training Materials", "User Manuals", "Go-Live Support"]
        }
      ]
    },
    {
      icon: Building2,
      title: t('services.industry.title'),
      description: t('services.industry.description'),
      capabilities: [
        "Healthcare Management Systems",
        "Educational Platform Solutions",
        "Manufacturing Process Optimization",
        "Retail & E-commerce Integration",
        "Logistics & Supply Chain Management",
        "Financial Services Compliance",
        "Real Estate Management Systems",
        "Hospitality & Tourism Solutions"
      ],
      timeline: t('services.industry.timeline'),
      fullDescription: "Industry-specific solutions designed to address unique sector challenges and compliance requirements. Our deep industry expertise ensures solutions are tailored to your specific business environment, regulatory needs, and operational workflows for maximum effectiveness.",
      benefits: [
        "Industry-specific features reduce customization time",
        "Built-in compliance for regulatory requirements",
        "Proven solutions across multiple sectors",
        "Reduced implementation risk with tested frameworks"
      ]
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      capabilities: [
        "Predictive Analytics Implementation",
        "Process Automation Development",
        "Document Processing & OCR",
        "Decision Support Systems",
        "Customer Behavior Analysis",
        "Fraud Detection & Prevention",
        "Intelligent Reporting Systems",
        "Machine Learning Model Development"
      ],
      timeline: t('services.ai.timeline'),
      fullDescription: "Transform your business with AI-powered automation and intelligent insights. Our AI integration services leverage machine learning, predictive analytics, and automation to optimize operations, reduce manual tasks, and provide actionable insights that drive business growth.",
      benefits: [
        "Predictive analytics improve decision accuracy by 85%",
        "Process automation reduces manual tasks by 70%",
        "AI insights drive revenue growth and cost reduction",
        "Continuous learning adapts to business changes"
      ]
    },
    {
      icon: Palette,
      title: t('services.ux.title'),
      description: t('services.ux.description'),
      capabilities: [
        "User Experience (UX) Design",
        "Right-to-Left (RTL) Interface Design",
        "Multi-language Platform Support",
        "Cultural Adaptation & Localization",
        "Accessibility Standards Compliance",
        "Mobile-First Design Approach",
        "Brand Integration & Customization",
        "Usability Testing & Optimization"
      ],
      timeline: t('services.ux.timeline'),
      fullDescription: "Create intuitive, culturally-appropriate user experiences with comprehensive localization for MENA markets. Our design services ensure your platform is not only visually appealing but also accessible, culturally relevant, and optimized for diverse user needs.",
      benefits: [
        "Culturally-adapted interfaces improve user adoption",
        "RTL design ensures native Arabic experience",
        "Accessibility compliance reaches broader audiences",
        "Mobile-first approach maximizes device compatibility"
      ]
    },
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description'),
      capabilities: [
        "Legacy System Data Migration",
        "API Development & Integration",
        "Real-time Data Synchronization",
        "Data Validation & Quality Assurance",
        "Third-party System Connectors",
        "Cloud Migration Services",
        "Database Optimization & Tuning",
        "Data Security & Compliance"
      ],
      timeline: t('services.data.timeline'),
      fullDescription: "Ensure seamless data transition and system integration with our comprehensive migration and integration services. We handle complex data transformations, API integrations, and real-time synchronization to maintain business continuity throughout the transition.",
      benefits: [
        "Zero data loss with validated migration processes",
        "Real-time synchronization maintains data consistency",
        "API integrations connect all business systems",
        "Security protocols protect sensitive information"
      ]
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.description'),
      capabilities: [
        "24/7 Technical Support Services",
        "System Performance Monitoring",
        "Regular Security Updates",
        "User Training & Onboarding",
        "Preventive Maintenance Programs",
        "Issue Resolution & Bug Fixes",
        "Feature Enhancement Development",
        "System Health Reporting"
      ],
      timeline: t('services.support.timeline'),
      fullDescription: "Maintain optimal system performance with our comprehensive support and maintenance services. Our dedicated support team provides 24/7 assistance, proactive monitoring, regular updates, and continuous optimization to ensure your system delivers consistent business value.",
      benefits: [
        "24/7 support ensures minimal business disruption",
        "Proactive monitoring prevents issues before they occur",
        "Regular updates maintain security and performance",
        "Ongoing training maximizes user productivity"
      ]
    }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-gray-50" id="services">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-600/30 to-red-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">06</span>
            <span className="font-semibold" data-i18n="services.badge">{t('services.badge')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" data-i18n="services.title">
            <span dangerouslySetInnerHTML={{ __html: t('services.title') }} />
          </h2>
          <p className="section-header-subtitle" data-i18n="services.subtitle">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <PreviewCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              timeline={service.timeline}
              onLearnMore={() => setSelectedService(service)}
              index={index}
            />
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="services.methodology.title">{t('services.methodology.title')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto" data-i18n="services.methodology.subtitle">
                {t('services.methodology.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 relative">
              {[
                t('services.methodology.consultation'),
                t('services.methodology.planning'),
                t('services.methodology.execution'),
                t('services.methodology.delivery'),
                t('services.methodology.support')
              ].map((process, index) => (
                <div key={index} className="flex flex-col items-center text-center relative flex-1">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-4 text-sm relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{process.step}</h4>
                  <p className="text-sm text-gray-600 max-w-32">{process.description}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute ltr:left-full rtl:right-full top-6 w-full h-px bg-gray-200 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              t('services.stats.professionals'),
              t('services.stats.projects'),
              t('services.stats.satisfaction')
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-3xl p-8 border border-gray-200">
                <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pulse-500 rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4" data-i18n="services.cta.title">{t('services.cta.title')}</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto" data-i18n="services.cta.subtitle">
                {t('services.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300" data-i18n="services.cta.scheduleConsultation">
                  {t('services.cta.scheduleConsultation')}
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300" data-i18n="services.cta.viewCaseStudies">
                  {t('services.cta.viewCaseStudies')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DetailModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.fullDescription || selectedService?.description || ""}
        capabilities={selectedService?.capabilities || []}
        benefits={selectedService?.benefits || []}
        processSteps={selectedService?.processSteps}
        timeline={selectedService?.timeline}
        icon={selectedService?.icon || Settings}
      />
    </section>
  );
};

export default Services;
