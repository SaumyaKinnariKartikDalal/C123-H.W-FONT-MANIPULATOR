leftwristx = 0;
rightwristx = 0;
difference = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(560, 425);
    canvas.position(800, 250);
    video = createCapture(VIDEO);
    video.size(560, 425);
    video.position(100, 250)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)
}

function draw(){
    background('wheat');
    fill('#FF0000');
    text("Saumya Dalal", 10,400);
    textSize(difference);

}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx-rightwristx);
    }
}
