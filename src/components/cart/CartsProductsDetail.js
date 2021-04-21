const CartsProductsDetail = ({ product, changeProductAmount }) => (
  <div className="grid grid-cols-5 mb-4 justify-items-center">
    <img src={product.thumbnail} className="max-h-40" alt={product.title}/>
    <div className="justify-self-start">
      <h1>{product.title}</h1>
      <span>x {product.units_sf}</span>
      <span>- {product.net_content} c/u</span>
      <h1>{product.supplier}</h1>
    </div>
    <div>
      <span onClick={()=>changeProductAmount(product, --product.amount)} className="cursor-pointer">-</span>
      <span className="mx-4">{product.amount}</span>
      <span onClick={()=>changeProductAmount(product, ++product.amount)} className="cursor-pointer">+</span>
    </div>
    <div><span className="font-bold text-green-800">$</span> {product.amount * product.price_real} </div>
  </div>
)

export default CartsProductsDetail