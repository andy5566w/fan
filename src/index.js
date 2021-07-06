const mop_up_dom = document.querySelectorAll('[data-mop-up]')
let is_run = true
console.log(mop_up_dom)
mop_up_dom.forEach(dom => dom.classList.add('run'))
setInterval(() => {
  mop_up_dom.forEach(dom => dom.classList.toggle('run'))
}, 2500)
