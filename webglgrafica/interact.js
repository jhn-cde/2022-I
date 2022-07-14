var canvas = document.getElementById('lienzo')
var gl = canvas.getContext("2d")

if (!gl) {
  console.log("Falló al obtener el contexto WebGL2. "
    + "Tu navegador o dispositivo puede que no soporte WebGL.");
  gl = canvas.getContext('experimental-webgl2')  
}

// background
gl.fillStyle = '#000'
gl.fillRect(0, 0, canvas.width, canvas.height)

// conseguir el centro del canvas
const x0 = canvas.width/2
const y0 = canvas.height/2
function dibujarForma(x, y){
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

let dibujar = false
dibujarForma(x0, y0)

canvas.addEventListener('mousemove', function(e){
  if(dibujar){
    dibujarForma(e.x, e.y)
  }
})

canvas.addEventListener('mousedown', function(e){
  dibujar = true
})

canvas.addEventListener('mouseup', function(e){
  dibujar = false
})