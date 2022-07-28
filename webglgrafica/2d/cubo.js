var canvas = document.getElementById('lienzo')
var gl = canvas.getContext("2d")

if (!gl) {
  console.log("Falló al obtener el contexto WebGL2. "
    + "Tu navegador o dispositivo puede que no soporte WebGL.");
  gl = canvas.getContext('experimental-webgl2')  
}

//gl.fillStyle = '#000'
//gl.fillRect(0, 0, canvas.width, canvas.height)

const x0 = canvas.width/2
const y0 = canvas.height/2

gl.translate(x0, y0)

function drawCubo(gl, x, y, l){
  

  xtmp = x
  ytmp = y
  // cara 1
  let region = new Path2D();
  region.moveTo(xtmp, ytmp);
  xtmp = x + l
  region.lineTo(xtmp, ytmp);
  ytmp = y + l
  region.lineTo(xtmp, ytmp);
  xtmp = x
  region.lineTo(xtmp, ytmp);
  ytmp = y
  region.lineTo(xtmp, ytmp);

  //cara 2
  xtmp = x + l/2
  ytmp = y + l/4
  region.lineTo(xtmp, ytmp);
  xtmp = x + 3*l/2
  region.lineTo(xtmp, ytmp);
  ytmp = y + 5*l/4
  region.lineTo(xtmp, ytmp);
  xtmp = x + l/2
  region.lineTo(xtmp, ytmp);
  xtmp = x + l/2
  ytmp = y + l/4
  region.lineTo(xtmp, ytmp);

  //cara 3
  xtmp = x + 3*l/2
  ytmp = y + l/4
  region.lineTo(xtmp, ytmp);
  xtmp = x + l
  ytmp = y
  region.lineTo(xtmp, ytmp);
  ytmp = y + l
  region.lineTo(xtmp, ytmp);
  xtmp = x + 3*l/2
  ytmp = y + 5*l/4
  region.lineTo(xtmp, ytmp);
  xtmp = x + l/2
  ytmp = y + l/4
  //region.lineTo(xtmp, ytmp);

  //cara 4
  xtmp = x + l/2
  ytmp = y + 5*l/4
  region.lineTo(xtmp, ytmp);
  xtmp = x
  ytmp = y + l
  region.lineTo(xtmp, ytmp);

  region.closePath();

  setRandomStrokeColor(gl)
  gl.stroke(region);
}

drawCubo(gl, 10, 10, 100)


const x1 = -45, y1 = 21
const x2 = 45, y2 = 21
const x3 = 0, y3 = -21

setRandomFillColor(gl)
//drawTriangulo(gl, x1, y1, x2, y2, x3, y3)