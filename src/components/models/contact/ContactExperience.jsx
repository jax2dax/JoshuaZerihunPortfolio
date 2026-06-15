"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

import Computer from "./Computer";
import { useEffect } from "react";
import gsap from "gsap";

const CameraController = ({ isFocused }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (isFocused) {
      gsap.to(camera.position, {
       x: 0,
        y: 1,
        z: 2,
        
        duration: 1,
      });
      gsap.to(camera.rotation, {
  x: Math.PI/26,
  duration: 1
});
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 3,
        z: 7,
        duration: 1,
      });
    }
  }, [isFocused]);

  return null;
};

const ContactExperience = ({ isFocused }) => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
        <CameraController isFocused={isFocused} />
      <ambientLight intensity={0.5} color="#fff4e6" />
            {isFocused && (
  <spotLight position={[0,0,0]} rotation={[0,0,Math.PI]} color="green" intensity={10} />
)}
     

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enabled={!isFocused}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;