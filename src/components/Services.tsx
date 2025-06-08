import React, { useState } from 'react';
import { ChevronDown, ChevronRight, TrendingUp, Users, Search, ShoppingCart, Edit, Globe, BarChart, Megaphone } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      color: "from-blue-500 to-blue-600",
      subServices: [
        "Meta & Google Ads",
        "Lead Generation",
        "Funnels",
        "E-commerce ROAS Campaigns"
      ]
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      color: "from-purple-500 to-purple-600",
      subServices: [
        "Social Management (IG, FB, LinkedIn)",
        "Content Planning & Posting"
      ]
    },
    {
      icon: Search,
      title: "SEO & Google Presence",
      color: "from-green-500 to-green-600",
      subServices: [
        "Google Business Profile Optimization",
        "Local SEO for Footfall & Calls"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Growth",
      color: "from-orange-500 to-orange-600",
      subServices: [
        "Shopify / WooCommerce Store Setup",
        "Product Page & Cart Optimization"
      ]
    },
    {
      icon: Edit,
      title: "Content & Ad Creation",
      color: "from-pink-500 to-pink-600",
      subServices: [
        "Short-Form Video Ads",
        "High-converting Ad Copywriting"
      ]
    },
    {
      icon: Globe,
      title: "Web & Landing Pages",
      color: "from-indigo-500 to-indigo-600",
      subServices: [
        "WordPress Website Development",
        "Landing Pages Built to Convert"
      ]
    },
    {
      icon: BarChart,
      title: "Strategy & Funnels",
      color: "from-teal-500 to-teal-600",
      subServices: [
        "Funnel Planning & Execution",
        "Brand Identity & Messaging"
      ]
    },
    {
      icon: Megaphone,
      title: "Influencer Marketing",
      color: "from-red-500 to-red-600",
      subServices: [
        "Micro & Macro Campaigns",
        "Sourcing, Outreach, Management"
      ]
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="gradient-text">Digital Marketing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack digital marketing solutions designed to drive growth, increase conversions, 
            and maximize your return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  {expandedService === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {expandedService === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 space-y-3">
                    {service.subServices.map((subService, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-gray-700 font-medium">{subService}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Get Custom Strategy
            <TrendingUp className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;