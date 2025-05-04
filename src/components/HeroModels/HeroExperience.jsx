import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';
import { Suspense } from 'react';

function HeroExperience() {
    // const isTablet = false;
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
        {/* Ambient and directional lights are encapsulated in this component */}
        <HeroLights />

        {/* Allows orbiting the camera around the model with some restrictions */}
        <OrbitControls 
          enablePan={false}             // Disable dragging (panning) the scene
          enableZoom={!isTablet}        // Disable zoom on tablets and smaller devices
          maxDistance={20}              // Maximum zoom-out distance
          minDistance={5}               // Minimum zoom-in distance
          minPolarAngle={Math.PI / 5}   // Prevents flipping below a certain angle
          maxPolarAngle={Math.PI / 2}   // Prevents flipping above the horizontal plane
        />

        {/* Group to position, scale, and rotate the 3D model */}
        <group 
          scale={isMobile ? 0.7 : 1}                   // Scale down the model on mobile devices
          position={[0, -3.5, 0]}                      // Move the model downward
          rotation={[0, -Math.PI / 4, 0]}              // Rotate the model slightly to the left (Y-axis)
        >
          <Suspense fallback={null}>
            <Particles count={100} />
            {/* The actual 3D room model loaded from the GLB */}
            <Room />
          </Suspense>

        </group>
      </Canvas>
      <Loader/>
    </>
  )
}

export default HeroExperience
