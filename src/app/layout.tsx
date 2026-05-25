import '../shared/styles/globals.css'

export const metadata = {
  title: 'Word Trainer',
}

export default function GlobalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className="h-full antialiased bg-black text-white text-base leading-relaxed"
    >
      <body className="h-full">
        {children}
      </body>
    </html>
  )
}
