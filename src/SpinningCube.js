import React, { useEffect, useRef, Component } from "react";
import * as THREE from "three";

// const OrbitControls = require("three-orbit-controls")(THREE);

class SpinningCube extends Component {
  componentDidMount() {
    const { width, height } = this.props;
    var scene = new THREE.Scene();
    // this.controls = new OrbitControls(camera);

    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    // const controls = new OrbitControls(camera);
    renderer.setSize(width, height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

export default SpinningCube;
