import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { contact } = props;
  const { name, phoneNumber, email, birthDay } = props;

  return (
    <div>
      <div className='col-sm-6 card-contact-container'>
        <div className='card text-center'>
          <div className='card-header'>
            <ul className='nav nav-pills card-header-pills'></ul>
          </div>
          <div className='card-body'>
            <div>
              <label className='fw-bold'>Name: </label>
              <label className='text-center' id='out-name' text={name}></label>
            </div>
            <div>
              <label className='fw-bold'>Number: </label>
              <label
                className='text-center'
                id='out-number'
                text={phoneNumber}
              ></label>
            </div>
            <Link
              className='btn btn-outline-info'
              id='detail-btn'
              href='contacts/id'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
