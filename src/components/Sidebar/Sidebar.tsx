import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <>
      <div className='sidebar open'>
        <div>
          <div className='sidebar-logo'>
            <h1>Random</h1>
          </div>
          <nav className='sidebar-nav'>
            <ul>
              <li>
                <div className='sidebar-icon'></div>
                <span>Section name</span>
              </li>
              <li>
                <div className='sidebar-icon'></div>
                <span>Profile</span>
              </li>
              <li>
                <div className='sidebar-icon'></div>
                <span>Settings</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className='sidebar-footer'>
          <div className='sidebar-icon'></div>
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
