import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom'

const Home = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const localNoteData = localStorage.getItem('notesbooth-notes-data');
        if (localNoteData != null) {
            setNotes(JSON.parse(localNoteData));
        }
    }, [])
    return (
        <div className='px-4 pt-2 pb-6 flex flex-col gap-2 w-full min-h-screen'>
            <h4 className='font-Roboto font-semibold'>All Notes</h4>
            <div className='flex flex-wrap justify-between gap-y-6'>
                {/* notes-card-starts */}
                {
                    notes.length < 1 ?

                        <div className='relative p-2 rounded-xl flex flex-col min-h-40 h-60 overflow-hidden w-[46%] bg-mainColor text-primaryBg'>
                            <div className='flex flex-col h-[85%] py-1'>
                                <span className='font-semibold border-b'>Create a note</span>
                                <span className='pl-2 overflow-y-auto'>Use your creativity & start writing your ideas on NotesBooth.</span>
                            </div>
                        </div>
                        :
                        notes.map((props, index) => {
                            return (
                                <div key={index} className='relative p-2 rounded-xl flex flex-col min-h-40 h-60 overflow-hidden w-[46%] bg-mainColor text-primaryBg'>
                                    <div className='flex flex-col h-[85%] py-1'>
                                        <span className={`font-semibold ${props.title !== '' && ' border-b'}`}>{props.title}</span>
                                        <span className='pl-1'>{props.body}</span>
                                    </div>
                                    <div className='absolute bottom-1 right-1 w-full p-1 flex items-center justify-end'>
                                        <span className='text-2xl'>
                                            <MdDelete />
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                }
                {/* notes-card-ends */}
            </div>
            <Link to={'/addnote'} className='bg-buttonColor rounded-full p-1 text-primaryBg text-4xl fixed bottom-10 right-10'>
                <FaPlus />
            </Link>
        </div>
    )
}

export default Home