import { Navigate, Outlet } from 'react-router-dom'

function AdminRoute() {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true'

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />
    }

    return <Outlet />
}

export default AdminRoute

