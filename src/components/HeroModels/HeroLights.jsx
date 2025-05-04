import React from 'react';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
// Initialize RectAreaLight support
RectAreaLightUniformsLib.init();

const HeroLights = () => {
    return (
        <>
            {/* Ambient light provides soft, even lighting across the entire scene */}
            {/* intensity={0.2} => Low intensity to avoid overexposure,  color='#1a1a40' => Subtle bluish-purple tint for ambient tone */}
            {/* <ambientLight  intensity={0.2} color='#1a1a40'/> */}

            {/* Directional light simulates sunlight or a strong light source */}
            {/* position={[5, 5, 5]} => Position in 3D space (x, y, z), intensity={2} => Strength of the light */}
            {/* <directionalLight  position={[5, 5, 5]} intensity={2} /> */}

            {/* Adds a spotlight (focused beam of light) */}
            <spotLight
            position={[2, 5, 6]}     // Position in 3D space (x, y, z)
            angle={0.15}             // Beam angle in radians (narrow cone)
            penumbra={0.2}           // Softness of the spotlight edge (0 = sharp, 1 = soft)
            intensity={100}          // Brightness of the light
            color="white"            // Color of the light
            />

            {/* Adds a bluish overhead spotlight for cool ambiance */}
            <spotLight
            position={[4, 5, 4]}     // Slightly forward and overhead
            angle={0.3}              // Medium-wide beam
            penumbra={0.5}           // Moderate softness on edges
            intensity={40}           // Medium brightness
            color="#4cc9f0"          // Light blue color
            />

            {/* Side spotlight with a purple hue for creative lighting */}
            <spotLight
            position={[-3, 5, 5]}    // Positioned to the side
            angle={0.4}              // Wide spread
            penumbra={1}             // Very soft edge
            intensity={60}           // Strong brightness
            color="#9d4edd"          // Purple color
            />

            {/* Adds a rectangular area light (soft, wide light source) */}
            {/* This uses the `primitive` tag to insert a raw Three.js object */}
            <primitive
            object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)} // Color, intensity, width, height
            position={[1, 3, 4]}        // Positioned in space
            rotation={[-Math.PI / 4, Math.PI / 4, 0]} // Rotated down and sideways
            intensity={15}              // Light intensity
            />

            {/* A small point light (radiates in all directions) from below */}
            <pointLight 
            position={[0, 1, 0]}        // Near the floor
            intensity={10}              // Moderate intensity
            color="#7209b7"             // Deep violet hue
            />

            {/* Additional point light from a different direction */}
            <pointLight 
            position={[1, 2, -2]}       // Slightly behind the scene
            intensity={10}              // Moderate brightness
            color="#0d00a4"             // Dark blue tone
            />

        </>

    );
}

export default HeroLights;
