import { useState } from 'react'
import ChangePassword from './ChangePassword'

function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'Multiage Technologies',
    siteEmail: 'info@multiagetechnologies.com',
    sitePhone: '+233 27 700 1023',
    siteAddress: 'Accra, Ghana',
    maintenanceMode: false,
    allowRegistrations: true,
  })

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
        <p className="text-slate-600 mt-1">Manage website settings and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange('siteName', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
            <input
              type="email"
              value={settings.siteEmail}
              onChange={(e) => handleChange('siteEmail', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Contact Phone</label>
            <input
              type="tel"
              value={settings.sitePhone}
              onChange={(e) => handleChange('sitePhone', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
            <input
              type="text"
              value={settings.siteAddress}
              onChange={(e) => handleChange('siteAddress', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">System Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-slate-700">Maintenance Mode</label>
              <p className="text-sm text-slate-500">Put the website in maintenance mode</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => handleChange('maintenanceMode', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-slate-700">Allow User Registrations</label>
              <p className="text-sm text-slate-500">Enable or disable user registration</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.allowRegistrations}
                onChange={(e) => handleChange('allowRegistrations', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Security</h3>
        <ChangePassword />
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings

