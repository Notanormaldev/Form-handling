import React, { useState } from 'react'
import Card from './Card'
import Car from './Car'


function App() {


  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
   const [index, setindex] = useState(0)
  const [allusers, setallusers] = useState([])
  console.log(index);
  
   
  function runform(e){
    e.preventDefault();
    console.log('Form submited');
    
    console.log(name,email,phone);

    const oldusers=[...allusers];
    oldusers.push({name,email,phone});
    setallusers(oldusers)
    console.log(oldusers);
    





    setname('');
    setphone('');
    setemail('');
    

  }




  return (
    <div className='bg-gray-800 p-5 w-full h-screen text-white flex flex-col'>
     <form    className='flex flex-col gap-2' onSubmit={(e)=>{
      runform(e);
     }}>
      <input value={name} required className='bg-gray-600 rounded outline-0 w-60 px-1 py-2' onChange={(e)=>{
        setname(e.target.value);
      }}  type="text" placeholder='Enter your name' />
      <input  value={phone}   required className='bg-gray-600 rounded outline-0 w-60 px-1 py-2' onChange={(e)=>{
        setphone(e.target.value);
      }}  type="text" placeholder='Enter your Phone ' />
      <input value={email} required className='bg-gray-600 rounded outline-0 w-60 px-1 py-2' onChange={(e)=>{
        setemail(e.target.value);
      }}   type="text" placeholder='Enter your email' />
      <button className='w-fit bg-emerald-600 px-4 py-2 rounded'>Submit</button>
     </form>
    <div className='flex gap-70'>
       <Card allusers={allusers} setindex={setindex}/>
     <Car allusers={allusers} index={index} />
    </div>
    </div>
  )
}

export default App
