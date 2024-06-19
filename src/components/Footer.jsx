import React from 'react'
import { FaRegCopyright, FaGithub, FaInstagram, FaLinkedinIn, FaDribbble } from "react-icons/fa6";

const Footer = () => {
    const mySocials = [
        {
            icon: <FaGithub />,
            link: 'https://github.com/iamanandabastakoti',
        },
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/iamanandabastakoti/',
        },
        {
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/in/anandabastakoti/',
        },
        {
            icon: <FaDribbble />,
            link: 'https://dribbble.com/anandabastakoti'
        }
    ]
    return (
        <div className='bg-mainColor text-primaryBg min-h-20 flex flex-col justify-center items-center py-4 font-Roboto'>
            <div className='flex gap-1 items-center text-sm'>
                <FaRegCopyright /> 2024 &nbsp; NotesBooth - All Rights Reserved
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-2 text-md'>
                <span>
                    Designed and Coded by - Ananda Bastakoti
                </span>
                <div className='flex gap-6 text-lg'>
                    {
                        mySocials.map((props, index) => {
                            return (
                                <a key={index} href={props.link} target='_blank'>
                                    {props.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer