import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div className='w-full h-16 sticky top-0 z-10'>
            <div className='container mx-auto px-4 h-full'>
                <div className='flex justify-between items-center h-full'>
                    <Link href={`#AboutUs`}>About Us</Link>
                    <Link href={`#Contact`}>Contact</Link>
                    <Link href={`/`}>Experiences</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav