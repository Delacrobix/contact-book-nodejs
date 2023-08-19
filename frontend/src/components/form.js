import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Queries } from '../Controllers/queries';
import ErrorAlert from './errorAlert';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [insertMutation, { error, loading }] = useMutation(
    Queries.insertMutation(formData)
  );
  const navigation = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    insertMutation({ variables: { formData } })
      .then((response) => {
        alert(response.data.insert);
        navigation('/contacts');
      })
      .catch((error) => {
        console.error(error);
        return <ErrorAlert />;
      });

    if (loading) {
      return <p>loading...</p>;
    }
    if (error) {
      return <ErrorAlert />;
    }
  }

  return (
    <form
      className='container text-center form-contact'
      onSubmit={handleSubmit}
    >
      <h4>Enter the request values</h4>
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
          placeholder='Phone number'
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
        <span className='input-group-text'>Birth date</span>
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
  );
};

export default Form;
