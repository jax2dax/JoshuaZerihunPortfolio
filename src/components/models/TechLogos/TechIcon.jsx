"use client"
import React from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';
import { useState , useEffect, useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import { useFrame } from '@react-three/fiber';
import * as THREE from "three"
const TechIcon = ({model}) => {
    const scene =useGLTF(model.modelPath);
    const [hovered,setHovered] =useState(false);
    useEffect(()=>{
        if(model.name ==='Interactive Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name ==='Object_5'){
                    const color1 = "black"
                    const  color2 = "white"
                    
                    hovered? child.material = new THREE.MeshStandardMaterial({color:color1}) :child.material = new THREE.MeshStandardMaterial({color:color2})
                }
            })
        }
    },[hovered]);
    
  
  return (
    
    <Canvas onPointerEnter={()=>{setHovered(true);}} onPointerLeave={()=>{setHovered(false);}} >
        <ambientLight  intensity={0.3} />
        <OrbitControls enablePan={false}  enableZoom={false}/>
        <Environment preset='forest' />  {/**pre added model for realism and shinymetal tex*/}
        <Float speed={hovered? 50 :5} rotationIntensity={0.5} floatIntensity={1}>
            <group  scale={model.scale} rotation={model.rotation}>
                <primitive  object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
    
  )
}

export default TechIcon
