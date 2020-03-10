import React from 'react';

const CheckoutChecklist = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m10 l8'>
          <div className='card'>
            <div className='card-content'>
              <div className='card-title'>
                <h4>Tenant Check Out</h4>
              </div>
              <div className='divider'></div>
              <br />
              <p>
                <label>
                  <input type='checkbox' />
                  <span>Keys (house, windows, garage)</span>
                </label>
              </p>
              <p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Meter readings (water, gas, electricity)</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Doors & windows in good condition</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Smoke alarms present & working</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Cupboards and storage space emptied</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Heating and Hot Water works</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Furniture and carpets clean</span>
                  </label>
                </p>
                <p>
                  {' '}
                  <label>
                    <input type='checkbox' />
                    <span>Electrics, sockets and light fittings.</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>Check for signs of damp/mould/leaks</span>
                  </label>
                </p>
                <p></p>
                <label>
                  <input type='checkbox' />
                  <span>Check for signs of pest activity</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutChecklist;
