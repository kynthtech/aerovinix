import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../css/Home.css';
import { LineChart, Line, AreaChart, Area, RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

export default function Home() {
  console.log('Home component rendering');
  const [isReady, setIsReady] = useState(false);
  const counterRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading && !isReady) {
      console.log('Component is ready to render content');
      setIsReady(true);
    }
  }, [isLoading, isReady]);

  // Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseInt(target.getAttribute('data-count'), 10);
            const suffix = target.getAttribute('data-suffix') || '';
            let count = 0;
            const increment = Math.ceil(countTo / 75);
            const timer = setInterval(() => {
              count += increment;
              if (count >= countTo) {
                target.textContent = countTo + suffix;
                clearInterval(timer);
              } else {
                target.textContent = count + suffix;
              }
            }, 20);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    { id: 1, title: 'Success Stories AI In Action', category: 'Data Analytics' },
    { id: 2, title: 'AI Innovations Unleashed', category: 'Machine Learning' },
    { id: 3, title: 'Transforming Industries AI', category: 'Automation' },
    { id: 4, title: 'AI at the Forefront of Change', category: 'Deep Learning' },
    { id: 5, title: 'Revolutionizing Business AI', category: 'NLP' },
    { id: 6, title: 'Smart Solutions Delivered', category: 'Computer Vision' },
    { id: 7, title: 'AI-Powered Innovation', category: 'Predictive Analytics' },
    { id: 8, title: 'Next-Gen Intelligence', category: 'Neural Networks' },
  ];

  const blogPosts = [
    {
      date: 'May 28, 2025',
      title: 'Ethical AI Balancing Innovation and Responsibility',
      excerpt: 'As AI continues to evolve, ensuring ethical use is more important than ever. This article explores how businesses can innovate responsibly.',
      category: 'AI Ethics',
    },
    {
      date: 'April 22, 2025',
      title: "Machine Learning Demystified: A Beginner's Guide",
      excerpt: 'Understand the fundamentals of machine learning and how it\'s transforming industries worldwide with practical examples.',
      category: 'Education',
    },
    {
      date: 'April 17, 2025',
      title: 'How AI is Transforming Modern Businesses',
      excerpt: 'Discover real-world applications of AI in business operations, from automation to predictive analytics and beyond.',
      category: 'Business',
    },
  ];

  const images = Array.from({ length: 6 }, (_, i) => `/images/gallery-${i + 1}.jpg`);

  {/* Components */ }
  function MetricCard({ label, value, suffix, icon, color, chart }) {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animateCount();
          }
        },
        { threshold: 0.5 }
      );

      if (cardRef.current) observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, []);

    const animateCount = () => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    };

    const colorMap = {
      indigo: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-400',
      purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400',
      blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400',
      cyan: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-400',
    };

    return (
      <div
        ref={cardRef}
        className={`relative bg-gradient-to-br ${colorMap[color]} border backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 group`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">{label}</p>
            <p className={`text-4xl font-bold ${colorMap[color].split(' ')[3]}`}>
              {count}{suffix}
            </p>
          </div>
          <img
            src={icon}
            alt={label}
            className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter brightness-110"
          />
        </div>

        {chart === 'radial' && <MiniRadialChart value={count} color={color} />}
        {!chart && <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]} transition-all duration-1000`}
            style={{ width: `${(count / value) * 100}%` }}
          ></div>
        </div>}
      </div>
    );
  }

  function MiniRadialChart({ value, color }) {
    const colorValues = {
      indigo: '#6366f1',
      purple: '#a855f7',
      blue: '#3b82f6',
      cyan: '#06b6d4'
    };

    const data = [{ value: value, fill: colorValues[color] }];

    return (
      <div className="h-12 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={10}
              fill={colorValues[color]}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  function CapabilityCard({ title, description, icon, metrics, chartType }) {
    const chartData = generateChartData(chartType);

    return (
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="h-24 mb-6 bg-gray-950/50 rounded-lg p-2 border border-gray-800/50">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'signal' && (
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={2000}
                />
              </LineChart>
            )}
            {chartType === 'performance' && (
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  fill="url(#performanceGradient)"
                  strokeWidth={2}
                  animationDuration={2000}
                />
              </AreaChart>
            )}
            {chartType === 'stability' && (
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={2000}
                />
              </LineChart>
            )}
            {chartType === 'timeline' && (
              <LineChart data={chartData}>
                <Line
                  type="stepAfter"
                  dataKey="value"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={2000}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-3 bg-gray-950/50 rounded-lg border border-gray-800/50">
              <p className="text-xs text-gray-500 uppercase mb-1">{metric.label}</p>
              <p className="text-sm font-bold text-indigo-400">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function generateChartData(type) {
    const points = 20;
    switch (type) {
      case 'signal':
        return Array.from({ length: points }, (_, i) => ({
          value: 50 + Math.sin(i * 0.5) * 30 + Math.random() * 10
        }));
      case 'performance':
        return Array.from({ length: points }, (_, i) => ({
          value: 20 + (i * 3) + Math.random() * 5
        }));
      case 'stability':
        return Array.from({ length: points }, (_, i) => ({
          value: 45 + Math.sin(i * 0.8) * 5
        }));
      case 'timeline':
        return Array.from({ length: points }, (_, i) => ({
          value: i < 5 ? 20 : i < 10 ? 50 : i < 15 ? 70 : 90
        }));
      default:
        return [];
    }
  }
  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
            <img src="/images/loader.svg" alt="Aeravionix" className="absolute inset-0 m-auto h-8 w-8" />
          </div>
        </div>
      )}

      <section className="hero relative overflow-hidden bg-black py-20">
        {/* GIF Background - Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <video
            src="/gif/space_gif2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* GIF Background - Mobile */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/images/space/hero-mobile.gif"
            alt="Space Background Mobile"
            className="w-full h-full object-cover opacity-40"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-14 mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl fade-in-up">
            Transform your business with the <span className="holographic">power of AI</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
            In a world where cyberattacks are becoming more sophisticated, your business deserves the best protection. Our expert team leverages cutting-edge technology.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="btn-glossy rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-indigo-400 px-8 py-3 font-semibold text-indigo-400 transition hover:bg-indigo-900/30 neon-glow"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
      <div className="page-bg">


        {/* About Us - Mission Control Style */}
        <section
          className="about-us relative py-20 bg-gray-950 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/images/about_use_bg.jpg')" }}
        >
          {/* Overlay with grid pattern */}
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
          </div>

          <div className="relative container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-sm font-semibold uppercase text-indigo-400 tracking-wider">Systems Online</span>
              </div>

              <h2 className="mx-auto mb-6 max-w-4xl text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
                Professional-grade flight systems.<br />
                <span className="text-indigo-400">No enterprise bloat.</span>
              </h2>

              <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
                We build high-precision avionics and autonomous flight systems for small rockets and advanced UAVs.
                Every module is designed to handle vibration, heat, and the demanding conditions of real-world launches.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <MetricCard
                label="Flight Computer Variants"
                value={12}
                suffix="+"
                icon="/icons/c_panel_icon.png"
                color="indigo"
              />

              <MetricCard
                label="Test Flights Completed"
                value={27}
                suffix="+"
                icon="/icons/rocket_icon.png"
                color="purple"
              />

              <MetricCard
                label="Sensor Fusion Accuracy"
                value={94}
                suffix="%"
                icon="/icons/sensor_icon.png"
                color="blue"
                chart="radial"
              />

              <MetricCard
                label="Development Speed"
                value={5}
                suffix="x"
                icon="/icons/speed_icon.png"
                color="cyan"
              />
            </div>

            {/* Capabilities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CapabilityCard
                title="Real-Time Sensor Fusion"
                description="IMU/GNSS integration with sub-degree accuracy. Live telemetry at 100Hz+"
                icon="/icons/wave_icon.png"
                metrics={[
                  { label: 'Update Rate', value: '100 Hz' },
                  { label: 'Latency', value: '<10ms' },
                  { label: 'Accuracy', value: '±0.5°' }
                ]}
                chartType="signal"
              />

              <CapabilityCard
                title="Flight-Ready Avionics"
                description="Ruggedized hardware tested in real launch conditions. Vibration, thermal, and EMI validated."
                icon="/icons/chip_icon.png"
                metrics={[
                  { label: 'Operating Temp', value: '-40° to 85°C' },
                  { label: 'Vibration', value: '20G tested' },
                  { label: 'Recovery Rate', value: '100%' }
                ]}
                chartType="performance"
              />

              <CapabilityCard
                title="Autonomous Guidance"
                description="Trajectory optimization, stability control, and real-time flight path correction."
                icon="/icons/panel_icon.png"
                metrics={[
                  { label: 'Control Loop', value: '500 Hz' },
                  { label: 'Stability', value: '±2° max' },
                  { label: 'Recovery', value: '<50ms' }
                ]}
                chartType="stability"
              />

              <CapabilityCard
                title="Rapid Integration"
                description="Modular architecture. Pre-built drivers. Test suite included. Go from bench to flight in weeks, not months."
                icon="/icons/grid_icon.png"
                metrics={[
                  { label: 'Setup Time', value: '<1 day' },
                  { label: 'Test Coverage', value: '94%' },
                  { label: 'Support', value: 'Direct' }
                ]}
                chartType="timeline"
              />
            </div>
          </div>
        </section>

{/* Our Approach - Aerovionix */}
<section className="our-approach py-20 relative">
  {/* Optional dark overlay for this section */}
  <div className="absolute inset-0 bg-black/40 -z-10"></div>
  
  <div className="container relative z-10 mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <h3 className="mb-3 text-sm font-semibold uppercase text-indigo-400 tracking-wider">Our Approach</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Mission-Ready Avionics for <span className="text-indigo-400">Real Flight Conditions</span>
      </h2>
      <p className="mx-auto max-w-4xl text-lg text-gray-300 leading-relaxed">
        Aerovionix designs and builds mission-ready avionics for small rockets, UAVs, and advanced aerospace systems. We focus on reliable flight computers, sensor-fusion pipelines, guidance algorithms, and telemetry systems engineered to perform under extreme launch and flight conditions.
      </p>
    </div>

    {/* Mission / Vision / Values - 4 Cards in 2x2 Grid */}
    <div className="max-w-6xl mx-auto mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { 
            title: 'Built for Extremes', 
            text: 'Our hardware and software are tested against vibration, heat, high-G loads, signal noise, and rapid control-loop demands. Every module is validated to deliver accurate navigation and stable flight in the harshest scenarios.',
            gradient: 'from-orange-500 to-red-600',
            iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
          },
          { 
            title: 'Proven by Testing', 
            text: 'We combine embedded engineering, control theory, simulation, and real-world flight testing to validate every system. Our approach ensures reliability from concept to launch.',
            gradient: 'from-blue-500 to-cyan-600',
            iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          },
          { 
            title: 'Faster Development', 
            text: 'Shorten aerospace development cycles with plug-and-play avionics. Our systems give teams the tools to build, launch, and iterate faster — reducing integration time and accelerating mission success.',
            gradient: 'from-purple-500 to-pink-600',
            iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
          },
          { 
            title: 'Open & Adaptable', 
            text: 'Built on open standards and modular architecture. Integrate with existing systems, customize for your mission, and maintain full control over your technology stack.',
            gradient: 'from-green-500 to-emerald-600',
            iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
          }
        ].map((item, i) => (
          <div key={i} className="group flex gap-5 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
            <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${item.gradient} p-3 flex items-center justify-center`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Key Technologies Section */}
    <div className="pt-16 border-t border-gray-800">
      <h3 className="text-center text-2xl font-bold text-white mb-12">
        Core <span className="text-indigo-400">Technologies</span>
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: '🖥️', label: 'Flight Computers', desc: 'Real-time control systems' },
          { icon: '📡', label: 'Sensor Fusion', desc: 'Multi-sensor integration' },
          { icon: '🎯', label: 'Guidance Algorithms', desc: 'Autonomous navigation' },
          { icon: '📊', label: 'Telemetry Systems', desc: 'Live data streaming' }
        ].map((tech, i) => (
          <div key={i} className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-indigo-600/50 transition-all duration-300 group">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <h4 className="text-white font-semibold mb-1">{tech.label}</h4>
            <p className="text-sm text-gray-500">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-16 text-center">
      <Link 
        to="/technology" 
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/50"
      >
        Explore Our Technology
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</section>
 {/* Services - Aerovionix */}
<section className="our-services py-20 relative">
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/30 -z-10"></div>
  
  <div className="container relative z-10 mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <h3 className="mb-3 text-sm font-semibold uppercase text-indigo-400 tracking-wider">
        What We Offer
      </h3>
      <h2 className="mx-auto mb-6 max-w-4xl text-4xl md:text-5xl font-bold text-white leading-tight">
        Flight-Ready Avionics & <span className="text-indigo-400">Aerospace Systems</span>
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-300">
        From flight computers to telemetry pipelines, we deliver hardware and software designed for mission-critical aerospace applications.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
      {[
        {
          title: 'Flight Computer Systems',
          icon: '🖥️',
          description: 'High-performance embedded systems with real-time processing, redundant sensors, and failsafe mechanisms for reliable autonomous flight.',
          features: ['Real-time OS', 'Sensor fusion', 'Redundant architecture'],
          color: 'from-blue-600 to-cyan-600'
        },
        {
          title: 'Telemetry & Communication',
          icon: '📡',
          description: 'Long-range RF telemetry, GPS tracking, and ground station software for live monitoring and data logging during flight.',
          features: ['Live data streams', 'GPS integration', 'Ground station UI'],
          color: 'from-purple-600 to-pink-600'
        },
        {
          title: 'Guidance & Navigation',
          icon: '🎯',
          description: 'Autonomous flight algorithms, trajectory optimization, and control systems for precision landing and waypoint navigation.',
          features: ['Autopilot systems', 'Trajectory planning', 'PID tuning'],
          color: 'from-orange-600 to-red-600'
        },
        {
          title: 'Custom Avionics Solutions',
          icon: '⚙️',
          description: 'Tailored flight electronics, power distribution boards, and sensor integration designed for your specific mission requirements.',
          features: ['Custom PCB design', 'Power systems', 'Sensor selection'],
          color: 'from-green-600 to-emerald-600'
        },
        {
          title: 'Testing & Validation',
          icon: '🔬',
          description: 'Hardware-in-the-loop simulation, vibration testing, and thermal validation to ensure systems perform under real launch conditions.',
          features: ['HITL simulation', 'Stress testing', 'Flight validation'],
          color: 'from-indigo-600 to-violet-600'
        },
        {
          title: 'Integration Support',
          icon: '🔧',
          description: 'Documentation, technical support, and hands-on assistance to integrate our avionics into your rocket, UAV, or aerospace platform.',
          features: ['Technical docs', 'API libraries', 'Direct support'],
          color: 'from-teal-600 to-blue-600'
        }
      ].map((service, i) => (
        <div 
          key={`service-${i}`} 
          className="group relative rounded-2xl bg-gray-900/70 border border-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-600/50 hover:-translate-y-2"
        >
          {/* Icon Badge */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 text-3xl shadow-lg`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            <Link to="/service-single">{service.title}</Link>
          </h3>

          {/* Description */}
          <p className="mb-6 text-gray-400 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <Link 
            to="/service-single" 
            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link"
          >
            Learn More
            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Hover Gradient Effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
        </div>
      ))}
    </div>

    {/* Technology Tags */}
    <div className="mt-16">
      <h3 className="text-center text-xl font-bold text-white mb-8">
        Core <span className="text-indigo-400">Technologies</span>
      </h3>
      <ul className="flex flex-wrap justify-center gap-3 text-sm">
        {[
          'STM32 / ARM Cortex',
          'FreeRTOS',
          'Kalman Filtering',
          'IMU / GPS Integration',
          'LoRa / RF Telemetry',
          'PID Control',
          'MAVLink Protocol',
          'MATLAB Simulation',
          'Altium PCB Design',
          'C/C++ Embedded',
          'Python Analysis',
          'Data Logging'
        ].map((tech, index) => (
          <li 
            key={`tech-${index}`} 
            className="rounded-full bg-gray-900/60 border border-gray-700 px-5 py-2.5 text-gray-300 shadow hover:bg-gray-800 hover:border-indigo-600/50 hover:text-white transition-all duration-200 cursor-default"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>

    {/* CTA Section */}
    <div className="mt-16 text-center">
      <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
        <div className="rounded-xl bg-gray-900 px-8 py-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-3">
            Need Custom Avionics?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your mission requirements and build a solution tailored to your aerospace platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/50"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 px-8 py-3 font-semibold text-white transition hover:border-indigo-600 hover:bg-indigo-600/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   {/* How It Works - Timeline Version */}
<section className="how-it-work py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-white text-center mb-16">
      Development <span className="text-indigo-400">Timeline</span>
    </h2>

    <div className="relative max-w-5xl mx-auto">
      {/* Central timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 hidden lg:block"></div>

      {[
        { week: 'Week 1-2', title: 'Requirements', desc: 'Mission specs, environmental analysis, component selection', side: 'left' },
        { week: 'Week 3-5', title: 'Design & Simulation', desc: 'PCB design, HITL testing, firmware development', side: 'right' },
        { week: 'Week 6-8', title: 'Build & Test', desc: 'Manufacturing, assembly, thermal/vibration testing', side: 'left' },
        { week: 'Week 9-12', title: 'Integration & Launch', desc: 'System integration, pre-flight checks, telemetry validation', side: 'right' }
      ].map((phase, i) => (
        <div key={i} className={`relative flex items-center mb-12 ${phase.side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`w-full lg:w-5/12 ${phase.side === 'left' ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
            <div className="p-6 rounded-xl bg-gray-900/70 border border-gray-800 hover:border-indigo-600/50 transition">
              <span className="text-xs font-bold text-indigo-400">{phase.week}</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">{phase.title}</h3>
              <p className="text-gray-400">{phase.desc}</p>
            </div>
          </div>
          
          {/* Center dot */}
          <div className="absolute left-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-gray-900 hidden lg:block -translate-x-1/2"></div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Projects Portfolio */}
        <section className="our-projects py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Projects</h3>
              <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
                Innovative AI solutions we've <span className="text-indigo-400">delivered</span>
              </h2>
            </div>

            <PhotoProvider>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.slice(0, 8).map((project,) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
                  >
                    <PhotoView src={`/images/project-${project.id}.jpg`}>
                      <img
                        src={`/images/project-${project.id}.jpg`}
                        alt={project.title}
                        className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </PhotoView>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-6 left-6 text-white">
                        <span className="text-xs font-semibold text-indigo-300 uppercase block mb-1">{project.category}</span>
                        <h3 className="text-lg font-semibold">
                          <Link to="/project-single" className="hover:underline">
                            {project.title}
                          </Link>
                        </h3>
                      </div>
                      <Link
                        to="/project-single"
                        className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PhotoProvider>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Facts/Stats Section */}
        <section className="facts py-20 bg-gradient-to-br">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '1200+', label: 'Projects Completed' },
                { number: '98%', label: 'Success Rate' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6">
                  <h3 className="text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
                  <p className="text-indigo-200 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="what-we-do py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-8 text-4xl font-bold text-white">
                  We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.
                </h3>
                <img src="/images/what-we-do-img.png" alt="" className="mb-6 w-full rounded-xl shadow-lg ring-1 ring-gray-700" />
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {['UI/UX Design', 'Chatbot Design', 'Predictive', 'Design Automation', 'Generative Branding'].map((item) => (
                    <li key={item} className="rounded bg-gray-800 border border-gray-700 px-4 py-2 shadow text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">what we do</h3>
                <h2 className="mb-4 text-4xl font-bold text-white">
                  Innovative AI services, real-world <span className="text-indigo-400">results</span>
                </h2>
                <p className="mb-6 text-gray-400">
                  We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.
                </p>
                <ul className="mb-8 space-y-2 text-gray-300">
                  {['Computer Vision', 'AI Integration', 'Ongoing Support', 'AI Strategy', 'Custom AI Development'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-400"></span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="rounded bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                  contact us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials py-20 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">testimonials</h3>
                <h2 className="mb-4 text-4xl font-bold text-white">
                  Powering innovation with data-driven <span className="text-indigo-400">design</span>
                </h2>
                <p className="mb-8 text-gray-400">
                  Crafting intuitive, user-first interfaces by intelligence for smarter, faster, and more personalized digital artificial intelligence experiences.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-4xl font-bold text-indigo-400">
                      <span ref={(el) => (counterRefs.current[9] = el)} data-count="200" data-suffix="+">0+</span>
                    </p>
                    <p className="text-sm text-gray-400">projects successfully</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-indigo-400">
                      <span ref={(el) => (counterRefs.current[10] = el)} data-count="600" data-suffix="+">0+</span>
                    </p>
                    <p className="text-sm text-gray-400">satisfied clients</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  autoplay={{ delay: 4000 }}
                >
                  {[
                    { name: 'Jenny W', role: 'FinTech Startup', img: 'author-1.jpg' },
                    { name: 'Jason M', role: 'Hardware Technician', img: 'author-2.jpg' },
                    { name: 'Lauren M', role: 'Marketing Director', img: 'author-3.jpg' },
                  ].map((t, i) => (
                    <SwiperSlide key={i}>
                      <div className="rounded-xl bg-gray-800 border border-gray-700 p-6 shadow-md">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex gap-3">
                            <img src={`/images/${t.img}`} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                            <div>
                              <h4 className="font-semibold text-white">{t.name}</h4>
                              <p className="text-sm text-gray-400">{t.role}</p>
                            </div>
                          </div>
                          <img src="/images/testimonials-quotes-img.svg" alt="" className="h-8 w-8 opacity-50" />
                        </div>
                        <p className="text-gray-300">
                          "Working with this team was a game-changer. The AI-enhanced solutions they delivered helped reduce bounce rates by 40% and engagement like never before."
                        </p>
                        <div className="flex mt-4 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Gallery</h3>
              <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
                Behind the scenes of <span className="text-indigo-400">innovation</span>
              </h2>
            </div>

            <PhotoProvider>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-2xl hover:shadow-indigo-500/20"
                  >
                    <PhotoView src={src}>
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="h-64 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </PhotoView>

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
                      <span className="translate-y-4 text-lg font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        View Image
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </PhotoProvider>

            <div className="text-center mt-12">
              <Link
                to="/image-gallery"
                className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">FAQ</h3>
              <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
                Frequently Asked <span className="text-indigo-400">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: 'What AI services do you offer?',
                  answer: 'We offer comprehensive AI solutions including strategy consulting, custom AI development, machine learning models, chatbots, predictive analytics, and AI integration services.',
                },
                {
                  question: 'How long does it take to implement an AI solution?',
                  answer: 'Implementation timelines vary based on project complexity. Simple chatbots can be deployed in 2-4 weeks, while enterprise-level AI systems may take 3-6 months.',
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Yes! We provide 24/7 monitoring, regular updates, performance optimization, and dedicated support teams for all our AI solutions.',
                },
                {
                  question: 'What industries do you work with?',
                  answer: 'We serve various industries including healthcare, finance, e-commerce, manufacturing, retail, and technology sectors with tailored AI solutions.',
                },
                {
                  question: 'How do you ensure data security?',
                  answer: 'We implement enterprise-grade security measures, encryption, compliance with GDPR/HIPAA, regular security audits, and follow best practices for data protection.',
                },
                {
                  question: 'What is the pricing model?',
                  answer: 'We offer flexible pricing including project-based, subscription, and custom enterprise packages. Contact us for a detailed quote based on your specific needs.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/50 transition"
                  >
                    <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-indigo-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-400">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/faqs"
                className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="mb-2 text-sm font-semibold uppercase text-indigo-400">Our Blog</h3>
              <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white">
                Latest insights and <span className="text-indigo-400">updates</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, idx) => (
                <article key={idx} className="group rounded-xl bg-gray-800 border border-gray-700 overflow-hidden shadow-lg transition hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                      📝
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-indigo-400 uppercase">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">
                      <Link to="/blog-single">{post.title}</Link>
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <Link to="/blog-single" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-block rounded bg-gray-800 border border-gray-700 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta py-20 bg-gradient-to-r ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Let's build the future together. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="rounded bg-white px-8 py-4 font-semibold text-indigo-900 transition hover:bg-gray-100 shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/projects"
                className="rounded border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}