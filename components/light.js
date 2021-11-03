import {
  DirectionalLight,
  PointLight,
  RectAreaLight
} from "three";

function createLight(type, options = {}) {
  let light = new DirectionalLight(color, intensity);
  const {
    color = "white",
    intensity = 1,
    distance = 0,
    width = 10,
    height = 10,
    decay = null,
  } = options;
  if (type == "dir") light = new DirectionalLight(color, intensity);
  if (type == "point") light = new PointLight(color, intensity, distance, decay);
  if (type == "rect") light = new RectAreaLight(color, intensity, width, height);
  return light;
}

export default createLight;