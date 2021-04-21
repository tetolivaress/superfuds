import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline'

const CartsProductsDetail = ({ product, changeProductAmount, removeFromCart }) => (
  <div className="grid grid-cols-5 md:grid-cols-6 mb-4 justify-items-center w-full">
    <img src={product.thumbnail} className="max-h-40" alt={product.title}/>
    <div className="justify-self-start col-span-4 md:col-span-2">
      <h1 className="font-bold">{product.title}</h1>
      <span>x {product.units_sf} unids</span>
      <span>- {product.net_content} c/u</span>
      <h1 className="text-green-800 font-semibold">{product.supplier}</h1>
    </div>
    <div className="col-span-2 md:col-span-1">
      <span onClick={()=>changeProductAmount(product, --product.amount)} className={`cursor-pointer ${product.amount < 2 ? 'invisible' : ''}`}>
        <MinusCircleIcon className="h-8 w-8 inline text-green-800 hover:transform hover:scale-150 transition-all duration-150" />
      </span>
      <span className="mx-4">{product.amount}</span>
      <span onClick={()=>changeProductAmount(product, ++product.amount)} className="cursor-pointer">
        <PlusCircleIcon className="h-8 w-8 inline text-green-800 hover:transform hover:scale-150 transition-all duration-150" />
      </span>
    </div>
    <div className="col-span-2 md:col-span-1"><span className="font-bold text-green-800">$</span> {product.amount * product.price_real} </div>
    <TrashIcon onClick={()=>removeFromCart(product)} className="h-8 w-8 text-gray-500 hover:transform hover:scale-150 transition-all duration-150 cursor-pointer" />
  </div>
)

export default CartsProductsDetail