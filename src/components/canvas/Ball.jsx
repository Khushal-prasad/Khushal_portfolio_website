import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Preload, useTexture, Float } from '@react-three/drei'
import CanvasLoader from '../Loader'

const BrokenSphere = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[2, 4, 5]} intensity={0.7} />
      <mesh castShadow receiveShadow scale={2.5}>
        {/* Geometry with a lot of subdivisions */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* Use meshStandardMaterial directly */}
        <meshStandardMaterial
          color="#269be4"
          roughness={0.9}
          metalness={0.1}
          flatShading
          // Apply noise-based distortions here
          displacementMap={null} // You can add a displacement map for roughness
          displacementScale={0.1} // Random bumpiness for a broken feel
        />
        {/* Apply Decal for a broken surface look */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BrokenSphereCanvas = ({ icon }) => {
  return (
    
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <BrokenSphere imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BrokenSphereCanvas
