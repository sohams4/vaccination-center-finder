import React from 'react';
import './App.css';

import FindByPincode from './components/FindByPincode';
import axios from 'axios';

const BASE_URL = 'https://cdn-api.co-vin.in/api';
const  PINCODE_ENDPOINT = '/v2/appointment/sessions/public/findByPin';
const  DISTRICT_ENDPOINT = "/v2/appointment/sessions/public/findByDistrict";

const App=() =>{
  const handleSubmit = (event,type) => {
    event.preventDefault();
    const { target } = event;
    const { pincode } = target;
    
    if (type==="pincode") {
      axios.get(BASE_URL + PINCODE_ENDPOINT + "?pincode=" + pincode.value +"&date=30-11-2021" ,{
        headers: {
          'accept-language': 'en-IN',
          
        }
      }).then(response => {
        console.log(response);
      }) 
    }
    
  }
  return (
    <main>
      <h1>Find Vaccination Center Near You</h1>
      <button>Find by district </button>
      <button>Find by pincode </button>
      <FindByPincode handleSubmit={handleSubmit}/>
    </main>
  );
}

export default App;