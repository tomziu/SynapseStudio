import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Synapse Studio',
    short_name: 'Synapse',
    description: 'Tworzę szybkie, nowoczesne strony internetowe i sklepy e-commerce, które zdobywają klientów.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
