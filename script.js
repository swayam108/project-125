nosex=0;
nosey=0;
distance=0;
right_wrist_x=0;
left_wrist_x=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,550);
canvas=createCanvas(550,520);
canvas.position(560,140);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function draw(){
    background('#969a97');
    document.getElementById("font_size").innerHTML="the size of the text is" +distance+"px";
    fill('#000000');
    stroke('#ffffff');
    text('swayam',50,400)
    textSize(distance);
}
function modelLoaded(){
console.log("model loaded");
}
function gotposes(results){
if (results.length>0) {
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+nosex+"nosey="+nosey);
    right_wrist_x=results[0].pose.rightWrist.x;
    left_wrist_x=results[0].pose.leftWrist.x;

distance=floor(left_wrist_x-right_wrist_x);

    console.log(" left wrist x= "+left_wrist_x+" right wrist x= "+right_wrist_x+" distance= "+ distance );
}
}