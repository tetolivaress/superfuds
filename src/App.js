import Layout from '@components/layout'
import { BrowserRouter, Route } from 'react-router-dom'
import Loading from '@components/Loading'

import Carousel from '@components/products'
import Cart from '@components/cart'
import { connect } from 'react-redux'

const App = ({ loading }) => {
  return (
    <>
      <Loading isOpen={loading} />
      <div className="carousel">
        <BrowserRouter>
          <Layout>
            <Route path="/" component={Carousel}/>
            <Route exact path="/cart" component={Cart}/>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  )
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(App)
