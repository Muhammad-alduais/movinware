
import React, { useState } from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench, ArrowRight } from "lucide-react";
import DetailModal from "./DetailModal";
import { useTranslation } from "@/lib/translations";

const ERPSolutions = () => {
  const { t } = useTranslation();
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  
  const solutions = [
    {
      icon: Calculator,
      title: t('erp.accounting.title'),
      description: t('erp.accounting.description'),
      capabilities: [
        "Real-time Financial Reporting & Analytics",
        "Multi-currency Support & Conversion",
        "Tax Compliance & Regulatory Reporting",
        "Automated Accounts Payable/Receivable",
        "Budget Planning & Forecasting",
        "Cash Flow Management & Optimization",
        "Financial Audit Trail & Controls",
        "Integration with Banking & Payment Systems"
      ],
      timeline: t('erp.accounting.timeline'),
      fullDescription: "Complete financial management and reporting system with real-time insights and automated processes for comprehensive business control. Our accounting suite provides complete visibility into your financial operations with automated workflows, intelligent reporting, and seamless integration with banking and payment systems."
    },
    {
      icon: Users,
      title: t('erp.hr.title'),
      description: t('erp.hr.description'),
      capabilities: [
        "Employee Self-service Portal & Mobile App",
        "Automated Payroll & Tax Calculations",
        "Performance Management & Goal Tracking",
        "Time & Attendance with Biometric Integration",
        "Recruitment & Applicant Tracking System",
        "Employee Benefits & Leave Management",
        "Training & Development Programs",
        "HR Analytics & Workforce Planning"
      ],
      timeline: t('erp.hr.timeline'),
      fullDescription: "Comprehensive HR management system covering the entire employee lifecycle from recruitment to retirement with advanced analytics. Our HR suite transforms people management with automated workflows, self-service capabilities, and data-driven insights that help you attract, retain, and develop top talent."
    },
    {
      icon: ShoppingCart,
      title: t('erp.sales.title'),
      description: t('erp.sales.description'),
      capabilities: [
        "Lead Tracking & Opportunity Management",
        "Advanced Sales Pipeline & Forecasting",
        "Customer 360-degree View & Analytics",
        "Automated Marketing Campaign Management",
        "Quote & Proposal Generation",
        "Customer Support & Ticket Management",
        "Sales Team Performance Analytics",
        "Mobile CRM & Field Sales Tools"
      ],
      timeline: t('erp.sales.timeline'),
      fullDescription: "End-to-end sales and customer relationship management with AI-powered insights and automation for maximum conversion rates. Our CRM platform provides complete customer visibility, automated sales processes, and intelligent insights that help you close more deals and build stronger customer relationships."
    },
    {
      icon: Package,
      title: t('erp.inventory.title'),
      description: t('erp.inventory.description'),
      capabilities: [
        "AI-powered Stock Optimization & Forecasting",
        "Barcode & RFID Scanning Integration",
        "Automated Reordering & Supplier Alerts",
        "Multi-location & Multi-warehouse Tracking",
        "Batch & Serial Number Management",
        "Cycle Counting & Physical Inventory",
        "Warehouse Layout & Pick Path Optimization",
        "Supplier Performance & Vendor Management"
      ],
      timeline: t('erp.inventory.timeline'),
      fullDescription: "Advanced inventory and warehouse management with real-time tracking and optimization capabilities for maximum efficiency. Our inventory system uses AI to predict demand, optimize stock levels, and automate reordering processes while providing complete visibility across all locations and warehouses."
    },
    {
      icon: Factory,
      title: t('erp.manufacturing.title'),
      description: t('erp.manufacturing.description'),
      capabilities: [
        "Production Planning & Capacity Optimization",
        "Quality Control Workflows & Compliance",
        "Resource Allocation & Equipment Scheduling",
        "Bill of Materials Management & Costing",
        "Shop Floor Control & Work Order Management",
        "Machine Integration & IoT Connectivity",
        "Lean Manufacturing & Waste Reduction",
        "Product Lifecycle & Engineering Change Management"
      ],
      timeline: t('erp.manufacturing.timeline'),
      fullDescription: "Complete production management solution that optimizes manufacturing processes and quality control with real-time monitoring. Our manufacturing module enables digital transformation with IoT integration, automated workflows, and real-time production tracking that maximizes efficiency and ensures consistent quality."
    },
    {
      icon: Wrench,
      title: t('erp.assets.title'),
      description: t('erp.assets.description'),
      capabilities: [
        "Preventive & Predictive Maintenance Scheduling",
        "Asset Lifecycle Tracking & Depreciation",
        "Work Order Management & Technician Dispatch",
        "Equipment Performance & IoT Analytics",
        "Spare Parts Inventory & Procurement",
        "Compliance Management & Safety Tracking",
        "Mobile Maintenance & Field Service",
        "Asset ROI & Cost Analysis"
      ],
      timeline: t('erp.assets.timeline'),
      fullDescription: "Comprehensive asset tracking and maintenance management to maximize equipment uptime and ROI with predictive analytics. Our asset management solution uses IoT sensors and machine learning to predict failures before they occur, optimize maintenance schedules, and ensure maximum equipment availability and performance."
    }
  ];

  const integrationStats = [
    t('erp.integration.moduleIntegration'),
    t('erp.integration.dataUpdates'),
    t('erp.integration.database'),
    t('erp.integration.workflows')
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="erp-solutions">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-blue-600/30 to-purple-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">05</span>
            <span className="font-semibold" data-i18n="erp.badge">{t('erp.badge')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" data-i18n="erp.title">
            <span dangerouslySetInnerHTML={{ __html: t('erp.title') }} />
          </h2>
          <p className="section-header-subtitle" data-i18n="erp.subtitle">
            {t('erp.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-pulse-50 transition-all duration-500 flex-shrink-0">
                    <solution.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1 min-w-0 rtl:text-right">
                    <h3 className="text-xl font-medium text-gray-900 mb-3 pr-2 rtl:pr-0 rtl:pl-2 leading-tight rtl:text-right">{solution.title}</h3>
                    <div className="mb-3">
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full inline-block whitespace-nowrap">
                        {solution.timeline}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow rtl:text-right">{solution.description}</p>
                
                <div 
                  className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer mt-auto rtl:flex-row-reverse rtl:text-right"
                  onClick={() => setSelectedSolution(solution)}
                >
                  <span data-i18n="common.viewDetails">{t('common.viewDetails')}</span>
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0 transition-transform duration-300 rtl:rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="erp.integration.title">{t('erp.integration.title')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto" data-i18n="erp.integration.subtitle">
                {t('erp.integration.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {integrationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                  <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
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
              <h3 className="text-2xl font-light mb-4" data-i18n="erp.cta.title">{t('erp.cta.title')}</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto" data-i18n="erp.cta.subtitle">
                {t('erp.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300" data-i18n="erp.cta.viewDemo">
                  {t('erp.cta.viewDemo')}
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300" data-i18n="erp.cta.downloadGuide">
                  {t('erp.cta.downloadGuide')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DetailModal
        isOpen={selectedSolution !== null}
        onClose={() => setSelectedSolution(null)}
        title={selectedSolution?.title || ""}
        description={selectedSolution?.fullDescription || selectedSolution?.description || ""}
        capabilities={selectedSolution?.capabilities || []}
        timeline={selectedSolution?.timeline}
        icon={selectedSolution?.icon || Calculator}
      />
    </section>
  );
};

export default ERPSolutions;
