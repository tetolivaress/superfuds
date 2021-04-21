import { changeProductAmount, removeFromCart } from '../../actions'
import { connect } from "react-redux"
import CartsProductsDetail from './CartsProductsDetail'

const CartsProducts = ({ cart, changeProductAmount, removeFromCart }) => {

  const handleChangeProductAmount = (product, amount) => {
    changeProductAmount({product, amount})
  } 

  const handleRemoveFromCart = product => {
    removeFromCart(product)
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="font-bold text-l md:text-xl">Carrito de compras</span>
        <div className="font-bold text-l md:text-xl"><span className="text-green-800">{cart.length}</span> items</div>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-6 justify-items-center">
        <div className="text-center font-bold justify-self-start col-span-3 text-xl">Item</div>
        <div className=" font-bold text-l md:text-xl col-span-2 md:col-span-1">Cantidad</div>
        <div className="text-center font-bold text-l md:text-xl">Precio</div>
        <div></div>
        <div className="col-span-full mb-4 justify-self-stretch mt-6">
          {
            cart.map(product => <CartsProductsDetail
                product={product}
                changeProductAmount={handleChangeProductAmount}
                removeFromCart={handleRemoveFromCart}
              />)
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = {
  changeProductAmount,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsProducts)