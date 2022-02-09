import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer.js'
import cartReducer from './cart/cart.reducer.js'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import { FetchAccountsReducer } from './Web3/fetchAccountsWeb3';
import { FetchNetworkReducer } from './Web3/fetchNetworkWeb3';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  accounts: FetchAccountsReducer,
  network: FetchNetworkReducer,
})

export default persistReducer(persistConfig, rootReducer)