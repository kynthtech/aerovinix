import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FAQs() {
  const [activeSection, setActiveSection] = useState(0);
  const [openFaqs, setOpenFaqs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const sections = [
    {
      id: 'faq_1',
      title: 'AI solutions',
      faqs: [
        { q: 'What types of AI solutions do you offer?', a: 'Project timelines vary depending on complexity...' },
        { q: 'How can AI solutions benefit my business?', a: 'AI enhances automation, insights, and performance...' },
        { q: 'Are your AI solutions customizable?', a: 'Yes, every system is fully customizable to your needs.' },
        { q: 'How long does implementation take?', a: 'Most projects finish between 4–12 weeks.' },
        { q: 'Do I need technical expertise?', a: 'No, our team handles everything end-to-end.' },
      ],
    },
    {
      id: 'faq_2',
      title: 'Integration & deployment',
      faqs: [
        { q: 'How do you integrate AI into existing systems?', a: 'We analyze your architecture and build a gap-free integration plan.' },
        { q: 'Typical deployment timeline?', a: '4–12 weeks depending on complexity.' },
        { q: 'Is there downtime during deployment?', a: 'Usually zero downtime—we do staged rollout.' },
        { q: 'Can your solutions scale?', a: 'Yes, all solutions are horizontally scalable.' },
        { q: 'Do you provide support?', a: 'Yes, continuous post-deployment support is available.' },
      ],
    },
    {
      id: 'faq_3',
      title: 'Technical support',
      faqs: [
        { q: 'What support do you offer?', a: '24/7 tech assistance depending on your plan.' },
        { q: 'Response time?', a: 'Most issues get a response in under 2 hours.' },
        { q: 'Do you offer remote support?', a: 'Yes, global remote support is available.' },
        { q: 'Problems after updates?', a: 'We patch instantly and roll back if needed.' },
        { q: 'Do we get a dedicated support manager?', a: 'Yes, for advanced plans.' },
      ],
    },
    {
      id: 'faq_4',
      title: 'Pricing & plans',
      faqs: [
        { q: 'Do you have multiple pricing plans?', a: 'Yes, flexible plans based on usage.' },
        { q: 'Is deployment included?', a: 'Yes, depending on plan selection.' },
        { q: 'Hidden charges?', a: 'No hidden fees—full transparency.' },
        { q: 'Does pricing scale?', a: 'Yes, pay-as-you-grow model.' },
        { q: 'Do you offer refunds?', a: 'Refunds available depending on contract.' },
      ],
    },
  ];

  const toggleFaq = (sectionIndex, faqIndex) => {
    setOpenFaqs(prev => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === faqIndex ? null : faqIndex,
    }));
  };

  return (
    <>
      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" alt="loader" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      {/* HEADER */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl">
            Frequently asked <span className="text-indigo-500">questions</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">FAQs</span>
          </nav>
        </div>
      </section>

      {/* MAIN */}
      <section
        className="py-20 bg-black bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="rounded-xl bg-gray-900 p-6 shadow-lg border border-gray-800">
                <h3 className="mb-4 text-xl font-bold text-white">FAQ Categories</h3>
                <ul className="space-y-2">
                  {sections.map((section, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setActiveSection(i)}
                        className={`w-full rounded p-3 text-left transition ${
                          activeSection === i
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white shadow-lg">
                <img src="/images/sidebar-cta-logo.svg" alt="" className="mb-4 h-12" />
                <h3 className="mb-2 text-xl font-bold">We're here to help!</h3>
                <p className="mb-6 text-sm text-gray-100">
                  Need assistance? Reach out anytime.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-phone-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="tel:+00152885253" className="hover:underline">+(00) 152 885 253</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-mail-gradiant.svg" alt="" className="h-5 w-5" />
                    <a href="mailto:support@aeravionix.com" className="hover:underline">
                      support@aeravionix.com
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* FAQs */}
            <main className="lg:col-span-3">
              {sections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  className={`mb-12 rounded-xl bg-gray-900 p-6 border border-gray-800 transition ${
                    activeSection === sectionIndex ? 'ring-2 ring-indigo-500/40' : ''
                  }`}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => {
                      const isOpen = openFaqs[sectionIndex] === faqIndex;
                      return (
                        <div key={faqIndex} className="rounded-lg bg-gray-800 shadow-md border border-gray-700">
                          <button
                            onClick={() => toggleFaq(sectionIndex, faqIndex)}
                            className="flex w-full items-center justify-between p-5 text-left font-medium text-white"
                          >
                            <span>{faqIndex + 1}. {faq.q}</span>
                            <span className={`transform transition ${isOpen ? 'rotate-180' : ''}`}>
                              <i className="fa-solid fa-chevron-down text-indigo-400"></i>
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-gray-700 p-5 text-gray-300">
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
