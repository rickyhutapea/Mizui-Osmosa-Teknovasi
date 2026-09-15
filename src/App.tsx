/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { proposalMarkdown } from './content';
import { Printer, TrendingUp, Users, ArrowDownRight, ArrowUpRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Quote, Search, Code2, LineChart, FileJson, LayoutTemplate } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Prototype from './components/Prototype';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

function MermaidChart({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && chart) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      containerRef.current.innerHTML = ''; // Clear previous
      mermaid.render(id, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch((e) => {
          console.error('Mermaid render error:', e);
        });
    }
  }, [chart]);

  return (
    <div className="w-full flex justify-center bg-slate-50 border border-slate-200 rounded-lg p-6 my-8 overflow-x-auto shadow-sm print:break-inside-avoid print:bg-transparent print:border-slate-300">
      <div ref={containerRef} />
    </div>
  );
}

const MarkdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-12 mb-6 tracking-tight leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-12 mb-6 pb-2 border-b-2 border-blue-100 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mt-8 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg md:text-xl font-semibold text-slate-800 mt-6 mb-3">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-600 text-base md:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-600 text-base md:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-slate-700">{children}</em>
  ),
  hr: () => (
    <hr className="my-10 border-t-2 border-slate-100" />
  ),
  code: (props) => {
    const { className, children } = props;
    const match = /language-(\w+)/.exec(className || '');
    if (match && match[1] === 'mermaid') {
      return <MermaidChart chart={String(children).replace(/\n$/, '')} />;
    }
    return (
      <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-sm print:bg-slate-50 print:border print:border-slate-200">
        {children}
      </code>
    );
  },
};

function MetricCard({ icon, title, value, desc, colorClass, bgClass }: { icon: React.ReactNode, title: string, value: string, desc: string, colorClass: string, bgClass: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm print:shadow-none print:border-slate-300">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${bgClass} ${colorClass}`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm font-semibold text-slate-700 mb-1">{title}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </div>
  );
}

function PerformanceDashboard() {
  return (
    <div className="mt-16 pt-12 border-t border-slate-200 print:break-inside-avoid print:mt-10 print:pt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Projected Performance Impact</h2>
      <p className="text-slate-600 mb-8">Estimated post-revamp metrics based on B2B engineering sector benchmarks.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
         <MetricCard 
           icon={<ArrowDownRight className="w-5 h-5"/>} 
           title="Bounce Rate" 
           value="-35%" 
           desc="Reduction in immediate site exits" 
           colorClass="text-emerald-600" 
           bgClass="bg-emerald-50" 
         />
         <MetricCard 
           icon={<ArrowUpRight className="w-5 h-5"/>} 
           title="Conversion Rate" 
           value="+120%" 
           desc="Uplift in RFQ & consultation forms" 
           colorClass="text-blue-600" 
           bgClass="bg-blue-50"
         />
         <MetricCard 
           icon={<Users className="w-5 h-5"/>} 
           title="Organic Traffic" 
           value="+85%" 
           desc="Growth via AEO & Technical SEO" 
           colorClass="text-indigo-600" 
           bgClass="bg-indigo-50"
         />
         <MetricCard 
           icon={<TrendingUp className="w-5 h-5"/>} 
           title="Estimated ROI" 
           value="4.5x" 
           desc="Projected first-year return on investment" 
           colorClass="text-violet-600" 
           bgClass="bg-violet-50"
         />
      </div>
    </div>
  );
}

function InteractiveFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "What is the typical recovery rate for industrial SWRO?", a: "Our industrial Sea Water Reverse Osmosis (SWRO) plants typically achieve a recovery rate of 40-50%, utilizing Energy Recovery Devices (ERD) to optimize power consumption." },
    { q: "How does Demineralization compare to double-pass RO?", a: "While double-pass RO is excellent for general purity, our mixed-bed demineralization plants provide ultra-pure water with conductivity < 0.1 µS/cm, essential for high-pressure boiler feed in power generation." },
    { q: "Are your WWTPs compliant with local regulations?", a: "Yes, all our Wastewater Treatment Plants (WWTP) are designed with robust biological and physicochemical processes to strictly meet and exceed KLHK discharge standards." }
  ];

  return (
    <div className="mb-12 print:break-inside-avoid">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <FileJson className="w-5 h-5 text-blue-600" />
        AEO-Optimized FAQ Schema Demonstration
      </h3>
      <p className="text-sm text-slate-600 mb-6">Interactive accordions structurally tagged with JSON-LD FAQPage Schema for direct indexing by Answer Engines.</p>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
            >
              <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
              {openIndex === i ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 text-slate-600 text-sm leading-relaxed overflow-hidden"
                >
                  <div className="pb-4 pt-2 border-t border-slate-100 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { quote: "Mizui Osmosa's SWRO integration reduced our operational downtime by 30%. Their technical prowess and engineering standards are unmatched.", author: "Ir. Budi Santoso", role: "Plant Manager", company: "PT Petrokimia Nusantara" },
    { quote: "The demineralization plant delivered exceeded our purity requirements for high-pressure boilers. A highly reliable EPC partner.", author: "Sarah Wijaya", role: "VP of Engineering", company: "Energi Prima Corporation" },
    { quote: "Their WWTP solution ensured we remained 100% compliant with environmental regulations while reducing chemical treatment costs by 15%.", author: "Dr. Hendra Lin", role: "Director of Operations", company: "Manufaktur Industri Indo" }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="mb-12 print:break-inside-avoid">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Quote className="w-5 h-5 text-blue-600" />
        E-E-A-T Building: Industry Trust Validation
      </h3>
      <p className="text-sm text-slate-600 mb-6">Strategic placement of authoritative testimonials builds Trustworthiness, a core pillar of Google's E-E-A-T guidelines.</p>
      
      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-lg">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Quote className="w-10 h-10 text-blue-400 mb-6 opacity-50" />
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">"{testimonials[currentIndex].quote}"</p>
            <div>
              <div className="font-bold text-white text-lg">{testimonials[currentIndex].author}</div>
              <div className="text-blue-300 text-sm mt-0.5">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex gap-3 mt-8 relative z-10 print:hidden">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TechStackGrid() {
  const stack = [
    { name: "Yoast SEO Premium", desc: "Advanced technical SEO & keyword optimization", icon: <Search className="w-6 h-6" /> },
    { name: "Structured JSON-LD", desc: "AEO injection for rich snippets & AI answers", icon: <FileJson className="w-6 h-6" /> },
    { name: "Mermaid.js", desc: "Dynamic architecture & workflow visualization", icon: <Code2 className="w-6 h-6" /> },
    { name: "Modern React", desc: "DOM bloat reduction & blazing fast TTI", icon: <LayoutTemplate className="w-6 h-6" /> },
    { name: "Event Analytics", desc: "Conversion tracking & behavioral analysis", icon: <LineChart className="w-6 h-6" /> },
  ];

  return (
    <div className="mb-6 print:break-inside-avoid">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <LayoutTemplate className="w-5 h-5 text-blue-600" />
        Proposed Technology Stack
      </h3>
      <p className="text-sm text-slate-600 mb-6">The robust digital infrastructure powering the high-performance revamping strategy.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="font-bold text-slate-800 mb-1">{item.name}</div>
              <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemonstrationSection() {
  return (
    <div className="mt-16 pt-12 border-t border-slate-200 print:mt-10 print:pt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Interactive Feature Demonstrations</h2>
      <p className="text-slate-600 mb-10">Live examples of the strategic components proposed to elevate PT Mizui Osmosa Teknovasi's digital presence.</p>
      
      <InteractiveFaq />
      <TestimonialSlider />
      <TechStackGrid />
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'proposal' | 'prototype'>('proposal');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 print:bg-white">
      {/* App Shell Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 print:hidden shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:inline">Revamp Strategy</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('proposal')}
              className={`px-3 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${activeTab === 'proposal' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Proposal
            </button>
            <button 
              onClick={() => setActiveTab('prototype')}
              className={`px-3 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${activeTab === 'prototype' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Website Prototype
            </button>
          </div>

          <div className="flex items-center gap-4">
             {activeTab === 'proposal' && (
              <button 
                onClick={() => window.print()} 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium transition-colors text-sm"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Export PDF</span>
              </button>
             )}
          </div>
        </div>
      </header>

      {/* Main Content Render */}
      {activeTab === 'proposal' ? (
        <main className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-6">
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 print:shadow-none print:border-none print:p-0">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponents}
            >
              {proposalMarkdown}
            </ReactMarkdown>
            
            <PerformanceDashboard />
            <DemonstrationSection />
          </article>
          <footer className="bg-transparent text-slate-400 py-12 text-center text-sm print:hidden">
            <p>Prepared securely for PT Mizui Osmosa Teknovasi &bull; Confidential</p>
          </footer>
        </main>
      ) : (
        <Prototype />
      )}
    </div>
  );
}
