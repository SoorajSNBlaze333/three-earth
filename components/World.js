import createCamera from "./camera";
import createScene from "./scene";
import createRenderer from "./renderer";
import createLight from "./light";
import createCube from "./cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Resizer from "./Resizer";

class World {
  camera;
  scene;
  loop;
  controls;
  renderer;
  constructor() {
    this.camera = createCamera();
    this.scene = createScene('lightblue');
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    const resizer = new Resizer(this.camera, this.renderer);

    // add lights
    const sceneLight = createLight("point", { color: "white", intensity: 10, distance: 100 })
    sceneLight.position.set(0, 10, 10);
    this.scene.add(sceneLight);

    this.camera.position.set(0, 0, 15)
    this.controls.update();

    const cube = new createCube(5, 5, 5);
    this.scene.add(cube);
    this.loop.updatables.push(cube);
  }
  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  start() {
    this.loop.start();
  }
  stop() {
    this.loop.stop();
  }
}

export default World;