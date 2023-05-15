import React, { useState } from 'react';
import Card from '../components/card';
import { useQuery } from '@apollo/client';
import { Queries } from '../Controllers/queries/queries';

const ContactList = () => {
  const { data, error, loading } = useQuery(Queries.getAllQuery);
  const [cards, setCards] = useState();

  console.log('DATA: ', data);
  const stack = [];
  componentDidMount(){
    
    data.contactList.map((contact) => {
      stack.push(<Card contact={contact} />);
    });
  }
  
  setCards(stack);

  // if (error) {
  //   return <span style={{ color: 'red' }}>{error}</span>;
  // }

  return (
    <div>
      <div className='tittle-container'>
        <h1>CONTACT LIST</h1>
      </div>
      <div className='row'>{cards}</div>
    </div>
  );
};

export default ContactList;
