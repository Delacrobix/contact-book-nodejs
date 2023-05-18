import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { useSubscription } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';

const ContactList = () => {
  const { data, error, loading } = useSubscription(Queries.getAllQuery);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (data) {
      setContacts(data.contactList);
      console.log(contacts);
    }
  }, [data, contacts]);

  if (loading) {
    return <p> Loading... </p>;
  }
  if (error) {
    return <p> Error.... </p>;
  }

  return (
    <div>
      <div className='tittle-container'>
        <h1>CONTACT LIST</h1>
      </div>
      <div className='row'>
        {contacts.map((contact) => {
          return <Card key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
