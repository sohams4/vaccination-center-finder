import React from 'react';
import './App.css';

import FindByPincode from './components/FindByPincode';

function App() {
  return (
    <main>
      <h1>Find Vaccination Center Near You</h1>
      <button>Find by district </button>
      <button>Find by pincode </button>
      <FindByPincode />
    </main>
  );
}

export default App;