var miFuncion = function(){
  var canvas = document.getElementById('lienzo')
  var gl = canvas.getContext("2d")

  if (!gl) {
    console.log("Falló al obtener el contexto WebGL2. "
      + "Tu navegador o dispositivo puede que no soporte WebGL.");
    gl = canvas.getContext('experimental-webgl2')  
  }

  // Estrella
  gl.moveTo(112, 156)
  gl.lineTo(208, 156)
  gl.lineTo(130, 100)
  gl.lineTo(160, 192)
  gl.lineTo(190, 100)
  gl.lineTo(112, 156)
  gl.lineTo(208, 156)

  gl.lineJoin = 'round'
  gl.strokeStyle = '#ffff00';
  gl.fillStyle = '#eeff00'
  gl.lineWidth = 1

  // sombras
  gl.shadowColor = '#eeff00'
  gl.shadowBlur = 15
  gl.fill()
  gl.stroke()

  // Triangulo
  let region = new Path2D();
  region.moveTo(240, 300);
  region.lineTo(360, 300);
  region.lineTo(300, 196);
  region.lineTo(240, 300);
  region.closePath();

  // sombras
  gl.shadowColor = '#000'
  gl.shadowBlur = 20
  gl.shadowOffsetX = 5;
  gl.shadowOffsetY = 5;

  // Fill path
  gl.fillStyle = '#0000ff'
  gl.fill(region);

}
miFuncion()