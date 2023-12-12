/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md"
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

// eslint-disable-next-line no-unused-vars
const Card = ({data,reference}) => {

  const noti =() => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    
        <motion.div  drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative w-60 h-72 rounded-[30px] bg-zinc-900 text-white p-5 overflow-hidden'>
          <span className=' hover:cursor-pointer'>
          < FaRegFileAlt/>
          </span>
          
        
          
        
         <p className='leading-tight text-sm mt-5 '>{data.desc}</p>
         <div className='mt-3 w-full p-2 left-0 overflow-hidden absolute bottom-[25%]'>
          <div className='flex justify-between items-center px-3'>
            <p className=' text-[12px]'>
              {data.size}
            </p>
            <span className=' bg-zinc-500 w-6 h-6 rounded-[50%] flex justify-center items-center hover:cursor-pointer :'>
              {data.close ? <IoMdClose/> : <MdOutlineFileDownload/>}
              
            </span>
          </div>

         </div>
         {data.tag.isopen ?   <div className={`footer bg-green-500 w-full bottom-0 h-12 left-0 absolute overflow-hidden`}>
          <h3 onClick={noti} className=' download text-md flex items-center justify-center pt-2 hover:cursor-pointer'>{data.tag.tagtitle ? "Done" : "download"}</h3>
         </div> : null}

        </motion.div>
    
  )
}

export default Card