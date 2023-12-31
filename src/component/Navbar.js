import React from 'react';
import './home.css';
import icon from '../asset/icon.jpg';
import {Link} from 'react-router-dom';

import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';

const Navrbar=()=>{

    return(
        <div className='bar'>
        <ul className='list'>
        <li><img className="imgfoot" src={icon} alt=""/></li>
        <li><button style={{backgroundColor:'black',border:'none'}}><Link to="/"><MenuIcon
            className='menuicon'
            
        /></Link></button></li>
        <li><button style={{backgroundColor:'black',border:'none'}}><Link to="/formation"><GroupsIcon
            className='menuicon'
        /></Link></button></li>
          </ul>
         
          

        </div>
    )
}
export default Navrbar;