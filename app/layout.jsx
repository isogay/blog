import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'thuaan blog',
  description: 'a blog site yep!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script 
          disable-devtool-auto="true"
          src='https://cdn.jsdelivr.net/npm/disable-devtool'
        ></script>
      </head>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
