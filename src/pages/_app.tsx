import '@/styles/globals.css'
import '@/styles/navbar.scss'
import '@/styles/accueil.scss'
import '@/styles/search.scss'
import '@/styles/agenda.scss'
import '@/styles/profil.scss'
import '@/styles/messages.scss'
import '@/styles/dashboard.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
