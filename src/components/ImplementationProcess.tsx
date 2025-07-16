import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp, Clock, CheckCircle, Users } from "lucide-react";
import { useTranslation } from "@/lib/translations";

const ImplementationProcess = () => {
  const { t } = useTranslation();
  
  const phases = [
    {
      icon: Search,
      title: t('implementation.phases.discovery.title'),
      duration: t('implementation.phases.discovery.duration'),
      description: t('implementation.phases.discovery.description'),
      deliverables: t('implementation.phases.discovery.deliverables'),
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Palette,
      title: t('implementation.phases.design.title'),
      duration: t('implementation.phases.design.duration'),
      description: t('implementation.phases.design.description'),
      deliverables: t('implementation.phases.design.deliverables'),
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Code,
      title: t('implementation.phases.development.title'),
      duration: t('implementation.phases.development.duration'),
      description: t('implementation.phases.development.description'),
      deliverables: t('implementation.phases.development.deliverables'),
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Rocket,
      title: t('implementation.phases.deployment.title'),
      duration: t('implementation.phases.deployment.duration'),
      description: t('implementation.phases.deployment.description'),
      deliverables: t('implementation.phases.deployment.deliverables'),
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: TrendingUp,
      title: t('implementation.phases.optimization.title'),
      duration: t('implementation.phases.optimization.duration'),
      description: t('implementation.phases.optimization.description'),
      deliverables: t('implementation.phases.optimization.deliverables'),
      color: "bg-pulse-50 text-pulse-600"
    }
  ];

  const timeline = [
    { week: t('implementation.timeline.discovery.week'), phase: t('implementation.timeline.discovery.phase') },
    { week: t('implementation.timeline.design.week'), phase: t('implementation.timeline.design.phase') },
    { week: t('implementation.timeline.development.week'), phase: t('implementation.timeline.development.phase') },
    { week: t('implementation.timeline.deployment.week'), phase: t('implementation.timeline.deployment.phase') },
    { week: t('implementation.timeline.support.week'), phase: t('implementation.timeline.support.phase') }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="implementation">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-red-600/30 to-pink-600/40"></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">07</span>
            <span className="font-semibold" data-i18n="implementation.badge">{t('implementation.badge')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" data-i18n="implementation.title">
            <span dangerouslySetInnerHTML={{ __html: t('implementation.title') }} />
          </h2>
          <p className="section-header-subtitle" data-i18n="implementation.subtitle">
            {t('implementation.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-20 opacity-0 animate-fade-scale" style={{ animationDelay: "0.2s" }}>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-8 text-center" data-i18n="implementation.timeline.title">{t('implementation.timeline.title')}</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{t('common.week')} {item.week}</div>
                  <div className="text-xs text-gray-600">{item.phase}</div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute ltr:left-full rtl:right-full top-6 w-full h-px bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${phase.color}`}>
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-gray-900">{phase.title}</h3>
                          <p className="text-pulse-500 font-medium">{phase.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>
                    </div>

                    <div className="lg:w-80">
                      <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 rtl:mr-0 rtl:ml-2" />
                        <span data-i18n="implementation.keyDeliverables">{t('implementation.keyDeliverables') || 'Key Deliverables'}</span>
                      </h4>
                      <div className="space-y-3">
                        {Array.isArray(phase.deliverables) && phase.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12 opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="implementation.whyItWorks.title">{t('implementation.whyItWorks.title')}</h3>
            <p className="text-gray-600" data-i18n="implementation.whyItWorks.subtitle">{t('implementation.whyItWorks.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              t('implementation.whyItWorks.fasterImplementation'),
              t('implementation.whyItWorks.zeroDowntime'),
              t('implementation.whyItWorks.userAdoption'),
              t('implementation.whyItWorks.support')
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 opacity-0 animate-fade-scale hover:animate-gentle-float" 
                style={{ animationDelay: `${0.9 + 0.1 * index}s` }}
              >
                <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "1.3s" }}>
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <Users className="w-12 h-12 text-pulse-500 mx-auto mb-6" />
            <h3 className="text-2xl font-light text-gray-900 mb-4" data-i18n="implementation.cta.title">{t('implementation.cta.title')}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-i18n="implementation.cta.subtitle">
              {t('implementation.cta.subtitle')}
            </p>
            <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-colors duration-300" data-i18n="implementation.cta.scheduleConsultation">
              {t('implementation.cta.scheduleConsultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;