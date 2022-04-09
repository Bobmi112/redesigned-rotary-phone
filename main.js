function preload() {

}
 function setup() {
  canvas = createCanvas(500, 300);
  canvas.position(110, 250);
  video= createCapture(VIDEO);
  video.hide();
  tint_color = "";

 }
 function draw() {
 image(video,0,0,800,600);
 tint(tint_color);
}
function take_snapshot(){
    save("HIe.png");
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;

}   