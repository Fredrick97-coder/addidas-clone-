import React from 'react';
import FormLayout from './layout/FormLayout';

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '90vh',
        alignItem: 'center',
      }}
    >
      <FormLayout
        isRegister={false}
        btnName="Login"
        style={{
          backgroundColor: '#001230',
          color: '#fff',
          padding: '10px 0px',
        }}
        name="register"
      >
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            fontSize: '30px',
            fontWeight: 600,
            color: 'dodgerblue',
          }}
        >
          Clarkson Inc.
        </div>
      </FormLayout>
    </div>
  );
}

export default Login;
