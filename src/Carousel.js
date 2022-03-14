import React, { useState } from 'react'

import { images } from './Data'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'



const Carousel =()=>{
  const [currentImg, setCurrentImage] = useState(0)

  const handleLeft = () =>{
 setCurrentImage(currentImg - 1)


    if (currentImg==0){
      setCurrentImage(images.length-1)
    }


   
  }

  function handleRight (){
  
    setCurrentImage(currentImg + 1 )

    if(currentImg==images.length-1){
      setCurrentImage(0)
    }
  }
// console.log(images.length);


  return (
 <div className='Carousel'> 
     <div className='carousel-inner' style={{backgroundImage: `url( ${images[currentImg].img})`}}>
          
      {/* <img src={images[currentImg].img} alt="" /> */}

      <div className='left'>
        <FaChevronCircleLeft onClick ={handleLeft} size={50}/>
      </div>

      <div className='centre'>
       <h2>{images[currentImg].tittle}</h2>
      
      </div>

      <div className='right'>
       <FaChevronCircleRight onClick={handleRight} size={50}/>
      </div>
      
   </div>
  </div>  
  )
}
export default Carousel