import '../styles/globals.css'
import lightTheme from '../styles/theme/lightTheme';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={lightTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
