import { useState } from 'react'

function FAQ() {
  const [faqs] = useState([
    {
      id: 1,
      question: 'What services does Multiage Technologies offer?',
      answer: 'We offer a comprehensive range of IT services including enterprise solutions, mobile app and web development, device services, graphic design, and network installation.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Simple websites may take 2-4 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during consultation.',
      category: 'Projects'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 support and maintenance packages for all our solutions. Our support includes monitoring, updates, and technical assistance.',
      category: 'Support'
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">FAQ Management</h2>
          <p className="text-slate-600 mt-1">Manage frequently asked questions</p>
        </div>
        <button className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium">
          Add FAQ
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded">
                    {faq.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
              <div className="ml-4 flex gap-2">
                <button className="text-sm text-brand-orange hover:text-brand-orange/80 font-medium">Edit</button>
                <button className="text-sm text-red-600 hover:text-red-800 font-medium">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ

