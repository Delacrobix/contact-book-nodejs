import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { useQuery } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';
import ErrorAlert from '../components/errorAlert';

const ContactList = () => {
  const { data, error, loading, refetch } = useQuery(Queries.getAllQuery);

  const [contacts, setContacts] = useState([{}]);

  useEffect(() => {
    if (data) {
      setContacts(data.contactList);
    }

    refetch();
  }, [data, refetch]);

  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <ErrorAlert />;
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
