/**
 * Admin Credentials Management
 * In production, this should be handled by a secure backend API
 */

// Default admin credentials (should be changed on first login)
const DEFAULT_ADMIN = {
  email: 'admin@multiagetechnologies.com',
  password: 'Admin@2024!', // Strong default password
  name: 'Administrator',
  role: 'super_admin',
  createdAt: new Date().toISOString(),
}

// Initialize admin credentials in localStorage if they don't exist
export function initializeAdminCredentials() {
  const stored = localStorage.getItem('adminCredentials')
  if (!stored) {
    const credentials = {
      ...DEFAULT_ADMIN,
      password: DEFAULT_ADMIN.password, // Store hashed in production
    }
    localStorage.setItem('adminCredentials', JSON.stringify(credentials))
    return credentials
  }
  return JSON.parse(stored)
}

// Get admin credentials
export function getAdminCredentials() {
  const stored = localStorage.getItem('adminCredentials')
  if (stored) {
    return JSON.parse(stored)
  }
  return initializeAdminCredentials()
}

// Verify admin credentials
export function verifyAdminCredentials(email, password) {
  try {
    const credentials = getAdminCredentials()
    
    // Normalize email (trim and lowercase for comparison)
    const normalizedInputEmail = email.trim().toLowerCase()
    const normalizedStoredEmail = credentials.email.trim().toLowerCase()
    
    // In production, passwords should be hashed and compared securely
    if (normalizedStoredEmail === normalizedInputEmail && credentials.password === password) {
      return {
        success: true,
        user: {
          email: credentials.email,
          name: credentials.name,
          role: credentials.role,
        }
      }
    }
    
    return {
      success: false,
      error: 'Invalid email or password. Please check your credentials and try again.'
    }
  } catch (error) {
    console.error('Error verifying credentials:', error)
    return {
      success: false,
      error: 'An error occurred during authentication. Please try again.'
    }
  }
}

// Update admin credentials
export function updateAdminCredentials(newCredentials) {
  const current = getAdminCredentials()
  const updated = {
    ...current,
    ...newCredentials,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem('adminCredentials', JSON.stringify(updated))
  return updated
}

// Change password
export function changeAdminPassword(currentPassword, newPassword) {
  const credentials = getAdminCredentials()
  
  if (credentials.password !== currentPassword) {
    return {
      success: false,
      error: 'Current password is incorrect'
    }
  }
  
  const updated = updateAdminCredentials({
    password: newPassword,
  })
  
  return {
    success: true,
    message: 'Password changed successfully'
  }
}

// Get default credentials for display (first time setup)
export function getDefaultCredentials() {
  return {
    email: DEFAULT_ADMIN.email,
    password: DEFAULT_ADMIN.password,
  }
}

