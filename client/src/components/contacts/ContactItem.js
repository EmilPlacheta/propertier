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

  return (
    <div className='col s12 m6 l4'>
      <div className='card grey small lighten-5'>
        <div className='card-content'>
          <span className='card-title'>
            <h5>{propertyName}</h5>
          </span>
          <div className='divider'></div>
          <ul className='list'>
            <li> {tenant !== ' ' ? `Tenant: ${tenant}` : null}</li>
            <li> {rent !== ' ' ? `Rent: ${rent}` : null}</li>
            <li> {`Stage: ${stage}`}</li>
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
            <button
              className='btn-flat btn-small btn-delete right'
              onClick={onDelete}
            >
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
