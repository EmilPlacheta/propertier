import React, { useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const FloatingButton = () => {
  const contactContext = useContext(ContactContext);

  const { setShowUpdateForm } = contactContext;

  const addProperty = () => {
    setShowUpdateForm(true);
  };

  return (
    <div className='fixed-action-btn'>
      <button className='btn-floating btn-large black' onClick={addProperty}>
        <i className='large material-icons'>add</i>
      </button>
    </div>
  );
};

export default FloatingButton;
