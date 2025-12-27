import React, { useState } from 'react'
import { TbPhoneCalling } from "react-icons/tb";
function Car(props) {
    let {allusers,index}=props;
    console.log(props);
    console.log(index);
    
    
    
    if (index === null || index === undefined) return null;
    
    let e = allusers[index];
      if (!e) return null;
  return (

  
    <div className='w-80 h-120 bg-black rounded overflow-hidden relative'>

   <div className='bg-emerald-500 color-white gap-1 flex flex-col items-center justify-center h-50 w-full'>
     <h2 className='text-3xl'>{e.name}</h2>
    <h4 className='text-md text-gray-300'>{e.email}</h4>
    <h3>{e.phone}</h3>
   </div>
   <div className='absolute text-5xl bg-emerald-600 rounded-full p-3 w-fit bottom-20 right-32'>
     <TbPhoneCalling />
   </div>

  </div>
    

  )
}

export default Car
