function setRandomFillColor(gl) {
  const r = Math.round(Math.random()*256)
  const g = Math.round(Math.random()*256)
  const b = Math.round(Math.random()*256)
  gl.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
}

function setRandomStrokeColor(gl) {
  const r = Math.round(Math.random()*256)
  const g = Math.round(Math.random()*256)
  const b = Math.round(Math.random()*256)
  gl.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
}

function drawTriangulo(gl, x1, y1, x2, y2, x3, y3){
  // Triangulo
  let region = new Path2D();
  region.moveTo(x1, y1);
  region.lineTo(x2, y2);
  region.lineTo(x3, y3);
  region.closePath();

  // sombras
  gl.shadowColor = '#000'
  gl.shadowBlur = 5
  gl.shadowOffsetX = 1;
  gl.shadowOffsetY = 1;

  // Fill path
  
  gl.fill(region);
}