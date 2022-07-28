var fTransform = function(){
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
  //gl.fillRect(0, 0, canvas.width, canvas.height)

  const angulo = 30
  for(let i = 0; i <= 360; i+=angulo){
    console.log(i)

    // rectangulo
    const w = 80
    const h = 20
    const x = 250
    const y = 250

    setRandomColor(gl)
    gl.fillRect(x, y, w, h)
    drawTriangulo(gl)
    // matriz de transformacion
    const tx = canvas.width/2//x + w/2
    const ty = canvas.height/2//y + h/2
    gl.translate(tx, ty)
    gl.rotate(angulo * Math.PI / 180)
    gl.translate(-tx, -ty)
  }
}
fTransform()
