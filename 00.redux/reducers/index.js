const ageReducer = require('./ageReducer');
const nameReducer = require('./nameReducer');
const {combineReducers} = require('redux');

module.exports = combineReducers({
    name: nameReducer,
    age: ageReducer
});

// module.exports = (state = defaultState, action) => ({
//     name: nameReducer(state.name, action),
//     age: ageReducer(state.age, action)
// });