import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Queries } from '../Controllers/queries';
import ErrorAlert from './errorAlert';

const FormEdit = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
  });

  const location = useLocation();

  const { id } = location.state;
  const { contact } = props;

  const navigation = useNavigate();

  const [editMutation, { error, loading }] = useMutation(
    Queries.editMutation(id, formData)
  );

  useEffect(() => {
    if (contact) {
      const { name, phoneNumber, email, birthDate } = contact;

      const date = new Date(parseInt(birthDate));

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      setFormData({
        name,
        phoneNumber,
        email,
        birthDate: `${year}-${month}-${day}`,
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

    editMutation({ variables: { id, formData } })
      .then((response) => {
        alert(response.data.editById);

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
  );
};

export default FormEdit;
