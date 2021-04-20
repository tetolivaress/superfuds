import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 z-0">
      </div>
      <div className="z-10">
        <div className="fixed bg-white left-0 md:left-1/4 top-0 bottom-0 right-0">
          <Link to="/">Superfood</Link>
        </div>
      </div>
    </>
  )
}

export default Cart