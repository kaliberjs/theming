import React from 'react'
import { ThemeProvider } from './Theme'

const ThemesContext = React.createContext(null)

export function useThemes() {
  return React.useContext(ThemesContext)
}

export function ThemesProvider({ themes, default: theme, children }) {
  if (!themes) throw new Error('No themes provided')
  if (!theme) throw new Error('No default theme given')
  
  return (
    <ThemesContext.Provider value={themes}>
      <ThemeProvider {...{ theme, children }} />
    </ThemesContext.Provider>
  )
}

