function cargaEsfera(radio, color, x, y, z){
  const geometry = new THREE.SphereGeometry( radio, 16, 16 );
  const material = new THREE.MeshBasicMaterial( { color: color } );
  const sphere = new THREE.Mesh( geometry, material );

  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  return sphere
}

function esferaGroup(){
  const group = new THREE.Group()

  const centerEsfera = cargaEsfera(1, 'indigo', 10, 10, 10)
  group.add(centerEsfera)

  for (let j = 1; j < 5; j += 1){
    let prof = 1
    let ang = 6
    let tmp = 0.01

    let x = 0
    let y = 0
    let z = prof
    for (let i = 0; i < 1; i += tmp) {
      let protoEsfera = cargaEsfera(0.2, 'red', 0, 0, 1)
      x += Math.cos(ang * Math.PI * i)+j
      y += Math.sin(ang * Math.PI * i)+j
      z += -i * 2+j
  
      const esfera1 = protoEsfera.clone();
      esfera1.position.set(x, y, z)
  
      const esfera2 = protoEsfera.clone();
      esfera2.position.set(-x, -y, z)
      
      group.add(esfera1, esfera2);
    }
  
    protoEsfera = cargaEsfera(0.2, 'blue', 1, 0, 0)
    x = prof
    y = 0
    z = 0
    for (let i = 0; i < 1; i += tmp) {
      x += -i * 2+j
      y += Math.cos(ang * Math.PI * i)+j
      z += Math.sin(ang * Math.PI * i)+j
  
      const esfera1 = protoEsfera.clone();
      esfera1.position.set(x, y, z)
  
      const esfera2 = protoEsfera.clone();
      esfera2.position.set(x, -y, -z)
      
      group.add(esfera1, esfera2);
    }
  
  
    protoEsfera = cargaEsfera(0.2, 'yellow', 0, 1, 0)
    x = 0
    y = prof
    z = 0
    for (let i = 0; i < 1; i += tmp) {
      x += Math.sin(ang * Math.PI * i)+j
      y += -i * 2+j
      z += Math.cos(ang * Math.PI * i)+j
  
      const esfera1 = protoEsfera.clone();
      esfera1.position.set(x, y, z)
  
      const esfera2 = protoEsfera.clone();
      esfera2.position.set(-x, y, -z)
      
      group.add(esfera1, esfera2);
    }
  }
  /**/

  return group
}