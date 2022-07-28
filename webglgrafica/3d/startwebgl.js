function startWegGL() {
  gl = getWebGLContext();
  return gl
}
function getWebGLContext() {
  var webGLContext;
  var canvas = document.getElementById('lienzo');

  /* Context name can vary depending on the browser used */
  /* Store the context name in an array and check its validity */
  var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  for (var i = 0; i < names.length; ++i) {
    webGLContext = canvas.getContext(names[i]);
    if (webGLContext){
      console.log(names[i])
      break
    }
  }
  return webGLContext;
}