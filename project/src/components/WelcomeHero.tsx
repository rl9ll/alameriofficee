import React from 'react';
import { HardHat } from 'lucide-react';

export default function WelcomeHero() {
  return (
    <div className="relative bg-navy-800 text-white py-20">
      <div className="container mx-auto px-4 text-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
        <div className="animate-bounce mb-6">
          <HardHat className="w-16 h-16 mx-auto text-yellow-400" />
        </div>
        <h2 className="text-4xl font-bold mb-4">أهلاً بكم في مكتب العامري للمقاولات</h2>
        <p className="text-xl text-gray-300 mb-8">نحول أحلامكم إلى واقع ملموس بأعلى معايير الجودة</p>
      </div>
    </div>
  );
}