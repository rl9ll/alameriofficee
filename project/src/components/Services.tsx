import React from 'react';
import { Home, Wrench, PenTool, Building } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'بناء المنازل والدور السكنية',
    description: 'تصميم وبناء منازل عصرية بأعلى المواصفات',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop'
  },
  {
    icon: Wrench,
    title: 'ترميم وتجديد المنازل',
    description: 'إعادة تأهيل وتحديث المنازل القائمة',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
  },
  {
    icon: PenTool,
    title: 'تصميم وتنفيذ المشاريع السكنية',
    description: 'تصاميم معمارية مبتكرة وتنفيذ احترافي',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop'
  },
  {
    icon: Building,
    title: 'استشارات هندسية',
    description: 'خدمات استشارية متكاملة للمشاريع السكنية',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=400&fit=crop'
  }
];

export default function Services() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}