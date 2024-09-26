import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Create a scene
const scene = new THREE.Scene();

// Set up a camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,3,8); // starting posistion

// Set up a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#soccer'),
});
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(17,5,0.1);

document.body.appendChild(renderer.domElement);

// Add some lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Initialize OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // Enable damping (inertia)
controls.dampingFactor = 0.25;  // Adjust damping factor
controls.screenSpacePanning = false;  // Prevent pan in screen spaces
controls.minDistance = 1;  // Set minimum zoom distance
controls.maxDistance = 100;  // Set maximum zoom distance


// Load the GLTF model
const loader = new GLTFLoader();
let model;
loader.load('/mini_soccer_field/scene.gltf',
    function (gltf) {
        model = gltf.scene;
        scene.add(model);
        console.log("Model loaded");
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Adjust camera and renderer on window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


//change landscape image 
const background_img = new THREE.TextureLoader().load('/img/soccer_clouds.jpg');
scene.background = background_img; 

// Start the animation loop
animate();
