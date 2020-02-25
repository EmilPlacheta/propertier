import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const {
    addContact,
    updateContact,
    setShowUpdateForm,
    current,
    clearCurrent
  } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        propertyName: '',
        tenant: '',
        rent: '',
        stage: 'vacant'
      });
    }
  }, [contactContext, current]);

  //contact state
  const [contact, setContact] = useState({
    propertyName: ' ',
    tenant: ' ',
    rent: ' ',
    stage: ' '
  });

  const { propertyName, tenant, rent, stage } = contact;

  //form control
  function onChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
    setShowUpdateForm(false);
  }

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Property' : 'Add new property'}
      </h2>
      <input
        type='text'
        placeholder='Property name'
        name='propertyName'
        value={propertyName}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Tenants name'
        name='tenant'
        value={tenant}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Rent amount'
        name='rent'
        value={rent}
        onChange={onChange}
      />
      <h5>Stage:</h5>
      <input
        type='radio'
        name='stage'
        value='vacant'
        checked={stage === 'vacant'}
        onChange={onChange}
      />{' '}
      Vacant
      <input
        type='radio'
        name='stage'
        value='rented'
        checked={stage === 'rented'}
        onChange={onChange}
      />{' '}
      Rented
      <input
        type='radio'
        name='stage'
        value='renovation'
        checked={stage === 'renovation'}
        onChange={onChange}
      />{' '}
      Renovation
      <input
        type='radio'
        name='stage'
        value='for sale'
        checked={stage === 'for sale'}
        onChange={onChange}
      />{' '}
      For Sale
      <input
        type='radio'
        name='stage'
        value='sold'
        checked={stage === 'sold'}
        onChange={onChange}
      />{' '}
      Sold
      <div>
        <input
          type='submit'
          value={current ? 'Update Property' : 'Add Property'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
