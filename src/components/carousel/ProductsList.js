import { useEffect, useState } from 'react'
import ProductsService from '../../services/Products'
import { addToCart, loadProducts } from '../../actions'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import { connect } from 'react-redux'
import options from './options.json'
import ProductDetail from './ProductDetail'
import Loading from '../Loading'
import { useHistory } from 'react-router'

const ProductsList = ({ products, loadProducts, addToCart }) => {
  
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  const getProducts = async () => {
    const productsList = await ProductsService.get()
    loadProducts(productsList)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(()=>{
    const product = document.getElementsByClassName('owl-item')
    for (let i = 0; i < product.length; i++) product[i].style.zIndex = `-${i}`
  })

  const handleAddToCart = product => {
    addToCart(product)
    history.push("/cart")
  }

  return (
    <>
      <Loading isOpen={loading}/>
      <div className="mx-2 md:mx-4">
        <OwlCarousel options={options}>
          {
            products.length && products.map((product, i) => (
              <ProductDetail
                id={product.id}
                key={product.id}
                product={product}
                addToCart={handleAddToCart}
              />
            ))}
        </OwlCarousel>
      </div>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

const mapDispatchToProps = {
  loadProducts,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)