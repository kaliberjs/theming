import { useTheme } from '@kaliber/theming'

export function Highlight({ children }) {
  const theme = useTheme()

  return (
    <span className={theme.accentColor}>{children}</span>
  )
}
