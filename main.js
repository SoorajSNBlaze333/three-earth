import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  DirectionalLight,
  SphereGeometry,
  MeshBasicMaterial,
  TextureLoader,
  ShaderMaterial
} from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

const W = innerWidth, H = innerHeight;
const scene = new Scene();
const camera = new PerspectiveCamera(75, W / H, 0.1, 1000);
const light = new DirectionalLight(0xFFFFFF, 1);
const renderer = new WebGLRenderer({
  antialias: true
});

function setup() {
  renderer.setSize(W, H);
  renderer.setPixelRatio(devicePixelRatio); // use this to remove jagged edges
  document.body.appendChild(renderer.domElement)
}

function setCameraPosition(x = 0, y = 0, z = 0) {
  camera.position.set(x, y, z)
}

function animate() {
  sphere.rotation.y += 0.002;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

setup();
setCameraPosition(0, 0, 15);
light.position.set(0, 0, 1);
scene.add(light);

const sphere = new Mesh(
  new SphereGeometry(5, 50, 50),
  new ShaderMaterial({
    vertexShader,
    // fragmentShader,
  })
);
scene.add(sphere);

animate();