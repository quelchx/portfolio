import * as THREE from "three";
import { useState, useEffect, useRef, useCallback } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Box } from "@mui/material";

import { forwardRef, memo } from "react";

export const VoxelContainer = memo(
  forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
    ({ children }, ref) => (
      <Box
        ref={ref}
        sx={{
          width: { xs: 200, sm: 240, md: 300, lg: 400, xl: 500 },
          height: { xs: 200, sm: 240, md: 300, lg: 400, xl: 500 },
        }}
      >
        {children}
      </Box>
    )
  )
);

VoxelContainer.displayName = "ComputerContainer";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf: { scene: any }) => {
        const obj = gltf.scene;
        obj.name = "computer";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;

        scene.add(obj);

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}

const useVoxelController = () => {
  const scene = new THREE.Scene();
  const [controls, setControls] = useState<OrbitControls>();
  const [camera, setCamera] = useState<
    THREE.OrthographicCamera | THREE.PerspectiveCamera
  >();

  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();

  const refContainer = useRef() as React.MutableRefObject<HTMLDivElement>;

  return {
    scene,
    controls,
    camera,
    renderer,
    refContainer,
    setCamera,
    setControls,
    setRenderer,
  };
};

export const Voxel = () => {
  const [loading, setLoading] = useState(true);
  const { scene, renderer, refContainer, setCamera, setControls, setRenderer } =
    useVoxelController();

  const target = new THREE.Vector3(-0.5, 1.2, 0);
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  );

  const handleWindowResize = useCallback(() => {
    if (refContainer.current && renderer) {
      const { current: container } = refContainer;

      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w, h);
    }
  }, [renderer]);

  useEffect(() => {
    if (refContainer.current && !renderer) {
      const { current: container } = refContainer;
      const w = container.clientWidth;
      const h = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);

      setRenderer(renderer);

      const scale = h * 0.005 + 4.8;

      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );

      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      setControls(controls);

      loadGLTFModel(scene, "pc.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: null | any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, [refContainer.current]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return <VoxelContainer ref={refContainer}>{loading && <></>}</VoxelContainer>;
};
