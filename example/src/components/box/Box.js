import { useTheme } from '@kaliber/theming'
import styles from './Box.css'

export function Box({ children }) {
  const theme = useTheme()

  return (
    <div className={cx(styles.component, theme.backgroundColor, theme.color)}>
      {children}
    </div>
  )
}
