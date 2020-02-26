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
        stage: ''
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
      closeForm();
    } else {
      setShowUpdateForm(false);
      updateContact(contact);
    }
    clearAll();
  }

  const clearAll = () => {
    clearCurrent();
  };

  const closeForm = () => {
    setShowUpdateForm(false);
    clearCurrent();
  };

  return (
    <div className='edit-property'>
      <div className='overlay'></div>
      <div className='col s12 l12'>
        <div className='card blue-grey lighten-4'>
          <div className='card-content'>
            <span className='card-title'>
              <h2>{current ? 'Edit Property' : 'Add new property'}</h2>
            </span>
            <div className='divider black'></div>
            <form onSubmit={onSubmit}>
              <div className='input-field'>
                <input
                  type='text'
                  name='propertyName'
                  id='propertyName'
                  value={propertyName}
                  onChange={onChange}
                />
                <label htmlFor='propertyName' className='active'>
                  Property Name
                </label>
              </div>
              <div className='input-field'>
                <input
                  type='text'
                  name='tenant'
                  id='tenant'
                  value={tenant}
                  onChange={onChange}
                />
                <label htmlFor='tenant' className='active'>
                  Tenant
                </label>
              </div>
              <div className='input-field'>
                <input
                  type='text'
                  name='rent'
                  id='rent'
                  value={rent}
                  onChange={onChange}
                />
                <label htmlFor='rebt' className='active'>
                  Rent Amount
                </label>
              </div>
              <h6>Stage:</h6>
              <label>
                <input
                  className='with-gap'
                  type='radio'
                  name='stage'
                  value='vacant'
                  checked={stage === 'vacant'}
                  onChange={onChange}
                />
                <span>Vacant</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  type='radio'
                  name='stage'
                  value='rented'
                  checked={stage === 'rented'}
                  onChange={onChange}
                />
                <span>Rented</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  type='radio'
                  name='stage'
                  value='renovation'
                  checked={stage === 'renovation'}
                  onChange={onChange}
                />
                <span>Renovation</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  type='radio'
                  name='stage'
                  value='for sale'
                  checked={stage === 'for sale'}
                  onChange={onChange}
                />
                <span>For sale</span>
              </label>
              <label>
                <input
                  className='with-gap'
                  type='radio'
                  name='stage'
                  value='sold'
                  checked={stage === 'sold'}
                  onChange={onChange}
                />
                <span>Sold</span>
              </label>
              <div className='card-action'>
                <a href=''>
                  <button type='submit' className='btn btn-light btn-small'>
                    {current ? 'Update' : 'Add'}
                  </button>
                </a>

                <a href=''>
                  <button
                    className='btn btn-light btn-small'
                    onClick={clearAll}
                  >
                    Clear
                  </button>
                </a>

                <a href=''>
                  <button
                    className='btn-flat btn-small btn-delete right'
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
