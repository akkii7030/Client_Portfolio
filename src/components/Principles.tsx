import React from 'react';
import { Eye, BarChart3, Target, RefreshCw } from 'lucide-react';

const Principles = () => {
  const principles = [
    {
      icon: Eye,
      title: "Clarity Before Clicks",
      description: "A clear, well-defined strategy always outperforms high budgets alone. We start with understanding your goals.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "No guesswork involved. Every campaign is meticulously tested, optimized, and scaled based on concrete data.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Performance Over Vanity",
      description: "My focus is on real metrics: leads, sales, and customer retention, not just superficial likes or impressions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: RefreshCw,
      title: "Iterate & Scale",
      description: "We operate on a continuous growth loop: test, learn, refine, and then scale for maximum impact.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="principles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Growth Principles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core principles guide every campaign, strategy, and decision I make for your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${principle.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <principle.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {principle.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {principle.description}
              </p>
              
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${principle.gradient} rounded-full transition-all duration-500 w-0 group-hover:w-full`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Your growth is my performance report.
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              I focus on long-term ROI, not just quick wins, ensuring sustainable success for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;