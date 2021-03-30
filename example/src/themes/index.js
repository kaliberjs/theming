import defaultTheme from '/themes/default.css'
import brandTheme from '/themes/brand.css'
import contrastTheme from '/themes/contrast.css'

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
