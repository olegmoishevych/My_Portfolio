import React from 'react';
import style from "./Footer.module.scss";
import GitHub from '../assets/image/GitHub.png'
import telegram from '../assets/image/telegram.png'
import gmail from '../assets/image/gmail.png'
import {Title} from "../common/components/title/Title";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Title text={'Oleh Moishevych'}/>
        <div className={style.socialIcons}>
          <div className={style.socialIcon}>
            <a href={'https://github.com/olegmoishevych?tab=repositories'} target={'_blank'} rel="noreferrer">
              <img src={GitHub} alt='GitHub'/>
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href={'https://t.me/oleg_moishevych'} target={'_blank'} rel="noreferrer">
              <img src={telegram} alt='Telegram'/>
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href={'mailto:olegmoishevych@gmail.com'} target={'_blank'} rel="noreferrer">
              <img src={gmail} alt='Gmail'/>
            </a>
          </div>
        </div>
        <span className={style.copyright}>© 2022 All Rights Reserved</span>
      </div>
    </div>
  )
}
