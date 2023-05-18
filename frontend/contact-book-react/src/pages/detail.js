import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Queries } from '../Controllers/queries/queries';
import { useQuery, useMutation } from '@apollo/client';
import ErrorAlert from '../components/errorAlert';

const Detail = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const { data, loading, error } = useQuery(Queries.findOneQuery(id));
  const [deleteMutation, delObjectResponse] = useMutation(
    Queries.deleteMutation(id)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  const contact = data.getContact;
  const { name, phoneNumber, email, birthDate } = contact;

  function handleClickEdit() {
    navigation('/', { state: { contact } });
  }

  function handleClickDelete(event) {
    event.preventDefault();

    deleteMutation({ variables: { id } })
      .then((response) => {
        alert(response.data.deleteById);

        navigation('/contacts');
      })
      .catch((error) => {
        console.error(error);
        return <ErrorAlert />;
      });

    if (delObjectResponse.loading) {
      return <p>loading...</p>;
    }
    if (delObjectResponse.error) {
      return <ErrorAlert />;
    }
  }

  return (
    <div>
      <div className='tittle-container'>
        <h1>CONTACT INFORMATION</h1>
      </div>
      <div id='contact-container'>
        <div className='card-contact'>
          <div className='card text-center'>
            <div className='card-header'>
              <ul className='nav nav-pills card-header-pills'>
                <li className='nav-item'>
                  <p
                    className='btn btn-outline-info'
                    id='edit-btn'
                    onClick={handleClickEdit}
                  >
                    Edit
                  </p>
                </li>
                <li className='nav-item'>
                  <p
                    className='btn btn-outline-info'
                    id='delete-btn'
                    type='input'
                    onClick={handleClickDelete}
                  >
                    Delete
                  </p>
                </li>
              </ul>
            </div>
            <div className='card-body'>
              <div>
                <label className='fw-bold'>Name: </label>
                <span className='text-center'>{' ' + name}</span>
              </div>
              <div>
                <label className='fw-bold'>Number: </label>
                <span className='text-center'>{' ' + phoneNumber}</span>
              </div>
              <div>
                <label className='fw-bold'>Email: </label>
                <span className='text-center'>{' ' + email}</span>
              </div>
              <div>
                <label className='fw-bold'>birth Date: </label>
                <span className='text-center'>{' ' + birthDate}</span>
              </div>
              <Link
                className='btn btn-outline-info'
                id='return-button'
                to='/contacts'
              >
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
