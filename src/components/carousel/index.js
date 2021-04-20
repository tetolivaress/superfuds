import { useEffect, useState } from 'react'
import ProductsService from '../../services/Products'
import ProductsList from './ProductsList'
import Loading from '../Loading'
import { connect } from 'react-redux'
import { loadProducts } from '../../actions'

const Carousel = ({ products, loadProducts }) => {
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    const productsList = await ProductsService.get()
    loadProducts(productsList)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <ProductsList products={products}/>
      <Loading isOpen={loading}/>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

const mapDispatchToProps = {
  loadProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)