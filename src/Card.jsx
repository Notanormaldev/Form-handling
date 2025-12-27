import React from 'react'
import Car from './Car';

function Card(props) {
    let {allusers,setindex}=props;
    console.log(allusers);
    
    
  return (
    
    <>
<div className='flex gap-90'>
    <div className='bg-gray-600  text-white rounded mt-10 w-70 h-100 overflow-y-auto no-scrollbar'>
 {allusers.map(function(e,id){
//   console.log(e);
    
   return <div key={id} onClick={()=>{ setindex(id);
   }} className=' flex items-start px-5 py-3 flex-col border-b-2 border-amber-50'>
    <h3>{e.name}</h3>
    <h6>{e.phone}</h6>
   </div>
    })
    
  
 }
  
  

</div>


</div>
    </>
  )
}

export default Card
