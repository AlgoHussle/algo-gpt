import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div>
        
        {/* Side}
        {children}
        </div>
        
        </body>
    </html>
  )
}
