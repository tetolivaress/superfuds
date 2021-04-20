import { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import options from './options.json'
import ProductDetail from './ProductDetail'

const ProductsList = ({ products }) => {

  useEffect(()=>{
    const product = document.getElementsByClassName('owl-item')
    for (let i = 0; i < product.length; i++) product[i].style.zIndex = `-${i}`
  })

  return (
    <div className="mx-2 md:mx-4">
      <OwlCarousel options={options}>
        {
          products.length && products.map((product, i) => (
            <ProductDetail
              id={product.id}
              key={product.id}
              product={product}
            />
          ))}
      </OwlCarousel>
    </div>
  )
}

export default ProductsList