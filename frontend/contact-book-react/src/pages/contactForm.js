import React from 'react';
import Form from '../components/form';
import FormEdit from '../components/formEdit';
import { useLocation } from 'react-router-dom';
import ErrorAlert from '../components/errorAlert';

const ContactForm = () => {
  const location = useLocation();
  let contact;
  let form;

  if (location.state) {
    contact = location.state.contact;
    form = <FormEdit contact={contact} />;
  } else {
    form = <Form />;
  }

  return (
    <div>
      <div className='tittle-container'>
        <h1>Create new contact</h1>
      </div>
      {form}
    </div>
  );
};

export default ContactForm;
