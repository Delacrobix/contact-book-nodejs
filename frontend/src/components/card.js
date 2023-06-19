import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { contact } = props;
  const { id, name, phoneNumber, birthDate } = contact;
  const navigate = useNavigate();

  const date = new Date(parseInt(birthDate));

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  function handleClick() {
    navigate(`/detail/${name}`, {
      state: { id: id },
    });
  }
  return (
    <div className='contact-card' onClick={handleClick}>
      <div className='profile-img'>
        <img
          src='https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-48.png'
          alt='contact-img'
        />
      </div>
      <div className='contact-information'>
        <div className='textContent'>
          <p className='h1-name'>{name}</p>
          <span className='span'>{`${year}-${month}-${day}`}</span>
        </div>
        <p className='phone'>{phoneNumber}</p>
      </div>
    </div>
  );
};

export default Card;
