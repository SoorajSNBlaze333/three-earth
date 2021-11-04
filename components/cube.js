import {
  BoxBufferGeometry,
  Mesh,
  MathUtils,
} from 'three';
import material from './material';

function createCube(length, width, depth) {
  const geometry = new BoxBufferGeometry(length, width, depth);
  const options = { color: "red" };
  const cubeMaterial = material("standard", options);
  const cube = new Mesh(geometry, cubeMaterial);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };
  return cube;
}

export default createCube;