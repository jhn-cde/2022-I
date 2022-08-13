//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();

var ancho = window.innerWidth - 15;
var alto = window.innerHeight - 10;
var angulo = 45;
var aspecto = ancho / alto;
var cerca = 0.1;
var lejos = 10000;
var camara = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);

var figura;
var ejes;
var controles;  //manejo de camara con mouse

//funciones
function inicio() {
    lienzo.setSize(ancho, alto);
    document.body.appendChild(lienzo.domElement);

    camara.position.z = 100;
    camara.position.y = 40;
    camara.position.z = 80;
    
    escenario.add(camara);

    cargaEjes();
    crearPiso();
    crearMuro();
    cargaModelo();
    cargaEstrellaExtruida()
    cargaCunia()
    cargaEsfera()

    controles = new THREE.OrbitControls(camara, lienzo.domElement);
}

function cargaEstrellaExtruida() {
  var arregloExtruir  = [];
  arregloExtruir.push(new THREE.Vector3(-49, 38, 0));
  //-2.86, 76
  arregloExtruir.push(new THREE.Vector3(-31.43, 38, 0));
  //10, 112
  arregloExtruir.push(new THREE.Vector3(-25, 56, 0));
  //22.85, 76
  arregloExtruir.push(new THREE.Vector3(-19.43, 38, 0));
  //58, 76
  arregloExtruir.push(new THREE.Vector3(-1, 38, 0));
  //31.14, 52.8
  arregloExtruir.push(new THREE.Vector3(-15.57, 26.4, 0));
  //50, 0
  arregloExtruir.push(new THREE.Vector3(-5, 0, 0));
  //10, 34.54
  arregloExtruir.push(new THREE.Vector3(-25, 17.27, 0));
  //-30, 0
  arregloExtruir.push(new THREE.Vector3(-45, 0, 0));
  //-11.14, 52.80 
  arregloExtruir.push(new THREE.Vector3(-35.57, 26.40, 0));

  var formaExtruir = new THREE.Shape(arregloExtruir)
  //extruir figura
  var datoExtruir={
    amount: 10,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 5,
    bevelThickness: 1
  }
  
  var extrudeGeometria = new THREE.ExtrudeGeometry(formaExtruir, datoExtruir)
  var extrudeMaterial = new THREE.MeshBasicMaterial({color: 0x005400, wireframe: false})
  var mallaExtruir = new THREE.Mesh(extrudeGeometria, extrudeMaterial)
  escenario.add(mallaExtruir)
}
function cargaCunia() {
  var arregloExtruir  = [];
  arregloExtruir.push(new THREE.Vector3(-18, 7, 20));
  arregloExtruir.push(new THREE.Vector3(-18, 0, 20));
  arregloExtruir.push(new THREE.Vector3(-8, 0, 20));
  arregloExtruir.push(new THREE.Vector3(-18, 7, 20));

  var formaExtruir = new THREE.Shape(arregloExtruir)
  //extruir figura
  var datoExtruir={
    steps: 20,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
  }
  
  var extrudeGeometria = new THREE.ExtrudeGeometry(formaExtruir, datoExtruir)
  var extrudeMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true})
  var mallaExtruir = new THREE.Mesh(extrudeGeometria, extrudeMaterial)
  escenario.add(mallaExtruir)
}

function cargaEsfera(){
  const geometry = new THREE.SphereGeometry( 15, 32, 16 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const sphere = new THREE.Line( geometry, material );
  sphere.position.x = 60
  sphere.position.y = 40
  escenario.add(sphere)
}

function cargaModelo() {
    //creando el material
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    //creando coordenadas de varios puntos
    const puntos = [];
    puntos.push(new THREE.Vector3(2, 7, 0));
    puntos.push(new THREE.Vector3(7, 2, 0));
    puntos.push(new THREE.Vector3(12, 7, 0));
    puntos.push(new THREE.Vector3(12, 17, 0));
    puntos.push(new THREE.Vector3(7, 12, 0));
    puntos.push(new THREE.Vector3(2, 17, 0));
    puntos.push(new THREE.Vector3(2, 7, 0));//coordenada del origen 

    // PARTE DOS para dar volumen
    puntos.push(new THREE.Vector3(2, 7, 2));
    puntos.push(new THREE.Vector3(7, 2, 2));
    puntos.push(new THREE.Vector3(12, 7, 2));
    puntos.push(new THREE.Vector3(12, 17, 2));
    puntos.push(new THREE.Vector3(7, 12, 2));
    puntos.push(new THREE.Vector3(2, 17, 2));
    puntos.push(new THREE.Vector3(2, 7, 2));//coordenada del origen 

    //creando geometria
    const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

    //creando la figura
    figura = new THREE.Line(geometria, material);
    escenario.add(figura);
    //---------------------------------
    var arregloExtruir  = [];
    arregloExtruir.push(new THREE.Vector3(2, 7, 0));
    arregloExtruir.push(new THREE.Vector3(7, 2, 0));
    arregloExtruir.push(new THREE.Vector3(12, 7, 0));
    arregloExtruir.push(new THREE.Vector3(12, 17, 0));
    arregloExtruir.push(new THREE.Vector3(7, 12, 0));
    arregloExtruir.push(new THREE.Vector3(2, 17, 0));
    arregloExtruir.push(new THREE.Vector3(2, 7, 0));

    var formaExtruir = new THREE.Shape(arregloExtruir)
    //extruir figura
    var datoExtruir={
      amount: 10,
      bevelEnabled: true,
      bevelSegments: 1,
      steps: 5,
      bevelThickness: 1
    }
    
    var extrudeGeometria = new THREE.ExtrudeGeometry(formaExtruir, datoExtruir)
    var extrudeMaterial = new THREE.MeshBasicMaterial({color: 0xD35400, wireframe: false})
    var mallaExtruir = new THREE.Mesh(extrudeGeometria, extrudeMaterial)
    escenario.add(mallaExtruir)
}

function cargaEjes() {
    //creando el material
    const material = new THREE.LineBasicMaterial({ color: 0xffff00 });

    //creando coordenadas x, y, z
    const puntos = [];
    puntos.push(new THREE.Vector3(5, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 5, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 5));

    //creando geometria
    const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

    //creando ejes de coordenadas
    ejes = new THREE.Line(geometria, material);
    escenario.add(ejes);
}

function crearPlano(filename, rotX, posX = 0, posY=0, posZ=0, rep=100, w = 1000, h = 1000) {
    geometriaPlano = new THREE.PlaneGeometry(w, h, 10, 10);
    texturaPlano = new THREE.TextureLoader().load(filename);
    texturaPlano.wrapS = texturaPlano.wrapT = THREE.RepeatWrapping;
    texturaPlano.repeat.set(rep, rep);

    materialPlano = new THREE.MeshBasicMaterial({ map: texturaPlano, side: THREE.DoubleSide });
    terreno = new THREE.Mesh(geometriaPlano, materialPlano);
    //terreno.rotation.y = -0.5;
    terreno.position.x = posX
    terreno.position.y = posY
    terreno.position.z = posZ
    terreno.rotation.x = rotX;
    escenario.add(terreno);
}
function crearPiso(){
  crearPlano('piso2.jpg', Math.PI/2)
}
function crearMuro(){

  crearPlano('muro2.webp', Math.PI, 0, 500, -50, 50)
}

function animacion() {
    requestAnimationFrame(animacion);
    controles.update();
    renderModelo();
}

function renderModelo() {
    figura.rotation.y += 0.01;
    lienzo.render(escenario, camara);
}

///llamando proceso principal
inicio();
animacion();