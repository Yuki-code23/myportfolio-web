// Utility functions

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Format date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Truncate text
export const truncate = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Check if element is in viewport
export const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Smooth scroll to element
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Validate email
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Get category color
export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Web Development': 'text-blue-400',
    'Mobile Development': 'text-green-400',
    'Design': 'text-purple-400',
    'UI/UX': 'text-pink-400',
    'Branding': 'text-gold',
  }
  return colors[category] || 'text-gray-400'
}
