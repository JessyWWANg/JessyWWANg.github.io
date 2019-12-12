

let bone;

function preload() {
  bone = loadModel('assets/bone2.obj', true);
}

function setup() {
  cvs = createCanvas(600, 600, WEBGL);
  cvs.position(380,40);
}


function draw() {
  // orbitControl();
  //get mousePosition to control light with mouse
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(60);
  pointLight(224, 2, 28, locX, locY, 100);
  //bg c
  // background(100);
  scale(-2.5); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);

  rotateX(-.6);
  rotateY(.7);
  // rotateZ(.7);
  noStroke();
  ambientLight(50);
  pointLight(250, 250, 250, 100, 100, 30);
  //specularMaterial(v1, [v2], [v3], [a])
  // specularMaterial(color);
  var clr = 100;
  var alpha = 75;

  boneColor = color(clr);
  boneColor.setAlpha(alpha);
  specularMaterial(boneColor);
  model(bone);
}

function test(){
  console.log("sb");
}
