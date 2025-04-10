import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);

  return (
    <div className="text-center text-2xl font-bold">
      Count: {count}
    </div>
  );
};

export default Counter;
