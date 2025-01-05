import React from 'react';
import style from "./Footer.module.scss";
import GitHub from '../../assets/image/GitHub.png'
import linkedin from '../../assets/image/linkedin.png'
import telegram from '../../assets/image/telegram.png'
import gmail from '../../assets/image/gmail.png'
import {Title} from "../../common/components/title/Title";

const socialLinks = [
  { href: 'https://www.linkedin.com/in/olehmoishevych/', src: linkedin, alt: 'LinkedIn' },
  { href: 'https://github.com/olegmoishevych?tab=repositories', src: GitHub, alt: 'GitHub' },
  { href: 'https://t.me/oleh_moishevych', src: telegram, alt: 'Telegram' },
  { href: 'mailto:olegmoishevych@gmail.com', src: gmail, alt: 'Gmail' },
];

export const Footer = () => {
  return (
      <div id='footer' className={style.footer}>
        <div className={style.container}>
          <Title text="Contacts" />
          <div className={style.socialIcons}>
            {socialLinks.map(({ href, src, alt }, index) => (
                <div className={style.socialIcon} key={index}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <img src={src} alt={alt} />
                  </a>
                </div>
            ))}
          </div>
          <span className={style.copyright}>© 2025 All Rights Reserved</span>
        </div>
      </div>
  );
};
