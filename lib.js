//Function dictionary to array
const _ = require('lodash');
const dictToArray = (keyName='name', valueName='value')=>(dict)=>(
  _.map(dict,(v, k)=>(
    _.zipObject([keyName, valueName], [k, v])
  ))
)  

const baseDictToArray = dictToArray()

module.exports = {
  dictToArray: dictToArray,
  baseDictToArray: baseDictToArray
}