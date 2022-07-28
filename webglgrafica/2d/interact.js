var canvas = document.getElementById('lienzo')
var gl = canvas.getContext("2d")

if (!gl) {
  console.log("Falló al obtener el contexto WebGL2. "
    + "Tu navegador o dispositivo puede que no soporte WebGL.");
  gl = canvas.getContext('experimental-webgl2')  
}

// background
//gl.fillStyle = '#000'
//gl.fillRect(0, 0, canvas.width, canvas.height)

// conseguir el centro del canvas
const x0 = canvas.width/2
const y0 = canvas.height/2
function dibujarForma(x, y, tamaño, variante, caras, colors=null){
  gl.save()
  gl.beginPath()
  gl.translate(x, y) //trasladar (0, 0) al centro
  
  gl.moveTo(0, -tamaño)
  for(let i = 0; i < caras; i++){
    // triangulo
    gl.rotate(Math.PI/caras)
    gl.lineTo(0, -(tamaño*variante))
    gl.rotate(Math.PI/caras)
    gl.lineTo(0, -tamaño)
  }

  gl.closePath()
  setRandomFillColor(gl, colors)
  setRandomShadow(gl, [0, 0, 0])
  gl.fill()
  gl.restore()
}
function dibujarFormas(e, angulo, tamaño, variante, caras){
  //colores
  const r = Math.round(Math.random()*256)
  const g = 100+Math.round(Math.random()*156)
  const b = Math.round(Math.random()*256)
  // -----------------

  gl.save()
  gl.translate(e.x, e.y)
  gl.rotate(angulo * Math.PI / 180)
  dibujarForma(0, 0, 2*tamaño, 1, 15, [0, 0, 0])  
  gl.restore()
  // -----------------
  
  gl.save()
  gl.translate(e.x, e.y)
  gl.rotate(-angulo/2 * Math.PI / 180)
  dibujarForma(-2*tamaño, 0, 2*tamaño/3, variante, caras, [r, g, b])
  dibujarForma(0, 2*tamaño, 2*tamaño/3, variante, caras, [r, g, 0])
  dibujarForma(0, -2*tamaño, 2*tamaño/3, variante, caras, [0, g, b])
  dibujarForma(2*tamaño, 0, 2*tamaño/3, variante, caras, [r, 0, b])
  gl.restore()
  // -----------------

  gl.save()
  gl.translate(e.x, e.y)
  gl.rotate(angulo/4 * Math.PI / 180)
  dibujarForma(-3*tamaño, -3*tamaño, 3*tamaño/3, variante, 2*caras, [r, g, b])
  dibujarForma(3*tamaño, 3*tamaño, 3*tamaño/3, variante, 2*caras, [r, g, 0])
  dibujarForma(3*tamaño, -3*tamaño, 3*tamaño/3, variante, 2*caras, [0, g, b])
  dibujarForma(-3*tamaño, 3*tamaño, 3*tamaño/3, variante, 2*caras, [r, 0, b])
  gl.restore()
}

let dibujar = false
let tamaño = 40
let variante = 0.3
let caras = 3
let angulo = 0

//dibujarForma(x0, y0, tamaño, variante, caras)

canvas.addEventListener('mousemove', function(e){
  if(dibujar){
    dibujarFormas(e, angulo, tamaño, variante, caras)

    angulo += 5
  }
})

canvas.addEventListener('mousedown', function(e){
  dibujar = true
})

canvas.addEventListener('mouseup', function(e){
  dibujar = false
})



function dibujarForma1(x, y){
  gl.save()
  gl.translate(x, y) //trasladar (0, 0) al centro
  
  const angulo = 30
  for(let i = 0; i <= 360; i+=angulo){
    // triangulo
    const x1 = -45, y1 = 21
    const x2 = 45, y2 = 21
    const x3 = 0, y3 = -21

    setRandomFillColor(gl)
    drawTriangulo(gl, x1, y1, x2, y2, x3, y3)
    
    // escala
    gl.scale(.9, .9)

    // rotacion
    gl.rotate(angulo * Math.PI / 180)
  }
  gl.restore()
}