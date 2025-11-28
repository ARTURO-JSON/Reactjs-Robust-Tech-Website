import { useState } from 'react'

function Team() {
  const [team] = useState([
    { id: 1, name: 'MR. JAPHET MENSAH', title: 'CEO', avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 2, name: 'MR. FRANCIS EWUSI IDUN-ARTHUR', title: 'Full Stack Mobile/Web Developer', avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg' },
    { id: 3, name: 'MR. SAMUEL ARTHUR', title: 'Administrator', avatar: 'https://randomuser.me/api/portraits/women/79.jpg' },
    { id: 4, name: 'MR. RUTHERFORD TETTEH', title: 'Finance Manager/ Graphic Designer', avatar: 'https://randomuser.me/api/portraits/women/63.jpg' },
    { id: 5, name: 'MR. RIDGE DELA', title: 'Full stack web/Mobile Developer', avatar: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { id: 6, name: 'MR. RENDERS NKETIA', title: 'Media Manager/ Secretary', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Team Management</h2>
          <p className="text-slate-600 mt-1">Manage your team members</p>
        </div>
        <button className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium">
          Add Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-brand-orange mt-1">{member.title}</p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm text-brand-orange hover:text-brand-orange/80 font-medium">Edit</button>
                  <button className="text-sm text-red-600 hover:text-red-800 font-medium">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

