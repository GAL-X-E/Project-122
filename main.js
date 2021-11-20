x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

to_number = Number(content);

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
      draw_apple = "set"
      document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }     

}

function setup() {
  canvas = createCanvas(900,600);
  screen_width = window.innerWidth;
  screen_height = window.innerheight;
  canvas.position(120); 
}

function preload(){
  apple = loadImage('apple.png');
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
