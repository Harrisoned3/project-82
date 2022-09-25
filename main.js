var mouseEvent="empty";
last_position_x,last_position_y;
canvas =
document.getElementById("myCanvas");
ctx = canvas.getContext("2d").innerHTML;
color = "red";
width_of_line = 2;
radius=40;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
console.log("Mouse Down")
const color = document.getElementById("color").value;
console.log(color)
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove (e){
current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
current_position_of_mouse_y=e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;


console.log("Current position of x and y coordinates =")
console.log("x ="+ current_position_of_mouse_x +"y ="+current_position_of_mouse_y)
ctx.beginPath();
ctx.strokeStyle - color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
ctx.stroke();
}
last_position_x = current_position_of_mouse_x;
last_position_y = current_position_of_mouse_y;
}
