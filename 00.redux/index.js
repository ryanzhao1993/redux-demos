const {createStore} = require('redux');
const reducer = require('./reducers');
const {ageAction} = require('./actions/ageAction');
const {nameAction} = require('./actions/nameAction');
const defaultState = require('./reducers/defaultState');

const store = createStore(reducer, defaultState);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('----');
    console.log(store.getState());
});

store.dispatch(ageAction(25));
store.dispatch(nameAction('ryan'));