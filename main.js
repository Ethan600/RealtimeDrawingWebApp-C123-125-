noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup(){

    video = createCapture(VIDEO);
    video.size(500, 370);
    video.position(0, 135)

    canvas = createCanvas(550, 375);
    canvas.position(700, 135);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
    
}



function modelLoaded(){
    console.log("PoseNet is initialized!");
}



function gotPoses(results){

    if(results.length > 0){
        console.log(results);


        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.x;

        console.log("Nose x = " + noseX + "And nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        difference = floor(leftWristX - rightWristX);

        console.log("Left wrist x = " + leftWristX + ", Right wrists x =" + rightWristX + "And the difference = " + difference);
    }   

}



function draw(){
    background("Black");
    document.getElementById("square_side").innerHTML = "Height and width of the square is = " + difference + " px";
    fill("Cyan");
    stroke("Whitesmoke");
    square(noseX, noseY, difference);
}