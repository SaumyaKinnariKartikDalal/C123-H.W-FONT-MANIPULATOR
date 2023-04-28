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
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
    }
}
