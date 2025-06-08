import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Award,
      number: "100+",
      label: "Proven Campaigns",
      description: "Successful delivery across numerous campaigns with tangible results."
    },
    {
      icon: Users,
      number: "7+",
      label: "Industry Experience",
      description: "Expertise in delivering growth across a wide array of sectors."
    },
    {
      icon: Zap,
      number: "2x-3x",
      label: "Strategic + Creative",
      description: "A unique blend of analytical thinking and innovative content creation."
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Transparent Reporting",
      description: "Clear and honest communication on campaign performance."
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Partner <span className="text-accent-400">With Me?</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Proven track record of delivering exceptional results across diverse industries and business models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-accent-400 mb-2 group-hover:text-accent-300 transition-colors duration-300">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {stat.label}
              </h3>
              
              <p className="text-primary-200 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;