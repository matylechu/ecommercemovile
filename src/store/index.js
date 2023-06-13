import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import { categoriesReducer, productsReducer, cartReducer, orderReducer, authReducer } from './reducers/index'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
