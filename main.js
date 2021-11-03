import { Color, Fog } from 'three';
import { World, Box, light } from './components';

const world = new World();
const { scene, camera, controls } = world;

// add lights
const sceneLight = light("point", { color: "white", intensity: 10, distance: 100 })
sceneLight.position.set(0, 10, 10);
scene.add(sceneLight);

camera.position.set(0, 0, 15)
controls.update();

const boxObj = new Box(5, 5, 5);
const box = boxObj.createBox();
scene.add(box);
box.rotation.set(2, 0, 2);

function animate() {
  requestAnimationFrame(animate);
  world.render();
}

animate();
