// <||>
var canvas = document.getElementById('lienzo')
var gl = canvas.getContext("2d")

if (!gl) {
  console.log("Falló al obtener el contexto WebGL2. "
    + "Tu navegador o dispositivo puede que no soporte WebGL.");
  gl = canvas.getContext('experimental-webgl2')  
}

// background
const colorsBack = [0, 0, 0]
gl.fillStyle = '#000'
gl.fillRect(0, 0, canvas.width, canvas.height)

const xm = canvas.width/2
const ym = canvas.height/2
gl.translate(xm, ym)


const dibujarForma = (gl, x, y, tamaño, caras, variante, colors) =>{
  // ini
  gl.save()

  gl.translate(x, y)
  gl.beginPath()
  gl.moveTo(0, -tamaño)
  for(let i = 0; i<caras; i++){
    gl.rotate(Math.PI/caras)
    gl.lineTo(0, -(tamaño*variante))
    gl.rotate(Math.PI/caras)
    gl.lineTo(0, -tamaño)
  }
  gl.closePath()
  setRandomFillColor(gl, colors)
  gl.fill()

  // fin
  gl.restore()
}
const gota = (gl, x, y, tamaño, colors) =>{
  //   - triangulo
  let variante = 0.5
  let caras = 3
  dibujarForma(gl, x, y-tamaño, tamaño, caras, variante, colors) 

  //   - circulo
  variante = 1
  caras = 15
  dibujarForma(gl, x, y, tamaño, caras, variante, colors)
}

const generarGotas = (nroGotas) =>{
  let listaGotas = []
  for(let i = 0; i<nroGotas; i++){
    x = Math.round(-canvas.width/2 + Math.random()*canvas.width)
    y = Math.round(-canvas.height/2 + Math.random()*canvas.height)
    tamaño = 3 + Math.round(Math.random()*2)

    listaGotas.push([x, y, tamaño])
  }
  return listaGotas
}

const lluvia = (gl, listaGotas, color, limpiar=false) =>{
  for(let i = 0; i<listaGotas.length; i++){
    x = listaGotas[i][0]
    y = listaGotas[i][1]
    tamaño = listaGotas[i][2]
    
    if(limpiar) tamaño++
    gota(gl, x, y, tamaño, color)
  }
}

const movLLuvia = (gl, listaGotas, x) =>{
  gl.save()
  lluvia(gl, listaGotas, [0, 0, 0], true)

  //
  for(let i = 0; i<listaGotas.length; i++){
    listaGotas[i][0] += x
  }

  lluvia(gl, listaGotas, [178, 255, 255])
  gl.restore()
}
let nroGotas = 100
let listaGotas = generarGotas(nroGotas)
movLLuvia(gl, listaGotas, 0)

//
let dibujar = false
let xi = 0
let yi = 0
let xa = 0
let ya = 0
canvas.addEventListener('mousemove', function(e){
  if(dibujar){
    const dis = e.x - xi
    let movx = 7
    if(Math.abs(dis)>canvas.width/2) movx = 0
    else if(Math.abs(dis)>20) movx = dis>0? 1 : -1
    else if(Math.abs(dis)>15) movx = dis>0? 2 : -2
    else if(Math.abs(dis)>5) movx = dis>0? 4 : -4


    if(Math.abs(e.x-xa)>4){
      xa = e.x
      movLLuvia(gl, listaGotas, movx)
    }
  }
})

canvas.addEventListener('mousedown', function(e){
  dibujar = true
  xi = e.x
  yi = e.y
  xa = e.x
  ya = e.y
})

canvas.addEventListener('mouseup', function(e){
  dibujar = false
})