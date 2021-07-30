const mop_up_dom = document.querySelectorAll('[data-mop-up]')
const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4']
const second = 2800
let is_reverse = true

const animation = (is_reverse = false) => {
  const _delays = is_reverse ? delays.reverse() : delays
  mop_up_dom.forEach((dom, index) => {
    dom.classList.add(_delays[index])
    setTimeout(() => {
      dom.classList.remove(_delays[index])
    }, second - 100)
  })
}

animation()
mop_up_dom.forEach(dom => dom.classList.toggle('run'))
setInterval(() => {
  animation(is_reverse)
  const a = 1
}, second)

const canvas = Array.from(document.getElementsByClassName('runway'))
console.log(canvas)
const blockWidth = 500
const PI2 = Math.PI * 2

canvas.forEach(c => draw(c))

function draw(canvas) {
  let timer = 0
  canvas.width = blockWidth
  canvas.height = blockWidth
  const ctx = canvas.getContext('2d')

  let gradient = ctx.createLinearGradient(100, 500, 0, 0)
  gradient.addColorStop(0, 'rgb(237,237,255)')
  gradient.addColorStop(0.25, 'rgb(180,179,255)')
  gradient.addColorStop(0.5, 'rgb(108,109,255)')
  gradient.addColorStop(0.75, 'rgb(106,255,11)')
  gradient.addColorStop(1, 'rgb(167,171,255)')

  function run() {
    timer++
    const start_time = parseInt(timer / 20)
    drawerCircle({ ctx, start_time })

    requestAnimationFrame(run)
  }
  run()
}

function drawerCircle({ ctx, start_time }) {
  ctx.clearRect(0, 0, blockWidth, blockWidth)
  // const colors = ['green', 'yellow', 'blue']
  const angle2 = ((start_time % 50) / 50) * PI2
  const angle1 = ((start_time % 100) / 100) * PI2

  ctx.save()
  ctx.beginPath()
  ctx.translate(250, 250)
  ctx.rotate(0.5 * Math.PI)
  // ctx.fillStyle = colors[ratio % 3]
  // ctx.fillStyle = gradient
  ctx.arc(0, 0, blockWidth / 3, angle1, angle2)
  ctx.lineTo(0, 0)
  ctx.fill()
  ctx.closePath()
  ctx.restore()
}
