import React from 'react';
import { OrbitControls } from '@react-three/drei';

function Sphere() {
  return (
    <>
      {/* Add camera controls */}
      <OrbitControls />

      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Create the rotating cube */}
      <mesh rotation={[0.5, 0.5, 0]}>
        {/* Geometry */}
        <boxGeometry args={[2, 2, 2]} />
        {/* Material */}
        <meshStandardMaterial color='orange' />
      </mesh>
    </>
  );
}

export default Sphere;
