import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">اتصل بنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}