import { useState } from 'react'

function Services() {
  const [services] = useState([
    { id: 1, title: 'Enterprise solutions', description: 'Comprehensive IT infrastructure and system solutions for large-scale operations.', status: 'active' },
    { id: 2, title: 'Mobile App & Web Design', description: 'We create stable and secure app and websites and also host websites', status: 'active' },
    { id: 3, title: 'Mobile & PC Services', description: 'Complete mobile and PC device care and recovery services', status: 'active' },
    { id: 4, title: 'Device Hub', description: 'We sell quality Mobile devices, PCs and Accessories at affordable prices.', status: 'coming-soon' },
    { id: 5, title: 'Graphic Design', description: 'Identity suites, pitch decks, experiential signage, and campaigns', status: 'active' },
    { id: 6, title: 'Secure Network Installation', description: 'Structured cabling, campus Wi-Fi, firewalls and monitoring', status: 'active' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Services Management</h2>
          <p className="text-slate-600 mt-1">Manage your service offerings</p>
        </div>
        <button className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium">
          Add New Service
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{service.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 max-w-md truncate">{service.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      service.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status === 'active' ? 'Active' : 'Coming Soon'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-brand-orange hover:text-brand-orange/80 mr-4">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Services

