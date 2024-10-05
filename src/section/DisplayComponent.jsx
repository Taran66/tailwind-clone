import React from 'react';

const DisplayComponent = ({ activeButtonId }) => {
  return (
    <div className="mt-4">
      <h2 className='bg-white'>Selected Button ID: {activeButtonId !== null ? activeButtonId : "None"}</h2>
    </div>
  );
};

export default DisplayComponent;
