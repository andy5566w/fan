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
