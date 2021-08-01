import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <h1>Welcome To My Site</h1>
      )}
    </div>
  );
};

export default Welcome;
