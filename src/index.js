import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const initialState = {
  cart: [],
  products: [],
  showCart: false,
  query: ''
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <StrictMode>
     <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
