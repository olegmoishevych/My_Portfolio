import React from 'react';
import style from './Nav.module.scss';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to='main'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}>Main</Link>
            <Link
                activeClass={style.active}
                to='skills'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}>Skills</Link>
            <Link
                activeClass={style.active}
                to='footer'
                spy={true}
                smooth={true}
                offset={1}
                duration={500}>Contacts</Link>
        </div>
    );
}

