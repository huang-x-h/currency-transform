const transform = require('./')

transform({
  from: 'JPY',
  amount: 100
}).then(function(data) {
  console.log(data)
})

transform({
  amount: 1
}).then(function(data) {
  console.log(data)
})
