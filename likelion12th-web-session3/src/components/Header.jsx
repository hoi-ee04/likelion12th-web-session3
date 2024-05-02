import React from 'react';
import myface from './image/myface.jpg';

function Header({darkMode, toggleDarkMode}) {
    return (
        <div className="mainbox">
            <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
            <a href="https://www.instagram.com/hoi._.ee/">
                <img className='myface' src={myface} alt=""/>
            </a>
            <h1>Heelim, Chae</h1>   
            <p className ="title">Major. Information Communication Engineering</p>
            <p className ="pic-insta">click this picture to enter my insta → </p>
        </div>
    );
}

export default Header;