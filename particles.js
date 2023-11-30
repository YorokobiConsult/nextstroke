var animeSound = new Audio ("./sounds/anime-ahh.mp3")
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const colors = ["#ffffff", "#ece7ca" , "#f5f5dd", ]; 

function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 15 + 1;
  this.color = color;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  if (this.size > 0.2) this.size -= 0.1;
};

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};

function createParticle(e) {
    var element = document.getElementById('dickImage');
    var position = element.getBoundingClientRect();
    const xPos = position.left;
    const yPos = position.top;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particle = new Particle(xPos, yPos, color);
    particles.push(particle);
    console.log(particles)
}



function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//FLOW 

$("#startButtonID").click(function(e){
  setTimeout(function() {$("#startButtonID").text("MOOOORRE!")},5200)

  function manyParticles(n) {
    for (var i=0; i<n; i++) {
    createParticle();
    };
  };
  setTimeout(function() { 
    manyParticles(30);
    animeSound.play();
  }, 150);
  setTimeout(function() { manyParticles(10) }, 1700);
  setTimeout(function() { manyParticles(10), manyParticles(10)}, 700);
  setTimeout(function() { manyParticles(10)}, 1700);
  setTimeout(function() { manyParticles(2)}, 250);
  setTimeout(function() { manyParticles(170)}, 3700);
  setTimeout(function() { manyParticles(57)}, 4000);
  setTimeout(function(){  $(".footerParagraph").addClass("visible")}, 5070)

} );

//$("#startButtonID").resize(function() {resizeCanvas})


window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();

