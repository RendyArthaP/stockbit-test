import React from 'react'

const Footer = () => {
  const date = new Date()
  const dateUpdates = date.getFullYear()

  return (
    <div 
      className="bg-green-500 h-16" 
      data-testid="footer"
    >
      <main className="p-4">
        <h1 className="font-normal text-xl text-white text-center">
          OMDb © Copyright {dateUpdates}
        </h1>
      </main>
    </div>
  )
}

export default Footer
