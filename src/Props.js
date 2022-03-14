import React from 'react'
import { useState } from 'react'
// import pic from


const Props = () => {
  const [details, setDetails]=useState([
    {id: 1,title: 'Eggys tech',body:'We build web apps', author:'Eggy'},
    {id: 2,title: "Shegey's tech",body:'We do product designs', author:'Segun'},
    {id: 3,title: 'Mariams Consults',body:'We carry out theurapetic consultation ', author:'Mariam'},
    {id: 4,title: 'Faithilicious',body:'We procure hardware and software app', author:'Faith'},
  ])
  return (
    <div className='App'>
       
       {details.map((details)=>{
        return(
          <div className='move' key={details.id}>
            <h2>{details.title}</h2>
            <h2>{details.body}</h2>
            <h2>written by {details.author}</h2>
            {/* <img src={pic} alt="" /> */}
            <button>Click</button>

          </div>
        )
      })}
     

    </div>
  )
}

export default Props