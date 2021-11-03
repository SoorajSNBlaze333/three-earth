class Resizer {
  #camera;
  #renderer;
  constructor(camera, renderer) {
    this.#camera = camera;
    this.#renderer = renderer;
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
      this.onResize();
    });
  }
  resize() {
    this.#camera.aspect = window.innerWidth / window.innerHeight;
    this.#camera.updateProjectionMatrix();
    this.#renderer.setSize(window.innerWidth, window.innerHeight);
    this.#renderer.setPixelRatio(window.devicePixelRatio);
  }
  onResize() {}
}

export default Resizer;