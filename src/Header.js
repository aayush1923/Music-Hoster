import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon/>
                <input placeholder="search Artists,songs,albums" type="text"/>

            </div> 
             <div className="header_right"> 
                <AccountCircleIcon/>
                <h4>user</h4>

            
            </div>
        </div>
    )
}

export default Header
