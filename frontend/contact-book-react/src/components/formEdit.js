import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';
import ErrorAlert from './errorAlert';

const FormEdit = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
  });
  const { contact } = props;

  const navigation = useNavigate();

  const [insertMutation, { error, loading }] = useMutation(
    Queries.insertMutation(formData)
  );

  useEffect(() => {
    if (contact) {
      const { name, phoneNumber, email, birthDate } = contact;
      setFormData({
        name,
        phoneNumber,
        email,
        birthDate,
      });
    }
  }, [contact]);

  function handleChange(event, field) {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    insertMutation({ variables: { formData } })
      .then((response) => {
        alert(response.data.insert);

        navigation('/contacts');
      })
      .catch((error) => {
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
    <div>
      <form
        className='container text-center form-contact'
        onSubmit={handleSubmit}
      >
        <h4>Ingrese los valores solicitados</h4>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            id='input-name'
            type='text'
            value={formData.name}
            onChange={(e) => handleChange(e, 'name')}
            placeholder='Name'
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
            value={formData.phoneNumber}
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
            value={formData.email}
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
            value={formData.birthDate}
            onChange={(e) => handleChange(e, 'birthDate')}
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

export default FormEdit;
