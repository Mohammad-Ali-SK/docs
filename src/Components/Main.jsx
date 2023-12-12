/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import Card from './Card'


const Main = () => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const data = [
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit ali.",
      size:".09mb",
      close:true,
      tag:{
        tagtitle:true,
        isopen:true,
        tagcolor: 'bg-blue-500',

      }
    },
    {
      desc:"Morem ipsum dolor sit amet consectetur adipisicing.",
      size:".09mb",
      close:true,
      tag:{
        tagtitle:true,
        isopen:true,
        tagcolor: 'bg-blue-500',

      }
    },
    {
      desc:"Porem ipsum dolor sit amet consectetur adipisicing elit ali. We ought to respect to ouer paraents ",
      size:".09mb",
      close:false,
      tag:{
        tagtitle:false,
        isopen:true,
        tagcolor: 'bg-blue-500',

      }
    },
  ];
  useState
  return (
    
        <div ref={ref} className=' absolute top-0 left-0 w-full min-h-full z-9 p-4 flex flex-wrap gap-10 flex-shrink-0'>
          {data.map((e,i) => (
            <Card data={e} reference={ref}/>
            
          ))}
        </div>
     
  )
}

export default Main
