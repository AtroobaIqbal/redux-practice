import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/Actions';

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Controls;
