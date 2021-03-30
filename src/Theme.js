import React from 'react'

const ThemeContext = React.createContext(null)

/**
 * @typedef {Object<string, string>} Theme
 * @property {string} backgroundColor
 * @property {string} color
 * @property {string} accentColor
 * @property {string} accentColorContrast
 * @property {string} [secondaryColor]
 * @property {string} [secondaryColorContrast]
 * @property {string} [focusColor]
 */

/**
 * @returns {Theme}
 */
export function useTheme() {
  return React.useContext(ThemeContext)
}

/**
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @param {Object} props.theme
 */
export function ThemeProvider({ children, theme }) {
  return <ThemeContext.Provider value={theme} {...{ children }} />
}

function NoTypeDefinitionFound() {
  const theme = useTheme()
  return null
}