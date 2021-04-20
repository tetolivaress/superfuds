import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="fixed w-screen top-0 bg-green-400 p-6 grid grid-cols-3">
    <Link to="/">Superfood</Link>
    <div className="">
      <input
        className="bg-white rounded-l-full px-6 py-2"
        placeholder="Busca mascas y productos..."
      />
      <span className="rounded-r-full bg-white px-6 py-2">sad</span>
    </div>
    <div className="flex justify-around">
      <Link to="/cart">cart</Link>
      <span>user</span>
    </div>
  </nav>
)

export default Header