import { useTheme, useThemes } from '@kaliber/theming'

export function CurrentColor() {
  const themes = useThemes()
  const theme = useTheme()

  return (
    theme === themes.default ? 'just a color' :
    theme === themes.brand ? 'a fancy brandcolor' :
    theme === themes.contrast ? 'a color with contrast' :
    theme === themes.legacy ? 'an unremarkable legacy color' :
    'not a color at all...'
  )
}