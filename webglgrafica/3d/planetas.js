//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
var figuras = [];
var ejes;
var controls;  //manejo de camara con mouse

//funciones
function cargaModelo() {
  const r1 = 20
  const w = 10
  let geometry = new THREE.SphereGeometry( r1, 32, 32, Math.PI*1);
  let material = new THREE.MeshBasicMaterial( { color: 0xc88310 } );
  let figura = new THREE.Mesh( geometry, material );

  escenario.add(figura);
  figuras.push(figura)

  //anillos:
  //
  nro_anillos = 12
  wa = w/nro_anillos
  for(let i = 0; i <nro_anillos; i++){
    ri = wa*i + r1+5
    rj = wa*(i+1) +r1+5
    const color = randomColor0x(75, 75, 75)
    geometry = new THREE.RingGeometry( ri, rj, 64 );
    material = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    figura = new THREE.Mesh( geometry, material );
    figura.rotation.x += 2*Math.PI/3;
    escenario.add(figura);
    figuras.push(figura)
  }
  cargaEjes();
}

function cargaEjes() {
    //creando el material
    const material = new THREE.LineBasicMaterial({ color: 0xa90000 });

    //creando coordenadas de varios puntos
    const puntos = [];
    puntos.push(new THREE.Vector3(5, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 5, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 5));
    
    //creando geometria
    const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

    //creando la linea
    ejes = new THREE.Line(geometria, material);
    escenario.add(ejes);
}

function animacion() {
    requestAnimationFrame(animacion);
    controls.update();
    renderModelo();
}

function renderModelo() {
  figuras.forEach(figura => {
    figura.rotation.y += 0.005;
    figura.rotation.x += 0.00;
    figura.rotation.z += 0.01;
    lienzo.render(escenario, camara);
  });
}

function inicio() {
    lienzo.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(lienzo.domElement);

    camara.position.z = 100;
    escenario.add(camara);

    cargaModelo();

    controls = new THREE.OrbitControls(camara, lienzo.domElement);
}

function randomColor0x(r, g, b) {
  red = (Math.round(Math.random()*r)).toString(16)
  green = Math.round(Math.random()*g).toString(16)
  blue = Math.round(Math.random()*b).toString(16)
  
  hexStr = (red.length<2? '0' : '') + red
  hexStr += (green.length<2? '0' : '') + green
  hexStr += (blue.length<2? '0' : '') + blue

  return parseInt(hexStr, 16);
}

///llamando proceso pricipal
inicio();
animacion();
