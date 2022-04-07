Status  = "";
objects = [];
song = "";


function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(380,380);
objectDetector = ml5.objectDetector("cocossd" , ModelLoaded);
document.getElementById("status").innerHTML= "status:detecting objects";


}

img="";


function preload(){
song=loadSound("alarm_r.mp3");
}

function draw(){
image(video,0,0,380,380);
objectDetector.detect(video,gotresults);
if(Status != ""){
r = random(255);
g = random(255);
b = random(255);

   objectDetector.detect(video,gotresults);
for(i = 0; i < objects.length; i++)
{
   
document.getElementById("status").innerHTML = "Status:Object detected";

fill(r,g,b);
percent = floor(objects[i].confidence*100);
text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
if(objects[i].label == "person"){
document.getElementById("no_of_objects"),innerHTML = "baby found";
song.stop();
}
else{
    document.getElementById("no_of_objects"),innerHTML = "baby not found";
    song.play();
}


}
if(objects.length == 0){
    document.getElementById("no_of_objects"),innerHTML = "baby not found";
    song.play();
}
}

}

function ModelLoaded(){
console.log("model has been printed");
Status = true;




}


function gotresults(error,results){
if(error){
console.log(error);
}
console.log(results);

objects = results;
}


