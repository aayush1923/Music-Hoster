import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue()
    return (
        <div className='sidebar'>

                    <img className='sidebar_logo
                    'src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""></img>
                    <SidebarOption Icon={HomeIcon} title="Home"/>
                    <SidebarOption Icon={SearchIcon}title="Search"/>

                    <SidebarOption Icon={LibraryAddIcon}title="Library"/>
                    <br/>
                  
                    <strong className='sidebar_title'>PLAYLIST</strong>
                    <hr/>
                    {playlists?.items?.map(playlists=>(
                        <SidebarOption title={playlists.name}/>
                    ))}

        </div>
    )
}

export default Sidebar
