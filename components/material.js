import {
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshStandardMaterial,
} from "three";

function createMaterial(type, options = {}) {
  let material = new MeshBasicMaterial();
  if (type === "basic") material = new MeshBasicMaterial();
  if (type === "standard") material = new MeshStandardMaterial(options);
  if (type === "depth") material = new MeshDepthMaterial(options);
  if (type === "distance") material = new MeshDistanceMaterial(options);
  if (type === "lambert") material = new MeshLambertMaterial(options);
  if (type === "matcap") material = new MeshMatcapMaterial(options);
  return material;
}

export default createMaterial;