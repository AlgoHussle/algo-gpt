import SideBar from '../components/SideBar'
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
        <div className='flex'> 
        <div><SideBar /></div>
        
        {/* ClientProvider - notfication */}

        <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
        
        </body>
    </html>
  )
}
