import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addnote = () => {
    const [notesTitle, setNotesTitle] = useState('');
    const [notesBody, setNotesBody] = useState('');
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (notesBody !== '') {
            const newNoteData = {
                id: nanoid(),
                title: notesTitle,
                body: notesBody
            }
            const newNote = [...notes, newNoteData]
            localStorage.setItem('notesbooth-notes-data', JSON.stringify(newNote));
            navigate('/');
            toast.success('Note Added Successfully');
        } else {
            toast.error('Fill up the body');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' });
        const localNoteData = localStorage.getItem('notesbooth-notes-data');
        if (localNoteData != null) {
            setNotes(JSON.parse(localNoteData));
        }
    }, [])
    return (
        <div className='px-4 py-2 min-h-screen flex flex-col gap-3'>
            <h4 className='font-semibold underline'>Add a note</h4>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="title">Title</label>
                    <input placeholder='notes title here' id='title' name='body' type="text" className='bg-slate-100 outline-none p-2 rounded-lg' value={notesTitle} onChange={e => setNotesTitle(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="body">Body</label>
                    <textarea placeholder='notes body here' id='body' name='body' cols={30} rows={5} autoFocus className='bg-slate-100 outline-none p-2 rounded-lg resize-none' value={notesBody} onChange={e => setNotesBody(e.target.value)} />
                </div>
                <div className='flex justify-around items-center'>
                    <button type='submit' className='w-2/5 bg-buttonColor rounded-lg px-4 py-2 flex justify-center items-center active:scale-75 duration-500'>Add Note</button>
                    <button onClick={() => navigate('/')} className='w-2/5 bg-red-600 rounded-lg px-4 py-2 flex justify-center items-center active:scale-75 duration-500'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Addnote