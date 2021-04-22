import ProductsService from '@services/Products'

const getProducts = () => {
  return async dispatch => {
    dispatch(setLoading(true))
    const products = await ProductsService.get()
    dispatch(loadProducts(products))
    dispatch(setLoading(false))
  }
}

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

const setLoading = payload => ({
  type: 'SET_LOADING',
  payload
})

export {
  removeFromCart,
  setQueryFromProducts,
  loadProducts,
  addToCart,
  changeProductAmount,
  getProducts
}