
var fTraslacion = function(){
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

  setRandomColor(gl)
  gl.fillRect(100, 100, 80, 20)

  //traslacion
  setRandomColor(gl)

  gl.translate(200, 0)// en x
  gl.fillRect(100, 100, 80, 20)
  
  gl.translate(0, 100) // en y
  gl.fillRect(100, 100, 80, 20)
}

fTraslacion()