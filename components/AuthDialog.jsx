import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyAdminCredentials } from '../utils/adminCredentials'

function AuthDialog({ isOpen, onClose, isDark }) {
  const navigate = useNavigate()
  const [view, setView] = useState('login') // 'login', 'signup', 'forgot-password'
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })

  if (!isOpen) return null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (view === 'login') {
      // Check if credentials match admin credentials
      const adminResult = verifyAdminCredentials(formData.email.trim(), formData.password)
      
      if (adminResult.success) {
        // Admin login - redirect to admin dashboard
        localStorage.setItem('adminAuth', 'true')
        localStorage.setItem('adminUser', JSON.stringify(adminResult.user))
        onClose()
        navigate('/admin/dashboard')
      } else {
        // Regular user login (implement your user authentication here)
        console.log('Regular user login:', formData)
        // You can add regular user authentication logic here
        // For now, just close the dialog
        onClose()
      }
    } else if (view === 'signup') {
      // Handle signup
      console.log('Signup:', formData)
      onClose()
    } else if (view === 'forgot-password') {
      // Handle forgot password
      console.log('Forgot password:', formData.email)
      onClose()
    }
  }

  const handleThirdPartyAuth = (provider) => {
    console.log(`Sign in with ${provider}`)
    // Implement third-party authentication
  }

  const dialogClasses = `fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`

  const backdropClasses = `absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
    }`

  const contentClasses = `relative w-full max-w-md rounded-3xl shadow-2xl transition-all duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'
    } ${isDark ? 'bg-black/90 border border-white/10' : 'bg-white border border-slate-200'}`

  const inputClasses = `w-full mt-2 px-4 py-3 rounded-xl outline-none border transition-colors ${isDark
    ? 'bg-white/5 text-white border-white/20 focus:border-brand-orange placeholder:text-white/40'
    : 'bg-slate-50 text-slate-900 border-slate-300 focus:border-brand-orange placeholder:text-slate-400'
    }`

  const buttonClasses = `w-full px-4 py-3 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange/90 transition-colors duration-200`

  const thirdPartyButtonClasses = `flex items-center justify-center w-12 h-12 rounded-full font-medium transition-all duration-200 ${isDark
    ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
    : 'bg-white border border-slate-300 text-slate-900 hover:bg-slate-50'
    }`

  return (
    <div className={dialogClasses}>
      {/* Backdrop */}
      <div className={backdropClasses} onClick={onClose} />

      {/* Dialog Content */}
      <div className={contentClasses}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${isDark ? 'text-white/70 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
            }`}
          aria-label="Close dialog"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {view === 'login' && 'Welcome Back'}
              {view === 'signup' && 'Create Account'}
              {view === 'forgot-password' && 'Reset Password'}
            </h2>
            <p className={`text-sm mb-3 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              {view === 'login' && 'Sign in to your account to continue'}
              {view === 'signup' && 'Sign up to get started with Multiage Technologies'}
              {view === 'forgot-password' && 'Enter your email to reset your password'}
            </p>
            {/* View Links */}
            {view !== 'forgot-password' && (
              <div className="flex items-center justify-center gap-3 text-sm">
                <button
                  onClick={() => setView('login')}
                  className={`font-medium transition-colors duration-200 ${view === 'login'
                    ? isDark
                      ? 'text-brand-orange'
                      : 'text-brand-orange'
                    : isDark
                      ? 'text-white/60 hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  Login
                </button>
                <span className={isDark ? 'text-white/30' : 'text-slate-300'}>|</span>
                <button
                  onClick={() => setView('signup')}
                  className={`font-medium transition-colors duration-200 ${view === 'signup'
                    ? isDark
                      ? 'text-brand-orange'
                      : 'text-brand-orange'
                    : isDark
                      ? 'text-white/60 hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Third-Party Authentication */}
          {view !== 'forgot-password' && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => handleThirdPartyAuth('google')}
                className={thirdPartyButtonClasses}
                aria-label="Sign in with Google"
                title="Sign in with Google"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleThirdPartyAuth('facebook')}
                className={thirdPartyButtonClasses}
                aria-label="Sign in with Facebook"
                title="Sign in with Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => handleThirdPartyAuth('github')}
                className={thirdPartyButtonClasses}
                aria-label="Sign in with GitHub"
                title="Sign in with GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Divider */}
          {view !== 'forgot-password' && (
            <div className="flex items-center gap-4 mb-6">
              <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
              <span className={`text-xs uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                Or
              </span>
              <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {view === 'signup' && (
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
            )}

            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>

            {view !== 'forgot-password' && (
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="••••••••"
                  className={inputClasses}
                />
              </div>
            )}

            {view === 'signup' && (
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="••••••••"
                  className={inputClasses}
                />
              </div>
            )}

            {view === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-brand-orange focus:ring-brand-orange"
                  />
                  <span className={`text-sm ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => setView('forgot-password')}
                  className={`text-sm font-medium transition-colors ${isDark ? 'text-brand-orange hover:text-brand-orange/80' : 'text-brand-orange hover:text-brand-orange/80'
                    }`}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className={buttonClasses}>
              {view === 'login' && 'Sign In'}
              {view === 'signup' && 'Create Account'}
              {view === 'forgot-password' && 'Send Reset Link'}
            </button>
          </form>

          {/* Back to Login from Forgot Password */}
          {view === 'forgot-password' && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setView('login')}
                className={`text-sm font-medium transition-colors ${isDark ? 'text-brand-orange hover:text-brand-orange/80' : 'text-brand-orange hover:text-brand-orange/80'
                  }`}
              >
                ← Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthDialog

