import React from 'react';
import Card from '../components/card';
import { useQuery } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';

const ContactList = () => {
  const { data, error, loading } = useQuery(Queries.getAllQuery);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error.... </p>;

  return (
    <div>
      <div className='tittle-container'>
        <h1>CONTACT LIST</h1>
      </div>
      <div className='row'>
        {data.contactList.map((contact) => {
          return <Card key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
