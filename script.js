

function opentab(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



var x = 300;
var y = 100;
var r = 70;
var X = x - r;
var Y = y + r;
var xx = x + r;
var yy = y + r;
var d = 40;
var b = 8;
var c = 10;
var e = 27;


function mouse(e) {
  const element = document.getElementById("myCanvas");
  const bound = element.getBoundingClientRect();

  let mousex = e.clientX - bound.left - element.clientLeft;
  let mousey = e.clientY - bound.top - element.clientTop;

  document.getElementById("1").value = mousex;
  document.getElementById("2").value = mousey;

  x = mousex;
  y = mousey;

  X = x - r;
  Y = y + r;
  xx = x + r;
  yy = y + r;

  if (x > 0 && x < 600 && y > 0 && y < 400) {
    insertroot();
    insertnodeLeft();
    insertnodeRight();
  } else {
    console.log("You are outside the canvas!");
  }
}




function insertroot() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var text = document.getElementById("item3").value;
  ctx.font = "20px Georgia";
  ctx.fillText(text, x, y);
}

function insertnodeLeft() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var text = document.getElementById("item").value;
  ctx.font = "20px Georgia";
  ctx.fillText(text, X, Y);

  var text2 = document.getElementById("itemtext").value;
  ctx.fillText(text2, X, Y + d);
}

function insertnodeRight() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var text = document.getElementById("item2").value;
  ctx.font = "20px Georgia";
  ctx.fillText(text, xx, yy);

  var text2 = document.getElementById("itemtext2").value;
  ctx.fillText(text2, xx, yy + d);
}



function binary_branch() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.moveTo( x,  y+c);
    ctx.lineTo( X + e,  Y - 10);
    ctx.stroke();

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo( x, y+c);
    ctx.lineTo(xx - b, yy - b);
    ctx.stroke();
}

function insert_null() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.font = "12px Georgia";
  ctx.fillText("∅", x, y);
}

function unary_branch() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var c = 15;
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + c);
  ctx.stroke();
}

function tri() {
    var d = 20
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo( x,  y+b);
    ctx.lineTo( x - d,  y + d);
    ctx.stroke();

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo( x, y+b);
    ctx.lineTo(x + d, y + d);
    ctx.stroke();
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo( x-d, y+d);
    ctx.lineTo(x + d, y + d);
    ctx.stroke();
}

