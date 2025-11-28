import { useState } from 'react'

function Testimonials() {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Kwame Jokoto',
      title: 'CEO, Volta River Authority',
      quote: 'Multiage Technologies transformed our entire IT infrastructure. Their team delivered a seamless cloud migration that reduced our operational costs by 40% and improved system reliability significantly.',
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      status: 'published'
    },
    {
      id: 2,
      name: 'Angela Boateng',
      title: 'Product Director, Telecel Ghana',
      quote: 'Working with Multiage has been exceptional. Their creative team redesigned our entire digital presence, and their technical expertise helped us launch our product ahead of schedule. Highly recommended!',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      status: 'published'
    },
    {
      id: 3,
      name: 'Abdulai Iddrisu',
      title: 'Product Manager, Ghana Education Service',
      quote: 'The network infrastructure and security solutions provided by Multiage are top-notch. Their 24/7 support and proactive monitoring have kept our systems running smoothly with zero downtime.',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      status: 'published'
    },
    {
      id: 4,
      name: 'Mawuli Chibueze',
      title: 'Product Manager, Nigeria Immigration Service',
      quote: 'They are the best in the business. Their creative team redesigned our entire digital presence, and their technical expertise helped us launch our product ahead of schedule. Highly recommended!',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      status: 'published'
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Testimonials Management</h2>
          <p className="text-slate-600 mt-1">Manage customer testimonials</p>
        </div>
        <button className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium">
          Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{testimonial.title}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    testimonial.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {testimonial.status}
                  </span>
                </div>
                <p className="text-slate-700 mt-3 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm text-brand-orange hover:text-brand-orange/80 font-medium">Edit</button>
                  <button className="text-sm text-red-600 hover:text-red-800 font-medium">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

