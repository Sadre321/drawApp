var canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientWidth;
var click = false;

var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'dark';
ctx.lineWidth = 12;

canvas.addEventListener('mousedown',(e)=>{
    ctx.moveTo(e.clientX,e.clientY);
    click = true;
})

canvas.addEventListener('mouseup',(e)=>{
    click = false;
})

canvas.addEventListener('mousemove',(e)=>{
    if(click){
        ctx.lineTo(e.clientX,e.clientY);
        ctx.moveTo(e.clientX,e.clientY);
        ctx.stroke();
    }
});