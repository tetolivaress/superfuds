import { SearchIcon, ShoppingCartIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="fixed w-screen top-0 bg-green-400 p-6 grid grid-cols-3 items-center">
    <Link to="/" className="text-white font-bold">Superfood</Link>
    <div className="grid grid-cols-6 justify-items-stretch hidden md:grid">
      <input
        className="bg-white col-span-5 rounded-l-full px-6 py-2"
        placeholder="Busca mascas y productos..."
      />
      <span className="rounded-r-full bg-white px-6 py-2 min-h-20">
        <SearchIcon className="h-5 w-5 text-blue-500 inline"/>
      </span>
    </div>
    <div className="flex justify-around items-center md:col-span-1 col-span-2">
      <Link to="/cart"><ShoppingCartIcon className="h-8 w-7 text-white inline"/></Link>
      <div className="flex align-items-center">
        <span className="hidden md:inline-block">
          <p className="text-white">Jesus Olivares</p>
          <p>
            <span>Mi perfil</span>
            <ChevronDownIcon className="ml-6 h-4 w-4 inline"/>
          </p>
        </span>
        <span className="flex items-center">
          <UserIcon className="h-8 w-12 text-white" />
        </span>
      </div>
    </div>
  </nav>
)

export default Header