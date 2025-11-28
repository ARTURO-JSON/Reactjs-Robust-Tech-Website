import { useCallback, useEffect, useRef, useState } from 'react'
import { Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom'
// Admin dashboard imports
import Switch from './components/Switch'
import TermsDialog from './components/TermsDialog'
import FAQ from './components/FAQ'
import ProductCatalog from './components/ProductCatalog'
import AuthDialog from './components/AuthDialog'
import LazySection from './components/LazySection'
import AdminRoute from './components/AdminRoute'
import { useTypewriter } from './hooks/useTypewriter'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Services from './pages/admin/Services'
import Team from './pages/admin/Team'
import Testimonials from './pages/admin/Testimonials'
import FAQAdmin from './pages/admin/FAQ'
import Contacts from './pages/admin/Contacts'
import Products from './pages/admin/Products'
import Analytics from './pages/admin/Analytics'
import Settings from './pages/admin/Settings'
import bgImage from './assets/bg.jpg'
import devfixImage from './assets/dev-services.jpeg'
import deviceHubImage from './assets/dev-forsale.jpeg'
import enterprise from './assets/bg.jpg'
import appDesign from './assets/design.jpeg'
import networkImage from './assets/network.jpeg'
import graphicDesignImage from './assets/g-design.jpeg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Team', href: '#team' },
  { label: 'About us', href: '#about' },
  { label: 'Our services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact us', href: '#contact' },
]

const services = [
  {
    title: 'Enterprise solutions',
    description: 'Comprehensive IT infrastructure and system solutions for large-scale operations.',
    image: enterprise,
    features: ['System analysis & installation ', 'Database design & Management ', 'Cloud & backup Solutions ', 'Lab Installations'],
  },
  {
    title: 'Mobile App & Web Design (Frontend & Backend)',
    description: 'We create stable and secure app and websites and also host websites ',
    image: appDesign,
    features: ['Mobile App Development', 'Website Development', 'Web hosting', 'Server Handling'],
  },
  {
    title: 'Mobile & PC Services ',
    description: 'Complete mobile and PC device care and recovery services for all your devices.',
    image: devfixImage,
    features: [
      'Hardware and Software Fixes',
      'Device unlocking, flashing,  jailbreaking, iCloud Unlocking',
      'Windows and Apple services',
      'Google Services'
    ],
  },
  {
    title: 'Device Hub (Coming Soon) ',
    description: 'We sell quality Mobile devices, PCs and Accessories at affordable prices.',
    image: deviceHubImage,
    features: ['Samsung', 'Apple', 'Huawei', 'Lenovo, Dell, Hp and Acer Laptops', 'Gadget Accessories'],
  },
  {
    title: 'Graphic Design',
    description: 'Identity suites, pitch decks, experiential signage, and campaigns that match your launch.',
    image: graphicDesignImage,
    features: ['Poster Design', 'Business Cards', 'Flyers', 'T-shirt Design'],
  },
  {
    title: 'Secure Network Installation',
    description: 'Structured cabling, campus Wi-Fi, firewalls and monitoring for labs and HQs.',
    image: networkImage,
    features: ['Network infrastructure', 'Security systems', 'Monitoring & maintenance', 'Firewall installation'],
  },
]

const testimonials = [
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'Kwame Jokoto',
    title: 'CEO, Volta River Authority',
    quote: 'Multiage Technologies transformed our entire IT infrastructure. Their team delivered a seamless cloud migration that reduced our operational costs by 40% and improved system reliability significantly.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'Angela Boateng',
    title: 'Product Director, Telecel Ghana',
    quote: 'Working with Multiage has been exceptional. Their creative team redesigned our entire digital presence, and their technical expertise helped us launch our product ahead of schedule. Highly recommended!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Abdulai Iddrisu',
    title: 'Product Manager, Ghana Education Service',
    quote: 'The network infrastructure and security solutions provided by Multiage are top-notch. Their 24/7 support and proactive monitoring have kept our systems running smoothly with zero downtime.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Mawuli Chibueze',
    title: 'Product Manager, Nigeria Immigration Service',
    quote: 'They are the best in the business. Their creative team redesigned our entire digital presence, and their technical expertise helped us launch our product ahead of schedule. Highly recommended!',
  },
]

