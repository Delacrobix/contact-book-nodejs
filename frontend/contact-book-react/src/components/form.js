import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [insertMutation, { error, loading }] = useMutation(
    Queries.insertMutation(formData)
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function HandleSubmit(event) {
    event.preventDefault();

    insertMutation({ variables: { formData } })
      .then((response) => {
        console.log('Mutation response: ', response);
      })
      .catch((error) => {
        console.error('Mutation error: ', error);
      });

    if (loading) {
      return <p>loading...</p>;
    }
    if (error) {
      return <p>ERROR</p>;
    }

    alert(insertMutation.data);
  }

  return (
    <div>
      <form
        className='container text-center form-contact'
        onSubmit={HandleSubmit}
      >
        <h4>Ingrese los valores solicitados</h4>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            name='name'
            id='input-name'
            type='text'
            onChange={handleChange}
            placeholder='Name'
            aria-label='Username'
            aria-describedby='basic-addon1'
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            name='phoneNumber'
            id='input-number'
            type='number'
            onChange={handleChange}
            placeholder='Numero'
            aria-label='Server'
            required
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            name='email'
            id='input-email'
            type='email'
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
            name='birthDate'
            id='input-date'
            type='date'
            onChange={handleChange}
            aria-label='With textarea'
            required
          />
        </div>
        <button className='btn btn-outline-info form-submit' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
