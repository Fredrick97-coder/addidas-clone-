import React from 'react';
import { Link } from 'react-router-dom';

function FormLayout({ isRegister, btnName, style, name, children }) {
  return (
    <form style={{ ...formWrapper }}>
      {children}
      <label style={{ ...label }}>Email:</label>
      <input type="email" placeholder="Enter email" style={{ ...input }} />
      <label style={{ ...label }}>Password:</label>
      <input
        type="password"
        placeholder="Enter password"
        style={{ ...input }}
      />
      {isRegister ? (
        <>
          <label style={{ ...label }}>Confirm Passowrd:</label>
          <input
            type="password"
            placeholder="Confirm passowrd"
            style={{ ...input }}
          />
        </>
      ) : (
        ''
      )}
      <button style={style}>{btnName}</button>
      <p style={{ textAlign: 'center', paddingTop: '10px' }}>
        You can follow this link to{' '}
        <Link to={`/${name}`} style={{ color: 'dodgerblue' }}>
          {name}
        </Link>
      </p>
    </form>
  );
}

export default FormLayout;

const formWrapper = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '20px',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
};

const label = {
  fontSize: '20px',
  fontFamily: 'Poppins',
  fontWeight: 300,
};

const input = {
  marginBottom: '20px',
  padding: '10px 0px 10px 10px',
  outline: 'none',
  border: '0.7px solid #ccc',
};
