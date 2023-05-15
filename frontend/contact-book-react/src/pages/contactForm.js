import React from 'react';
import Form from '../components/form';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  let contact;

  if (location.state) {
    contact = location.state.contact;
  }

  return (
    <div>
      <div className='tittle-container'>
        <h1>Create new contact</h1>
      </div>
      <Form contact={contact} />
    </div>
  );
};

export default ContactForm;
