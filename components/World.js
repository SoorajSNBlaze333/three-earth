import createCamera from "./camera";
import createScene from "./scene";
import createRenderer from "./renderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Resizer from "./Resizer";
import Loop from "./Loop";

class World {
  camera;
  scene;
  loop;
  controls;
  renderer;
  constructor() {
    this.camera = createCamera();
    this.scene = createScene('lightblue');
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.renderer = createRenderer();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    const resizer = new Resizer(this.camera, this.renderer);
    resizer.onResize = () => {
      this.render();
    }
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