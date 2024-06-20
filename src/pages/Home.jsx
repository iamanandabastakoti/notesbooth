import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='px-4 py-2 flex flex-col gap-2 w-full min-h-screen'>
            <h4 className='font-Roboto font-semibold'>All Notes</h4>
            <div className='flex flex-wrap justify-between gap-y-6'>
                {/* notes-card-starts */}
                <div className='relative p-2 rounded-xl flex flex-col min-h-40 h-60 overflow-hidden w-[46%] bg-mainColor text-primaryBg'>
                    <div className='flex flex-col h-[85%] py-1'>
                        <span className='font-semibold border-b'>Create a note</span>
                        <span className='pl-2 overflow-y-auto '>Use your creativity & start writing your ideas on NotesBooth.</span>
                    </div>
                </div>
                {/* notes-card-ends */}
            </div>
            <Link to={'/addnote'} className='bg-buttonColor rounded-full p-1 text-primaryBg text-4xl fixed bottom-10 right-10'>
                <FaPlus />
            </Link>
        </div>
    )
}

export default Home