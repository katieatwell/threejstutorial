document.addEventListener("DOMContentLoaded", function(event) {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var cubeMaterials = [
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image1.jpg"),
      side: THREE.DoubleSide
    }),
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image2.jpg"),
      side: THREE.DoubleSide
    }),
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image3.jpg"),
      side: THREE.DoubleSide
    }),
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image4.jpg"),
      side: THREE.DoubleSide
    }),
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image5.jpg"),
      side: THREE.DoubleSide
    }),
    new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load("../images/image6.jpg"),
      side: THREE.DoubleSide
    })
  ];

  var material = new THREE.MeshFaceMaterial(cubeMaterials);
  // var another = new THREE.MeshDepthMaterial({displacementScale: 0.5, });
  var cube = new THREE.Mesh(geometry, material);
  var ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
  var pointLight1 = new THREE.PointLight(0xffffff, 5, 5);
  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);

  var spotLight = new THREE.SpotLight(0xffffff, 25);
  directionalLight.position.set(0, 3, 0);

  // var pointLight2 = new THREE.PointLight(0xffffff, 5, 50);
  // var pointLight3 = new THREE.PointLight(0xffffff, 5, 50);
  scene.add(cube);
  scene.add(ambientLight);
  // scene.add(pointLight1);
  // scene.add(directionalLight);
  scene.add(spotLight);
  // scene.add(pointLight2);
  // scene.add(pointLight3);
  camera.position.z = 3;
  var update = function() {
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.0005;
    var time = Date.now() * 0.0005;
    // pointLight1.position.x = Math.sin(time * 0.7) * 30;
    // pointLight1.position.y = Math.cos(time * 0.5) * 40;
    // pointLight1.position.z = Math.cos(time * 0.3) * 40;

    //     pointLight2.position.x = Math.cos(time * 0.7) * 30;
    //     pointLight2.position.y = Math.sin(time * 0.3) * 40;
    //     pointLight2.position.z = Math.sin(time * 0.5) * 40;
    //
    //     pointLight3.position.x = Math.sin(time * 0.3) * 30;
    //     pointLight3.position.y = Math.cos(time * 0.5) * 40;
    //     pointLight3.position.z = Math.sin(time * 0.5) * 40;
  };

  var render = function() {
    renderer.render(scene, camera);
  };

  var GameLoop = function() {
    window.requestAnimationFrame(GameLoop);
    update();
    render();
  };

  GameLoop();
});
