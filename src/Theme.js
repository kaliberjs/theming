const ThemeContext = React.createContext(null);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({ theme, children }) {
  return <ThemeContext.Provider value={theme} {...{ children }} />;
}
