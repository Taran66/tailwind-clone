import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import DisplayComponent from './DisplayComponent'; // The component where we send the buttonId

const ParentComponent = () => {
  // State to track the active button in the parent component
  const [activeButtonId, setActiveButtonId] = useState(null);

  // Handler to update the state with the clicked buttonId
  const handleButtonClick = (id) => {
    setActiveButtonId(id); // Update the active button ID
  };

  return (
    <div>
      {/* Pass the handler to ButtonGroup */}
      <ButtonGroup onButtonClick={handleButtonClick} />
      {/* Pass the activeButtonId to DisplayComponent */}
      <DisplayComponent activeButtonId={activeButtonId} />
    </div>
  );
};

export default ParentComponent;
