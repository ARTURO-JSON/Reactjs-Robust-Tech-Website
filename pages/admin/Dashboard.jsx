function Dashboard() {
  const stats = [
    { label: 'Total Services', value: '6', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'bg-blue-500' },
    { label: 'Team Members', value: '6', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'bg-green-500' },
    { label: 'Testimonials', value: '4', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', color: 'bg-purple-500' },
    { label: 'Contact Messages', value: '12', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'bg-orange-500' },
  ]

  const recentActivities = [
    { type: 'contact', message: 'New contact form submission from John Doe', time: '2 hours ago' },
    { type: 'service', message: 'Service "Enterprise Solutions" updated', time: '5 hours ago' },
    { type: 'team', message: 'Team member "Samuel Arthur" added', time: '1 day ago' },
    { type: 'testimonial', message: 'New testimonial from Kwame Jokoto', time: '2 days ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === 'contact' ? 'bg-blue-500' :
                activity.type === 'service' ? 'bg-green-500' :
                activity.type === 'team' ? 'bg-purple-500' : 'bg-orange-500'
              }`} />
              <div className="flex-1">
                <p className="text-slate-900 font-medium">{activity.message}</p>
                <p className="text-sm text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors">
              Add New Service
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors">
              Add Team Member
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors">
              View All Messages
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Website Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600">Total Visitors</span>
              <span className="font-semibold text-slate-900">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Page Views</span>
              <span className="font-semibold text-slate-900">5,678</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Bounce Rate</span>
              <span className="font-semibold text-slate-900">32%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Server Status</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Database</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Last Backup</span>
              <span className="text-sm text-slate-600">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

