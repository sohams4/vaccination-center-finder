import React from 'react';

const FindByPincode = ({handleSubmit}) => 
{
  
 const findByPincode = (event) => 
{
    handleSubmit(event,"pincode")
}
  return(
    <div>
      <form onSubmit={findByPincode} >
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