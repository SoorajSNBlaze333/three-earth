import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio); // use this to remove jagged edges
  document.body.appendChild(renderer.domElement);
  return renderer;
}

export default createRenderer;