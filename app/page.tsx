"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Sparkles, Shield, Menu, X, Zap, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          {/* Desktop Menu - Centered */}
          <div className="hidden sm:flex items-center gap-12">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="#about" className="text-slate-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="#services" className="text-slate-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="#contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* Book Now Button - Desktop */}
          <button className="hidden sm:block absolute right-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium hover:shadow-xl transition transform hover:scale-105">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-blue-200 bg-white p-4 flex flex-col gap-4">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-700 hover:text-blue-600">Home</Link>
            <Link href="#about" className="text-slate-700 hover:text-blue-600">About</Link>
            <Link href="#services" className="text-slate-700 hover:text-blue-600">Services</Link>
            <Link href="#contact" className="text-slate-700 hover:text-blue-600">Contact</Link>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full font-medium hover:shadow-xl transition transform hover:scale-105">
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden" style={{
        backgroundImage: "url('/background.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Text and Button positioned absolutely at bottom */}
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl font-light text-blue-900 italic mb-12">
            Achieving Radiant, Glowing Skin
          </p>
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:scale-105"
          >
            Start Your Journey Today!
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-500 mb-4">
            My Mission
          </p>
          <h2 className="text-5xl font-light text-blue-600 mb-6">
            At Dream Med Spa, skincare feels personal, calming, & confidence-building.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            My mission is to create a space where everyone can achieve naturally glowing skin through customized treatments, skincare education, and a passion for helping people feel confident in their own skin.
          </p>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <img src="/IMG_5714.JPG" alt="Chlo" className="w-full h-full object-cover" />
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-5xl font-light text-blue-600 mb-6">
                About Me
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Hi, I'm Chloe, the face behind Glow with Chlo.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I'm currently an esthetician student at Elite Esthetics Academy in Denver, where I'm pursuing my passion for skincare and helping people feel confident in their own skin. My mission is to help clients achieve radiant, glowing skin while creating a relaxing space where they can truly take care of themselves.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                My love for skincare began at a young age. I started getting facials when I was just 14 years old while navigating my own acne journey. During that time, my esthetician became a huge inspiration to me and showed me how powerful skincare and self care can be. That experience stayed with me and ultimately led me to pursue this career so I can help others the same way she helped me.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before entering the esthetics world, I proudly served four years in the United States Air Force. That experience shaped my discipline, work ethic, and dedication, qualities I now bring into my career and the care I give my clients.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Outside of skincare, I love staying active and spending time outdoors. You'll often find me working out, doing Pilates, or enjoying the beautiful Colorado outdoors. Living a healthy and balanced lifestyle inspires the way I approach skincare, focusing on both inner wellness and outer glow.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                I'm so excited to be on this journey and can't wait to help you feel confident, refreshed, and glowing in your skin. ✨
              </p>
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-center mb-4 text-blue-600">
            Services
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Professional treatments with pricing and time estimates
          </p>

          {/* Top Row - Facials and Makeup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Facials */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Facials</h3>
              </div>
              <div className="border-t border-blue-200 pt-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Signature Custom Facial</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="w-16 text-right font-semibold text-blue-600">$65</p>
                </div>
              </div>
            </div>

            {/* Makeup & Lashes */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Makeup & Lashes</h3>
              </div>
              <div className="border-t border-blue-200 pt-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Makeup</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="w-16 text-right font-semibold text-blue-600">$50</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Lash Lift/Tint</p>
                    <p className="text-sm text-slate-600">60 minutes</p>
                  </div>
                  <p className="w-16 text-right font-semibold text-blue-600">$30</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Brow Lamination</p>
                    <p className="text-sm text-slate-600">45 minutes</p>
                  </div>
                  <p className="w-16 text-right font-semibold text-blue-600">$25</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Waxing Services (Single Card) */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-600">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-slate-900">Waxing Services</h3>
            </div>
            <div className="border-t border-blue-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-blue-200">
                {/* Waxing Part 1 */}
                <div className="space-y-4 px-6">
                  <div>
                    <p className="font-medium text-slate-900">Lip Wax</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">15 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$15</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Cheek Wax</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">15 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$15</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Chin Wax</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">15 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$15</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Brow/Tint Wax</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$25</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Nostril</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">20 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$10</p>
                    </div>
                  </div>
                </div>

                {/* Waxing Part 2 */}
                <div className="space-y-4 px-6">
                  <div>
                    <p className="font-medium text-slate-900">Full Face</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">60 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Back</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Chest</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Full Leg</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Half Leg</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                </div>

                {/* Waxing Part 3 */}
                <div className="space-y-4 px-6">
                  <div>
                    <p className="font-medium text-slate-900">Full Arm</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">45 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Half Arm</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">35 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$30</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Bikini</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">60 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$25</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Brazilian</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">60 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$40</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Underarms</p>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <p className="text-sm text-slate-600">30 min</p>
                      <p className="w-16 text-right font-semibold text-blue-600">$25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials section removed */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-4 text-blue-600">
            Come get your glow on!
          </h2>
          <p className="text-slate-600 mb-12">
            Start your skincare journey with us today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-2">Business</p>
              <p className="text-slate-600">695 S Colorado Blvd</p>
              <p className="text-slate-600">Denver, CO 80246</p>
              <p className="text-slate-600">9:00am to 5:00pm</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-2">Email</p>
              <p className="text-slate-600">glowwithchlo@gmail.com</p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center border-t-2 border-blue-600">
              <p className="font-semibold text-slate-900 mb-3">Socials</p>
              <p className="text-slate-600 mb-2">Instagram: _glow.with.chlo_</p>
              <p className="text-slate-600">TikTok: glow.with.chlo_</p>
            </div>
          </div>

          <div className="mt-8"></div>

          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:scale-105">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2026 Glow with Chlo. All rights reserved.</p>
          <p className="text-blue-400">Bringing out your natural glow</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}



