import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial
} from 'three';

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
    const material = new MeshBasicMaterial();
    return material;
  }
  createBox() {
    return new Mesh(
      this.#createBoxGeometry(),
      this.#createBoxMaterial()
    )
  }
}

export default Box;