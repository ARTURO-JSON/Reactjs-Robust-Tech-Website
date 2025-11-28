import { useState } from 'react'
import { changeAdminPassword } from '../../utils/adminCredentials'

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match')
            return
        }

        if (newPassword.length < 8) {
            setError('Password must be at least 8 characters long')
            return
        }

        setIsLoading(true)

        const result = changeAdminPassword(currentPassword, newPassword)

        if (result.success) {
            setSuccess(result.message)
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
        } else {
            setError(result.error)
        }

        setIsLoading(false)
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-md">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Change Password</h3>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                    </label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={8}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Changing Password...' : 'Change Password'}
                </button>
            </form>
        </div>
    )
}

export default ChangePassword

