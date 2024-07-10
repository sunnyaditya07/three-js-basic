///Creating scene, camera, render, with cube///////////

// import * as THREE from "three";
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);
// camera.position.z = 5;
// renderer.render(scene, camera);

///Creating scene, camera, render, with rectangle///////////

// import * as THREE from "three";
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const width = 5;
// const height = 2;
// const geometry = new THREE.PlaneGeometry(width, height);
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   side: THREE.DoubleSide,
// });
// const rectangle = new THREE.Mesh(geometry, material);

// scene.add(rectangle);
// camera.position.z = 5;

// renderer.render(scene, camera);

///Creating scene, camera, render, with sphere///////////

// import * as THREE from "three";
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const radius = 1;
// const widthSegments = 32;
// const heightSegments = 32;
// const geometry = new THREE.SphereGeometry(
//   radius,
//   widthSegments,
//   heightSegments
// );
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
// });

// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// camera.position.z = 5;

// renderer.render(scene, camera);

///////Learning about different types of materials and lights ////////

// import * as THREE from "three";
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const radius = 1;
// const widthSegments = 32;
// const heightSegments = 32;
// const geometry = new THREE.SphereGeometry(
//   radius,
//   widthSegments,
//   heightSegments
// );
// const basicMaterial = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
// });

// const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
// const phongMaterial = new THREE.MeshPhongMaterial({
//   color: 0x0000ff,
//   shininess: 100,
// });
// const standardMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffff00,
//   roughness: 0.5,
//   metalness: 0.5,
// });

// // const sphere = new THREE.Mesh(geometry, basicMaterial);
// // const sphere = new THREE.Mesh(geometry, lambertMaterial);
// // const sphere = new THREE.Mesh(geometry, phongMaterial);
// const sphere = new THREE.Mesh(geometry, standardMaterial);
// scene.add(sphere);

// // const ambientLight = new THREE.AmbientLight(0x404040);
// // scene.add(ambientLight);

// // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// // directionalLight.position.set(5, 5, 5);
// // scene.add(directionalLight);

// // const pointLight = new THREE.PointLight(0xffffff, 1);
// // pointLight.position.set(0, 0, 5);
// // scene.add(pointLight);

// const spotLight = new THREE.SpotLight(0x00ff00, 5);
// spotLight.position.set(0, 0, 5);
// scene.add(spotLight);
// camera.position.z = 5;
// renderer.render(scene, camera);

//////Learning about Animation////////////////////

// import * as THREE from "three";
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // const radius = 1;
// // const widthSegments = 32;
// // const heightSegments = 32;
// // const geometry = new THREE.SphereGeometry(
// //   radius,
// //   widthSegments,
// //   heightSegments
// // );
// const geometry = new THREE.BoxGeometry();
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);

// const standardMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffff00,
//   roughness: 0.5,
//   metalness: 0.5,
// });

// const cube = new THREE.Mesh(geometry, standardMaterial);
// scene.add(cube);

// const spotLight = new THREE.SpotLight(0x00ff00, 5);
// spotLight.position.set(0, 0, 5);
// scene.add(spotLight);

// camera.position.z = 5;
// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   cube.rotation.z += 0.01;

//   renderer.render(scene, camera);
// }

// animate();

/////////Giving animation to donught//////////////

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const radius = 1;
// const tubeRadius = 0.3;
// const radialSegments = 16;
// const tubularSegments = 32;
// const geometry = new THREE.TorusGeometry(
//   radius,
//   tubeRadius,
//   radialSegments,
//   tubularSegments
// );

// const standardMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffff00,
//   roughness: 0.5,
//   metalness: 0.5,
// });

// const torus = new THREE.Mesh(geometry, standardMaterial);
// scene.add(torus);

// const spotLight = new THREE.SpotLight(0x00ff00, 5);

// spotLight.position.set(0, 0, 5);
// scene.add(spotLight);

// camera.position.z = 5;

// // renderer.render(scene, camera);
// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.01;
//   torus.rotation.z += 0.01;
//   renderer.render(scene, camera);
// }

// animate();

///////Applying Texture /////////////////
// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load("images/ar.jpg");

// const radius = 1;
// const tubeRadius = 0.3;
// const radialSegments = 16;
// const tubularSegments = 32;
// const geometry = new THREE.TorusGeometry(
//   radius,
//   tubeRadius,
//   radialSegments,
//   tubularSegments
// );

// const standardMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffff00,
//   roughness: 0.5,
//   metalness: 0.5,
//   map: texture,
// });

// const torus = new THREE.Mesh(geometry, standardMaterial);
// scene.add(torus);

// const spotLight = new THREE.SpotLight(0x00ff00, 5);

// spotLight.position.set(0, 0, 5);
// scene.add(spotLight);

// camera.position.z = 5;

// // renderer.render(scene, camera);
// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.01;
//   torus.rotation.z += 0.01;
//   renderer.render(scene, camera);
// }

// animate();

/////Applying texture and modifying its position//////
// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load("images/ar.jpg");

// const radius = 1;
// const tubeRadius = 0.3;
// const radialSegments = 16;
// const tubularSegments = 32;
// const geometry = new THREE.TorusGeometry(
//   radius,
//   tubeRadius,
//   radialSegments,
//   tubularSegments
// );

// const standardMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   roughness: 0.5,
//   metalness: 0.5,
//   map: texture,
// });

// const torus = new THREE.Mesh(geometry, standardMaterial);
// scene.add(torus);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.01;
//   torus.rotation.z += 0.01;
//   renderer.render(scene, camera);
// }

// animate();

/////Using mulitple image on cube as texture on each side//////////

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const textureLoader = new THREE.TextureLoader();

// const texturePaths = [
//   "cube/f1-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/f1-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
// ];

