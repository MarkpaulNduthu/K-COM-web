// pages/Faq.tsx
import { Footer } from '@/components/Footer';
import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit/debit cards (Visa, MasterCard), M-Pesa, PayPal, and mobile banking options.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard delivery takes 2–5 business days depending on your location. Express delivery is available at checkout.'
  },
  {
    question: 'Can I return a product?',
    answer: 'Yes, you can return most items within 7 days of delivery. Please make sure the product is unused and in its original packaging.'
  },
  {
    question: 'How do I track my order?',
    answer: 'After placing an order, you’ll receive a tracking link via email or SMS. You can also track your order from your account dashboard.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, our support team is available Monday to Saturday from 8 AM to 6 PM EAT. Contact us anytime at support@shopifyhub.com.'
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">{openIndex === index ? '-' : '+'}</span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;
