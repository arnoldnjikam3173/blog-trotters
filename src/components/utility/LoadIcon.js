import React from 'react'
import { GiSpellBook } from 'react-icons/gi'
import { FaRunning } from 'react-icons/fa'
import { GiCook } from 'react-icons/gi'
import { MdSportsEsports } from 'react-icons/md'

export default function LoadIcon ({icon}) {

    let display
    if (icon === 'cooking') {
        display = <GiCook size={45} />
    }
    else if (icon === 'video games') {
        display = <MdSportsEsports size={45} />
    }
    else if (icon === 'otaku') {
        display = <GiSpellBook size={45} />
    }
    else if (icon === 'sports') {
        display = <FaRunning size={45} />
    }
    return (
        <>
            <div className='card-head-icon'>
                {display}
            </div>
        </>
        )
}

