//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
var figuras = [];
var ejes;
var controls;  //manejo de camara con mouse

//funciones
function cargaModelo() {
  const r1 = 15
  const r2 = 25
  let geometry = new THREE.SphereGeometry( r1, 32, 20, Math.PI*1, Math.PI*1, Math.PI*0, Math.PI );
  let material = new THREE.MeshBasicMaterial( { color: 0xffb300, side: THREE.DoubleSide } );
  let figura = new THREE.Mesh( geometry, material );

  escenario.add(figura);
  figuras.push(figura)
  
  //
  geometry = new THREE.CylinderGeometry( r1+1, r1, 4, 32, 20, 1, true );
  material = new THREE.MeshBasicMaterial( {color: 0xa90000, side: THREE.DoubleSide, wireframe: true} );
  figura = new THREE.Mesh( geometry, material );
  figura.rotation.x += Math.PI/2;
  figura.position.z = -2.1
  
  escenario.add(figura);
  figuras.push(figura)

  //
  geometry = new THREE.RingGeometry( r1, r2, 64 );
  material = new THREE.MeshBasicMaterial( { color: 0xffb300, side: THREE.DoubleSide } );
  figura = new THREE.Mesh( geometry, material );
  figura.position.z = 0
  
  escenario.add(figura);
  figuras.push(figura)

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
    figura.rotation.y += 0.0;
    figura.rotation.x += 0.0;
    figura.rotation.z += 0.0;
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

///llamando proceso pricipal
inicio();
animacion();