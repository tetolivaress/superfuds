import { addToCart, removeFromCart } from '@actions'
import ProductMock from '@mocks/ProductMock'

describe('Actions', () => {
  test('Add To Cart', () => {
    const payload = ProductMock
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    }
    expect(addToCart(payload)).toEqual(expected)
  })

  test('Remove From Cart', () => {
    const payload = ProductMock
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    }
    expect(removeFromCart(payload)).toEqual(expected)
  })
})
