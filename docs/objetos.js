function esfera(x, y, z, radio){
  const loader = new THREE.TextureLoader();
  const texture = loader.load( 'ball.png', function ( texture ) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 4, 2 );
  } );

  const geometry = new THREE.SphereGeometry(radio, 16, 16);
  const material = new THREE.MeshStandardMaterial({color: 'grey',map: texture})

  const esfera = new THREE.Mesh(geometry, material)
  esfera.position.set(x, y, z)

  return esfera
}

function cono(x, y, z, radio, altura, color){
  const geometry = new THREE.CylinderGeometry(1, radio, altura, 16, 10, false);
  const material = new THREE.MeshBasicMaterial({color: color})

  const esfera = new THREE.Mesh(geometry, material)
  esfera.position.set(x, y, z)

  return esfera
}

function cubo(w, x, y, z, rotx, roty, rotz, color){
  const loader = new THREE.TextureLoader();
  const geometry = new THREE.BoxGeometry(w, w, w);
  const material = new THREE.MeshStandardMaterial({color: color, map:loader.load( 'piso2.jpg')})

  const esfera = new THREE.Mesh(geometry, material)
  esfera.position.set(x, y, z)
  esfera.rotation.x = rotx*Math.PI/180
  esfera.rotation.y = roty*Math.PI/180
  esfera.rotation.z = rotz*Math.PI/180
  return esfera
}

function cilindro(rt, rb, h, x, y, z, color){
  const geometry = new THREE.CylinderGeometry(rt, rb, h, 32)
  const material = new THREE.MeshBasicMaterial({color: color})

  const cilindro = new THREE.Mesh(geometry, material)
  cilindro.position.set(x, y, z)

  return cilindro
}

function createLights(x, y, z){
  const ambientLight = new THREE.HemisphereLight( 'white', 'darkslategrey', 3);

  const mainLight = new THREE.DirectionalLight('white', 2);
  mainLight.position.set(10, 10, 10);

  const pointLight = new THREE.PointLight('white', 2, 100)
  pointLight.position.set(0, 50, 50)

  return { ambientLight, mainLight, pointLight };
}