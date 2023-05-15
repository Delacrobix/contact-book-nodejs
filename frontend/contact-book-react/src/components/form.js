import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div>
      <form className='container text-center form-contact'>
        <h4>Ingrese los valores solicitados</h4>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-name'
            type='text'
            placeholder='Nombre del contacto'
            aria-label='Username'
            aria-describedby='basic-addon1'
            required='required'
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-number'
            type='number'
            placeholder='Numero'
            aria-label='Server'
            required='required'
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-email'
            type='email'
            placeholder='Email'
            aria-label='Username'
            required='required'
          />
        </div>
        <div className='input-group'>
          <span className='input-group-text'>Birth Date</span>
          <input
            className='form-control'
            id='input-date'
            type='date'
            aria-label='With textarea'
            required='required'
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
