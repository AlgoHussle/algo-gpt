import { SessionProvider } from '../components/SessionProvider'
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
        <SessionProvider>
        <div className='flex'> 
        <div className='bg-[#202123] max-w-xs h-screen
                        overflow-y-auto md:min-w-[20rem]'>
          <SideBar />
        </div>
        
        {/* ClientProvider - notfication */}

        <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
        </SessionProvider>
        </body>
    </html>
  );
}
