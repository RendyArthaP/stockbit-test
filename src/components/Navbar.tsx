import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div 
      className="bg-green-500 h-16" 
      data-testid="navbar"
    >
      <main className="flex flex-row justify-between max-w-7xl mx-auto p-4">
        <BrowserRouter>
          <Link to="/">
            <h1 className="text-white font-bold text-2xl">
              OMDb
            </h1>
          </Link>
        </BrowserRouter>
        <main className="flex">
          <h2 className="text-white font-bold text-xl mx-4">
            Movies
          </h2>
          <h2 className="text-white font-bold text-xl">
            Collection
          </h2>
        </main>
      </main>
    </div>
  )
}

export default Navbar
