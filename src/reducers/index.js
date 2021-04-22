const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: payload
      }
    case 'ADD_TO_CART':
      const isInCart = state.cart.filter(product => product.id === payload.id).length
      if(isInCart) return state
      payload.amount = 1
      return {
        ...state,
        cart: [...state.cart, payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== payload.id)]
      }

    case 'SET_QUERY':
      return {
        ...state,
        query: payload
      }

    case 'CHANGE_PRODUCT_AMOUNT':
      const productIndex = state.cart.findIndex(product => product.id === payload.product.id)
      Object.assign(state.cart[productIndex], { amount: payload.amount })
      return {
        ...state,
        cart: [...state.cart] 
      }

    case 'SET_LOADING':
      return {
        ...state,
          loading: payload
      }
      
    default:
      return state
  }
}

export default reducer