import { ThemesProvider } from '@kaliber/theming'
import { themes, ThemeLegacy, ThemeBrand, ThemeContrast, ThemeDefault } from '/components/theme/Theme'
import { Box } from '/components/box/Box'
import { CurrentColor } from '/components/CurrentColor'
import { Highlight } from '/components/Highlight'
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
      <h1>Some text, because we need body</h1>
      <p>Initially, using the legacy color scheme</p>

      <ThemeBrand>
        <Box>
          <h2>This is the first theme</h2>
          <strong>The color of this box is <CurrentColor /></strong>
          <p>Lorem ipsum dolor sit amet <Highlight>consectetur adipisicing</Highlight> elit. Doloremque asperiores cupiditate itaque inventore ab illo corporis cum unde totam fuga molestiae nemo autem, ut ullam vero amet quo atque facere!</p>
        </Box>
      </ThemeBrand>

      <ThemeContrast>
        <Box>
          <h2>This is the second theme</h2>
          <strong>The color of this box is <CurrentColor /></strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque <Highlight>asperiores</Highlight> cupiditate itaque inventore ab illo corporis cum unde totam fuga molestiae nemo autem, ut ullam vero amet quo atque facere!</p>

          <ThemeDefault>
            <Box>
              <h2>This is a nested theme</h2>
              <strong>The color of this box is <CurrentColor /></strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Highlight>Doloremque asperiores cupiditate</Highlight> itaque inventore ab illo corporis cum unde totam fuga molestiae nemo autem, ut ullam vero amet quo atque facere!</p>

              <ThemeBrand>
                <Box>
                  <h2>This is another level of nesting</h2>
                  <strong>You can nest as deep as you want</strong>
                  <p>Lorem ipsum dolor sit amet <Highlight>consectetur adipisicing</Highlight> elit. Doloremque asperiores cupiditate itaque inventore ab illo corporis cum unde totam fuga molestiae nemo autem, ut ullam vero amet quo atque facere!</p>
                </Box>
              </ThemeBrand>
            </Box>
          </ThemeDefault>
        </Box>
      </ThemeContrast>

      {/* This will trhow an error: */}
      {/* <ThemeLegacy>
        <Box>
          <h2>This is the second box</h2>
          <strong>The color of this box is <CurrentColor /></strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores cupiditate itaque inventore ab illo corporis cum unde totam fuga molestiae nemo autem, ut ullam vero amet quo atque facere!</p>
        </Box>
      </ThemeLegacy> */}
    </div>
  )
}
