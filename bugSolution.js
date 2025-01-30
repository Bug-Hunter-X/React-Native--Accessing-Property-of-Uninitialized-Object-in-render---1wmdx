import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      setData({ someProperty: 'Hello, world!' });
    }, 1000);
  }, []);

  return (
    <div>
      {/* Check if data is available before accessing it */}
      {data && data.someProperty && <p>{data.someProperty}</p>}
      {/* Or use optional chaining and nullish coalescing */}
      <p>Using optional chaining: {data?.someProperty ?? 'Loading...'}</p>
    </div>
  );
};

export default MyComponent;