import React from 'react';
import { Target, MessageSquare, DollarSign, Lightbulb } from 'lucide-react';

const Mission = () => {
  const principles = [
    {
      icon: Target,
      title: "Growth-First Approach",
      description: "Empowering businesses with solutions that drive real, trackable growth."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear, open dialogue ensures you always know where your campaigns stand."
    },
    {
      icon: DollarSign,
      title: "ROI & ROAS Focused",
      description: "Every strategy is designed to maximize your return on investment and ad spend."
    },
    {
      icon: Lightbulb,
      title: "Strategic + Creative Balance",
      description: "Combining smart planning with innovative content for optimal results."
    }
  ];

  const industries = [
    "Entertainment", "Real Estate", "Local Businesses", "International Schools",
    "Finance", "Agencies", "Startups"
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission: <span className="gradient-text">Scalable Digital Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From entertainment to finance, I have successfully delivered performance marketing campaigns 
            tailored to diverse industry needs, always with one goal: performance that converts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <principle.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted Across <span className="gradient-text">100+ Clients</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Delivering exceptional results across diverse industries
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;