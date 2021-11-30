import React from 'react';
import axios from 'axios';

const FindByPincode = () => 
{
  
  const handleSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { pincode } = target;
    // console.log(pincode.value);
    const BASE_URL = 'https://cdn-api.co-vin.in/api';
    const ENDPOINT = '/v2/appointment/sessions/public/findByPin'

    axios.get(BASE_URL + ENDPOINT + "?pincode=" + pincode.value +"&date=30-11-2021" ,{
      headers: {
        'accept-language': 'en-IN',
        
      }
    }).then(response => {
      console.log(response);
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="pincode">
          Your Pincode: 
          <input id="pincode" type="text" />
        </label>
        <button type="submit"  >
          Search
        </button>
      </form>
    </div>
  )
}

export default FindByPincode;