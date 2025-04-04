import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeModel = () => {
    useEffect(() => {
        
        // Create a scene
        const scene = new THREE.Scene();
        
        // Set up a camera
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(1,15,36); //starting position(x,y,z)

            // Set up a renderer
        const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#soccer') });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight);
        document.body.appendChild( renderer.domElement );

        // Add some lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 5);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        //controlls interaction of field
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;  // Smooth rotation
        controls.dampingFactor = 0.25;
        controls.enablePan = false;  // Disable panning (right-click dragging)
        controls.minPolarAngle = Math.PI / 4; 
        controls.maxPolarAngle = Math.PI / 2; // prevents user from scrolling below field
        controls.minAzimuthAngle = -Infinity; // Allow full horizontal rotation
        controls.maxAzimuthAngle = Infinity;
        controls.minDistance = 5;  // Set minimum zoom distance
        controls.maxDistance = 45;  // Set maximum zoom distance
        
        // Load the Field GLTF model
        const loader = new GLTFLoader();
        let fieldModel;
        loader.load('/mini_field/scene.gltf',
            function (gltf) {
                fieldModel = gltf.scene;
                scene.add(fieldModel);
                console.log("Model loaded", fieldModel.position);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.error(error);
            }
        );

        //loading soccer ball
        let ballModel;
        loader.load('/soccer_ball/scene.gltf',
            function (gltf) {
                ballModel = gltf.scene;
                console.log("ball " , ballModel.position);
                ballModel.position.set(0,0,-0.4);
                scene.add(ballModel);
                console.log("ball model loaded");
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
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            controls.update();
        }
        
        // Adjust camera and renderer on window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        //change landscape color 
        const color = new THREE.Color()
        color.setStyle("rgb(0,0,0)");
        scene.background = color;
        
        // Start the animation loop
        animate();
        

    });
}

export default ThreeModel;
