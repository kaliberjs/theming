import React from 'react'
import { useThemes } from './Themes'

const ThemeContext = React.createContext(null)

export function useTheme() {
  return React.useContext(ThemeContext)
}

export function ThemeProvider({ theme, children }) {
  const themes = useThemes()
  if (!(theme in themes)) throw new Error('Unknown theme provided')
  return <ThemeContext.Provider value={theme} {...{ children }} />
}
