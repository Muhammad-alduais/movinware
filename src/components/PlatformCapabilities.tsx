import React, { useState } from "react";
import { Cpu, Zap, Link, Smartphone } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useTranslation } from "@/lib/translations";

const PlatformCapabilities = () => {
  const { t } = useTranslation();
  const [selectedCapability, setSelectedCapability] = useState<any>(null);
  const capabilities = [{
    icon: Cpu,
    title: t('platform.coreModules.title'),
    description: t('platform.coreModules.description'),
    capabilities: ["Advanced Accounting & Financial Reporting", "Comprehensive Human Resources Management", "Sales CRM with Pipeline Automation", "Smart Inventory & Supply Chain Control", "Project Management & Resource Planning", "Document Management & Workflow Automation", "Multi-location Operations Support", "Real-time Business Intelligence Dashboard"],
    timeline: t('platform.coreModules.timeline'),
    fullDescription: "Comprehensive business modules covering all aspects of your operations, designed to streamline processes and boost productivity across your entire organization. Our core modules provide the foundation for digital transformation with integrated workflows, automated processes, and real-time data synchronization across all business functions.",
    benefits: ["Integrated workflow automation reduces manual tasks by 70%", "Real-time data synchronization across all departments", "Comprehensive reporting and analytics dashboard", "Multi-location support with centralized control"]
  }, {
    icon: Zap,
    title: t('platform.aiFeatures.title'),
    description: t('platform.aiFeatures.description'),
    capabilities: ["Machine Learning Predictive Analytics", "Intelligent Process Automation Workflows", "Natural Language Report Generation", "AI-Powered Decision Recommendation Engine", "Smart Data Pattern Recognition", "Automated Anomaly Detection & Alerts", "Intelligent Customer Behavior Analysis", "Voice-to-Data Input Processing"],
    timeline: t('platform.aiFeatures.timeline'),
    fullDescription: "Intelligent automation and insights powered by advanced AI technology that learns from your business patterns to provide actionable recommendations. Our AI features continuously evolve with your business, identifying opportunities for optimization and automating complex decision-making processes to drive growth and efficiency.",
    benefits: ["Predictive analytics improve decision-making accuracy by 85%", "Automated workflows reduce processing time by 60%", "AI-powered insights drive revenue growth", "Continuous learning adapts to your business evolution"]
  }, {
    icon: Link,
    title: t('platform.integration.title'),
    description: t('platform.integration.description'),
    capabilities: ["Enterprise API Gateway Management", "Real-time Data Synchronization Engine", "Legacy System Migration Tools", "Third-party Platform Connectors", "Custom Integration Development", "Webhook & Event-driven Architecture", "Data Mapping & Transformation Tools", "Security & Authentication Management"],
    timeline: t('platform.integration.timeline'),
    fullDescription: "Seamless connectivity with your existing tools and systems, ensuring data flows smoothly across your entire technology stack without disruption. Our integration hub supports both modern APIs and legacy systems, providing a unified data ecosystem that eliminates silos and enables comprehensive business intelligence.",
    benefits: ["Connect 500+ third-party applications instantly", "Eliminate data silos with unified integration", "Legacy system support ensures smooth migration", "Real-time synchronization keeps data current"]
  }, {
    icon: Smartphone,
    title: t('platform.mobile.title'),
    description: t('platform.mobile.description'),
    capabilities: ["Progressive Web Application (PWA)", "Native iOS & Android Applications", "Offline-first Data Synchronization", "Multi-device Real-time Collaboration", "Cloud Infrastructure Auto-scaling", "Enterprise-grade Security & Encryption", "Automated Backup & Disaster Recovery", "Global CDN for Optimal Performance"],
    timeline: t('platform.mobile.timeline'),
    fullDescription: "Access your business data anywhere, anytime, on any device with our cloud-native platform that ensures maximum uptime and security. Built with modern cloud architecture, our platform provides seamless mobile experiences with robust offline capabilities and enterprise-grade security that scales with your business needs.",
    benefits: ["99.9% uptime SLA with automatic failover", "Offline functionality ensures continuous productivity", "Enterprise-grade security protects your data", "Global CDN provides optimal performance worldwide"]
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="platform">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-600/40 via-purple-600/30 to-blue-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">03</span>
            <span className="font-semibold" data-i18n="platform.badge">{t('platform.badge')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" data-i18n="platform.title">
            <span dangerouslySetInnerHTML={{ __html: t('platform.title') }} />
          </h2>
          <p className="section-header-subtitle" data-i18n="platform.subtitle">
            {t('platform.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, index) => <PreviewCard key={index} icon={capability.icon} title={capability.title} description={capability.description} timeline={capability.timeline} onLearnMore={() => setSelectedCapability(capability)} index={index} />)}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{
        animationDelay: "0.4s"
      }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="platform.integrationOverview.title">{t('platform.integrationOverview.title')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto" data-i18n="platform.integrationOverview.subtitle">
                {t('platform.integrationOverview.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                t('platform.stats.apiIntegrations'),
                t('platform.stats.uptime'),
                t('platform.stats.monitoring'),
                t('platform.stats.dataSync')
              ].map((stat, index) => <div key={index} className="text-center">
                  <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                  <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "0.6s"
      }}>
          
        </div>
      </div>
      
      <DetailModal isOpen={selectedCapability !== null} onClose={() => setSelectedCapability(null)} title={selectedCapability?.title || ""} description={selectedCapability?.fullDescription || selectedCapability?.description || ""} capabilities={selectedCapability?.capabilities || []} benefits={selectedCapability?.benefits || []} timeline={selectedCapability?.timeline} icon={selectedCapability?.icon || Cpu} />
    </section>;
};
export default PlatformCapabilities;