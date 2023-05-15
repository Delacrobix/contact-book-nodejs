import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
  const [text, setText] = useState([]);
  const { contact } = props;

  useEffect(() => {
    let content = [];
    if (contact) {
      content = [
        contact.name,
        contact.phoneNumber,
        contact.email,
        contact.birthDate,
      ];

      setText(content);
    }
  }, [contact]);

  function handleChange(event) {
    const content = [event.target.value];
    setText(content);
    console.log('contact: ', contact);
  }

  // console.log(text);

  return (
    <div>
      <form className='container text-center form-contact'>
        <h4>Ingrese los valores solicitados</h4>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-name'
            type='text'
            value={text.shift() || ''}
            onChange={handleChange}
            placeholder={'Name'}
            aria-label='Username'
            aria-describedby='basic-addon1'
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-number'
            type='number'
            value={text.shift() || ''}
            onChange={handleChange}
            placeholder='Numero'
            aria-label='Server'
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-email'
            type='email'
            value={text.shift() || ''}
            onChange={handleChange}
            placeholder='Email'
            aria-label='Username'
            required
          />
        </div>
        <div className='input-group'>
          <span className='input-group-text'>Birth Date</span>
          <input
            className='form-control'
            id='input-date'
            type='date'
            value={text.shift() || ''}
            onChange={handleChange}
            aria-label='With textarea'
            required
          />
        </div>
        <Link className='btn btn-outline-info form-submit' type='submit'>
          Send
        </Link>
      </form>
    </div>
  );
};

export default Form;
