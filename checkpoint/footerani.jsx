// import React from 'react'
// import { counterItems } from '../constants/index.js'
// import { useGSAP } from '@gsap/react'

// import gsap from "gsap" 

// const AnimatedCounter = () => {
//     useGSAP(()=>{
//         gsap.fromTo('.pl', {
//             opacity: 1,
//             x:-300
            
//         }, {
//             opacity:0,
//             duration:10,
//             x: '100vw',
//            repeat: -1,
//             ease:"none"
            

//         } )
//     })
//   return (
//     <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
//       <div className='mx-auto grid-4-cols'>
//         {counterItems.map((item)=>(
//             <div key={item.label} className='counter-number
// text-white text'>{item.label}</div>
//         ))}
//       </div>
//       <div className="bg-purple-500 rounded-xl relative overflow-hidden h-10">

//   <div className="pl absolute left-0 top-0 w-48 h-15 bg-purple-200">
//   </div>


//     {/* <div className='absolute top-0 w-10 rounded-full h-10 bg-amber-800'></div> */}
//     <span className='absolute font-["Merienda"] font-black text-xl  text-purple-500 
//     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>VALUE YOURSELF</span>
//     </div> 
    
//     </div>
//   )
// }

// export default AnimatedCounter
