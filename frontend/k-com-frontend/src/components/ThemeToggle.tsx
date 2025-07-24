import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border shadow bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
