import React from 'react'
import { MdMail } from 'react-icons/md'

export default function NewsLetter() {
    return (
        <div className='container'>
            <div className='news-letter'>
                <span>
                    <MdMail className='MdMail' size={40} />
                    <input type='text' placeholder='Email' className=''/>
                </span>
                <button type='button' >Envoyer</button>
            </div>
        </div>
    )
}
