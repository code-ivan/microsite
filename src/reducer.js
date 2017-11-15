const  {combineReducers} = require('redux')

const testReducer  = require('./reducers/testReducer')

const reducer = combineReducers({
  test: testReducer
})

module.exports = reducer