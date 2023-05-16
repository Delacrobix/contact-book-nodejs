import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
  const [data, setData] = useState({});
  const [text, setText] = useState({});
  const { contact } = props;
  const aux = {
    name: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
  };

  useEffect(() => {
    setData(contact);
  }, [contact]);

  function handleChange(event, key) {
    const content = event.target.value; 

    aux[key] = content;
    contact[key] = content;

    setData(contact);
    setText(aux);

    if (content === '') {
      contact[key] = '';
      setData(contact);
    }
  }

  return (
    <div>
      <form className='container text-center form-contact'>
        <h4>Ingrese los valores solicitados</h4>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-name'
            type='text'
            value={text.name || data.name}
            onChange={(e) => handleChange(e, 'name')}
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
            value={text.phoneNumber || data.phoneNumber}
            onChange={(e) => handleChange(e, 'phoneNumber')}
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
            value={text.email || data.email}
            onChange={(e) => handleChange(e, 'email')}
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
            value={text.birthDate || data.birthDate}
            onChange={(e) => handleChange(e, 'birthDate')}
            aria-label='With textarea'
            required
          />
        </div>
        <Link className='btn btn-outline-info form-submit' type='submit' onClick={}>
          Send
        </Link>
      </form>
    </div>
  );
};

export default Form;
