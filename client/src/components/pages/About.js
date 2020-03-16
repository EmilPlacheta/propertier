import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h4>About this App</h4>
      <p>
        {' '}
        Propertier is an app designed to help manage multiple properties, by
        giving the user a brief overview of the current status and income
        through the user's portfolio. It enables the user to have easy access to
        checklists used when inspecting the property, or when downloading
        documents e.g tenancy agreement. Thanks to use of Materialize, it
        provides a familiar ‘Google’ look to its users, and great mobile
        responsiveness. It's a full stack MERN app with complete back-end and
        its own API. It utilises JSON web tokens to authenticate users and
        validate accounts.
      </p>
    </div>
  );
};

export default About;
