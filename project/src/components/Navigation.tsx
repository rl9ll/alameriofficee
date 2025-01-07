import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'الرئيسية', href: '#' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#projects' },
  { label: 'اتصل بنا', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-navy-800 rounded-lg shadow-lg py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-white hover:bg-navy-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}