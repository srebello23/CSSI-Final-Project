var socket;

function setup() {
  // put setup code here
  createCanvas(600,400);
  background(51);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing); // Receiving the partner's data and sending it to a function
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  console.log('Sending: ' + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
}
