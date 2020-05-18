let canvas = document.getElementById("canvas")
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext("2d")
ctx.fillStyle = "rgb(22,35,32)"
ctx.strokeStyle = "rgb(22,35,32)"
ctx.lineWidth = 10
ctx.lineCap = "round"

var eraserEnabled = false
pen.onclick = function () {
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
clear.onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

black.onclick = function () {
    ctx.fillStyle = 'rgb(22,35,32)'
    ctx.strokeStyle = 'rgb(22,35,32)'
    black.classList.add('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
red.onclick = function () {
    ctx.fillStyle = 'rgb(218,75,75)'
    ctx.strokeStyle = 'rgb(218,75,75)'
    red.classList.add('active')
    black.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
pink.onclick = function () {
    ctx.fillStyle = 'rgb(248,225,221)'
    ctx.strokeStyle = 'rgb(248,225,221)'
    pink.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
darkorange.onclick = function () {
    ctx.fillStyle = 'rgb(213,123,88)'
    ctx.strokeStyle = 'rgb(213,123,88)'
    darkorange.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
orange.onclick = function () {
    ctx.fillStyle = 'rgb(241,176,72)'
    ctx.strokeStyle = 'rgb(241,176,72)'
    orange.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
yellow.onclick = function () {
    ctx.fillStyle = 'rgb(253,242,98)'
    ctx.strokeStyle = 'rgb(253,242,98)'
    yellow.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function () {
    ctx.fillStyle = 'rgb(191,218,103)'
    ctx.strokeStyle = 'rgb(191,218,103)'
    green.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    darkgreen.classList.remove('active')
    blue.classList.remove('active')
}
darkgreen.onclick = function () {
    ctx.fillStyle = 'rgb(106,173,111)'
    ctx.strokeStyle = 'rgb(106,173,111)'
    darkgreen.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
blue.onclick = function () {
    ctx.fillStyle = 'rgb(166,228,210)'
    ctx.strokeStyle = 'rgb(166,228,210)'
    blue.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    pink.classList.remove('active')
    darkorange.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    darkgreen.classList.remove('active')
}
thin.onclick = function () {
    ctx.lineWidth = 3
    thin.classList.add('active')
    thick.classList.remove('active')
}
thick.onclick = function () {
    ctx.lineWidth = 10
    thick.classList.add('active')
    thin.classList.remove('active')
}

let painting = false

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

var isTouchingDevice = 'ontouchstart' in document.documentElement;
if (isTouchingDevice) {
    canvas.ontouchstart = (e) => {
        let x = e.touches[0]
        let y = e.touches[1]
        last = [x, y]
    }
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        drawLine(last[0], last[1], x, y)
        last = [x, y]
    }
} else {
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX, e.clientY]
    }
    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawLine(last[0], last[1], e.clientX, e.clientY)
            last = [e.clientX, e.clientY]
        }
    }
    canvas.onmouseup = () => {
        painting = false
    }
}
