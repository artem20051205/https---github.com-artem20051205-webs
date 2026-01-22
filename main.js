import * as THREE from 'three';

const width = 400;
const height = 600;
const c1 = document.getElementById("container1");
const c2 = document.getElementById("container2");
const c3 = document.getElementById("container3");

// Scene 1 - Cylinder
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
const renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(width, height);
c1.appendChild(renderer1.domElement);

const geometry1 = new THREE.CylinderGeometry(1, 1, 2, 32);
const material1 = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
const cylinder = new THREE.Mesh(geometry1, material1);
scene1.add(cylinder);

camera1.position.z = 5;

// Scene 2 - Pyramid
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(width, height);
c2.appendChild(renderer2.domElement);

const geometry2 = new THREE.ConeGeometry(1, 2, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
const pyramid = new THREE.Mesh(geometry2, material2);
scene2.add(pyramid);

camera2.position.z = 5;

// Scene 3 - Sphere
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
const renderer3 = new THREE.WebGLRenderer();
renderer3.setSize(width, height);
c3.appendChild(renderer3.domElement);

const geometry3 = new THREE.SphereGeometry(1, 32, 32);
const material3 = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
const sphere = new THREE.Mesh(geometry3, material3);
scene3.add(sphere);

camera3.position.z = 5;

let btime = 0;
let direction = 1;

function animate() {
  // Rotate objects
  cylinder.rotation.x += 0.001;
  cylinder.rotation.y += 0.001;
  cylinder.rotation.z += 0.001;
  
  pyramid.rotation.x += 0.002;
  pyramid.rotation.y += 0.002;
  pyramid.rotation.z += 0.002;
  
  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.003;
  sphere.rotation.z += 0.003;

  // Bounce effect
  btime += 0.01;
  if (btime < 1) {
    cylinder.position.y -= 0.002 * direction;
    pyramid.position.y -= 0.0025 * direction;
    sphere.position.y -= 0.003 * direction;
  } else if (btime >= 0.5) {
    direction *= -1;
    btime = 0;
  }

  // Render all scenes
  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
}

renderer1.setAnimationLoop(animate);
renderer2.setAnimationLoop(animate);
renderer3.setAnimationLoop(animate);
