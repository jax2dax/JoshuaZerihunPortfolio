
import { useRef } from "react";
import {gsap}  from "gsap"; 
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const ShowCase = () => {
  const sectionRef =useRef(null);
  const project1Ref= useRef(null);
  const project2Ref= useRef(null);
  const project3Ref= useRef(null);



  useGSAP(()=>{
        //
        
const projects = [project1Ref.current, project2Ref.current , project3Ref.current];

        projects.forEach((card,index)=>{
  gsap.fromTo(
    card,{
      y:50,opacity:0
    },{
      y:0,
      opacity:1,
      duration:1,
      delay:0.3*(index +1),
      scrollTrigger:{
        trigger:card, 
        start:'top bottom-=100'
      }
    }
  )
} );
          //slow fade
      gsap.fromTo(sectionRef.current, 
        {opacity:0}, {opacity:1, duration:1.5})
  },[]);
  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
      <div className='w-full '>
        <div className='showcaselayout'>
            {/**left */}
            <div ref={project1Ref} className='first-project-wrapper'>
                <div className='image-wrapper'>
                    <img src="/images/project1.png" alt="ryde"/>        {/**IMGRPL */}
                </div>
                <div className='text-content'>
                  <h2>Track Coversion Paths, Dxplore Deeper into leads and Close more deals</h2>
                     <p className='text-white-50 md:text-xl'>Grow Your Business with <span className='text-green-500 font-bold'>Jellyhook</span> </p>
                </div>
            </div>
            {/**right */}
            <div className='project-list-wrapper overflow-hidden ' >
              <div ref={project2Ref} className='project'>
                <div className='image-wrapper bg-[#ffefdb]'>
                  <img src="/images/project2.png" alt="SQL" /> 
                </div>
                <h2><span className='text-yellow-400 font-bold '>Coin</span>
                <span className='font-["nabla"]'>Falcon</span></h2>
              </div>
              <div ref={project3Ref} className='project'>
                <div className='image-wrapper bg-[#ffe7eb]'>
                  <img src="/images/project3.png" alt="SQL" /> 
                </div>
                <h2><span className='text-cyan-400 font-bold '>Stamina</span>
                <span className='font-["merinda"]'>Labs</span></h2>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
