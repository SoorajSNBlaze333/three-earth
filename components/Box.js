import {
  BoxBufferGeometry,
  Mesh,
} from 'three';
import material from './material';

class Box {
  #length;
  #width;
  #depth;
  constructor(length, width, depth) {
    this.#length = length;
    this.#width = width;
    this.#depth = depth;
  }
  #createBoxGeometry() {
    const geometry = new BoxBufferGeometry(this.#length, this.#width, this.#depth);
    return geometry;
  }
  #createBoxMaterial() {
    const options = { color: 'red' };
    const boxMaterial = material("standard", options);
    return boxMaterial;
  }
  createBox() {
    return new Mesh(
      this.#createBoxGeometry(),
      this.#createBoxMaterial()
    )
  }
}

export default Box;