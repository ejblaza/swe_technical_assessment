import React from 'react'
import Image from 'next/image';
import "./styles.css"


export default async function VehicleInfo({params}: {params: Promise<{vehicleId: string}>}){
  const vehicleid = (await params).vehicleId;
  // Not familiar with databases and connecting database with the project especially 
  // between Next.js and Postgres via Supabase.
  // Was able to import the .csv file to create a table on Supabase

  // Would use the 'vehicleid' variable to match with the Vehicle ID from the table to grab the data from the
  // database table and populate the page.
  return (
    <div className='bg'>
      <div className='content'>
        <div className="imgSection">
          {/* src would pull 'i1' from the table */}
          <img src="https://imagesdl.dealercenter.net/800/600/202510-2c24c49740f744df9300002bc5ede3c0.jpg" alt="" className='mainImg'/>
          {/* this div would pull from 'PhotoURLs' from the table*/}
          <div className='imgList'>List of Images under the main image</div>
        </div>
        <div className='detailSection'>
          {/* this div would pull from 'Make' and 'Model' from the table*/}
          <div className='makeModel'>Make Model</div>
          <div>Vehicle ID: {vehicleid}</div>
          {/* this div would pull from 'VIN' from the table*/}
          <div><u><b>VIN:</b></u> VIN</div>
          {/* this div would pull from 'WebAdDescription' from the table*/}
          {/* and/or can add other details to this div */}
          <div><u><b>Description:</b></u> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta eius, eos, maxime molestias blanditiis voluptates tempore, suscipit consequuntur odit deserunt adipisci. Facere voluptate itaque maiores provident voluptatum atque sapiente. Dignissimos id perspiciatis nihil. Rem a eaque reiciendis perspiciatis cupiditate excepturi eius officia quam quae dolorum quidem quod culpa perferendis vero nihil neque odio tempore eos est, quas ullam architecto illum. Alias delectus soluta a necessitatibus quidem ratione sequi! Sequi impedit aliquid, qui ipsum enim, consequatur repellat quasi magnam autem ipsam, praesentium a possimus sunt quas et reiciendis maxime dolorum ut. Omnis explicabo recusandae sint nisi quisquam accusamus est quasi.</div>
        </div>
      </div>
    </div>
  )
}
