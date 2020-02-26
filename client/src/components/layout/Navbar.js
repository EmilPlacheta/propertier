import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/ContactContext';
import SideNavBG from '../../img/sidenavbg.jpg';
import ProfilePic from '../../img/demoUserProfilePic.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts, contacts } = contactContext;

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  /////MATERIALIZE init for side nav functionality
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
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

  const authLinks = (
    <Fragment>
      <li>
        <span className='blue-text'>Hello</span>
        {user && user.name}
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
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
        </div>
      </nav>

      {/* Materialize side navigation */}
      <ul
        id='slide-out'
        className={`sidenav ${isAuthenticated ? 'sidenav-fixed' : ''}`}
      >
        <li>
          <div className='user-view'>
            <div className='background blue darken-3'>
              {/* <img src={SideNavBG} /> */}
            </div>
            <span className='white-text right'>{time}</span>
            <a href='#user'>
              <img className='circle' src={ProfilePic} alt='Profile Picture' />
            </a>
            <a href='#name'>
              <span className='white-text name'>{user && user.name}</span>
            </a>
            <span className='white-text'>{date}</span>
          </div>
        </li>
        {/* guest links are already in a <li> item */}
        {guestLinks}

        <li>
          <div className='divider'></div>
        </li>
        <li>
          <a className='subheader'>Utilities:</a>
        </li>
        <li>
          <a className='waves-effect' href='#!'>
            /Documents and Checklists/
          </a>
        </li>

        <li>
          <a className='waves-effect' href='#!'>
            Links...
          </a>
        </li>

        <li>
          <div className='divider'></div>
        </li>
        <li>
          <a className='subheader'>At a glance:</a>
        </li>
        <li>
          <a href='#!'>
            <span>Properties managed: {contacts && contacts.length}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
