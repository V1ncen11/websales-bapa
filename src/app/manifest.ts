import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Promo Pasang IndiHome Tasikmalaya',
    short_name: 'IndiHome Tasik',
    description: 'Aplikasi pendaftaran pasang baru WiFi IndiHome Tasikmalaya',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#E3000F',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
