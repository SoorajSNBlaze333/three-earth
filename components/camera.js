import { PerspectiveCamera } from "three";

function createCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight,
    fov = 75,
    near = 0.1,
    far = 100;
  const camera = new PerspectiveCamera(fov, aspectRatio, near, far);
  return camera;
}

export default createCamera;