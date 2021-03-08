import React from 'react'

const ThemesContext = React.createContext(null)

export function useThemes() {
  return React.useContext(ThemesContext)
}

export function ThemesProvider({ themes, children }) {
  if (!themes) throw new Error("No themes provided")
  return <ThemesContext.Provider value={themes} {...{ children }} />
}

