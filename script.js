let canvas = document.getElementById("canvas")
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext("2d")
ctx.fillStyle = "red"
ctx.strokeStyle = "red"
ctx.lineWidth = 10
ctx.lineCap = "round"

red.onclick = function () {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'red'
    red.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function () {
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'green'
    red.classList.remove('active')
    green.classList.add('active')
    blue.classList.remove('active')
}
blue.onclick = function () {
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'blue'
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.add('active')
}
thin.onclick = function () {
    ctx.lineWidth = 5
}
thick.onclick = function () {
    ctx.lineWidth = 10
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


