noseX=0;
noseY=0;
mustacheX=0;
mustacheY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
  clown_mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
    if(results.length > 0)
  {
    console.log(results);
    mustacheX= results[0].pose.mustache.x-40;
    mustacheY = results[0].pose.mustache.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
  image(clown_mustache, mustacheX, mustacheY, 80, 35)
}

function take_snapshot(){    
  save('myFilterImage.png');
}
