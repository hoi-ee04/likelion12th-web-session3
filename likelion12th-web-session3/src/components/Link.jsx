import insta from './image/insta.png';
import github from './image/github.png';

function Link() {
    return (
        <div className='mainbox'>
            <section>
                <h2>&nbsp;</h2>
                <a href="https://www.instagram.com/hoi._.ee/"><img className="site-img" src={insta} alt="인스타그램 링크" /></a>
                <a href="https://github.com/hoi-ee04"><img className="site-img" src={github} alt="깃허브 링크" /></a>
                &nbsp;
            </section>
        </div>
    );
}

export default Link;