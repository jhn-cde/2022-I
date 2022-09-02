//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();

var ancho = window.innerWidth - 15;
var alto = window.innerHeight - 10;
var angulo = 10;
var aspecto = ancho / alto;
var cerca = 0.1;
var lejos = 10000;
var camara = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);

var figura;
var ejes;
var controles;  //manejo de camara con mouse

let inc = 2
let movx = 0
const maxx = 15

let movz = 0.5
const maxz = 67.5

let treeFrac

//funciones
function inicio() {
    lienzo.setSize(ancho, alto);
    document.body.appendChild(lienzo.domElement);
    camara.position.set(0, 500, 500)
    const { ambientLight, mainLight, pointLight } = createLights();

    escenario.add(camara, ambientLight);

    crearPiso()

    const cono1 = cono(0, 5.1, (-1)*(45), 4, 10, '#009900')
    //const cono2 = cono(0, 5.1, 0, 4, 10, '#009900')
    const cono3 = cono(0, 5.1, 45, 4, 10, '#009900')

    figura = esfera(0, 6, 67.5, 6)

    escenario.add(cono1, cono3, figura)
    
    const cubo1 = cubo(10, 30, 10, 10, 0, 0, 0, 'orange')
    escenario.add(cubo1)

    const treeD = 6
    const treeH = 50
    treeFrac = new Tree(treeD, treeH);
    escenario.add(treeFrac)

    controles = new THREE.OrbitControls(camara, lienzo.domElement);
    
    const withinTree = new THREE.Vector3(
      treeFrac.position.x,
      treeFrac.position.y + treeH,
      treeFrac.position.z,
    );
    controles.target.set(withinTree.x, withinTree.y, withinTree.z);
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

function crearPlano(filename, rotX, posX = 0, posY=0, posZ=0, rep=10, w = 200, h = 300) {
    geometriaPlano = new THREE.PlaneGeometry(w, h, 10, 10);
    texturaPlano = new THREE.TextureLoader().load(filename);
    texturaPlano.wrapS = texturaPlano.wrapT = THREE.RepeatWrapping;
    texturaPlano.repeat.set(rep, rep);

    materialPlano = new THREE.MeshBasicMaterial({ map: texturaPlano, side: THREE.DoubleSide });
    terreno = new THREE.Mesh(geometriaPlano, materialPlano);
    
    terreno.position.x = posX
    terreno.position.y = posY
    terreno.position.z = posZ
    terreno.rotation.x = rotX;
    escenario.add(terreno);
}
function crearPiso(){
  crearPlano('grass.jpg', Math.PI/2)
}
function crearMuro(){

  crearPlano('muro2.webp', Math.PI, 0, 500, -50, 40)
}

function animacion(delta) {
    requestAnimationFrame(animacion);
    controles.update();
    renderModelo();
}

function figuraMov(){
  /**/
  if(movx >= 90)
    inc*=-1
  if(movx <= -90)
    inc*=-1
  if(figura.position.z >= maxz)
    movz*=-1
  if(figura.position.z <= -maxz)
    movz*=-1

  movx += inc
  figura.position.x = maxx*Math.sin(movx*Math.PI/180);
  figura.position.z += movz;

  if(movz>0)
    figura.rotation.x+=0.1
  else
    figura.rotation.x-=0.1
}

function renderModelo(delta) {
  treeFrac.update()
  figuraMov()
  /**/
  lienzo.render(escenario, camara);
}

///llamando proceso principal
inicio();
animacion();