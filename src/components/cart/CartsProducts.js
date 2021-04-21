import { changeProductAmount } from '../../actions'
import { connect } from "react-redux"
import CartsProductsDetail from './CartsProductsDetail'

const CartsProducts = ({ cart, changeProductAmount }) => {

  const handleChangeProductAmount = (product, amount) => {
    changeProductAmount({product, amount})
  } 

  return (
    <>
      <div className="flex justify-between">
        <span>Carrito de compras</span>
        <div><span className="text-green-800 font-bold">{cart.length}</span> items</div>
      </div>
      <div className="grid grid-cols-5 justify-items-center">
        <div className="text-center font-bold justify-self-start col-span-2">Item</div>
        <div className="text-center font-bold">Cantidad</div>
        <div className="text-center font-bold">Precio</div>
        <div></div>
        <div className="col-span-full mb-4">
          {
            cart.map(product => <CartsProductsDetail
                product={product}
                changeProductAmount={handleChangeProductAmount}
              />)
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = {
  changeProductAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsProducts)