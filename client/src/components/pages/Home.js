import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/ContactContext';

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
      <div> {showUpdateForm && <ContactForm />} </div>
      <div className='col s2'></div> {/* space for the side navbar */}
      <div className='col s10'>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
