import * as React from 'react';
import './App.css';

import FindByPincode from './components/FindByPincode';
import axios from 'axios';

const BASE_URL = 'https://cdn-api.co-vin.in/api';
const  PINCODE_ENDPOINT = '/v2/appointment/sessions/public/findByPin';
// const  DISTRICT_ENDPOINT = "/v2/appointment/sessions/public/findByDistrict";

const App=() =>{
  const [results, setResults] = React.useState([]);
  const handleSubmit = (event,type) => {
    event.preventDefault();
    const { target } = event;
    const { pincode } = target;
    
    if (type==="pincode") {
      axios.get(BASE_URL + PINCODE_ENDPOINT + "?pincode=" + pincode.value +"&date=1-12-2021" ,{
        headers: {
          'accept-language': 'en-IN',
          
        }
      }).then(response => {
       const { data: { sessions } } = response;
    
       setResults( sessions);
      }) 
    }
  }
  return (
    <main>
      <h1>Find Vaccination Center Near You</h1>
      <FindByPincode handleSubmit={handleSubmit}/>
      {JSON.stringify(results)}  
    </main>
  );
}

export default App;