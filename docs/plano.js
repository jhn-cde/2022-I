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

    camara.position.z = 1500;
    escenario.add(camara);

    cargaEjes();
    crearPlano();
    cargaModelo();

    controles = new THREE.OrbitControls(camara, lienzo.domElement);
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

function crearPlano() {
    geometriaPlano = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    texturaPlano = new THREE.TextureLoader().load('piso2.jpg');
    texturaPlano.wrapS = texturaPlano.wrapT = THREE.RepeatWrapping;
    texturaPlano.repeat.set(10, 10);

    materialPlano = new THREE.MeshBasicMaterial({ map: texturaPlano, side: THREE.DoubleSide });
    terreno = new THREE.Mesh(geometriaPlano, materialPlano);
    //terreno.rotation.y = -0.5;
    terreno.rotation.x = Math.PI / 2;
    escenario.add(terreno);
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