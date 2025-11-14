import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (In real app, this would send to backend)');
    console.log('Contact Form:', formData);
  };
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setIsLoading(false), 1000);
}, []);

  return (
    <>
      {isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
          <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
        </div>
      </div>  
      )}



      {/* Page Header */}
      <section className="page-header bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Contact <span className="text-indigo-600">us</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600">contact us</span>
          </nav>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="page-contact-us py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-600">get in touch</h3>
            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-gray-900">
              Let's Collaborate and Create Powerful <span className="text-indigo-600">AI Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl bg-gray-50 p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Have any questions?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write Message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-3 focus:border-indigo-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                title="Aeravionix Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'icon-phone.svg', title: 'contact us', items: ['(+00) 123-254-963', '(+12) 761 852 339'] },
              { icon: 'icon-mail.svg', title: 'email us', items: ['info@aeravionix.com', 'support@aeravionix.com'] },
              { icon: 'icon-clock.svg', title: 'Working hours', items: ['Mon - Fri : 08AM - 10PM', 'sat - sun : close'] },
              { icon: 'icon-location.svg', title: 'location', items: ['2715 Ash San Jose, USA', '2715 Ash San Jose, USA'] },
            ].map((info, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-white p-6 shadow-md">
                <img src={`/images/${info.icon}`} alt="" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-800">{info.title}</h3>
                  {info.items.map((item, j) => (
                    <p key={j} className="text-sm text-gray-600">
                      {item.includes('@') ? (
                        <a href={`mailto:${item}`} className="hover:text-indigo-600">{item}</a>
                      ) : item.includes('(') ? (
                        <a href={`tel:${item.replace(/[^0-9+]/g, '')}`} className="hover:text-indigo-600">{item}</a>
                      ) : (
                        item
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </>
  );
}