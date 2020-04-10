import React from 'react';
import NavbarHeader from '../components/NavbarHeader';

const Layout = props => (
  <div>
    <NavbarHeader />
    <div className='body-container'>{props.children}</div>
  </div>
);

export default Layout;
