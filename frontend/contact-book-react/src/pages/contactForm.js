import React from 'react';
import Form from '../components/form';
import FormEdit from '../components/formEdit';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();

  let isEdit = false;
  let contact;
  let form;

  if (location.state) {
    contact = location.state.contact;
    form = <FormEdit contact={contact} />;

    isEdit = true;
  } else {
    form = <Form />;
  }

  return (
    <div>
      <div className='tittle-container'>
        <h1>{isEdit ? 'EDIT CONTACT' : 'CREATE NEW CONTACT'}</h1>
      </div>
      {form}
    </div>
  );
};

export default ContactForm;
