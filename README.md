# currency-transform
汇率转换，内部使用百度汇率转换 `api`

## Install
**Node.js 4 or higher**

```
$ npm install
```

## Usage
## API
`transform(options)`

`options` 参数定义
- `options.from` 待转化的币种，默认 `USD`
- `options.to` 转化后的币种，默认 `CNY`
- `options.amount` 转化金额，默认 `1`

返回内容 `data`

```
{
  fromCurrency: 'USD', //待转化币种的简称，这里为美元
  toCurrency: 'CNY', //转化后的币种的简称，这里为人民币
  date: '2016-06-23', //日期
  time: '14:37:44', //时间
  currency: '6.576500', //当前汇率
  amount: 1, //转化的金额
  convertedamount: 6.5765 //转化后的金额
}
```
