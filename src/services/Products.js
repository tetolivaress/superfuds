import HTTP from './index'

const URL = process.env.REACT_APP_PRODUCTS_URL
console.log(URL)
const ProductsService = {}

ProductsService.get = async () => {
  try {
    const products = await HTTP.get(URL)
    return products
  } catch (error) {
    return error
  }
}

export default ProductsService