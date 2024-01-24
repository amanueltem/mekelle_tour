// Navigation.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuth } from './AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor:'#dddddd'}}>
      <nav>
        <NavLink exact to="/home" activeClassName="active">
          <button>Home</button>
        </NavLink>
        <NavLink to="/add_package" activeClassName="active">
          <button>Add Tour Package</button>
        </NavLink>
        <NavLink to="/add_Place" activeClassName="active">
          <button>Add Place</button>
        </NavLink>
        <NavLink  to="/see_packages" activeClassName="active">
        <button>Available Packages</button>
        </NavLink>
        <NavLink to="/insert_price" activeClassName="active">
        <button>Insert Price</button>
        </NavLink>
      </nav>

      <Avatar />

      <div style={{ marginLeft: '10px' }}>
        {user ? (
          <div>
            Signned as Adminstrator
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
              Logout
            </button>
          </div>
        ) : (
          <div>Not logged in</div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

