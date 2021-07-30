const mop_up_dom = document.querySelectorAll('[data-mop-up]')
const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4']
const second = 2800
let DegToPI = Math.PI / 180

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
}, second)

// runway
const blockWidth = 109
const PI2 = Math.PI * 2
let is_reverse = false
async function run() {
  const canvas = Array.from(document.getElementsByClassName('runway'))
  if (is_reverse) {
    for (let i = canvas.length - 1; i >= 0; i--) {
      const c = canvas[i]
      await new Promise(res => setTimeout(res, 1300))
      draw(c, is_reverse)
    }
  } else
    for (let i = 0; i < canvas.length; i++) {
      const c = canvas[i]
      await new Promise(res => setTimeout(res, 1300))
      draw(c, is_reverse)
    }
  is_reverse = !is_reverse
  run()
}
function draw(canvas, is_reverse = false) {
  // TODO 速度差不多了，下一調整每一個動畫的順序 1 2 3 4 4 3 2 1
  let timer = 0
  canvas.width = blockWidth
  canvas.height = blockWidth
  const ctx = canvas.getContext('2d')

  function run() {
    const deg = (timer * 20) / 3

    if (is_reverse) timer--
    else timer++

    drawerCircle({ ctx, deg, is_reverse })

    if ((deg > 360 && !is_reverse) || (deg < -360 && is_reverse)) {
      ctx.clearRect(0, 0, blockWidth, blockWidth)
      return
    }
    requestAnimationFrame(run)
  }
  run()
}

function drawerCircle({ ctx, deg, is_reverse = false }) {
  ctx.clearRect(0, 0, blockWidth, blockWidth)
  const angle1 = 0
  const angle2 = deg * DegToPI

  ctx.save()
  ctx.beginPath()
  ctx.translate(blockWidth / 2, blockWidth / 2)
  // ctx.rotate(0.5 * Math.PI)
  ctx.fillStyle = '#9B59B6'
  ctx.arc(0, 0, blockWidth / 2, angle1, angle2, is_reverse)
  ctx.lineTo(0, 0)
  ctx.fill()
  ctx.closePath()
  ctx.restore()
}
run()
