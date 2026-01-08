"use client"

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, CheckCircle2, Globe, BarChart3, Lock, Calendar, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AscensusModern = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* Load Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-display font-semibold tracking-tight uppercase text-slate-900">
            Ascensus<span className="text-amber-600">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-12 font-body text-sm font-medium tracking-wide text-slate-600">
            <button onClick={() => scrollToSection('who-for')} className="hover:text-amber-700 transition-colors">Who Is It For?</button>
            <button onClick={() => scrollToSection('inside')} className="hover:text-amber-700 transition-colors">Inside Ascensus</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-amber-700 transition-colors">Process</button>
            <button onClick={() => scrollToSection('founder')} className="hover:text-amber-700 transition-colors">Dr. Nick</button>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-sm hover:bg-amber-700 transition-all flex items-center gap-2 group">
              Apply Now <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform"/>
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white h-screen p-8 border-t border-slate-100 md:hidden flex flex-col space-y-6 z-50">
            <button onClick={() => scrollToSection('who-for')} className="text-3xl font-display text-slate-900">Who Is It For?</button>
            <button onClick={() => scrollToSection('inside')} className="text-3xl font-display text-slate-900">Inside Ascensus</button>
            <button onClick={() => scrollToSection('process')} className="text-3xl font-display text-slate-900">Process</button>
            <button onClick={() => scrollToSection('founder')} className="text-3xl font-display text-slate-900">Dr. Nick</button>
            <button className="bg-slate-900 text-white text-lg w-full py-4 mt-8 rounded-sm">Apply for Membership</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-20 min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-20 bg-white">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-display text-5xl md:text-7xl leading-[1] text-slate-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stop chasing clients. <br />
              <span className="italic font-light text-amber-700">Start getting them constantly.</span>
            </motion.h1>
            <motion.p 
              className="font-body text-lg text-slate-600 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A high-touch mastermind for service-based business owners who want more clients consistently, practical strategies to grow, and a results-driven community – without burnout or posting 24/7.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-slate-900 text-white px-8 py-4 font-body font-medium rounded-sm hover:bg-slate-800 transition-all flex justify-between items-center sm:w-auto w-full shadow-lg shadow-slate-900/10">
                <span>Claim Your Seat</span>
                <ArrowUpRight className="ml-4 text-amber-400" />
              </button>
              <button onClick={() => scrollToSection('who-for')} className="border border-slate-200 px-8 py-4 font-body font-medium rounded-sm hover:bg-slate-50 transition-all text-center text-slate-600">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="w-full md:w-1/2 h-[50vh] md:h-auto relative bg-slate-100 overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Mastermind Session" 
            className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
          <motion.div 
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 max-w-xs border-l-4 border-amber-600 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="font-body text-xs font-bold uppercase tracking-wider mb-1 text-slate-500">Next Session</p>
            <p className="font-display text-2xl italic text-slate-900">Wednesdays, 6:30pm UK</p>
          </motion.div>
        </motion.div>
      </header>

      {/* Who is this for? */}
      <section id="who-for" className="py-24 px-6 md:px-16 border-b border-slate-100 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-4">Target Audience</h2>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-6 text-slate-900">
                Who is Ascensus <br />
                <span className="italic text-slate-500">Society For?</span>
              </h3>
              <div className="p-8 bg-white border border-slate-100 shadow-sm inline-block relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-amber-600"></div>
                <p className="font-body text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">Exclusive Access</p>
                <p className="font-body text-slate-800 italic text-lg leading-relaxed">
                  "Not for beginners, side hustlers, e-commerce or product sellers. Only serious service-based business owners thrive here."
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:col-span-7 pt-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-body text-slate-700 text-xl leading-relaxed mb-10">
                This is for service-based business owners who are ready to finally have a steady flow of clients.
              </p>
              
              <div className="space-y-8">
                 {[
                    "Want actionable strategies they can implement immediately to get more clients",
                    "Value accountability, peer support and measurable results",
                    "Want to stop worrying about inconsistent income"
                 ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                       <CheckCircle2 className="w-6 h-6 text-amber-600 mr-5 group-hover:text-slate-900 transition-colors mt-1 shrink-0" />
                       <span className="font-body text-xl text-slate-800 font-light">{item}</span>
                    </motion.div>
                 ))}
              </div>
              
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                 <button className="text-slate-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors uppercase tracking-widest text-sm">
                   Claim Your Seat - Application Only
                 </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inside Ascensus / Benefits Grid */}
      <section id="inside" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-slate-900">Inside Ascensus Society</h2>
            <p className="font-body text-slate-500 max-w-xl text-lg">Predictable clients. Practical support. Premium environment.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
            {/* Card 1 */}
            <motion.div 
              className="p-12 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <Calendar className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3 text-slate-900">Weekly Mastermind Sessions</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed mb-4">
                Every Wednesday, 6:30pm UK time. Solve real business challenges and implement immediately.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                 <li>• Guided strategy discussions</li>
                 <li>• Session recordings available</li>
              </ul>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="p-12 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <BarChart3 className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3 text-slate-900">Hot Seats & Proven Systems</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed">
                Personalized guidance on offers, pricing, and client acquisition. Attract clients without posting constantly or burning out.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="p-12 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3 text-slate-900">Monthly 1:1 Giveaway</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed">
                One member per month gets a private strategy session with Dr. Nick to accelerate business growth.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              className="p-12 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Users className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3 text-slate-900">Results-Driven Community</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed">
                Peer support from serious service-based business owners. No fluff, just high-level strategy.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              className="p-12 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Globe className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3 text-slate-900">Luxury Networking</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed">
                Curated, high-end gatherings for meaningful business relationships. Forge partnerships without awkward pitching.
              </p>
            </motion.div>

             {/* Card 6 - CTA */}
             <motion.div 
               className="p-12 border-r border-b border-slate-100 bg-slate-900 flex flex-col justify-center items-center text-center group relative overflow-hidden"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.5 }}
             >
              <div className="absolute inset-0 bg-amber-600/10 group-hover:bg-amber-600/20 transition-colors"></div>
              <h3 className="font-display text-3xl mb-4 text-white relative z-10">Why This Works?</h3>
              <p className="font-body text-slate-300 text-sm leading-relaxed mb-8 relative z-10">
                Exclusive Strategies + High-Touch Environment = Results.
              </p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-sm font-body text-sm font-bold hover:bg-amber-50 transition-colors relative z-10">
                Join The Mastermind
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section id="process" className="py-24 px-6 md:px-16 bg-slate-50 border-t border-slate-200">
         <div className="max-w-screen-2xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-end mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
               <div>
                  <h2 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-4">How to Join</h2>
                  <h3 className="font-display text-4xl leading-tight text-slate-900">Membership Process</h3>
               </div>
               <p className="font-body text-slate-500 mt-4 md:mt-0 font-medium">One membership. One standard.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { num: "01", title: "Submit Application", desc: "Start the process to claim your seat." },
                  { num: "02", title: "Discovery Call", desc: "15–20 minute call to confirm fit." },
                  { num: "03", title: "Confirmation", desc: "Membership verified and approved." },
                  { num: "04", title: "Immediate Access", desc: "Unlock sessions, recordings & events." }
               ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="relative pt-8 border-t border-slate-300 group hover:border-amber-600 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                     <span className="absolute -top-3 left-0 bg-slate-50 pr-4 font-display text-lg text-slate-400 group-hover:text-amber-600 transition-colors">{step.num}</span>
                     <h4 className="font-display text-2xl mb-2 text-slate-900">{step.title}</h4>
                     <p className="font-body text-sm text-slate-500">{step.desc}</p>
                  </motion.div>
               ))}
            </div>
            
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
               <button className="bg-slate-900 text-white px-10 py-4 font-body font-medium rounded-sm hover:bg-amber-700 transition-colors shadow-xl">
                  Apply Now - Limited Seats
               </button>
            </motion.div>
         </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 px-6 md:px-16 bg-white border-t border-slate-100">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-5/12 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
             <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-200 z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Nick" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-7/12 md:pl-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-6">About Your Host</h2>
            <h3 className="font-display text-5xl md:text-6xl text-slate-900 mb-6">Dr. Nick.</h3>
            
            <p className="font-body text-lg font-medium text-slate-800 mb-6 border-l-2 border-amber-500 pl-6">
               Multi-award-winning marketing and business growth consultant with 25+ years’ experience.
            </p>

            <div className="space-y-4 mb-10">
               <p className="font-body text-slate-600 leading-relaxed">
                  Founded and scaled service companies across education, construction, cleaning, consulting and marketing. Holds an MBA, a Doctorate and multiple industry awards.
               </p>
               <p className="font-body text-slate-600 leading-relaxed">
                  Expert in positioning, client acquisition, pricing strategy and scalable delivery. Helping business owners worldwide grow fast with practical systems.
               </p>
            </div>

            <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors uppercase tracking-widest text-sm">
              Claim Your Seat
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-24 px-6 md:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0 max-w-sm">
            <div className="text-3xl font-display font-semibold tracking-tight uppercase mb-8 text-white">
              Ascensus<span className="text-amber-500">.</span>
            </div>
            <p className="font-body text-slate-400 mb-8 leading-relaxed">
               Membership is application-only and capped to ensure high-touch support for the elite service business owner.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 font-body text-sm font-bold w-full md:w-auto rounded-sm hover:bg-white hover:text-slate-900 transition-all">
               Apply Before Spots Are Gone
            </button>
          </div>

          <div className="flex gap-16 font-body text-sm">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-white uppercase tracking-widest text-xs mb-2">Menu</span>
              <button onClick={() => scrollToSection('who-for')} className="text-left hover:text-amber-500 transition-colors">Who For?</button>
              <button onClick={() => scrollToSection('inside')} className="text-left hover:text-amber-500 transition-colors">Inside Ascensus</button>
              <button onClick={() => scrollToSection('process')} className="text-left hover:text-amber-500 transition-colors">Process</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-white uppercase tracking-widest text-xs mb-2">Legal</span>
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-white uppercase tracking-widest text-xs mb-2">Social</span>
              <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-body uppercase tracking-wider">
           <p>© {new Date().getFullYear()} Ascensus Society.</p>
           <p>Limited Seats Available.</p>
        </div>
      </footer>
    </div>
  );
};

export default AscensusModern;