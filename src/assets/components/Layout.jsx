import React from 'react'

const Layout = ({children}) => {
    const [ Header , Main , Footer] = children
  return (
    <main className='flex w-screen	h-screen flex-col items-initial'>
        <header>{Header}</header>
        <main>{Main}</main>
        <footer>{Footer}</footer>

    </main>
  )
}

export default Layout