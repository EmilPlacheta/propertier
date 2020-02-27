import React, { useContext } from 'react';
import ContactContext from '../../../context/contact/ContactContext';

const AtGlance = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <div>
      <li>
        <a href='#!' className='subheader'>
          At a glance:
        </a>
      </li>

      <li>
        <a href='#!'>
          <span>Properties managed: {contacts && contacts.length}</span>
        </a>
        <a href='#!'>
          <span>
            Rent income p/m: £
            {contacts &&
              contacts
                .map(item => parseFloat(item.rent))
                .reduce((a, b) => a + b, 0) + '.00'}
          </span>
        </a>
      </li>
    </div>
  );
};

export default AtGlance;
