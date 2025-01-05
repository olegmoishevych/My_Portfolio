import React from 'react';
import style from './Contacts.module.scss';
import { useForm } from 'react-hook-form';
import { Title } from '../common/components/title/Title';
import { Button } from '../common/components/button/Button';
const Fade = require('react-reveal/Fade');

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export const Contacts = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

  const sendTelegramMessage = async (data: IFormInputs) => {
    const TELEGRAM_API = 'https://api.telegram.org';
    const ACCESS_TOKEN = '6690057162:AAEDTusfCHZ0rJw-s12Cga03njJxvKhaMCM';
    const CHAT_ID = '@Portfolio_father_bot';
    const text = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

    const response = await fetch(`${TELEGRAM_API}/bot${ACCESS_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    return response.json();
  };

  const onSubmit = (data: IFormInputs, e: any) => {
    e.preventDefault();
    sendTelegramMessage(data).then(response => {
      alert('Thank you for your message');
    }).catch(error => {
      alert('Failed to send message');
    });
    e.target.reset();
  };

  return (
    <div id='contacts' className={style.contactsBlock}>
      <div className={style.container}>
        <Fade top>
          <Title text={'Contacts'} />
        </Fade>
        <Fade>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)} id={'contact-form'}>
            <input placeholder={'Your name'} type={'text'} className={style.formArea} {...register('name', { required: true })} />
            {errors.name && <p style={{ color: '#fff' }}>Name is required</p>}
            <input {...register('email', {
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })} placeholder={'E-mail'} type={'text'} className={style.formArea} />
            {errors.email && <p style={{ color: '#fff' }}>{errors.email.message}</p>}
            <textarea {...register('message', { required: true })} placeholder={'Your message'} className={style.messageArea} />
            <Button type='submit' buttonTitle={'Send message'} />
          </form>
        </Fade>
      </div>
    </div>
  );
};
