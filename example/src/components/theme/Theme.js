import { useThemes, useTheme, ThemeProvider } from '@kaliber/theming'

import defaultTheme from './default.css'
import brandTheme from './brand.css'
import contrastTheme from './contrast.css'

export const themes = {
  default: defaultTheme,
  brand: brandTheme,
  contrast: contrastTheme,
  legacy: {
    backgroundColor: 'colorScheme-backgroundColor',
    textColor: 'colorScheme-textColor',
    accentColor: 'colorScheme-accentColor'
  }
}

export function ThemeDefault({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.default} {...{ children }} />
}

export function ThemeBrand({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.brand} {...{ children }} />
}

export function ThemeContrast({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.contrast} {...{ children }} />
}

export function ThemeLegacy({ children }) {
  const themes = useThemes()
  const theme = useTheme()
 
  if (theme === themes.legacy) throw new Error('You cannot nest legacy themes')

  return (
    <ThemeProvider theme={themes.legacy} {...{ children }} />
  )
}