import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  document.body.appendChild(renderer.domElement);
  return renderer;
}

export default createRenderer;