import React from 'react';
import { Phone, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">معلومات الاتصال</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-navy-700">
          <MapPin className="w-5 h-5 flex-shrink-0" />
          <span>البصرة، شارع الجزائر، مجاور فالح ابو العمبة</span>
        </div>
        <a href="tel:07717111312" className="flex items-center gap-3 text-navy-700 hover:text-navy-900">
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span>07717111312</span>
        </a>
        <a href="https://wa.me/07717111312" className="flex items-center gap-3 text-navy-700 hover:text-navy-900">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span>واتساب</span>
        </a>
        <a href="https://www.instagram.com/al_ameri_office/" className="flex items-center gap-3 text-navy-700 hover:text-navy-900">
          <Instagram className="w-5 h-5 flex-shrink-0" />
          <span>انستغرام</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565786983844" className="flex items-center gap-3 text-navy-700 hover:text-navy-900">
          <Facebook className="w-5 h-5 flex-shrink-0" />
          <span>فيسبوك</span>
        </a>
      </div>
    </div>
  );
}