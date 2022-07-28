var fEscalar = function(){
  var canvas = document.getElementById('lienzo')
  var gl = canvas.getContext("2d")

  if (!gl) {
    console.log("Falló al obtener el contexto WebGL2. "
      + "Tu navegador o dispositivo puede que no soporte WebGL.");
    gl = canvas.getContext('experimental-webgl2')  
  }

  console.log('canvas size: ' + canvas.width + ', ' + canvas.height)

  // background
  gl.fillStyle = '#000'
  gl.fillRect(0, 0, canvas.width, canvas.height)

  //centro
  const tx = canvas.width/2
  const ty = canvas.height/2

  // trasladar
  gl.translate(tx, ty)

  const angulo = 30
  for(let i = 0; i <= 360; i+=angulo){
    // triangulo
    const x1 = -240, y1 = 112
    const x2 = 240, y2 = 112
    const x3 = 0, y3 = -112

    setRandomColor(gl)
    drawTriangulo(gl, x1, y1, x2, y2, x3, y3)
    
    // escala
    gl.scale(.9, .9)

    // rotacion
    gl.rotate(angulo * Math.PI / 180)
  }
}
fEscalar()
