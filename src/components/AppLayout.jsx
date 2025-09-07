import React from 'react'

export default function AppLayout({children}) {
  return (
    <div className='min-h-screen bg-[linear-gradient(180deg,black,#666666)]'>
      {children}
    </div>
  )
}
