import { useRef, useState } from "react"

/**
 * FAQ Card Component
 * 
 * Individual FAQ item that can be expanded/collapsed to show the answer.
 * Uses smooth height transitions for a polished user experience.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.faqsList - FAQ item with 'q' (question) and 'a' (answer)
 * @param {number} props.idx - Index of the FAQ item
 * @param {boolean} props.isDark - Whether the app is in dark mode
 */
const FaqsCard = ({ faqsList, idx, isDark = true }) => {
  const answerElRef = useRef()
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')

  /**
   * Toggle the FAQ answer visibility
   * Calculates the height of the answer content and sets it for smooth animation
   */
  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight
    setState(!state)
    setAnswerH(`${answerElH + 20}px`)
  }

  return (
    <div 
      className={`space-y-3 mt-5 overflow-hidden border-b ${
        isDark ? 'border-white/10' : 'border-slate-200'
      }`}
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className={`cursor-pointer pb-5 flex items-center justify-between text-lg font-medium transition-colors ${
        isDark ? 'text-white hover:text-brand-orange' : 'text-slate-700 hover:text-brand-orange'
      }`}>
        {faqsList.q}
        {state ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-2 transition-colors ${
              isDark ? 'text-white/60' : 'text-gray-500'
            }`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-2 transition-colors ${
              isDark ? 'text-white/60' : 'text-gray-500'
            }`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef} 
        className="duration-300 ease-in-out"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className={`${isDark ? 'text-white/70' : 'text-gray-500'}`}>
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * FAQ Section Component
 * 
 * Displays a list of frequently asked questions with expandable answers.
 * Questions are relevant to IT services and technology solutions.
 * 
 * @param {boolean} isDark - Whether the app is in dark mode
 */
export default function FAQ({ isDark = true }) {
  // FAQ questions and answers relevant to IT/tech company
  const faqsList = [
    {
      q: "What IT services do you provide?",
      a: "We offer comprehensive IT solutions including enterprise infrastructure, cloud services, mobile device care, creative design, network infrastructure, and 24/7 managed services. Our services span from data center solutions to SaaS ecosystems and mobile recovery labs."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while enterprise solutions can range from 2-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the project lifecycle."
    },
    {
      q: "Do you offer remote support and services?",
      a: "Yes, we provide remote support desks and can handle many services remotely. Our team uses secure remote access tools to assist with system maintenance, troubleshooting, and support. However, some services like hardware installation may require on-site visits."
    },
    {
      q: "What is your experience with cloud solutions?",
      a: "We specialize in hybrid cloud solutions and cloud-native operations. Our team has extensive experience with major cloud providers and can help you migrate, optimize, or build cloud infrastructure. We also offer 24/7 managed cloud services for continuous monitoring and support."
    },
    {
      q: "Can you help with mobile device recovery?",
      a: "Absolutely! Our mobile ecosystem lab provides comprehensive device care including phone, tablet, and smartwatch services. We offer unlocking, flashing, jailbreaking, and both hardware and software recovery services for various device brands and models."
    },
    {
      q: "What kind of support do you provide after project completion?",
      a: "We offer ongoing support packages tailored to your needs. This includes 24/7 monitoring, regular maintenance, security updates, and technical support. Our managed services ensure your systems remain optimized and secure long after initial implementation."
    },
    {
      q: "Do you work with small businesses or only enterprises?",
      a: "We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and we tailor our services to fit your specific needs and budget. Whether you need basic IT support or complex enterprise infrastructure, we can help."
    },
    {
      q: "How do I get started with your services?",
      a: "Getting started is easy! Simply fill out our contact form or reach out through the 'Let's talk' button. We'll schedule a consultation to understand your needs and provide a customized solution proposal. Our team is ready to help you achieve your IT goals."
    }
  ]

  return (
    <section id="faq" className={`leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-orange font-semibold">FAQ</p>
        <h1 className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Frequently Asked Questions
        </h1>
        <p className={`max-w-lg mx-auto text-lg ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
          Answered all frequently asked questions. Still confused? Feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard
            key={idx}
            idx={idx}
            faqsList={item}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  )
}

