objectDetector1 = "";
objects = [];
status1= "";
video = "";

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
if(status1 != ""){
    objectDetector1.detect(video, gotResults);
    for(i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "Objects Detected";

    
    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   
    if(objects[i].label == input){
        document.getElementById("object").innerHTML = input + " Found"; 
        utterThis= new SpeechSynthesisUtterance(input + "found!");
        speechSynthesis.speak(utterThis);
    }else{
        document.getElementById("object").innerHTML = input + " Not Found"; 
    }
    }

    }
}


function start(){
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status").innerHTML = "Detecting";
input = document.getElementById("input").value;
}

function stopVoice(){
    speechSynthesis.pause();
    document.getElementById("input").innerHTML = "";
}


function gotResults(error, results){
    if(error){
        console.error();
    }else{
        console.log(results);
        objects = results;
    }
}