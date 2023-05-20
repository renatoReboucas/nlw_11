import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable:'--font-roboto' })
const baiJamJuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jumjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo constuida com React, Next.js, TailwindCSS e TypesCript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamJuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
