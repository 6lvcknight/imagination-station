import React from "react";

function Blob(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  );
}
export default Blob;
