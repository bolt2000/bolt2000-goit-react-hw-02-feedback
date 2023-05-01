import React from 'react';
import Counter from './Counter/Counter'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Please leave feedback</h2>

      <Counter />
    </div>
  );
};
