import { DirectionalLight } from 'three';
import { World, Box } from './components';

const world = new World();
const { scene, camera, controls } = world;
const light = new DirectionalLight(0xFFFFFF, 1);
light.position.set(0, 0, 1);
scene.add(light);
camera.position.set(0, 0, 15)
controls.update();

const boxObj = new Box(10, 10, 10);
const box = boxObj.createBox();
scene.add(box);

function animate() {
  requestAnimationFrame(animate);
  world.render();
}

animate();
