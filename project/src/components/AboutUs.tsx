import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">من نحن</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              مكتب العامري للمقاولات العامة هو مؤسسة رائدة في مجال المقاولات والبناء في البصرة، نقدم خدمات متكاملة في مجال البناء والتشييد منذ أكثر من 20 عاماً.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              نفتخر بتقديم أعلى معايير الجودة في تنفيذ المشاريع السكنية والتجارية، مع التركيز على رضا العملاء وتحقيق تطلعاتهم.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-50 p-4 rounded-lg">
              <Award className="w-8 h-8 text-navy-900 mb-2" />
              <h3 className="font-semibold mb-1">خبرة موثوقة</h3>
              <p className="text-sm text-gray-600">أكثر من 20 عاماً من الخبرة في المجال</p>
            </div>
            <div className="bg-navy-50 p-4 rounded-lg">
              <Clock className="w-8 h-8 text-navy-900 mb-2" />
              <h3 className="font-semibold mb-1">التزام بالمواعيد</h3>
              <p className="text-sm text-gray-600">تسليم المشاريع في الوقت المحدد</p>
            </div>
            <div className="bg-navy-50 p-4 rounded-lg">
              <Users className="w-8 h-8 text-navy-900 mb-2" />
              <h3 className="font-semibold mb-1">فريق محترف</h3>
              <p className="text-sm text-gray-600">مهندسون وفنيون ذوو خبرة عالية</p>
            </div>
            <div className="bg-navy-50 p-4 rounded-lg">
              <Target className="w-8 h-8 text-navy-900 mb-2" />
              <h3 className="font-semibold mb-1">جودة عالية</h3>
              <p className="text-sm text-gray-600">نلتزم بأعلى معايير الجودة في التنفيذ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}