// const textures = texturePaths.map((path) => textureLoader.load(path));
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const standardMaterial = textures.map(
//   (texture) =>
//     new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.5,
//       metalness: 0.5,
//       map: texture,
//     })
// );

// const cube = new THREE.Mesh(geometry, standardMaterial);
// scene.add(cube);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// camera.position.z = 3;

// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate the cube
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();

///////Learning to control orbit////////////

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const textureLoader = new THREE.TextureLoader();

// const texturePaths = [
//   "cube/f1-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/f1-c.jpg",
// ];

// const textures = texturePaths.map((path) => textureLoader.load(path));
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const standardMaterial = textures.map(
//   (texture) =>
//     new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.5,
//       metalness: 0.5,
//       map: texture,
//     })
// );

// const cube = new THREE.Mesh(geometry, standardMaterial);
// scene.add(cube);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

// camera.position.z = 3;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// // controls.autoRotate = true;
// controls.enableZoom = true;
// controls.enablePan = true;
// camera.position.set(0, 0, 3);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   renderer.render(scene, camera);
// }

// animate();

////Learning custome shaders/////
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const vertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fragmentShader = `
//   uniform sampler2D uTexture;
//   varying vec2 vUv;
//   void main() {
//     gl_FragColor = texture2D(uTexture, vUv);
//   }
// `;

// const textureLoader = new THREE.TextureLoader();
// const texturePaths = [
//   "cube/f1-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/f1-c.jpg",
// ];
// const textures = texturePaths.map((path) => textureLoader.load(path));

// const materials = textures.map(
//   (texture) =>
//     new THREE.ShaderMaterial({
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       uniforms: {
//         uTexture: { value: texture },
//       },
//     })
// );

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const cube = new THREE.Mesh(geometry, materials);
// scene.add(cube);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

// camera.position.z = 3;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

////LEarning custome shaders more complex////////

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const vertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fragmentShader = `
//   uniform sampler2D uTexture;
//   uniform float uTime;
//   varying vec2 vUv;
//   void main() {
//     vec2 uv = vUv;
//     uv.x += sin(uTime) * 0.1; // Time-based animation
//     gl_FragColor = texture2D(uTexture, uv);
//   }
// `;

// const textureLoader = new THREE.TextureLoader();
// const texturePaths = [
//   "cube/f1-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/shoe-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/sky-c.jpg",
//   "cube/f1-c.jpg",
// ];
// const textures = texturePaths.map((path) => textureLoader.load(path));

// const materials = textures.map(
//   (texture) =>
//     new THREE.ShaderMaterial({
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       uniforms: {
//         uTexture: { value: texture },
//         uTime: { value: 0.0 },
//       },
//     })
// );

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const cube = new THREE.Mesh(geometry, materials);
// scene.add(cube);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

// camera.position.z = 3;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// function animate(time) {
//   requestAnimationFrame(animate);

//   materials.forEach((material) => {
//     material.uniforms.uTime.value = time * 0.001;
//   });

//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

////Importing Gltf loader ///////////
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// scene.add(light);

// const loader = new GLTFLoader();
// loader.load(
//   "minion/scene.gltf",
//   function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, -50, 0);
//     scene.add(model);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );
// camera.position.x = 100;
// camera.position.z = 150;

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

////Importing Gltf loader and adding shadow of the 3d object///////////

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff);
// renderer.shadowMap.enabled = true;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// light.castShadow = true;
// scene.add(light);

// const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
// const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -0.5;
// plane.receiveShadow = true;
// scene.add(plane);

// const loader = new GLTFLoader();
// loader.load(
//   "minion/scene.gltf",
//   function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, -50, 0);
//     model.traverse((node) => {
//       if (node.isMesh) {
//         node.castShadow = true;
//       }
//     });
//     scene.add(model);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );

// camera.position.set(100, 0, 150);

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(5, 10, 7.5);
// light.castShadow = true;
// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 500;
// light.shadow.camera.left = -50;
// light.shadow.camera.right = 50;
// light.shadow.camera.top = 50;
// light.shadow.camera.bottom = -50;
// scene.add(light);

// const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
// const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -50;
// plane.receiveShadow = true;
// scene.add(plane);

// const loader = new GLTFLoader();
// loader.load(
//   "minion/scene.gltf",
//   function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, -50, 0);
//     model.traverse((node) => {
//       if (node.isMesh) {
//         node.castShadow = true;
//       }
//     });
//     scene.add(model);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );

// camera.position.set(100, 0, 150);

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

/////Importing gltf and adding texture to it/////////////////
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// scene.add(light);

// const textureLoader = new THREE.TextureLoader();
// const textures = [
//   textureLoader.load("minion/textures/Minion_N1Eye_2_baseColor.jpeg"),
//   textureLoader.load("minion/textures/Minion_N1Goggles_Tex_2_baseColor.jpeg"),
//   textureLoader.load(
//     "minion/textures/Minion_N1Goggles_Tex_2_metallicRoughness.png"
//   ),
//   textureLoader.load("minion/textures/Minion_N1lambert9_baseColor.jpeg"),
//   textureLoader.load("minion/textures/Minion_N1Pants_Texture_baseColor.jpeg"),
// ];

// const loader = new GLTFLoader();
// loader.load(
//   "minion/scene.gltf",
//   function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, -50, 0);

//     model.traverse((node) => {
//       if (node.isMesh) {
//         node.castShadow = true;

//         // Apply a random texture from the loaded textures to the model's material
//         const material = new THREE.MeshStandardMaterial({
//           map: textures[Math.floor(Math.random() * textures.length)],
//           roughness: 0.5,
//           metalness: 0.5,
//         });
//         node.material = material;
//       }
//     });

//     scene.add(model);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );
// camera.position.x = 100;
// camera.position.z = 150;

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load textures
const textureLoader = new THREE.TextureLoader();
const textures = {
  Minion_N1Eye_2_baseColor: textureLoader.load(
    "minion/textures/Minion_N1Eye_2_baseColor.jpeg"
  ),
  Minion_N1Goggles_Tex_2_baseColor: textureLoader.load(
    "minion/textures/Minion_N1Goggles_Tex_2_baseColor.jpeg"
  ),
  Minion_N1Goggles_Tex_2_metallicRoughness: textureLoader.load(
    "minion/textures/Minion_N1Goggles_Tex_2_metallicRoughness.png"
  ),
  Minion_N1lambert9_baseColor: textureLoader.load(
    "minion/textures/Minion_N1lambert9_baseColor.jpeg"
  ),
  Minion_N1Pants_Texture_baseColor: textureLoader.load(
    "minion/textures/Minion_N1Pants_Texture_baseColor.jpeg"
  ),
};

const loader = new GLTFLoader();
loader.load(
  "minion/scene.gltf",
  function (gltf) {
    const model = gltf.scene;
    model.position.set(0, -50, 0);

    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;

        const materialName = node.material.name;
        if (textures[materialName]) {
          node.material.map = textures[materialName];
          node.material.needsUpdate = true;
        }
      }
    });

    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.set(100, 0, 150);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
