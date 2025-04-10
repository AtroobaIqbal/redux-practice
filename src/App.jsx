import React from 'react';
import Counter from './components/Counter';
import Controls from './components/Controls';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Redux Counter App</h1>
      <Counter />
      <Controls />
    </div>
  );
}

export default App;
