import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const initialState = {
  cart: [],
  products: [],
  showCart: false,
  query: '',
  loading: true
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <StrictMode>
     <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
