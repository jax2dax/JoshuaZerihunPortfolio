// import React from 'react' //curstom
// import { abilities } from '../constants/index.js'
// const randNum = 30+ Math.random()*10;
//     Math.floor(randNum);
// const FeatureCards = () => {
    
//   return (
//     <div className='w-full padding-g-lg'>
//       <div className=' flex md:flex-row flex-col py-7 px-4 bg-black-50 md:gap-10  items-center justify-center mx-3 md:mx-8 gap-3 rounded-2xl'>
//         {abilities.map(({imgPath, title,desc}, index)=>(
//             <div key={title} className=' group flex flex-col relative overflow-hidden bg-zinc-600 py-10 px-8 rounded-2xl md:hover:scale-1/2 '>
                
//                     <h2 className='text-3xl text-white-50  z-2' >{title}{index}</h2>
//                     <p className='text-zinc-400 text-[10px] mx auto z-2 '>{desc}</p>
//                     <div className={`rounded-full group-hover:rotate-5 zinc transition-transform duration-1000
//                      absolute top-0 right-0 p-30 py-100 bg-zinc-700  `}
//                      style={{paddingInline: 30 + (index + 1) * 10,  
//                      transform: `translateX(${-(index + 1) * 30}px)` , transform: "translateY(-60px)"}}>

//                      </div>
//                      <div className={`rounded-full group-hover:rotate-19 zinc transition-transform duration-1200
//                      absolute top-0 left-10   py-200 px-100 bg-zinc-700  `}
//                      style={{paddingInline: 30 + (index + 1) * 10,  
//                      transform: `translateX(${-(index + 1) * 0}px)` , transform: "translateY(-60px)"}}>
                        
//                      </div>
                
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default FeatureCards
