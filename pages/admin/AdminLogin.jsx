import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyAdminCredentials, initializeAdminCredentials, getDefaultCredentials } from '../../utils/adminCredentials'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showCredentials, setShowCredentials] = useState(false)
  const [defaultCreds, setDefaultCreds] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Initialize admin credentials on component mount
    initializeAdminCredentials()
    const creds = getDefaultCredentials()
    setDefaultCreds(creds)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Verify credentials using the credentials utility
      const result = verifyAdminCredentials(email.trim(), password)

      if (result.success) {
        localStorage.setItem('adminAuth', 'true')
        localStorage.setItem('adminUser', JSON.stringify(result.user))
        setTimeout(() => {
          setIsLoading(false)
          navigate('/admin/dashboard')
        }, 500)
      } else {
        setIsLoading(false)
        setError(result.error || 'Invalid email or password')
      }
    } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-lg bg-brand-orange flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
            </div>
            <p className="text-white/70 text-sm">Multiage Technologies</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                placeholder="admin@multiagetechnologies.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => setShowCredentials(!showCredentials)}
              className="w-full text-center text-white/70 hover:text-white text-sm transition-colors"
            >
              {showCredentials ? 'Hide' : 'Show'} Default Credentials
            </button>
            {showCredentials && defaultCreds && (
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-white/90 text-sm font-medium mb-2">Default Admin Credentials:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">Email:</span>
                    <span className="text-white font-mono">{defaultCreds.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">Password:</span>
                    <span className="text-white font-mono">{defaultCreds.password}</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-3">
                  ⚠️ Change these credentials after first login for security
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

