import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  //state for show the 'update component/form'

  const {
    deleteContact,
    setCurrent,
    clearCurrent,
    showUpdateForm,
    setShowUpdateForm
  } = contactContext;
  const { _id, propertyName, tenant, rent, stage } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  console.log(showUpdateForm + ' state from Contact Item');

  return (
    <div className='col s5'>
      <div className='card grey small lighten-5'>
        <div className='card-content'>
          <span className='card-title'>
            <h4>{propertyName}</h4>
          </span>
          <ul className='list'>
            <li> {tenant === null ? null : tenant}</li>
            <li> {rent !== ' ' ? `Rent: ${rent}` : null}</li>
          </ul>
        </div>
        <div className='card-action'>
          <a href='#'>
            <button
              className='btn grey darken-3 btn-small'
              onClick={() => setCurrent(contact)}
            >
              Edit
            </button>
          </a>

          <a>
            <button className='btn-flat btn-small' onClick={onDelete}>
              Delete
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
