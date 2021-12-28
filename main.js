status1 = "";

function preload(){

}

function setup(){
canvas = createCanvas(450, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function model_loaded(){
    console.log("Model Loaded!");
    status1 = true;
    }

function draw(){
image(video, 0, 0, 450, 400);

}


function start(){
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status").innerHTML = "Detecting";
input = document.getElementById("input").value;

}