import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div>
      <div className='tittle-container'>
        <h1>CONTACT INFORMATION</h1>
      </div>
      <div id='contact-container'>
        <div className='card-contact'>
          <div className='card text-center'>
            <div className='card-header'>
              <ul className='nav nav-pills card-header-pills'>
                <li className='nav-item'>
                  <Link className='btn btn-outline-info' id='edit-btn'>
                    Edit
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='btn btn-outline-info'
                    id='delete-btn'
                    type='input'
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
            <div className='card-body'>
              <div>
                <label className='fw-bold'>ID: </label>
                <label
                  className='text-center'
                  id='out-id'
                  text='contact.id'
                ></label>
              </div>
              <div>
                <label className='fw-bold'>Name: </label>
                <label className='text-center' text='contact.name'></label>
              </div>
              <div>
                <label className='fw-bold'>Number: </label>
                <label
                  className='text-center'
                  text='contact.phone_number'
                ></label>
              </div>
              <div>
                <label className='fw-bold'>Email: </label>
                <label className='text-center' text='contact.email'></label>
              </div>
              <div>
                <label className='fw-bold'>birth Date: </label>
                <label
                  className='text-center'
                  text='contact.birth_date'
                ></label>
              </div>
              <Link
                className='btn btn-outline-info'
                id='return-button'
                href='/contacts'
              >
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
