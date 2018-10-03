let img = new Image();
let base64;
img.src = '../assets/transparent.jpg';
img.onload = function () {
  base64 = image2Base64(img);
}


function image2Base64(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}
