import React from 'react';
import insta from './image/insta.png';
import github from './image/github.png';

function Link() {
    return (
        <div className='mainbox'>
            <section>
                <h2>&nbsp;</h2>
                <a href="https://www.instagram.com/hoi._.ee/"><img class="site-img" src={insta} alt=''/></a>
                <a href="https://github.com/hoi-ee04"><img class="site-img" src={github} alt=''/></a>
            </section>
        </div>
    );
}

export default Link;