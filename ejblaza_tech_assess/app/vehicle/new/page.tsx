import React from 'react'
import "./styles.css"


const NewVehicle = () => {
  return (
    <div className='formBg'>
      <form action="/">
        <h1>Add New Car</h1>

        {/* save the input into 'Make' in the table */}
        <label htmlFor="vehicleMake">Make</label>
        <input type="text" name="vehicleMake" id="vehicleMake" placeholder='Honda'/>

        {/* save the input into 'Model' in the table */}
        <label htmlFor="vehicleModel">Model</label>
        <input type="text" name="vehicleModel" id="vehicleModel" placeholder='Civic'/>

        {/* save the input into 'VIN' in the table */}
        <label htmlFor="vehicleVin">VIN</label>
        <input type="text" name="vehicleVin" id="vehicleVin" placeholder='JH4NA21601T000130'/>

        {/* save the input into 'WebAdDescription' in the table */}
        <label htmlFor="vehicleDescription">Description</label>
        <textarea name="vehicleDescription" id="vehicleDescription" placeholder='Tell us about the car'></textarea>  

        {/* save the input into 'PhotoURLs' in the table */}
        <label htmlFor="vehicleImages">Add Image URLs</label>
        <textarea name="vehicleImages" id="vehicleImages" placeholder='Separate each url with a ","'></textarea>

        {/* Insert the date into the table under a new "Vehicle ID" */}
        <input type="submit" value="Submit" className='submitBtn'/>
      </form>
    </div>
  )
}

export default NewVehicle