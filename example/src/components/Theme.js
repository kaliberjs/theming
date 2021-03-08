import { useThemes, ThemeProvider } from '@kaliber/theming'

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
