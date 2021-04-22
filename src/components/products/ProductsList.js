import { useEffect, useState } from 'react'
import ProductsService from '@services/Products'
import { addToCart, loadProducts } from '@actions'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import { connect } from 'react-redux'
import options from './options.json'
import ProductDetail from './ProductDetail'
import Loading from '@components/Loading'
import { useHistory } from 'react-router'

const ProductsList = ({ products, query, loadProducts, addToCart }) => {
  
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    (async () => {
      const productsList = await ProductsService.get()
      loadProducts(productsList)
      setLoading(false)
    })()
  }, [loadProducts])

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
      <h1 className="pt-4">
        <span className="font-bold text-lg md:text-4xl ml-8 py-8">Nuevo en SuperFuds </span>
        <span className="text-green-800 font-bold text-lg py-2">ver mas</span>
      </h1>
      <div className="mx-2 md:mx-4">
        <OwlCarousel options={options}>
          {
            products.length && products
              .filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
              .map((product, i) => (
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

const mapStateToProps = ({ products, query }) => {
  return { products, query }
}

const mapDispatchToProps = {
  loadProducts,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)