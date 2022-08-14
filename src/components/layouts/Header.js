import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const reload = (e) => {
        return e.preventDefault
    }

    return (
        <header>
            <div className='container head-flex'>
                <div className='head-logo'>
                    <div><Link to='/' >Blog-trotters </Link></div>

                    <div className='head-btn'>
                        {isOpen && <button onClick={(() => {setIsOpen(false)})} ><FaTimes size={30} /> </button>}
                        {!isOpen && <button onClick={(() => setIsOpen(true))}><FaBars size={30}/> </button>}
                    </div>
                </div>
                <div className= {isOpen ? 'active contents_ul' : 'hide contents_ul'}>
                    <ul>
                        <Link to='/' className='head-link' onClick={(() => {reload()})} >Home</Link>
                        <Link to='/blog' className='head-link' onClick={(() => {reload()})}>Blogs</Link>
                        <Link to='/contact' className='head-link' onClick={(() => {reload()})}>Contact</Link>
                        <Link to='/about' className='head-link' onClick={(() => {reload()})}>About</Link>
                        <Link to='/login' className='head-link' onClick={(() => {reload()})}>Sign in</Link>
                    </ul>
                </div>
                <div className= 'desktop'>
                    <ul>
                        <Link to='/' className='head-link' >Home</Link>
                        <Link to='/blog' className='head-link'>Blogs</Link>
                        <Link to='/contact' className='head-link'>Contact</Link>
                        <Link to='/about' className='head-link'>About</Link>
                        <Link to='/login' className='head-link'>Sign in</Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}