const footerNavs = [
  {
    label: 'Quick Links',
    items: [
      { href: '#home', name: 'Home' },
      { href: '#services', name: 'Our Services' },
      { href: '#about', name: 'About Us' },
      { href: '#team', name: 'Team' },
      { href: '#faq', name: 'FAQ' },
      { href: '#contact', name: 'Contact Us' },
    ],
  },
  {
    label: 'Services',
    items: [
      { href: '#services', name: 'Enterprise Solutions' },
      { href: '#services', name: 'Graphic Design Services ' },
      { href: '#services', name: 'Mobile Services' },
      { href: '#services', name: 'Cloud Services' },
      { href: '#services', name: 'Network Infrastructure' },
    ],
  },
]

const stats = [
  { label: 'Years innovating', value: '10+' },
  { label: 'Projects delivered', value: '240+' },
  { label: 'Regional partners', value: '35' },
]

const team = [
  {
    avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'MR. JAPHET MENSAH',
    title: 'CEO',
  },
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'MR. FRANCIS EWUSI IDUN-ARTHUR',
    title: 'Full Stack Mobile/Web Developer',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'MR. SAMUEL ARTHUR',
    title: 'Administrator',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    name: 'MR. RUTHERFORD TETTEH',
    title: 'Finance Manager/ Graphic Designer',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'MR. RIDGE DELA',
    title: 'Full stack web/Mobile Developer',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'MR. RENDERS NKETIA',
    title: 'Media Manager/ Secetary',
  },

]

