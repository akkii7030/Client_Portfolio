import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      title: "ROI Doubled in Two Months",
      content: "Working with Manish completely transformed our online strategy. Our ROI doubled in just two months, a testament to his expertise and dedication.",
      rating: 5
    },
    {
      title: "40% Reduction in CPL",
      content: "His execution helped us lower our Cost Per Lead by 40% and drastically increase lead quality, directly impacting our bottom line.",
      rating: 5
    },
    {
      title: "Clear Communication, Measurable Results",
      content: "Manish provides clear communication and strong strategy, delivering results we could finally measure and scale with confidence.",
      rating: 5
    },
    {
      title: "Increased Conversions, Reduced Costs",
      content: "Conversions are up, costs are down, and we finally have a strategy that aligns perfectly with our long-term vision.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients who trusted me to engineer their growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {testimonial.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Verified Client</div>
                    <div className="text-gray-500 text-sm">Growth Partner</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;