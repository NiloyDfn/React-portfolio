import React from 'react'
import loader from "../assets/loader.mp4"
const Loader = () => {
  return (
    <div className='loader'>
      <video src={loader} autoPlay loop  />
    </div>
  )
}

export default Loader