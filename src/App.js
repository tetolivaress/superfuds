import Layout from './components/layout'
import { BrowserRouter, Route } from 'react-router-dom'

import Carousel from './components/carousel'
import Cart from './components/cart'

const App = () => {
  return (
    <div className="carousel">
      <BrowserRouter>
        <Layout>
          <Route path="/" component={Carousel}/>
          <Route path="/cart" component={Cart}/>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