function ServiceCard({ title, description, image, features, isDark }) {
  const navigate = useNavigate()

  const handleLearnMore = (e) => {
    e.preventDefault()
    // Navigate to catalog page for "Device Hub"
    if (title === 'Device Hub (Coming Soon) ') {
      navigate('/catalog')
    } else {
      // For other services, scroll to contact section
      const target = document.querySelector('#contact')
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <article
      className={`group overflow-hidden rounded-2xl shadow-glow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isDark ? 'border border-white/10 bg-white/5' : 'border border-slate-200 bg-white'
        }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`mt-2 text-sm ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{description}</p>
        <ul className={`mt-4 space-y-2 ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-orange flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleLearnMore}
          className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${isDark
            ? 'bg-brand-orange text-white hover:bg-brand-orange/90'
            : 'bg-brand-orange text-white hover:bg-brand-orange/90'
            }`}
        >
          Book us
          <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  )
}

/**
 * Typewriter Text Component
 * Displays the hero text with a typewriter animation effect
 * Types out the entire text then deletes it and loops continuously
 */
function TypewriterText({ isDark }) {
  const fullText = "Modern infrastructure, creative intelligence, and device care in one team."

  // Use typewriter hook for the entire text
  // Typing speed: 50ms per character (faster for smoother feel), Deleting speed: 30ms per character, Pause: 2000ms
  const typedText = useTypewriter(fullText, 50, 30, 2000)

  // Find where "one team" starts in the text to apply gradient
  const oneTeamStart = fullText.indexOf("one team")
  const typedBeforeOneTeam = typedText.substring(0, oneTeamStart)
  const typedOneTeam = typedText.substring(oneTeamStart)

  return (
    <>
      {/* Static part before "one team" */}
      <span className={`transition-opacity duration-150 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {typedBeforeOneTeam}
      </span>
      {/* Animated "one team" part with gradient */}
      <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent transition-opacity duration-150">
        {typedOneTeam}
      </span>
      {/* Cursor - always visible with smooth animation */}
      <span className="inline-block w-[2px] h-[0.9em] bg-brand-orange ml-1 align-middle typewriter-cursor" />
    </>
  )
}

function Home({ isDark, setIsDark }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showBanner, setShowBanner] = useState(true)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const loadingTimeoutRef = useRef(null)
  const successNotificationTimeoutRef = useRef(null)

  const triggerLoading = useCallback((callback) => {
    setIsLoading(true)
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
    }
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false)
      callback?.()
    }, 700)
  }, [])

  useEffect(() => {
    triggerLoading()
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      if (successNotificationTimeoutRef.current) {
        clearTimeout(successNotificationTimeoutRef.current)
      }
    }
  }, [triggerLoading])

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallApp = async () => {
    if (!deferredPrompt) {
      // If PWA install prompt is not available, show instructions
      alert('To install this app:\n\nChrome/Edge: Click the menu (⋮) and select "Install app"\nSafari: Tap Share and select "Add to Home Screen"\nFirefox: Click the menu and select "Install"')
      return
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowBanner(false)
    }
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false)
    triggerLoading(() => {
      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const wrapperClasses = `${isDark ? 'theme-dark noise-bg text-white' : 'theme-light light-bg text-slate-900'
    } min-h-screen w-full transition-colors duration-500`
  const navClasses = `sticky top-0 z-50 border-b backdrop-blur ${isDark ? 'border-white/10 bg-black/60' : 'border-slate-200 bg-white/80'
    }`
  const desktopNavLinkColor = isDark ? 'text-white/70' : 'text-slate-600'
  const mobileNavLinkColor = isDark ? 'text-white/60' : 'text-slate-600'
  const heroPanelClasses = `rounded-3xl p-6 shadow-glow sm:p-8 ${isDark ? 'border border-white/10 bg-black/50' : 'border border-slate-200 bg-white/95'
    }`
  const heroHighlightClasses = `w-full rounded-3xl p-6 ${isDark ? 'border border-white/10 bg-white/5' : 'border border-slate-200 bg-slate-50'
    }`
  const statsPanelClasses = `mt-8 grid gap-4 rounded-2xl p-6 md:grid-cols-3 ${isDark ? 'border border-white/5 bg-white/5 text-white/80' : 'border border-slate-200 bg-white text-slate-600'
    }`
  const aboutPanelClasses = `rounded-3xl p-8 shadow-glow ${isDark ? 'border border-white/10 bg-black/40' : 'border border-slate-200 bg-white'
    }`
  const beliefCardClasses = `rounded-3xl p-6 ${isDark ? 'border border-white/5 bg-white/10' : 'border border-slate-200 bg-slate-50'
    }`
  const servicesPanelClasses = `space-y-10 rounded-3xl p-8 shadow-glow ${isDark ? 'border border-white/10 bg-black/50' : 'border border-slate-200 bg-white'}`
  const leadershipPanelClasses = `rounded-3xl p-8 shadow-glow ${isDark ? 'border border-white/10 bg-black/45' : 'border border-slate-200 bg-white'}`
  const contactPanelClasses = `rounded-3xl p-8 shadow-glow ${isDark
    ? 'border border-white/10 bg-gradient-to-br from-brand-orange/10 via-black to-black text-white'
    : 'border border-slate-200 bg-gradient-to-br from-orange-100 via-white to-white text-slate-900'
    }`
  const contactCardClasses = `rounded-2xl border p-5 ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
    }`
  const outlineButtonClass = `rounded-2xl border px-5 py-3 text-base font-semibold transition ${isDark
    ? 'border-white/30 text-white hover:border-brand-orange hover:text-brand-orange'
    : 'border-slate-300 text-slate-900 hover:border-brand-orange hover:text-brand-orange'
    }`
  const talkButtonClass = `rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${isDark
    ? 'border-white/20 text-white hover:border-brand-orange hover:text-brand-orange'
    : 'border-slate-300 text-slate-900 hover:border-brand-orange hover:text-brand-orange'
    }`
  const contactCtaClass = `inline-flex items-center gap-2 rounded-2xl border px-6 py-3 text-base font-semibold transition ${isDark
    ? 'border-white text-white hover:bg-white hover:text-brand-dark'
    : 'border-slate-400 text-slate-900 hover:bg-brand-dark hover:text-white'
    }`
  const sectionScrollClass = 'scroll-mt-28'
  const testimonialsPanelClasses = `rounded-3xl p-8 shadow-glow ${isDark ? 'border border-white/10 bg-black/50' : 'border border-slate-200 bg-white'
    }`

  return (
    <div className={wrapperClasses}>
      {/* Terms and Conditions Dialog - Shows automatically on first visit */}
      <TermsDialog isDark={isDark} />

      {/* Authentication Dialog */}
      <AuthDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        isDark={isDark}
      />

      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400 animate-spin">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400 animate-spin"></div>
            </div>
          </div>
        </div>
      )}
      {showBanner && (
        <div className="bg-brand-orange sticky top-0 z-[55]">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
            <div className="flex gap-x-4 flex-1">
              <div className="w-10 h-10 flex-none rounded-lg bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="py-2 font-medium">
                  Install our web app for a better experience! (Available on Chrome and Edge)
                </p>
                <button
                  onClick={handleInstallApp}
                  className="px-4 py-2 bg-white text-brand-orange font-semibold rounded-lg duration-150 hover:bg-white/90 transition-colors"
                >
                  Get app
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="p-2 rounded-lg duration-150 hover:bg-white/20 ring-offset-2 focus:ring ml-2"
              aria-label="Close banner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <nav className={navClasses}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/multi.png" alt="Multiage Technologies" className="h-24 w-24 object-contain" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Multiage</p>
              <p className="text-base font-semibold">Technologies</p>
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className={`hidden items-center gap-8 text-sm uppercase tracking-[0.3em] ${desktopNavLinkColor} md:flex`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="transition hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Switch isDark={isDark} onToggle={setIsDark} />
            <button
              onClick={() => setIsAuthDialogOpen(true)}
              className={talkButtonClass}
            >
              signin/signup
            </button>
          </div>
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Collapsible Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className={`px-6 py-4 space-y-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`block py-2 text-sm uppercase tracking-[0.3em] transition hover:text-brand-orange ${mobileNavLinkColor}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Mobile Actions */}
            <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <Switch isDark={isDark} onToggle={setIsDark} />
              <button
                onClick={() => {
                  setIsAuthDialogOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className={`${talkButtonClass} inline-flex`}
              >
                signin/signup
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:py-16">
        <section id="home" className={`${sectionScrollClass} ${heroPanelClasses} relative overflow-hidden`}>
          {/* Decorative gradient orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between relative z-10">
            <div className="space-y-6 text-center lg:text-left animate-fade-in-up lg:flex-1">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-xs uppercase tracking-wider text-white/80 border border-white/10 shadow-lg animate-fade-in animate-delay-100">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                Integrated IT company
              </div>
              <h1 className={`text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animate-delay-200 relative ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {/* Hidden placeholder to reserve exact space and prevent layout shift */}
                <span className="invisible block" aria-hidden="true">
                  Modern infrastructure, creative intelligence, and device care in one team.
                </span>
                {/* Visible animated text */}
                <span className="absolute top-0 left-0 right-0">
                  <TypewriterText isDark={isDark} />
                </span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start pt-2 animate-fade-in-up animate-delay-400">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange to-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/40 hover:scale-105"
                >
                  Send us a message

                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#services"
                  className={`${outlineButtonClass} px-6 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105`}
                >
                  Explore our services
                </a>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1 lg:max-w-2xl w-full animate-fade-in-up animate-delay-300">
              <img
                src={bgImage}
                alt="Our team working together"
                className="w-full h-auto max-h-[600px] rounded-2xl shadow-2xl object-cover transition-all duration-500 hover:shadow-brand-orange/20 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className={`${statsPanelClasses} text-center mt-12 backdrop-blur-sm animate-fade-in-up animate-delay-400`}>
            {stats.map((item, idx) => (
              <div key={item.label} className="group">
                <p className="text-xs uppercase tracking-wider text-white/60 font-medium mb-2">{item.label}</p>
                <p className="text-4xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <LazySection animationDelay="0.1s">
          <section id="team" className={`${sectionScrollClass} ${leadershipPanelClasses}`}>
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
              <div className="max-w-xl mx-auto">
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">Team</p>
                <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Meet our team
                </h2>

              </div>
              <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {team.map((item, idx) => (
                    <li key={idx}>
                      <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
                        <img
                          src={item.avatar}
                          className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-150"
                          alt={item.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-2">
                        <h4 className={`font-semibold sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.name}
                        </h4>
                        <p className="text-brand-orange">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection animationDelay="0.2s">
          <section id="about" className={`${sectionScrollClass} ${aboutPanelClasses}`}>
            <div className="max-w-screen-xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-orange font-semibold mb-3">About us</p>
                <h2 className={`text-3xl font-semibold sm:text-4xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Multiage Technologies
                </h2>
              </div>

              {/* Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-white/90' : 'text-slate-700'}`}>
                    Multiage Technologies is a dynamic IT solutions company dedicated to providing reliable, innovative, and customer-focused technology services. Led by Chief Executive Officer <strong className={isDark ? 'text-white' : 'text-slate-900'}>Japheth Elikplim Mensah</strong>, our organization is built on a commitment to helping individuals and businesses stay connected, efficient, and secure in a fast-paced digital world.
                  </p>

                  <div className="space-y-4">
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Our Services
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                      We specialize in a wide range of technology services, including graphic design, website development, software solutions, hardware support, system installations, cloud and backup solutions, and professional IT consulting. Our team also offers expert assistance in remote system support, database management, and various customized services tailored to meet the unique needs of our clients.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Device Services
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                      At Multiage Technologies, we are also highly skilled in mobile device and computer services, covering phones, laptops, tablets, and smart watches. From software updates, flashing, and backups to iCloud unlocking, data transfer, system repairs, and both Google and Apple-related services, we provide fast and reliable technical support you can trust.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Tech Store
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                      In addition to our service offerings, we run a well-stocked Tech Store, where customers can buy both in bulk and in single units. We supply a wide range of high-quality products, including Apple devices, Samsung devices, laptops, desktops, monitors, system units, and various tech parts and accessories.
                    </p>
                  </div>

                  <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-white/90' : 'text-slate-700'}`}>
                      With a passion for excellence and a strong technical background, Multiage Technologies stands as your trusted partner for all things tech offering dependable solutions that help you stay productive and ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className={`mt-12 text-center p-8 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
                <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Ready to try our services?
                </h3>
                <p className={`mb-6 ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                  Send us a message so we can help you with your needs.

                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange to-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/40"
                  onClick={(event) => handleNavClick(event, '#contact')}
                >
                  Send us a Message

                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection animationDelay="0.3s">
          <section id="services" className={`${sectionScrollClass} ${servicesPanelClasses}`}>
            <div className="flex flex-col gap-3 text-center mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">Our services</p>
              <h2 className="text-3xl font-semibold">Strategy, execution, and labs under one roof.</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Choose a managed bundle or pick targeted interventions. Each service below highlights
                the environments we design, deploy, and support every day.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} isDark={isDark} />
              ))}
            </div>
          </section>
        </LazySection>

        <LazySection animationDelay="0.4s">
          <section id="testimonials" className={`${sectionScrollClass} ${testimonialsPanelClasses}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <p className={`text-sm uppercase tracking-[0.4em] font-semibold pb-6 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                  What our customers say about us
                </p>
                <ul>
                  {testimonials.map((item, idx) =>
                    currentTestimonial === idx ? (
                      <li key={idx}>
                        <figure>
                          <blockquote>
                            <p className={`text-xl font-semibold sm:text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              "{item.quote}"
                            </p>
                          </blockquote>
                          <div className="mt-6">
                            <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full object-cover" alt={item.name} loading="lazy" />
                            <div className="mt-3">
                              <span className={`block font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {item.name}
                              </span>
                              <span className={`block text-sm mt-0.5 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </figure>
                      </li>
                    ) : (
                      ''
                    )
                  )}
                </ul>
              </div>
              <div className="mt-6">
                <ul className="flex gap-x-3 justify-center">
                  {testimonials.map((item, idx) => (
                    <li key={idx}>
                      <button
                        className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-brand-orange focus:ring ${currentTestimonial === idx ? 'bg-brand-orange' : isDark ? 'bg-white/30' : 'bg-slate-300'
                          }`}
                        onClick={() => setCurrentTestimonial(idx)}
                        aria-label={`View testimonial ${idx + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection animationDelay="0.5s">
          <section id="faq" className={`${sectionScrollClass} ${testimonialsPanelClasses}`}>
            <FAQ isDark={isDark} />
          </section>
        </LazySection>

        <LazySection animationDelay="0.6s">
          <section id="contact" className={`${sectionScrollClass} ${contactPanelClasses}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-orange font-semibold">Contact</p>
                <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Send us a Message

                </h2>
                <p className={isDark ? 'text-white/80' : 'text-slate-600'}>
                  Send us a message so we can assit you with your needs, and also place an order.

                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto">
                {/* Success notification - appears after form submission */}
                {showSuccessNotification && (
                  <div className={`mb-6 mx-4 px-4 rounded-md border-l-4 ${isDark
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-green-500 bg-green-50'
                    } md:max-w-2xl md:mx-auto md:px-8 animate-fade-in-up`}>
                    <div className="flex justify-between py-3">
                      <div className="flex">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 rounded-full text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="self-center ml-3">
                          <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'
                            }`}>
                            Success
                          </span>
                          <p className={`mt-1 ${isDark ? 'text-green-400/80' : 'text-green-600'
                            }`}>
                            Your message has been sent successfully. We'll get back to you soon!
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowSuccessNotification(false)}
                        className={`self-start transition-colors ${isDark
                          ? 'text-green-400 hover:text-green-300'
                          : 'text-green-500 hover:text-green-600'
                          }`}
                        aria-label="Close notification"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    // Clear any existing timeout
                    if (successNotificationTimeoutRef.current) {
                      clearTimeout(successNotificationTimeoutRef.current)
                    }
                    // Show success notification
                    setShowSuccessNotification(true)
                    // Reset form
                    e.target.reset()
                    // Auto-hide notification after 5 seconds
                    successNotificationTimeoutRef.current = setTimeout(() => {
                      setShowSuccessNotification(false)
                    }, 5000)
                  }}
                  className="space-y-5"
                >
                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                          ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                          : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
                          }`}
                      />
                    </div>
                    <div>
                      <label className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                          ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                          : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
                          }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Email</label>
                    <input
                      type="email"
                      required
                      className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                        ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                        : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
                        }`}
                    />
                  </div>
                  <div>
                    <label className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Phone number
                    </label>
                    <div className="relative mt-2">
                      <div
                        className={`absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2 ${isDark ? 'border-white/20' : 'border-slate-300'
                          }`}
                      >
                        <select
                          className={`text-sm bg-transparent outline-none rounded-lg h-full ${isDark ? 'text-white/80' : 'text-slate-900'
                            }`}
                        >
                          <option>US</option>
                          <option>ES</option>
                          <option>MR</option>
                          <option>GH</option>
                        </select>
                      </div>
                      <input
                        type="number"
                        placeholder="+233 27 700 1023"

                        required
                        className={`w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                          ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                          : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
                          }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Message</label>
                    <textarea
                      required
                      className={`w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                        ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                        : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
                        }`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium bg-brand-orange hover:bg-brand-orange/90 active:bg-brand-orange rounded-lg duration-150 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </LazySection>

        <footer className={`pt-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="justify-between items-center gap-12 md:flex">
              <div className="flex-1 max-w-lg">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Stay updated with the latest IT solutions and tech insights.
                </h3>
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                  <div className="relative">
                    <svg
                      className={`w-6 h-6 absolute left-3 inset-y-0 my-auto ${isDark ? 'text-white/40' : 'text-slate-400'
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-3 py-2 bg-transparent outline-none border shadow-sm rounded-lg transition-colors ${isDark
                        ? 'text-white/80 border-white/20 focus:border-brand-orange placeholder:text-white/40'
                        : 'text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400 bg-white'
                        }`}
                    />
                  </div>
                  <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-brand-orange hover:bg-brand-orange/90 active:bg-brand-orange rounded-lg shadow transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
              {footerNavs.map((item, idx) => (
                <ul className="space-y-4" key={idx}>
                  <h4 className={`font-semibold sm:pb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.label}
                  </h4>
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <a
                        href={el.href}
                        onClick={(e) => {
                          if (el.href.startsWith('#')) {
                            e.preventDefault()
                            const target = document.querySelector(el.href)
                            target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                        className={`duration-150 ${isDark
                          ? 'text-white/70 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                          }`}
                      >
                        {el.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div
              className={`mt-10 py-10 border-t items-center justify-between sm:flex ${isDark ? 'border-white/10' : 'border-slate-200'
                }`}
            >
              <p className={isDark ? 'text-white/70' : 'text-slate-600'}>
                © {new Date().getFullYear()} Multiage Technologies. All rights reserved. WEBSITE BY ARTURO (WHATSAPP: +233541358718)
              </p>
              <div className={`flex items-center gap-x-6 mt-6 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
                <a
                  href="javascript:void()"
                  className={`duration-150 ${isDark ? 'hover:text-white/60' : 'hover:text-slate-600'}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48">
                    <g clipPath="url(#a)">
                      <path
                        fill="currentColor"
                        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="javascript:void()"
                  className={`duration-150 ${isDark ? 'hover:text-white/60' : 'hover:text-slate-600'}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48">
                    <g clipPath="url(#clip0_17_80)">
                      <path
                        fill="currentColor"
                        d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_80">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="javascript:void()"
                  className={`duration-150 ${isDark ? 'hover:text-white/60' : 'hover:text-slate-600'}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48">
                    <g fill="currentColor" clipPath="url(#clip0_910_44)">
                      <path
                        fillRule="evenodd"
                        d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                        clipRule="evenodd"
                      />
                      <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_910_44">
                        <path fill="#fff" d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="javascript:void()"
                  className={`duration-150 ${isDark ? 'hover:text-white/60' : 'hover:text-slate-600'}`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                    <g clipPath="url(#clip0_17_63)">
                      <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                      <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_63">
                        <path d="M0 0h48v48H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
      <Route path="/catalog" element={<ProductCatalog isDark={isDark} setIsDark={setIsDark} />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={<AdminRoute />}
      >
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQAdmin />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="products" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

