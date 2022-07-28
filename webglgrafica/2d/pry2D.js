var canvas = document.getElementById('lienzo')
var gl = canvas.getContext("2d")

if (!gl) {
  console.log("Falló al obtener el contexto WebGL2. "
    + "Tu navegador o dispositivo puede que no soporte WebGL.");
  gl = canvas.getContext('experimental-webgl2')  
}

// conseguir el centro del canvas
const x0 = canvas.width/2
const y0 = canvas.height/2
function dibujarForma(x, y){
  gl.save()
  gl.translate(x, y) //trasladar (0, 0) al centro

  gl.beginPath()
  gl.moveTo(0, 0)

  gl.lineTo(0, 0 - 150) //trazamos linea

  for(let i = 0; i < 6; i++){
    gl.rotate(Math.PI / 4) //rotamos 60
    gl.lineTo(0, 0 - 150) //volvemos a trazar la misma line 
  }
  gl.closePath()
  
  //color
  setRandomStrokeColor(gl)
  gl.stroke()
  const r = Math.round(x%256)
  const g = Math.round(x%256)
  const b = Math.round(y%256)
  //gl.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
  //gl.fill()

  gl.restore()
}

let dibujar = false
dibujarForma(x0, y0)

window.addEventListener('mousemove', function(e){
  if(dibujar){
    dibujarForma(e.x, e.y)
  }
})

window.addEventListener('mousedown', function(e){
  dibujar = true
})

window.addEventListener('mouseup', function(e){
  dibujar = false
})