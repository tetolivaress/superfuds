const ProductsTags = ({ tags }) => (
  <>
    {
      tags.map(({ name, image }) => (
        <div className="mb-2 tag relative rounded" key={name}>
          <div className="relative">
            <img src={image} alt={name} />
            <div className="arrow-left border-green-800 absolute md:-right-3 text-green-800 w-5 h-5 top-1 tag-tip duration-1000 opacity-0 -ml-2" />
          </div>
          <span className="tag-tip opacity-0 absolute duration-300 -left-24 md:left-full rounded top-0 text-white bg-green-800 p-4 -ml-2 md:ml-2">
            <h2 className="text-yellow-500">Producto</h2>
            {name}
          </span>
        </div>
      ))
    }
  </>
)

export default ProductsTags