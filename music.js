var PeterPan = "";
var HarryPotter = "";
LeftwristX = 0;
LeftwristY = 0;
RightwristX = 0;
RightwristY = 0;
Leftwristscore = 0;
Songstatus = "";

function preload() {
    PeterPan = loadSound("PeterPan.mp3");
    HarryPotter = loadSound("HarryPotter.mp3");
}

function setup() {
    var mycanvas = createCanvas(500, 350);
    mycanvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getResults);
}

function modelloaded() {
    console.log("Posenet has loaded");
}

function draw() {
    image(webcam, 0, 0, 500, 350);
    Songstatus = Peterpan.isPlaying();
    stroke("purple");
    fill("pink");
    if (Leftwristscore > 0.2) {
        circle(LeftwristX, LeftwristY, 25);
        HarryPotter.stop();
    }
    if (Songstatus == false) {
        PeterPan.play();
        document.getElementById("songs").innerHTML = "PeterPan is Playing";
    }
}
Songstatus = Peterpan.isPlaying();
stroke("purple");
fill("pink");
if (Rightwristscore > 0.2) {
    circle(RightwristX, RightwristY, 25);
    PeterPan.stop();
}
if (Songstatus == false) {
    HarryPotter.play();
    document.getElementById("songs").innerHTML = "HarryPotter is Playing";
}

function getResults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        LeftwristX = resultsarray[0].pose.leftWrist.x;
        LeftwristY = resultsarray[0].pose.leftWrist.y;
        RightwristX = resultsarray[0].pose.rightWrist.x;
        RightwristY = resultsarray[0].pose.rightWrist.y;
        Leftwristscore = resultsarray[0].pose.keypoints[9].score;

    }

}