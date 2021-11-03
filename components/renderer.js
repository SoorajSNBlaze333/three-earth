import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  renderer.setAnimationLoop((scene, camera) => {
    renderer.render(scene, camera);
  });
  document.body.appendChild(renderer.domElement);
  return renderer;
}

export default createRenderer;