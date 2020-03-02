import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Documents = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m10 l10'>
          <div className='card-panel white'>
            <h4>Documents</h4>

            <Link to='#!' className='black-text'>
              <div className='card'>
                <div className='row'>
                  <div className='card-content'>
                    <div className='col s1 valign-wrapper '>
                      <i className='material-icons blue-text text-darken-4'>
                        arrow_downward
                      </i>
                    </div>
                    <div className='col s10 offset-s1'>
                      <div className='card-title'>Tenancy Agreement</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='#!' className='black-text'>
              <div className='card'>
                <div className='row'>
                  <div className='card-content'>
                    <div className='col s1 valign-wrapper '>
                      <i className='material-icons blue-text text-darken-4'>
                        arrow_downward
                      </i>
                    </div>
                    <div className='col s10 offset-s1'>
                      <div className='card-title'>Inspection Notification</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='#!' className='black-text'>
              <div className='card'>
                <div className='row'>
                  <div className='card-content'>
                    <div className='col s1 valign-wrapper '>
                      <i className='material-icons blue-text text-darken-4'>
                        arrow_downward
                      </i>
                    </div>
                    <div className='col s10 offset-s1'>
                      <div className='card-title'>Inventory Form</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
