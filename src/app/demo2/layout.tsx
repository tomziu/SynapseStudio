import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nike Hero Section - Demo | Synapse Studio',
  description: 'Interaktywne doświadczenie na pierwszej linii z klientem.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
