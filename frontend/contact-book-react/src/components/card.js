import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { contact } = props;
  const { id, name, phoneNumber } = contact;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/detail/${name}`, {
      state: { id: id },
    });
  }

  return (
    <div className='col-sm-6 card-contact-container'>
      <div className='card text-center'>
        <div className='card-header'>
          <ul className='nav nav-pills card-header-pills'></ul>
        </div>
        <div className='card-body'>
          <div>
            <label className='fw-bold'>{'Name: '}</label>
            <span className='text-center' id='out-name'>
              {' ' + name}
            </span>
          </div>
          <div>
            <label className='fw-bold'>Number: </label>
            <span className='text-center' id='out-number'>
              {' ' + phoneNumber}
            </span>
          </div>
          <p
            className='btn btn-outline-info'
            id='detail-btn'
            onClick={handleClick}
          >
            Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
