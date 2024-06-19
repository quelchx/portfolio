"use client";

import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense, useDeferredValue } from "react";
import {
  Loader,
  useGLTF,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

import tunnel from "tunnel-rat";

const status = tunnel();

export function TreeCanvas() {
  const model = useGLTF(useDeferredValue("/models/tree.gltf"));
  return (
    <Fragment>
      <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <Suspense fallback={<status.In>Loading ...</status.In>}>
            <primitive object={model.scene} position={[0, 0.25, 0]} />
          </Suspense>
          <ContactShadows scale={20} blur={10} far={20} />
        </group>
        <OrbitControls autoRotate enablePan={false} enableZoom={false} />
      </Canvas>
      <Loader />
    </Fragment>
  );
}
