import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build <span className="text-accent-400">Growth Together</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to transform your business with data-driven growth strategies? 
            Let's discuss how we can achieve 2x-3x growth for your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:varmamanish11111@gmail.com"
                className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Email Me</div>
                  <div className="text-primary-200">varmamanish11111@gmail.com</div>
                  <div className="text-sm text-primary-300">Reach out directly via email to discuss your marketing needs and goals.</div>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-400 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="tel:+918806697041"
                className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Call Me</div>
                  <div className="text-primary-200">+91 8806697041</div>
                  <div className="text-sm text-primary-300">Prefer to chat? Connect with me directly by phone for a quick consultation.</div>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-400 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="https://wa.me/918806697041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">WhatsApp</div>
                  <div className="text-primary-200">+91 8806697041</div>
                  <div className="text-sm text-primary-300">Quick questions? Message me on WhatsApp for instant responses.</div>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-400 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 text-gray-900">
              <h4 className="text-2xl font-bold mb-6 text-center">Ready to Start Growing?</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Custom growth strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Performance-focused approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Transparent reporting</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2x-3x Growth</div>
                <div className="text-gray-600">Average client results</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-primary-700">
          <p className="text-primary-200">
            © 2025 Manish Varma - Growth Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;