// src/components/StoreLocations.js
import React from 'react';

const StoreLocations = () => {
  React.useEffect(() => {
    window.location.href = 'https://maps.app.goo.gl/zuGFu8WFhPfgs3RN9';
  }, []);

  return (
    <div className="store-locations">
      <h1>Redirecting to Store Locations...</h1>
    </div>
  );
};

export default StoreLocations;
