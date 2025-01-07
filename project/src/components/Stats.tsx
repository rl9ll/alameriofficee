import React from 'react';
import { Trophy, Home, Users, Star } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: '20+',
    label: 'سنة خبرة',
    color: 'text-yellow-500'
  },
  {
    icon: Home,
    value: '500+',
    label: 'مشروع مكتمل',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'عميل راضٍ',
    color: 'text-green-500'
  },
  {
    icon: Star,
    value: '100%',
    label: 'جودة عمل',
    color: 'text-red-500'
  }
];

export default function Stats() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-navy-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}