
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
        start:'top bottom-=100' //top of the card, near bottom of screen
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
            <a ref={project1Ref} href="https://jellyhook.com" target="_blank" rel="noopener noreferrer" className='first-project-wrapper block'>
                <div className='image-wrapper'>
                    <img src="/images/logos/jellyhookDashboard.png" alt="Jellyhook" />        {/**IMGRPL */}
                </div>
                <div className='text-content'>
                  <h2>Track Conversion Paths, Explore Deeper into Leads and Close More Deals</h2>
                     <p className='text-white-50 md:text-xl'>Grow Your Business with <span className='text-green-500 font-bold'>Jellyhook</span> </p>
                </div>
            </a>
            {/**right */}
            <div className='project-list-wrapper overflow-hidden ' >
              <a ref={project2Ref} href="https://3dmeshengine-five.vercel.app" target="_blank" rel="noopener noreferrer" className='project'>
                <div className='image-wrapper bg-[#000000]'>
                  <img src="/images/logos/3DMesh.png" alt="AI 3D Scene Editor" />
                </div>
                <h2 className="flex justify-center items-center" ><span className='text-yellow-400 font-bold '>AI 3D&nbsp;</span>
                <span className='font-[""]'>Scene Editor</span></h2>
              </a>
              <a ref={project3Ref} href="https://doc-vision-1.vercel.app" target="_blank" rel="noopener noreferrer" className='project'>
                <div className='image-wrapper bg-[#000000]'>
                  <img src="/docvision.png" alt="Clinic AI Platform" />
                </div>
                <h2 className="flex justify-center items-center"><span className='text-cyan-400 font-bold '>Clinic AI&nbsp;</span>
                <span className='font-["merinda"]'>Platform</span></h2>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
