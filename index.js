'use strict'

const got = require('got')
const defaultOptions = {
  from: 'USD',
  to: 'CNY',
  amount: 1
}

module.exports = function transform(options) {
  options = Object.assign({}, defaultOptions, options)

  return got('http://apis.baidu.com/apistore/currencyservice/currency', {
    query: {
      fromCurrency: options.from,
      toCurrency: options.to,
      amount: options.amount
    },
    json: true,
    headers: {
      apikey: options.apiKey
    }
  }).then(function(data) {
    let body = data.body

    if (data.body.errNum !== 0) {
      return Promise.reject(data.body.errMsg)
    } else {
      return Promise.resolve(data.body.retData)
    }
  })
}
