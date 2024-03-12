import React from 'react'
import { Header } from './Header/header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const MainLayout = () => {
    return (
        <>
            <header className='sticky top-0 bg-white  z-20'>
                <Header />
            </header>
            <main className='mt-[-40px]'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
