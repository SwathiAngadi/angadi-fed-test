import {createStore, compose, applyMiddleware} from "redux";
import {reducer} from './../reducers'
import promise from "redux-promise";


export const store = createStore(
    reducer,
    {},
    compose(applyMiddleware(promise))
);