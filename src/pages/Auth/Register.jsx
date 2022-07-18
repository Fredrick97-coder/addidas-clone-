import React from 'react';
import FormLayout from './layout/FormLayout';

function Register() {
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
        isRegister={true}
        btnName="Register"
        style={{
          backgroundColor: '#001230',
          color: '#fff',
          padding: '10px 0px',
        }}
        name="login"
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

export default Register;
