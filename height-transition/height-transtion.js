var el = document.querySelector('.el')
var height = el.scrollHeight
alert(height)
el.style.setProperty('--max-height', height + 'px')