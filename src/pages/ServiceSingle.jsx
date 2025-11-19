import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceSingle() {
  const [openFaq, setOpenFaq] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const services = [
    'AI Strategy & Consulting',
    'AI Integration & Deployment',
    'Custom AI Solutions',
    'Data-Driven Insights',
    'Intelligent Data Solutions'
  ];

  const steps = [
    { step: '01', title: 'Discovery & Strategy', icon: 'icon-how-work-step-1.svg' },
    { step: '02', title: 'Data & Infrastructure Assessment', icon: 'icon-how-work-step-2.svg' },
    { step: '03', title: 'Custom AI Development', icon: 'icon-how-work-step-3.svg' },
  ];

  const impacts = [
    { title: 'AI Strategy', icon: 'icon-approach-1.svg' },
    { title: 'Smart AI', icon: 'icon-approach-2.svg' },
    { title: 'AI Solutions', icon: 'icon-approach-3.svg' },
  ];

  const faqs = [
    { q: 'What services does your AI agency offer?', a: 'We offer complete AI integration, model deployment, automation workflows, strategy planning, and scalable ML systems.' },
    { q: 'Do I need a large amount of data to use AI?', a: 'No — modern models can be trained even with structured or synthetic datasets depending on your use case.' },
    { q: 'How long does it take to develop an AI solution?', a: 'Most production-ready AI integrations take 4–12 weeks depending on complexity.' },
    { q: 'Is my data secure with you?', a: 'Yes. We implement encryption, access control, and on-prem or VPC-isolated deployments.' },
    { q: 'Can you integrate AI into our existing systems?', a: 'Yes — we specialize in integrating AI into ERPs, CRMs, custom apps, and cloud infrastructure.' },
  ];

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      {/* Page Header */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white md:text-6xl">
            AI integration <span className="text-indigo-500">deployment</span>
          </h1>

          <nav className="flex justify-center space-x-2 mt-2 text-sm">
            <Link to="/" className="text-gray-300 hover:text-indigo-400">home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/services" className="text-gray-300 hover:text-indigo-400">services</Link>
            <span className="text-gray-500">/</span>
            <span className="text-indigo-400">AI integration deployment</span>
          </nav>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20 bg-black bg-cover relative" style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-8">

              {/* Services List */}
              <div className="rounded-xl bg-gray-900 border border-gray-800 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">What We Offer</h3>
                <ul className="space-y-2">
                  {services.map((s, i) => (
                    <li key={i}>
                      <Link
                        to="/service-single"
                        className={`block rounded p-2 transition ${
                          s === 'AI Integration & Deployment'
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA BOX */}
              <div className="rounded-xl p-6 bg-gradient-to-br from-indigo-700 to-purple-800 text-white shadow-xl">
                <img src="/images/sidebar-cta-logo.svg" className="h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">We're here to help!</h3>

                <p className="text-sm mb-6 text-gray-200">
                  Need assistance? We’re here to support, guide, and deploy high-performance AI solutions.
                </p>

                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-phone-gradiant.svg" className="h-5" />
                    <a href="tel:+00152885253" className="hover:underline">+(00) 152 885 253</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/images/icon-mail-gradiant.svg" className="h-5" />
                    <a href="mailto:support@aeravionix.com" className="hover:underline">support@aeravionix.com</a>
                  </li>
                </ul>
              </div>

            </aside>

            {/* MAIN CONTENT */}
            <main className="lg:col-span-8">

              {/* Hero Image */}
              <img
                src="/images/service-single-img.jpg"
                className="rounded-xl shadow-2xl mb-8 border border-gray-800"
              />

              {/* Intro */}
              <div className="text-gray-300 space-y-4 mb-12 leading-relaxed">
                <p>
                  Integrating AI technologies into your business infrastructure is essential to unlock efficiency,
                  automation, and intelligent decision-making.
                </p>
                <p>
                  We tailor machine learning models, NLP systems, and automation workflows to fit your organization.
                  Deployment can be cloud-based, hybrid, or fully on-prem depending on your compliance and scaling needs.
                </p>
              </div>

              {/* Steps */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  AI Integration & <span className="text-indigo-500">solution</span>
                </h2>

                <div className="space-y-8">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <img src={`/images/${step.icon}`} className="h-14 w-14" />

                      <div>
                        <p className="text-indigo-400 text-sm font-bold">step {step.step}</p>
                        <h3 className="text-xl text-white font-semibold">{step.title}</h3>
                        <p className="text-gray-400">
                          We dive deep into your workflows, evaluate data maturity, and identify high-value AI opportunities.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Seamless implementation for maximum <span className="text-indigo-500">impact</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {impacts.map((item, i) => (
                    <div key={i} className="flex gap-4 bg-gray-900 border border-gray-800 p-4 rounded-xl shadow">
                      <img src={`/images/${item.icon}`} className="h-12 w-12" />

                      <div>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-gray-400 text-sm">
                          AI-driven methodologies designed to deliver measurable business outcomes.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Innovation */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Powering innovation through <span className="text-indigo-500">AI</span>
                </h2>

                <p className="text-gray-300 mb-6">
                  We harness modern AI capabilities to improve efficiency, boost productivity, and unlock new strategic value.
                </p>

                <ul className="grid grid-cols-2 gap-3 text-gray-300">
                  {[
                    'AI-driven automation',
                    'Seamless system integration',
                    'Predictive intelligence',
                    'Workflow optimization',
                    'Cloud + on-prem deployments',
                    'Enterprise scalability'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Building Smarter */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Building smarter futures <span className="text-indigo-500">with AI</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {[
                      { no: '01', title: 'Data-Driven Insights' },
                      { no: '02', title: 'Evidence-Based Decisions' },
                      { no: '03', title: 'Intelligence-Led Automation' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-900 text-indigo-300 text-xl font-bold">
                          {item.no}
                        </div>

                        <div>
                          <h3 className="text-white font-semibold">{item.title}</h3>
                          <p className="text-gray-400">
                            Empowering businesses to pivot faster and scale smarter using AI-powered insights.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <img
                    src="/images/building-smarter-image.jpg"
                    className="rounded-xl shadow-xl border border-gray-800"
                  />
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Your complete FAQ guide to <span className="text-indigo-500">AI solutions</span>
                </h2>

                <p className="text-gray-400 mb-8 max-w-3xl">
                  Find answers to the most common questions about AI deployment, data readiness, integration complexity,
                  and operational reliability.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex justify-between items-center w-full p-5 text-left text-white font-medium"
                      >
                        {i + 1}. {faq.q}

                        <span className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                          ⌄
                        </span>
                      </button>

                      {openFaq === i && (
                        <div className="border-t border-gray-700 p-5 text-gray-300">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </main>

          </div>
        </div>
      </section>
    </>
  );
}
