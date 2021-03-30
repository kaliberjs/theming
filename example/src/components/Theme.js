import { ThemeProvider } from '@kaliber/theming'
import { themes } from '/themes'

export function ThemeDefault({ children }) {
  return <ThemeProvider theme={themes.default} {...{ children }} />
}

export function ThemeBrand({ children }) {
  return <ThemeProvider theme={themes.brand} {...{ children }} />
}

export function ThemeContrast({ children }) {
  return <ThemeProvider theme={themes.contrast} {...{ children }} />
}
