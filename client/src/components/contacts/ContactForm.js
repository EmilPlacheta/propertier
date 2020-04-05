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
    propertyName: '',
    tenant: '',
    rent: '',
    stage: ''
  });

  const { propertyName, tenant, rent, stage } = contact;

  const formShadow = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '10px 10px 85px 1100px rgba(0,0,0,0.55)',
    maxWidth: '50rem',
    minWidth: '25rem',

    '@media screen and (min-width: 64em)': {
      backgroundColor: 'orange'
    }
  };

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
    <div className='container'>
      <div className='row update-form'>
        <div className='col s12'>
          <div className='card' style={formShadow}>
            <div className='card-content'>
              <span className='card-title'>
                <h2>{current ? 'Edit Property' : 'Add new property'}</h2>
              </span>
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
                {/* Radios */}
                <h6>Stage:</h6>
                <div className='col s4'>
                  <label>
                    <input
                      className='with-gap'
                      type='radio'
                      name='stage'
                      value='Vacant'
                      checked={stage === 'Vacant'}
                      onChange={onChange}
                    />
                    <span>Vacant</span>
                  </label>
                </div>
                <div className='col s4'>
                  <label>
                    <input
                      className='with-gap'
                      type='radio'
                      name='stage'
                      value='Rented'
                      checked={stage === 'Rented'}
                      onChange={onChange}
                    />
                    <span>Rented</span>
                  </label>
                </div>
                <div className='col s4'>
                  <label>
                    <input
                      className='with-gap'
                      type='radio'
                      name='stage'
                      value='Renovation'
                      checked={stage === 'Renovation'}
                      onChange={onChange}
                    />
                    <span>Renovation</span>
                  </label>
                </div>
                <div className='col s4'>
                  <label>
                    <input
                      className='with-gap'
                      type='radio'
                      name='stage'
                      value='For sale'
                      checked={stage === 'For sale'}
                      onChange={onChange}
                    />
                    <span>For sale</span>
                  </label>
                </div>
                <div className='col s4'>
                  <label>
                    <input
                      className='with-gap'
                      type='radio'
                      name='stage'
                      value='Sold'
                      checked={stage === 'Sold'}
                      onChange={onChange}
                    />
                    <span>Sold</span>
                  </label>
                </div>
                <div className='row'></div>
                <div className='card-action'>
                  <a href='#!'>
                    <button
                      type='submit'
                      className='btn grey darken-3 btn-small'
                    >
                      {current ? 'Update' : 'Add'}
                    </button>
                  </a>

                  <a href='#!'>
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
    </div>
  );
};

export default ContactForm;
