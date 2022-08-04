//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
var figura;
var ejes;
var controls;  //manejo de camara con mouse

//funciones
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
    puntos.push(new THREE.Vector3(2, 7, 2));
    puntos.push(new THREE.Vector3(7, 2, 2));
    puntos.push(new THREE.Vector3(12, 7, 2));
    puntos.push(new THREE.Vector3(12, 17, 2));
    puntos.push(new THREE.Vector3(7, 12, 2));
    puntos.push(new THREE.Vector3(2, 17, 2));
    puntos.push(new THREE.Vector3(2, 7, 2));//coordenada del origen */

    //creando geometria
    const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

    const geometry = new THREE.SphereGeometry( 15, 32, 16, Math.PI*0.5, Math.PI*2, Math.PI*0, Math.PI*0.5 );
    //const material = new THREE.MeshBasicMaterial( { color: 0xffb300 } );

    //creando la figura
    figura = new THREE.Line(geometria, material);
    escenario.add(figura);

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
    figura.rotation.y += 0.01;
    figura.rotation.x += 0.0;
    figura.rotation.z += 0.0;
    lienzo.render(escenario, camara);
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