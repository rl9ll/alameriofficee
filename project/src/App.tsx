import React from 'react';
import { Building2 } from 'lucide-react';
import Navigation from './components/Navigation';
import WelcomeHero from './components/WelcomeHero';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Services from './components/Services';
import Carousel from './components/Carousel';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-900 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8" />
              <h1 className="text-xl md:text-2xl font-bold">مكتب العامري للمقاولات العامة</h1>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <main>
        <section id="home">
          <WelcomeHero />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="stats" className="py-12 md:py-16">
          <Stats />
        </section>

        <section id="services" className="py-12 md:py-16 bg-white">
          <Services />
        </section>

        <section id="projects" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">مشاريعنا</h2>
            <Carousel />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16 bg-white">
          <ContactSection />
        </section>
      </main>

      <footer className="bg-navy-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} مكتب العامري للمقاولات العامة. جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}

export default App;