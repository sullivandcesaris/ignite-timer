import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <h2>Hello World!</h2>

        <GlobalStyle />
    </ThemeProvider>
  )
}
