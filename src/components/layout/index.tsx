import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
        <main className="max-w-6xl mx-auto border h-screen">
          { children }
        </main>
      <Footer />
    </div>
  )
}

export default Layout

