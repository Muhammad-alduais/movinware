
import React, { useState } from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useTranslation } from "@/lib/translations";

const Industries = () => {
  const { t } = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);
  
  const industries = [
    {
      icon: GraduationCap,
      title: t('industries.education.title'),
      description: t('industries.education.description'),
      capabilities: [
        "Student Information Management System",
        "Advanced Learning Management Platform",
        "Financial Aid & Scholarship Processing",
        "Academic Performance Analytics & Reporting",
        "Online Course Management & Delivery",
        "Parent-Teacher Communication Portal",
        "Library & Resource Management",
        "Examination & Assessment Tools"
      ],
      timeline: t('industries.education.timeline'),
      clients: "Schools, Universities, Training Centers, Online Learning Platforms",
      fullDescription: "Comprehensive solutions for educational institutions, from student management to curriculum planning and administrative efficiency. Our education suite transforms traditional learning environments with digital tools that enhance student engagement, streamline administrative processes, and provide deep insights into academic performance and institutional effectiveness.",
      benefits: [
        "Streamlined administrative processes reduce workload by 60%",
        "Enhanced student engagement through digital tools",
        "Comprehensive analytics improve academic outcomes",
        "Integrated communication platforms connect all stakeholders"
      ]
    },
    {
      icon: ShoppingCart,
      title: t('industries.retail.title'),
      description: t('industries.retail.description'),
      capabilities: [
        "Advanced Point of Sale (POS) Systems",
        "Omnichannel E-commerce Integration",
        "Customer Loyalty & Rewards Management",
        "Multi-location Inventory Synchronization",
        "Price Management & Dynamic Pricing",
        "Customer Analytics & Personalization",
        "Vendor & Supplier Management",
        "Return & Exchange Processing"
      ],
      timeline: t('industries.retail.timeline'),
      clients: "Retail Chains, Online Stores, Fashion Brands, Specialty Retailers",
      fullDescription: "Complete retail management and e-commerce solutions designed to optimize sales, inventory, and customer experience across all channels. Our retail platform unifies online and offline operations, providing real-time visibility into customer behavior, inventory levels, and sales performance across all touchpoints for maximum profitability.",
      benefits: [
        "Omnichannel integration increases sales by 40%",
        "Real-time inventory management reduces stockouts",
        "Customer analytics drive personalized experiences",
        "Automated processes improve operational efficiency"
      ]
    },
    {
      icon: Factory,
      title: t('industries.manufacturing.title'),
      description: t('industries.manufacturing.description'),
      capabilities: [
        "Production Planning & Capacity Optimization",
        "Quality Management & Compliance Systems",
        "Predictive Equipment Maintenance",
        "Supply Chain Optimization & Tracking",
        "Real-time Production Monitoring",
        "Lean Manufacturing Implementation",
        "Batch & Serial Number Traceability",
        "Cost Analysis & Profitability Tracking"
      ],
      timeline: t('industries.manufacturing.timeline'),
      clients: "Manufacturers, Assembly Lines, Processing Plants, Industrial Equipment",
      fullDescription: "End-to-end manufacturing and production management solutions that optimize efficiency, quality control, and supply chain operations. Our manufacturing suite enables digital transformation with IoT integration, predictive analytics, and automated workflows that reduce waste, improve quality, and maximize operational efficiency while ensuring compliance.",
      benefits: [
        "Predictive maintenance reduces downtime by 45%",
        "Quality management systems ensure compliance",
        "Real-time monitoring optimizes production efficiency",
        "Supply chain integration reduces costs and delays"
      ]
    },
    {
      icon: Truck,
      title: t('industries.logistics.title'),
      description: t('industries.logistics.description'),
      capabilities: [
        "AI-Powered Route Optimization",
        "Fleet Management & Vehicle Tracking",
        "Warehouse Automation & Control",
        "Real-time Shipment & Delivery Tracking",
        "Load Planning & Optimization",
        "Driver Management & Performance Analytics",
        "Customer Portal & Communication",
        "Cost Analysis & Freight Audit"
      ],
      timeline: t('industries.logistics.timeline'),
      clients: "Shipping Companies, 3PL Providers, Freight Forwarders, Distribution Centers",
      fullDescription: "Advanced logistics and supply chain optimization tools that ensure timely delivery, cost efficiency, and complete visibility across operations. Our logistics platform leverages AI and machine learning to optimize routes, reduce costs, and provide real-time visibility throughout the entire supply chain ecosystem for maximum efficiency.",
      benefits: [
        "AI-powered route optimization reduces fuel costs by 30%",
        "Real-time tracking improves customer satisfaction",
        "Automated load planning maximizes efficiency",
        "Comprehensive analytics drive continuous improvement"
      ]
    }
  ];

  const companySizes = [
    { icon: TrendingUp, ...t('industries.companySizes.startups') },
    { icon: Users, ...t('industries.companySizes.smes') },
    { icon: Building, ...t('industries.companySizes.enterprises') }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="industries">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-green-600/30 to-teal-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">04</span>
            <span className="font-semibold" data-i18n="industries.badge">{t('industries.badge')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" data-i18n="industries.title">
            <span dangerouslySetInnerHTML={{ __html: t('industries.title') }} />
          </h2>
          <p className="section-header-subtitle" data-i18n="industries.subtitle">
            {t('industries.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <PreviewCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              timeline={industry.timeline}
              onLearnMore={() => setSelectedIndustry(industry)}
              index={index}
            />
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="industries.companySizes.title">{t('industries.companySizes.title')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto" data-i18n="industries.companySizes.subtitle">
                {t('industries.companySizes.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companySizes.map((size, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <size.icon className="w-6 h-6 text-pulse-500" />
                  </div>
                  <div className="text-3xl font-light text-pulse-500 mb-2">{size.count}</div>
                  <div className="font-medium text-gray-900 mb-2">{size.title}</div>
                  <div className="text-sm text-gray-600 mb-2">{size.description}</div>
                  <div className="text-xs text-gray-500">{size.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pulse-500 rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4" data-i18n="industries.cta.title">{t('industries.cta.title')}</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto" data-i18n="industries.cta.subtitle">
                {t('industries.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300" data-i18n="industries.cta.scheduleDemo">
                  {t('industries.cta.scheduleDemo')}
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300" data-i18n="industries.cta.viewCaseStudies">
                  {t('industries.cta.viewCaseStudies')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DetailModal
        isOpen={selectedIndustry !== null}
        onClose={() => setSelectedIndustry(null)}
        title={selectedIndustry?.title || ""}
        description={selectedIndustry?.fullDescription || selectedIndustry?.description || ""}
        capabilities={selectedIndustry?.capabilities || []}
        benefits={selectedIndustry?.benefits || []}
        timeline={selectedIndustry?.timeline}
        clients={selectedIndustry?.clients}
        icon={selectedIndustry?.icon || GraduationCap}
      />
    </section>
  );
};

export default Industries;
