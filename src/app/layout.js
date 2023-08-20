import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ["400", "700"], subsets: ['latin'] })

export const metadata = {
  title: 'Frontend-mentor-newsletter',
  description: 'Frontend-mentor-newsletter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto .className}>{children}</body>
    </html>
  )
}
