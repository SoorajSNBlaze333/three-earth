import { Color, Scene } from 'three';

function createScene(background) {
  const scene = new Scene();
  scene.background = new Color(background);
  return scene;
}

export default createScene;