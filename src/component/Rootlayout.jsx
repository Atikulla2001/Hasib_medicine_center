import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../component/Sidebar'

const Rootlayout = () => {
    return (
        <main className='flex gap-3'>
            <Sidebar />
            <Outlet />
        </main>

    )
}

export default Rootlayout