var ndcv = require('ndarray-canvas')
var lena = require('lena') // require('baboon-image')
var sort = require('./')

display()

var threshold = 50

sort(lena, function(r, g, b) {
  return r > threshold
      && g > threshold
      && b > threshold
}, function(a, b) {
  a = a[0] + a[1] + a[2]
  b = b[0] + b[1] + b[2]
  return a - b
})

display()

function display() {
  var canvas = document.body.appendChild(ndcv(null
    , lena.transpose(1, 0, 2).pick(null, null, 0)
    , lena.transpose(1, 0, 2).pick(null, null, 1)
    , lena.transpose(1, 0, 2).pick(null, null, 2)
  ))

  canvas.style.margin = '1em'
}
