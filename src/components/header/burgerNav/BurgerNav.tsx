import React, { useState } from 'react';
import style from './BurgerNav.module.scss';
import { Link } from 'react-scroll';

export const BurgerNav = () => {
    const [openedMenu, setOpenedMenu] = useState(false);

    const links = [
        { to: 'main', label: 'Main' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'contacts', label: 'Contacts' },
    ];

    return (
        <div className={style.burgerNav}>
            <div className={`${style.burgerNavItems} ${openedMenu ? style.show : ''}`}>
                {links.map(({ to, label }) => (
                    <Link
                        key={to}
                        activeClass={style.active}
                        to={to}
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >
                        {label}
                    </Link>
                ))}
            </div>
            <div
                className={style.burgerBtn}
                onClick={() => setOpenedMenu(!openedMenu)}
            ></div>
        </div>
    );
};
