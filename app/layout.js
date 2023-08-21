import './globals.css'
import { DM_Sans } from 'next/font/google'

const DM = DM_Sans({
  weight: ["400", "500", "700"],
  preload: false
});

export const metadata = {
  title: 'Jesse Beke - Front End Developer',
  description: 'Front End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DM.className}>{children}</body>
    </html>
  )
}
