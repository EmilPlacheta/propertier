import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  //state for show the 'update component/form'

  const { deleteContact, setCurrent, clearCurrent } = contactContext;
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
          <ul>
            {tenant !== ' ' ? (
              <li>
                <div className='col s2'>
                  <span className='grey-text text-darken-2'>Tenant: </span>
                </div>
                <div className='col s8 offset-s1'>{tenant}</div>
              </li>
            ) : null}
            {rent !== ' ' ? (
              <li>
                <div className='col s2'>
                  <span className='grey-text text-darken-2'>Rent: </span>
                </div>
                <div className='col s8 offset-s1'>{rent}</div>
              </li>
            ) : null}
            {stage !== ' ' ? (
              <li>
                <div className='col s2'>
                  <span className='grey-text text-darken-2'>Stage: </span>
                </div>
                <div className='col s8 offset-s1'>{stage}</div>
              </li>
            ) : null}
          </ul>
        </div>
        <div className='card-action'>
          <a href='#!'>
            <button
              className='btn grey darken-3 btn-small'
              onClick={() => setCurrent(contact)}
            >
              Edit
            </button>
          </a>

          <a href='#!'>
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
