function cargaEstrellaExtruida(r1, r2, px, py, pz) {
  var arregloExtruir  = [];
  
  let x, y
  for (let i = 0; i < 5; i++){
    x = r1*Math.cos((90+i*72)*Math.PI/180)
    y = py+r1*Math.sin((90+i*72)*Math.PI/180)
    arregloExtruir.push(new THREE.Vector3(x, y, 0));

    x = r2*Math.cos((126+i*72)*Math.PI/180)
    y = py+r2*Math.sin((126+i*72)*Math.PI/180)
    arregloExtruir.push(new THREE.Vector3(x, y, 0));
  }


  var formaExtruir = new THREE.Shape(arregloExtruir)
  //extruir figura
  var datoExtruir={
    amount: 10,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 5,
    depth: 0
  }
  
  var extrudeGeometria = new THREE.ExtrudeGeometry(formaExtruir, datoExtruir)
  var extrudeMaterial = new THREE.MeshBasicMaterial({color: 0x005400, wireframe: false})
  var mallaExtruir = new THREE.Mesh(extrudeGeometria, extrudeMaterial)
  return mallaExtruir
  //escenario.add(mallaExtruir)
}

function createBox(w, x, y, z){
  const texture = new THREE.TextureLoader().load( "muro.jpeg" );

  const geometry = new THREE.BoxGeometry( w, w, w );
  const material = new THREE.MeshBasicMaterial( {
    map: texture 
  } );
  const cube = new THREE.Mesh( geometry, material );
  cube.position.set(x, y, z)
  return cube
}

function ejercicio1(){
  const altura = 5
  const w = 1
  const esp = 0.2
  let [x, y, z]= [0, 0, 0]
  const protoCube = createBox(w, x, y, z)

  const group = new THREE.Group()
  let nroFilas = altura
  let tx = 0, ty = 0, tz = 0
  for (let i = 0; i < altura; i++){
    for (let j = 0; j < nroFilas; j++){
      for (let k = 0; k < nroFilas; k++){
        const cube = protoCube.clone();
        cube.position.x = tx
        cube.position.y = ty
        cube.position.z = tz

        group.add(cube)
        tx += w + esp
      }
      tx = x
      tz += w + esp
    }
    nroFilas--
    x = (w+esp)/2*(altura-nroFilas)
    z = (w+esp)/2*(altura-nroFilas)
    
    tx = x
    tz = z
    ty = (w+esp)*(altura-nroFilas)
    console.log('piso completado')
  }

  return group
}

function ejercicio2(){
  const altura = 5
  const w = 1
  const esp = 0.2
  let [x, y, z]= [0, 0, 0]
  const protoCube = createBox(w, x, y, z)

  const group = new THREE.Group()
  let nroFilas = altura
  let tx = 0, ty = 0, tz = 0
  for (let i = 0; i < altura-1; i++){
    for (let j = 0; j < nroFilas; j++){
      for (let k = nroFilas-j; k != 0; k--){
        const cube = protoCube.clone();
        cube.position.x = tx
        cube.position.y = ty
        cube.position.z = tz

        group.add(cube)
        tx += w + esp
      }
      tx = x
      tz += w + esp
    }
    nroFilas--
    
    tx = x
    tz = z
    ty = (w+esp)*(altura-nroFilas)
    console.log('piso completado')
  }

  const estrella = cargaEstrellaExtruida(1, 0.5, 0, ty+esp, 0)


  return {group: group, estrella: estrella}
}