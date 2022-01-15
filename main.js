leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(700,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet model loaded!");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=Math.floor(leftWristX-rightWristX);
        console.log("Left Wrist X= "+leftWristX+" Right Wrist X= "+rightWristX+" Difference= "+difference);

    }
    if(results.length<1)
    {
        console.log("PoseNet error.");
    }
}
function draw()
{
    background("grey");
    fill("white");
    text("Text",50,300);
    textSize(difference);
    document.getElementById("font_size").innerHTML="Size of the Text= "+difference;
}