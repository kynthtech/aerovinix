import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FAQs() {
  const [activeSection, setActiveSection] = useState(0); // Default to first section
  const [openFaqs, setOpenFaqs] = useState({}); // Track open FAQs per section

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setIsLoading(false), 1000);
}, []);
  const sections = [
    {
      id: 'faq_1',
      title: 'AI solutions',
      faqs: [
        { q: 'What types of AI solutions do you offer?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How can AI solutions benefit my business?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Are your AI solutions customizable to specific business needs?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does it take to implement an AI solution?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Is technical expertise required to manage your AI solutions?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_2',
      title: 'Integration & deployment',
      faqs: [
        { q: 'What is the process for integrating AI solutions into existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does the deployment of an AI solution typically take?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Will there be any downtime during integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Can your AI solutions scale as our business grows?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you provide support after integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_3',
      title: 'Technical support',
      faqs: [
        { q: 'What kind of technical support do you offer for AI solutions?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How quickly can I expect a response to a technical issue?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you offer remote assistance for technical problems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'What happens if an AI system update causes a technical problem?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Is there a dedicated account manager or support specialist assigned?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
    {
      id: 'faq_4',
      title: 'Pricing & plans',
      faqs: [
        { q: 'What is the process for integrating AI solutions into existing systems?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'How long does the deployment of an AI solution typically take?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Will there be any downtime during integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Can your AI solutions scale as our business grows?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
        { q: 'Do you provide support after integration and deployment?', a: 'Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.' },
      ],
    },
  ];

  const toggleFaq = (sectionIndex, faqIndex) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === faqIndex ? null : faqIndex,
    }));
  };

  return (
    <>
      {/* Preloader */}
    {isLoading && (  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
          <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
        </div>
      </div>)}

     

      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Frequently asked <span className="text-indigo-600">question</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">FAQs</span>
          </nav>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="page-faqs py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                {/* FAQ Categories */}
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">FAQ Categories</h3>
                  <ul className="space-y-2">
                    {sections.map((section, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setActiveSection(i)}
                          className={`w-full rounded p-3 text-left transition ${
                            activeSection === i
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white">
                  <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                  <h3 className="mb-2 text-xl font-bold">We're here to help!</h3>
                  <p className="mb-6 text-sm">
                    Need assistance? We're here to help with support, guidance, and resources. Reach out to us anytime.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <img src="/images/icon-phone-gradiant.svg" alt="" className="h-5 w-5" />
                      <a href="tel:+00152885253" className="hover:underline">+(00) - 152 885 253</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/images/icon-mail-gradiant.svg" alt="" className="h-5 w-5" />
                      <a href="mailto:support@aeravionix.com" className="hover:underline">support@aeravionix.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main FAQs */}
            <main className="lg:col-span-3">
              {sections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  className={`mb-12 rounded-xl bg-gray-50 p-6 transition-all ${
                    activeSection === sectionIndex ? 'ring-2 ring-indigo-200' : ''
                  }`}
                >
                  <div className="section-title mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {section.title.split(' & ')[0]} <span className="text-indigo-600">{section.title.split(' & ')[1]}</span>
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => {
                      const isOpen = openFaqs[sectionIndex] === faqIndex;
                      return (
                        <div key={faqIndex} className="rounded-lg bg-white shadow-sm">
                          <button
                            onClick={() => toggleFaq(sectionIndex, faqIndex)}
                            className="flex w-full items-center justify-between p-5 text-left font-medium text-gray-800 transition hover:bg-gray-50"
                          >
                            <span>{faqIndex + 1}. {faq.q}</span>
                            <span className={`transform transition ${isOpen ? 'rotate-180' : ''}`}>
                              <i className="fa-solid fa-chevron-down text-indigo-600"></i>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="border-t border-gray-200 p-5 text-gray-600">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>

    
    </>
  );
}