import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/ContactContext';
import SideNavBG from '../../img/background-pattern-3.png';
import ProfilePic from '../../img/demoUserProfilePic.jpg';
import AtGlance from './navbarComponents/AtGlance';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts, contacts, setShowUpdateForm } = contactContext;

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  /////MATERIALIZE init for side nav functionality
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line
    var instances = M.Sidenav.init(elems);
  });
  /////

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    });
  }, []);

  function onLogout() {
    logout();
    clearContacts();
  }

  function totalRents() {
    return (contacts && contacts.map(item => parseFloat(item.rent))).reduce(
      (a, b) => a + b,
      0
    );
  }

  const sideLinks = (
    <Fragment>
      <li>
        <Link to='/'>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => setShowUpdateForm(true)} href='#!'>
          <span>Add new property</span>
        </Link>
      </li>
      <li>
        <Link to='/login' onClick={onLogout}>
          <span>Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const navLinks = (
    <div className='right'>
      <ul>
        <li>
          <Link to='/' className='grey-text'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='grey-text'>
            About
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <nav className='white darken-4'>
        <div className='nav-wrapper'>
          {isAuthenticated && (
            <a href='#!' data-target='slide-out' className='sidenav-trigger'>
              <i className='material-icons black-text'>menu</i>
            </a>
          )}
          <div className='right'>{navLinks}</div>
        </div>
      </nav>

      {/* Materialize side navigation */}
      <ul
        id='slide-out'
        className={`sidenav sidenav-close ${
          isAuthenticated ? 'sidenav-fixed' : ''
        }`}
      >
        <li>
          <div className='user-view'>
            <div className='background blue darken-3'>
              <img src={SideNavBG} alt='' />
            </div>
            <span className='white-text right'>{time}</span>

            <img className='circle' src={ProfilePic} alt='' />

            <span className='white-text name'>{user && user.name}</span>

            <span className='white-text'>{date}</span>
          </div>
        </li>
        {/* guest links are already in a <li> item */}
        {sideLinks}

        <li>
          <div className='divider'></div>
        </li>
        <li>
          <a href='#!' className='subheader'>
            Utilities:
          </a>
        </li>
        <li>
          <Link to='/checklists'>Checklists</Link>
        </li>

        <li>
          <Link to='/documents'>Documents</Link>
        </li>

        <li>
          <div className='divider'></div>
        </li>

        <AtGlance />
      </ul>
    </div>
  );
};

export default Navbar;
