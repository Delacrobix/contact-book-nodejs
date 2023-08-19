import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { Queries } from '../Controllers/queries';
import ErrorAlert from '../components/errorAlert';
import Loading from '../components/loading';

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
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert />;
  }

  return (
    <div>
      <div className='tittle-container'>
        <h2>CONTACT LIST</h2>
      </div>
      <div className='row card-contact-container'>
        {contacts.map((contact) => {
          return <Card key={uuidv4()} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
