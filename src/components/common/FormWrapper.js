import React from 'react';

const FormWrapper = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      {children}
    </form>
  );
};

export default FormWrapper;
