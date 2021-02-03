import React from 'react'
import './Header.css'
import FaceIcon from '@material-ui/icons/Face'
import IconBbutton from '@material-ui/core/IconButton' 
import headerlogo from './headerlogo.png'
import ListAltIcon from '@material-ui/icons/ListAlt'

function Header() {
    return (
        <div className='header'>
            <IconBbutton>
             <FaceIcon fontSize='large' className='header_icon'/>
            </IconBbutton>

            <img 
                className='header_logo'
                src={headerlogo}
            />

            <IconBbutton>
             <ListAltIcon fontSize='large' className='header_icon'/>
            </IconBbutton>
            
        </div>
    )
}

export default Header
