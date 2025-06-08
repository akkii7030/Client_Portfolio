import React from 'react';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-primary-600 font-semibold text-lg">Growth Engineer</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet <span className="gradient-text">Manish Varma</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Helping brands achieve <span className="font-bold text-primary-600">2x-3x growth</span> with 
              data-driven performance marketing. I don't just run ads. <span className="font-semibold">I engineer growth.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#services" className="btn-primary inline-flex items-center justify-center">
                Explore My Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Start Your Growth Journey
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Proven Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2x-3x</div>
                <div className="text-gray-600 font-medium">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">7+</div>
                <div className="text-gray-600 font-medium">Industries</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/assets/6257240.jpg"
                  alt="Manish Varma - Growth Engineer"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700 font-medium">ROI & ROAS Focused</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-accent-500" />
                    <span className="text-gray-700 font-medium">Performance Over Vanity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700 font-medium">Data-Driven Decisions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
