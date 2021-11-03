import createCamera from "./camera";
import createScene from "./scene";
import createRenderer from "./renderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Resizer from "./Resizer";

class World {
  camera;
  scene;
  controls;
  renderer;
  constructor() {
    this.camera = createCamera();
    this.scene = createScene('lightblue');
    this.renderer = createRenderer();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    const resizer = new Resizer(this.camera, this.renderer);
  }
  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

export default World;