const loadProducts = payload => ({
  type: 'LOAD_PRODUCTS',
  payload,
})

const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
})

const setQueryFromProducts = payload => ({
  type: 'SET_QUERY',
  payload,
})

const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload
})

const changeProductAmount = payload => ({
  type: 'CHANGE_PRODUCT_AMOUNT',
  payload
})

export {
  removeFromCart,
  setQueryFromProducts,
  loadProducts,
  addToCart,
  changeProductAmount
}