// pages/About.tsx
import { Footer } from '@/components/Footer';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        About Us
      </h1>

      <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">
        Welcome to <span className="font-semibold text-blue-600">KcomHub</span>, your number one source for everything you love — from fashion and electronics to beauty and home essentials. We're dedicated to giving you the very best shopping experience, with a focus on reliability, customer service, and uniqueness.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2024 by a passionate team of developers and entrepreneurs, KcomHub started with a simple mission — to make online shopping smoother, smarter, and more satisfying. What began as a small project is now growing into a trusted brand, serving thousands of happy customers every month.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to become Africa’s most customer-centric eCommerce platform — where people can discover, compare, and purchase products with ease. By leveraging cutting-edge technology and great design, we’re committed to delivering innovation every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or suggestions? We'd love to hear from you.
        </p>
        <p className="text-blue-600 mt-1">
          Email: support@kcomhub.com
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
