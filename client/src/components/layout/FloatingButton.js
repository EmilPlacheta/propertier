import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const FloatingButton = () => {
  const contactContext = useContext(ContactContext);

  const { setShowUpdateForm } = contactContext;

  const addProperty = () => {
    setShowUpdateForm(true);
  };

  return (
    <div class='fixed-action-btn'>
      <button class='btn-floating btn-large black' onClick={addProperty}>
        <i class='large material-icons'>add</i>
      </button>
    </div>
  );
};

export default FloatingButton;
