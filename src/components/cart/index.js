import { Link } from 'react-router-dom'
import CartsProducts from './CartsProducts'

const Cart = () => {
  return (
    <>
      <Link to="/" className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 z-40">
      </Link>
      <div className="">
        <div className="fixed bg-white left-0 md:left-1/4 top-0 bottom-0 right-0 z-50 overflow-y-auto p-6">
          <Link to="/"><span className="text-green-800 fond-bold">{'<'}</span> Volver al Carrito</Link>
          <CartsProducts />
        </div>
      </div>
    </>
  )
}

export default Cart