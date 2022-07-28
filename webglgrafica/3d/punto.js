const main = () => {
  var lienzo = new THREE.WebGLRenderer();
  lienzo.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(lienzo.domElement);

  var escenario = new THREE.Scene();
  //var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var camara = new THREE.PerspectiveCamera();
  camara.position.z = 100;
  escenario.add(camara);

  forma = getForma()
  
  escenario.add(forma)

  lienzo.render(escenario, camara);
}

const getForma = () => {
  
  //material de punto
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  
  const points = [];

  points.push( new THREE.Vector3( -38, 26, -500 ) );
  points.push( new THREE.Vector3( 58, 26, -500 ) );
  points.push( new THREE.Vector3( -20, -50, -500 ) );
  points.push( new THREE.Vector3( 10, 62, -500 ) );
  points.push( new THREE.Vector3( 40, -50, -500 ) );
  points.push( new THREE.Vector3( -38, 26, -500 ) );
  points.push( new THREE.Vector3( 58, 26, -500 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  
  const line = new THREE.Line( geometry, material );
  return line
}


const getPunto = (x, y, z) => {
  //material de punto
  const material = new THREE.PointsMaterial({ size: 1, color: 0xff00ff });

  //coordenadas
  const vertices = new Float32Array( [
    x, y, z
  ] );

  //geometria a mostrar
  const geometria = new THREE.BufferGeometry();
  geometria.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  //creando el punto
  const punto = new THREE.Points(geometria, material);
  return punto
}

main()
