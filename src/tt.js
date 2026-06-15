import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 3, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x90ef13 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//
const gridHelper= new THREE.GridHelper(200, 50);
 const pointLight = new THREE.PointLight(0x90ef13);
 pointLight.position.set(5,5,5);
 scene.add(pointLight);
const lighthelper = new THREE.PointLightHelper(pointLight);
scene.add(gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);

//
camera.position.z = 10;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
   
  renderer.render( scene, camera );

}

/////
import {gsap}  from "gsap"; 
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{
      gsap.fromTo(sectionRef.current, 
        {opacity:0},
         {opacity:1, duration:1.5})
  },[]);

  //use gsspa with trigger
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