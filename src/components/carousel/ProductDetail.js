const ProductDetail = ({ product, addToCart }) => (
  <article className="product-detail mx-1 md:mx-1 p-3 hover:transform hover:scale-105 transition-all duration-300">
    <div className="shadow-md flex flex-col relative p-2">
      <div className="absolute flex flex-col right-0 top-0 p-2">
        {
          product.sellos.map(({ name, image }) => (
            <div className="mb-2 tag relative rounded" key={name}>
              <img src={image} alt={name} />
              <span className="tag-tip opacity-0 absolute duration-300 left-full rounded top-0 text-white bg-green-800 p-4">
                <h2 className="text-yellow-500">Producto</h2>
                {name}
              </span>
            </div>
          ))
        }
      </div>
      
      <img src={product.thumbnail} alt={product.category} className="object-contain max-h-60 min-h-60 h-60" />
      <p className="text-green-800 text-bold flex justify-between items-center m-4">
        <span className="text-green-800">{product.category}</span>
        <span className="bg-green-800 rounded-full text-white px-4 py-2">{product.net_content}</span>
      </p>
      <p className="truncate ... font-semibold">{product.title}</p>
      <p>
        <span className="text-2xl text-green-800 font-bold">$</span>
        <span className="text-2xl font-bold">{product.price_real}</span>
        <span className="text-gray-500">x {product.units_sf} unids</span>
      </p>
    </div>
    <div 
      onClick={()=>addToCart(product)}
      className="to-cart bg-green-800 text-white p-3 duration-300 text-center cursor-pointer rounded-b md:opacity-0">
        Agregar al Carrito
    </div>
  </article>
)

export default ProductDetail