import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/ContactContext';
import FloatingButton from '../layout/FloatingButton';

const Home = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { showUpdateForm } = contactContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      {/* <div className='col s2 hide-on-med-and-down'></div> */}
      <div className='col l1 s2'></div>
      {/* space for the side navbar */}
      <div className='col s12 l10'>
        {showUpdateForm && <ContactForm />}
        <ContactFilter />
        <Contacts />
        <FloatingButton />
      </div>
    </div>
  );
};

export default Home;
