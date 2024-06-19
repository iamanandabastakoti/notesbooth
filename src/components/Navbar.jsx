import React from 'react'
import { FaEdit } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='sticky z-50 top-0 bg-mainColor p-2 px-4 flex items-center gap-1 shadow-lg min-h-14'>
            <FaEdit className='text-2xl' />
            <div className='font-TitleFont text-2xl font-semibold'>NotesBooth</div>
        </div>
    )
}

export default Navbar