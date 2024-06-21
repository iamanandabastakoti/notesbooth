import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewNote = () => {
    const { noteID } = useParams();
    const [allNotes, setAllNotes] = useState([]);
    const [singleNote, setSingleNote] = useState([]);
    const fetchSingleNote = () => {
        const newNote = allNotes.filter(note => note.id === noteID);
        setSingleNote(newNote);
    }
    useEffect(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' });
        setAllNotes(JSON.parse(localStorage.getItem('notesbooth-notes-data')));
    }, [])
    useEffect(() => {
        fetchSingleNote();
    }, [allNotes])
    return (
        <div className='min-h-screen p-4'>
            {
                singleNote.map((note, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-2'>
                            <p className={`font-semibold text-2xl ${note.title && 'py-2 border-b-2 h-20 overflow-y-auto'}`}>{note.title}</p>
                            <p className='text-lg px-2'>{note.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewNote