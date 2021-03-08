import { ThemesProvider } from '@kaliber/theming'
import { themes, ThemeLegacy } from '/components/Theme'
import styles from './App.css'

export default function AppProvider() {
  return (
    <ThemesProvider {...{ themes }}>
      <ThemeLegacy>
        <App />
      </ThemeLegacy>
    </ThemesProvider>
  )
}

function App() {
  return (
    <div className={styles.component}>
      Hello
    </div>
  )
}
