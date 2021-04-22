import reducer from '@reducers'
import ProductMock from '@mocks/ProductMock'
import ProductsListMock from '@mocks/ProductsListMock'
import RemovedFromCartMock from '@mocks/RemovedFromCartMock'


describe('Reducers', () => {
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    }
    const payload = ProductMock
    const action = {
      type: 'ADD_TO_CART',
      payload,
    }
    const expected = {
      cart: [
        ProductMock,
      ],
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })

  
  test('LOAD_PRODUCTS', () => {
    const initialState = {      
      cart: [],
      products: [],
      showCart: false,
      query: ''
    }
    const payload = ProductsListMock
    const action = {
      type: 'LOAD_PRODUCTS',
      payload,
    }
    const expected = {
      ...initialState,
      products: ProductsListMock
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })
  
  test('remove a product from cart', () => {
    const initialState = {      
      cart: ProductsListMock,
      products: ProductsListMock,
      showCart: false,
      query: ''
    }
    const payload = ProductMock
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    }
    const expected = {
      ...initialState,
      cart: RemovedFromCartMock
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })
})
