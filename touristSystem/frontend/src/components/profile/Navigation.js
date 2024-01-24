// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuth } from './AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor:'#dddddd'}}>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          <button>Home</button>
        </NavLink>
        <NavLink to="/places" activeClassName="active">
          <button>Places</button>
        </NavLink>
        <NavLink to="/map" activeClassName="active">
          <button>Map</button>
        </NavLink>
        <NavLink to="/buy-tour-package" activeClassName="active">
          <button>Buy Tour Package</button>
        </NavLink>
        <NavLink to="/book-now" activeClassName="active">
          <button>Book Now</button>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <button>Contact us</button>
        </NavLink>
      </nav>

      <Avatar />

      <div style={{ marginLeft: '10px' }}>
        {user ? (
          <div>
            Welcome, {user.charAt(0).toUpperCase()}
            <button onClick={logout} style={{ marginLeft: '10px' }}>
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

